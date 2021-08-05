<template>
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer;" @click="removeNote(index)">x</p>
        <button @click="update">update</button>
      </div> 
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
      <div class="note-update" v-if="flag">
        <div class="note-form">
          <input type="text" v-model="updateTitle" placeholder="" >
          <button @click="updateNotes(index)">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false,
      updateTitle: ''
    }
    
  },
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean ,
      required: true 
    }
  },
  methods: {
    removeNote (index) {
      this.$emit('remove', index)
    },
    update () {
      this.flag = !this.flag
    },
    updateNotes (index) {
      this.notes.filter((item) => {
        if (item.id == this.notes[index].id) {
          item.title = this.updateTitle
        }
      })
    this.flag = false
    this.updateTitle = ''
    }
  }
}
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 46%;
  padding: 18px 20px;
  margin-bottom: 18px;
  background-color: #fff;
  &.full {
    width: 100%;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: rgb(70, 46, 207);
    font-size: 22px;
    font-weight: 800;
  }
}
svg {
  margin-right: 12px;
  color: #999;
  &.active {
    color: rgb(70, 46, 207);
  }
  &:last-child {
    margin-right: 0;
  }
}
.note-body {
  span {
    font-size: 14px;
    color: #999;
  }
  p {
    color: black;
    font-weight: 600;
    font-size: 17px;
    margin: 10px 0 10px;
  }
}
  
</style>