<template>
 <div class="wrapper">
   <div class="wrapper-content">
     <section>
       <div class="container">
         <h1> {{ title }} </h1>
        <!-- Message -->
        <message v-if="message" :message="message" />
        <!-- New note -->
        <newNote 
        :note="note"
        @addNote="addNote" />
        <!-- Notes -->
        <notes 
        :notes="notes"
        @remove="removeNote"/>

       </div>
     </section>
   </div>
 </div>
</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
export default {
  components: {
    message, newNote, notes
  },
  data () {
    return {
      title: 'Notes App',
      message: null,
      note: {
        title: '',
        descr: ''
      },
      notes: [
        {
          title: 'First note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString()
        },
        {
          title: 'Seconds note',
          descr: 'Description for first note',
          date: new Date(Date.now()).toLocaleString()
        } 
      ]

    }
  },
  methods: {
    addNote () {
      let {title, descr} = this.note

      if (title === '') {
        this.message = 'title can`t be blank'
        return false
      }

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
      })
      this.message = null
      this.note.title = ''
      this.note.descr = ''
    },
    removeNote (index) {
       this.notes.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
