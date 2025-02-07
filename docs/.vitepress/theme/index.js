// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme"
// import mediumZoom from "medium-zoom"
// import { onMounted, watch, nextTick } from "vue"
import MyLayout from './MyLayout.vue'
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';
import "./index.css"


export default {
  ...DefaultTheme,
  // 配置自定义布局：https://vitepress.dev/guide/extending-default-theme#layout-slots
  Layout: MyLayout,
  // https://github.com/vuejs/vitepress/issues/854
  enhanceApp(ctx) {
    // register your custom global components
    ctx.app.component('vImageViewer', vImageViewer);
  },
  setup() {
   // Get route
   const route = useRoute();
   // Using
   imageViewer(route);
  },
}
