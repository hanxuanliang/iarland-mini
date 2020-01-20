import { config } from '../config/config'

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkeys无效',
  3000: '期刊不存在'
}

class HTTP {

  request({url, method='GET', data, success}) {
    wx.request({
      url: config.api_base_url + url,
      method,
      data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: res => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          success && success(res.data)
        } else {
          const error_code = res.data.error_code
          this._showError(error_code)
        }
      }
    })
  }

  // 错误码处理
  _showError(errorCode) {
    if (!errorCode) { errorCode = 1 }
    const tip = tips[errorCode]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP }
