<template>
  <div>
    <el-button type="text" @click="showChild">打开子组件</el-button>
    <child-view ref="child" :msg="aaaa" :visible="show" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildView from './ChildView.vue';
let show = ref(false);
const child = ref(null);
const showChild = () => {
  child.value.openDialog();
};
</script>
