// plugins/naive-ui.js
import { defineNuxtPlugin } from '#app'
import {
  create, NMessageProvider, NDialogProvider, NSpin, NLayout, NLayoutHeader, NLayoutSider, NMenu, NSpace,
  NCard, NFlex, NGrid, NGi, NButton, NModal, NModalProvider, NForm, NFormItem, NDivider,
  NInput, NSelect, NDynamicInput, NInputNumber, NCountdown, NTable, NAffix
} from 'naive-ui'

export default defineNuxtPlugin(nuxtApp => {
  const naive = create({
    components: [NMessageProvider, NDialogProvider, NSpin, NLayout, NLayoutHeader, NLayoutSider, NMenu, NSpace,
      NCard, NFlex, NGrid, NGi, NButton, NModal, NModalProvider, NForm, NFormItem, NInput, NSelect, NDivider,
      NDynamicInput, NInputNumber, NCountdown, NTable, NAffix]
  })

  nuxtApp.vueApp.use(naive)
})
