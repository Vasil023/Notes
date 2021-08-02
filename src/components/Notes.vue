<template>
   <div class="notes">
    <div class="note" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer;" @click="removeNote(index)">x</p>
      </div> 
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeNote (index) {
      console.log(index, this.notes);
      this.$emit('remove', index)
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
.note-body {
  span {
    font-size: 14px;
  }
  p {
    color: black;
    font-weight: 600;
    font-size: 17px;
    margin: 10px 0 10px;
  }
}
  
</style>