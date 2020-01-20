// components/like/index.js
Component({
  /**
   * 组件的属性列表
   * 开放数据，由组件外部传到组件内部数据
   */
  properties: { 
    /**
     * properties里面的对象一般有3个属性：
     * type【必填，不给初始值会有默认值】 
     * value【初始值】 
     * observer【监听器】
     */
    isLike: {
      type: Boolean,
    },
    count: {
      type: Number
    },
    readOnly: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   * {{组件内部数据}}
   */
  data: {
    yesSrc: 'image/like.png',
    noSrc: 'image/like@dis.png'
  },

  methods: {
    /**
     * 小程序在捕捉用户的点击操作以后，会向这个函数传递一个event参数，
     * 这个函数就接收这个event参数，这是一个复杂的js对象
     */
    onLike: function(event) {
      if (this.properties.readOnly) return
      let isLike = this.properties.isLike
      let count = this.properties.count

      count = isLike ? count - 1 : count + 1

      this.setData({
        count: count,
        isLike: !isLike
      })
    }
  }
})
