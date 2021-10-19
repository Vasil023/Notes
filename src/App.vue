<template>
 <div class="wrapper">
   <div class="wrapper-content">
     <section>
       <div class="container">
        <!-- Message -->
        <message v-if="message" :message="message" />
        <!-- New note -->
        <newNote 
        :note="note"
        
        @addNote="addNote" />
 
        <div class="note-header">
          <h1> {{ title }} </h1>
          <search  
          :value="search" 
          placeholder="Find your note"
          @search="search = $event"/>

          <div class="icons">
            <svg :class="{ active: grid }" @click="grid = true" style="cursor: pointer"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            <svg :class="{ active: !grid }" @click="grid = false" style="cursor: pointer"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg> 
          </div>
        </div>
         <!-- Notes -->
        <notes
        :task="notes"
        :notes="notesFilter"
        @remove="removeNote"
        @update="update"
        :grid="grid"
        :flag="flag"/>
       </div>
     </section>
   </div>
 </div>
</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'
export default {
  components: {
    message, newNote, notes, search
  },
  data () {
    return {
      title: 'Notes App',
      message: null,
      search: '',
      grid: true,
      flag: false,
      notes: null,
      // important: false,
      note: {
        title: '',
        descr: '',
      },
    }
  },
  computed: {
    notesFilter () {
      let array = this.notes,
          search = this.search
      if (!search) return array
      // Small
      search = search.trim().toLowerCase()
      // Filter
      array = array.filter(function (item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      })
      return array
    }
  },
  created() {
    this.notes = this.$store.getters.getNote
  },
  methods: {
    addNote () {
      let {title, descr} = this.note

      if (title === '') {
        this.message = 'title can`t be blank'
        return false
      }

      this.$store.dispatch('setMessage', {title: this.note.title, descr: this.note.descr, date: new Date().toLocaleString(), id: Math.random()})

      this.message = null
      this.note.title = ''
      this.note.descr = ''
    },
    removeNote (index) {
       this.notes.splice(index, 1)
    },
    update (index) {
      this.notes.filter((item) => {
        console.log(item.id)
        if (this.notes[index].id === item.id) {
            this.flag = !this.flag
        }
      })
    }
  }
}
</script>

<style>
  .wrapper {
    width: 70%;
  }
</style>
