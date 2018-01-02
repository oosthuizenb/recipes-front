<template>
  <div class="file-upload">
    <div class="dropbox-main" @drop.prevent="dropMain($event)" @dragenter.prevent @dragover.prevent>
      <div v-if="featured">
        <img v-bind:src="src" alt="User input image" class="img-featured">
      </div>
      <div v-else v-for="source in imageSources">
        <img v-bind:src="source" alt="User input image" class="img-additional">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'featured': {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      src: '',
      imageSources: [],
    }
  },
  methods: {
    dropMain(e) {
      if (this.featured) {
        let file = e.dataTransfer.files[0];
        let reader = new FileReader();

        reader.onload = e => {
          this.src = e.target.result
        };
        reader.readAsDataURL(file);
        this.$emit('fileChange', file);
      } else {
        for (let i = 0; i < e.dataTransfer.files; i++) {
          // Reader stuff
          // this.files.append(i, e.dataTransfer.files[i]);
        }
      }
      console.log(this.src);
    },
  },
  created() {
    console.log(this.featured);
  }
}
</script>

<style lang="scss">
.dropbox-main {
  height: 200px;
  width: 100%;
  border: 2px dashed #CBCBCB;

  .img-featured {
    max-height: 200px;
    max-width: 100%;
  }
}
</style>
