import http from '@/api/http'

const videoApi = {
  async getVideo(url: string, params: Object) {
    return http.get(url, params) // 正确传递查询参数
  },
  async getRecommendedVideo() {
    let url: string = '/video/recommended'
    return http.get(url)
  },
}
export default videoApi
