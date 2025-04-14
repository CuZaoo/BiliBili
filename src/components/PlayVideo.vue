<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import { defineProps } from 'vue'

function videoMounted() {
  console.log('videoMounted')
}

function videoReady() {
  console.log('videoReady')
}

function videoPlay() {
  console.log('videoPlay')
}

function videoPause() {
  console.log('videoPause')
}

function videoEnded() {
  console.log('videoEnded')
}

function videoSeeking() {
  console.log('videoSeeking')
}

const props = defineProps(['videoUrl'])
console.log('videoUrl', props.videoUrl)
// const url = ref<string>(
//   'https://cn-hncs-cu-01-07.bilivideo.com/upgcxcode/87/60/28334886087/28334886087-1-192.mp4?e=ig8euxZM2rNcNbR17wdVhwdlhWRMhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1744544752&gen=playurlv2&os=bcache&oi=989390748&trid=0000064c848207684ae5b1c1cb5422b717afT&mid=85641118&platform=html5&og=hw&upsig=44a2f63613a29d108def3c2f581bc5b4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&cdnid=3296&bvc=vod&nettype=0&bw=114619&orderid=0,1&buvid=&build=0&mobi_app=&f=T_0_0&logo=80000000',
// )
</script>

<template>
  <video-player
    :src="videoUrl"
    controls
    :loop="true"
    :volume="0.6"
    @mounted="videoMounted"
    @ready="videoReady"
    @play="videoPlay"
    @pause="videoPause"
    @ended="videoEnded"
    @seeking="videoSeeking"
  />
</template>

<style scoped lang="less"></style>
