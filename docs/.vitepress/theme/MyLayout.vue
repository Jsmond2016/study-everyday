<template>
  <Layout>
    <template #doc-after>
      <Issue />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Issue from "./my-issue/Issue.vue"
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme


</script>
