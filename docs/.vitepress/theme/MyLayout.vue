<template>
  <Layout>
    <template #doc-after>
      <Issue />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { Theme } from 'vitepress';
import Issue from "./my-issue/Issue.vue"
import DefaultTheme from 'vitepress/theme'
// import NavItemVue from './nav-item/NavItem.vue';
const { Layout } = DefaultTheme



</script>
