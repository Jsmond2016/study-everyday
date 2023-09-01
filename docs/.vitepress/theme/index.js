// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme"
import mediumZoom from "medium-zoom"
import { useRoute } from "vitepress"
import { onMounted, watch, nextTick } from "vue"
import MyLayout from './MyLayout.vue'

import "./index.css"


export default {
  ...DefaultTheme,
  // 配置自定义布局：https://vitepress.dev/guide/extending-default-theme#layout-slots
  Layout: MyLayout,
  // https://github.com/vuejs/vitepress/issues/854
  setup() {
    const route = useRoute()
    const initZoom = () => {
      new mediumZoom("img", { background: "var(--vp-c-bg)" })
    }
    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}
