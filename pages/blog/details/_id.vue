<template>
  <div class="detais">
    <h1 class="title">{{ articleDetail.title }}</h1>
    <p class="datetime">{{ articleDetail.created_time }}</p>
    <div class="content">
      {{ articleDetail.content }}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'single',
  async asyncData({ $axios, params }) {
    let [getArticleDetail] = await Promise.all([
      await $axios.$get(`/getArticleDetail/${params.id}`)
    ])
    return {
      articleDetail: getArticleDetail.code === 200 ? getArticleDetail.data : []
    }
  }
}
</script>

<style lang="scss">
.detais {
  max-width: 600px;
  margin: 0 auto;
  padding: 25px;

  & > h1.title {
    font-size: 22px;
    color: #333;
    text-align: center;
  }

  & > p.datetime {
    text-align: center;
    font-size: 14px;
    color: #444;
  }

  & > div.content {
  }
}
</style>
