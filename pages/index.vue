<template>
  <div class="index">
    <img
      class="logo"
      src="http://images.wangcms.cn/6126054e1f124ce7b0b07af831a34a08.png"
      alt="W"
    />
    <h1>王财源的个人主页</h1>
    <p>感觉这里应该写点什么</p>
    <p>......</p>
    <p>......</p>
    <p>终于这个博客建立于2019-12-14</p>
    <p>也不知道能坚持写多久</p>
    <p>第一篇文章发表于{{ firstBlogTime }}</p>
    <p>目前共发表了{{ totalBlogNum }}篇文章</p>
    <p>最后一篇文章发表于{{ lastBlogTime }}，已经过去{{ pastDays }}天了</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return {
      firstBlogTime: '---',
      lastBlogTime: '---',
      totalBlogNum: 0,
      pastDays: 0
    }
  },
  head() {
    return {
      title: 'w-blog',
      meta: [
        {
          name: 'keywords',
          content:
            '前端博客，PHP博客，王财源的个人主页，王财源的博客，王财源，wangcaiyuan，wangcms'
        },
        {
          hid: 'description',
          name: 'description',
          content: '王财源的博客，记录、分享前端、后端的技术知识积累。'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.index {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img.logo {
    border-radius: 18px;
  }

  h1 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 30px;
  }
}
</style>
