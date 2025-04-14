<script setup lang="ts">
import PlayVideo from '@/components/PlayVideo.vue'
import { useRoute } from 'vue-router'
import videoApi from '@/api/video/index'
import { onMounted, ref } from 'vue'

console.log('细节')
const route = useRoute()
console.log(route)
const bvid = ref(route.query.bvid)
const cid = ref(route.query.cid)
const videoUrl = ref('')

onMounted(async () => {
  try {
    const response = await videoApi.getVideoSteam({
      bvid: bvid.value,
      cid: cid.value,
    })
    if (response.data?.durl?.[0]?.url) {
      videoUrl.value = response.data.durl[0].url
    } else {
      console.error('API 返回的数据结构不符合预期:', response.data)
    }
  } catch (error) {
    console.error('获取视频流时出错:', error)
  }
})
</script>

<template>
  <PlayVideo :video-url="videoUrl" />
</template>

<style scoped lang="less"></style>
