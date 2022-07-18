<template>
  <!-- Form -->
  <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <!-- <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span> -->
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, reactive } from 'vue';
const dialogFormVisible = ref(false);
console.log('child');

const formLabelWidth = '140px';

// openDialog
const openDialog = () => {
  dialogFormVisible.value = true;
};

defineExpose({
  openDialog
});

// const props = defineProps({
//   visible: {
//     type: Boolean,
//     default: false
//   },
//   msg: {
//     type: String,
//     default: ''
//   }
// });

// console.log('props.visible', props.visible);
// dialogFormVisible = props.visible;
// watch(props, (newval, oldval) => {
//   console.log(111);
//   dialogFormVisible = newval;
// });

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
});
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
