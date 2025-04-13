/*
 * @File: index.ts
 * @Description:
 *
 * @Autor: Cuzaoo
 * @Date: 2025/4/13
 */

import http from '@/api/http'

const loginApi = {
  async getQR() {
    let url: string = '/login/generateQR'
    return http.get(url)
  },
  async verifyQR(qrcode_key: string) {
    let url: string = '/login/verifyQRSuccess'
    return http.get(url, { qrcode_key, withCredentials: true })
  },
}

export default loginApi
