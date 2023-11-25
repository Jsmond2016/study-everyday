<template>
  <div class="nav-wrapper">
    <div class="nav-bar">
      <div class="icon">{{ props.icon }}</div>
      <div class="title">{{ props.title }}</div>
    </div>
    <div class="desc">{{ props.desc }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

export interface INavItem {
  icon: string;
  title: string;
  desc: string;
}


const props = withDefaults(defineProps<INavItem>(), {
  icon: 'icon',
  title: 'title',
  desc: 'desc',
})


// const icon = ref('icon')
// const title = ref('Title')
// const desc = ref('Desc...Desc...Desc...Desc...')

</script>

<style lang="css" scoped>
.nav-wrapper {
  border: 2px solid red;
}
</style>