import { Message } from "element-ui"

export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    // axios 提供的 方法，————nuxtjs-axios 。 当请求失败时触发该事件
    const { statusCode, message } = error.response.data
    if (statusCode === 400) {
      Message.warning(message)
    }
  })
}