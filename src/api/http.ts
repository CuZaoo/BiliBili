import request from '@/api/request'

/*
 * @Autor: Cuzaoo
 * @Date: 2025/4/12
 * @Description: 网络请求层配置类
 */

interface Config {
  method: 'get'
  url: string
  params?: any
  data?: any
}

/*
 * @Autor: Cuzaoo
 * @Date: 2025/4/12 22:21
 * @Description: 封装网络请求层
 */
const http = {
  get(url: string, params?: any) {
    const config: Config = {
      method: 'get',
      url: url,
      ...(params && { params: params }),
    }
    return request(config)
  },
  post(url: string, data: any) {
    const config: Config = {
      method: 'post',
      url: url,
      ...(data && { params: data }),
    }
    return request(config)
  },
  put(url: string, params: any) {
    const config: Config = {
      method: 'put',
      url: url,
      ...(params && { params: params }),
    }
    return request(config)
  },
  delete(url: string, params: any) {
    const config: Config = {
      method: 'delete',
      url: url,
      ...(params && { params: params }),
    }
    return request(config)
  },
}
export default http
