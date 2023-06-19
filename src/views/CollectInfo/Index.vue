<script setup lang="ts">
import { useCollectStore } from '@store/index';
import env from '@env';
const r = ref(import.meta.env.VITE_APP_ENV);
console.log('env: ', env);
const store = useCollectStore();
const { count } = storeToRefs(store);
</script>
<template>
  <div class="ls">{{ count }}</div>
  <div>{{ r }}</div>
  <van-button
    type="primary"
    @click="
      () => {
        store.increment();
      }
    "
    >22222</van-button
  >
</template>
<style lang="less" scoped>
.ls {
  // background: #000;
  width: 750px;
  height: 150px;
}
</style>
