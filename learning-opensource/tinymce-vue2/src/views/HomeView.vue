<template>
  <div class="home">
    <editor :init="init"/>
  </div>
</template>

<script>

import Editor from '@tinymce/tinymce-vue'
import '@/plugins/example/core'

export default {
  name: 'app',
  components: {
    editor: Editor
  },
  data: function () {
    return {
      init: {
      }
    }
  },
  created () {
    this.init = {
      plugins: 'example',
      toolbar: 'example',
      setup (editor) {}
    }
  },
  methods: {}
}
</script>
