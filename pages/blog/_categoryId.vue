<template>
  <div class="list">
    <div class="category-list">
      <nuxt-link to="/blog" exact>全部</nuxt-link>
      <nuxt-link
        :to="`/blog/${category.category_alias}`"
        v-for="category in categoryList"
        :key="category.id"
        >{{ category.category_name }}</nuxt-link
      >
    </div>
    <div class="blog-list">
      <ul>
        <li v-for="article in articleList" :key="article.id">
          <p>{{ article.created_time | formatDate }}</p>
          <h2>
            <nuxt-link :to="`/blog/details/${article.id}`">{{
              article.title
            }}</nuxt-link>
          </h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment'
export default {
  layout: 'single',
  async asyncData({ $axios, params }) {
    let [getCategoryList, getArticleList] = await Promise.all([
      await $axios.$get('/getCategoryList'),
      await $axios.$get(
        `/getArticleList${params.categoryId ? '/' + params.categoryId : ''}`
      )
    ])
    return {
      categoryList: getCategoryList.code === 200 ? getCategoryList.data : [],
      articleList: getArticleList.code === 200 ? getArticleList.data : []
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
  },
  filters: {
    formatDate(datetime) {
      return moment(datetime).format('YYYY-MM-DD')
    }
  },
  mounted() {}
}
</script>

<style lang="scss">
@import '~assets/css/mixin.scss';
.list {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 25px;

  .category-list {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    a {
      font-size: 14px;
      color: #333;
      padding: 0 10px;
      &.nuxt-link-active {
        color: $theme-color;
      }
      &:hover {
        color: $theme-color;
      }
    }
  }

  .blog-list {
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      li {
        padding: 20px 0;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        align-items: center;
        p {
          margin: 0;
          flex-shrink: 0;
          font-size: 16px;
          margin-right: 20px;
        }
        h2 {
          width: 50%;
          flex: 1;
          margin: 0;
          font-size: 16px;
          a {
            font-weight: 600;
            color: #444;
            &:hover {
              color: $theme-color;
            }
          }
        }
      }
    }
  }
}
</style>
