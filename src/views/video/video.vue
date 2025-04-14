<script setup lang="ts">
import videoApi from '@/api/video/index'
import { onMounted, ref } from 'vue'

const loading = ref<boolean>(false)
const recommendedVideoList = ref<any[]>([])
onMounted(async () => {
  loading.value = true
  const recommendedVideoResponse = await videoApi.getRecommendedVideo()
  console.log('recommendedVideoResponse', recommendedVideoResponse)
  recommendedVideoList.value = recommendedVideoResponse?.data?.item
  loading.value = false
})
</script>

<template>
  <div class="video-list">
    <div class="video-container">
      <el-card
        v-for="video in recommendedVideoList"
        :key="video.id"
        shadow="hover"
        class="video-card"
      >
        <router-link
          :to="{
            name: 'details',
            query: {
              bvid: video.bvid,
              cid: video.cid,
            },
          }"
        >
          <img
            :src="video.pic"
            alt="封面图"
            referrerPolicy="no-referrer"
            class="video-cover"
          />
        </router-link>
        <div class="video-info">
          <h4 class="video-title">
            {{ video.title }}
          </h4>
          <div class="video-stats">
            {{ video.owner.name || 'UP主' }} | 🫡
            {{ video.stat.view || '无评论' }} | 👍
            {{ video.stat.like || '未知' }} | 🥚
            {{ video.stat.danmaku || '未知' }} | 🛄
            {{ video.duration || '未知时长' }}
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="less">
.video-list {
  padding: 20px;
}

.video-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  max-width: 1200px; /* 限制最大宽度，避免在超大屏幕上卡片过大 */
}

.video-card {
  width: calc(50% - 10px);
  max-width: 480px;
  margin-bottom: 10px;
}

.video-card :deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-cover {
  width: 100%;
  max-width: 280px;
  height: 158px;
  object-fit: cover;
  margin-bottom: 10px;
}

.video-info {
  text-align: center;
  width: 100%;
}

.video-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 10px 0 5px;
}

.video-stats {
  font-size: 14px;
  color: #888;
}

/* 响应式布局，在小屏幕下每行显示一个卡片 */
@media (max-width: 768px) {
  .video-card {
    width: 100%;
    max-width: 480px;
  }
}
</style>
