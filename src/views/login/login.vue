<script setup lang="ts">
import loginApi from '@/api/login/index'
import VueQrcode from 'vue-qrcode'
import { onMounted } from 'vue'

const qrCodeUrl = ref<string>('')
const qrCodeKey = ref<string>('')

async function getQR() {
  const qrResponse = await loginApi.getQR()
  console.log('qr', qrResponse)
  console.log('qr', qrResponse)
  qrCodeUrl.value = qrResponse?.data?.url
  qrCodeKey.value = qrResponse?.data?.qrcode_key
}

async function verifyQRCode() {
  console.log('verifyQRCode')
  console.log(qrCodeKey.value)
  const response = await loginApi.verifyQR(qrCodeKey.value)
  const setCookieHeader: string | undefined = response.headers['set-cookie']
  if (setCookieHeader) {
    const cookies: string[] = setCookieHeader.split(';')
    cookies.forEach((cookie) => {
      document.cookie = cookie
    })
  }
}

onMounted(() => {
  getQR()
})
</script>

<template>
  <div>
    <VueQrcode
      :color="{ dark: '#000000ff', light: '#ffffffff' }"
      type="image/png"
      :value="qrCodeUrl"
      :size="128"
    />
    <el-button @click="verifyQRCode"> 验证登录成功 </el-button>
  </div>
</template>

<style scoped lang="less"></style>
