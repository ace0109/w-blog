<template>
  <div class="nav-bar">
    <nuxt-link to="/" exact>首页</nuxt-link>
    <nuxt-link to="/blog" exact>博客</nuxt-link>
  </div>
</template>
<style lang="scss">
@import '~assets/css/mixin.scss';
.nav-bar {
  max-width: 600px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 14px;
    color: #333;
    padding: 0 10px;
    &.nuxt-link-active{
      color: $theme-color;
    }
    &:hover {
      color: $theme-color;
    }
  }
}
</style>
