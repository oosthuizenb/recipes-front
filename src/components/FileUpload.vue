<template>
  <div class="file-upload">
    <div class="dropbox-main" @drop.prevent="dropMain($event)" @dragenter.prevent @dragover.prevent>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: {},
    }
  },
  methods: {
    dropMain(e) {
      this.file = e.dataTransfer.files[0];
      console.log(this.file);
    },
  }
}
</script>

<style lang="css">
</style>
