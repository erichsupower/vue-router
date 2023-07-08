<template>
  <div>
    <h1>About</h1>
    <nav>
      <router-link to="/about/work">工作經歷</router-link>
      <router-link to="/about/education">教育經歷</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
  max-width: 100%;

  display: grid;
  place-items: center;

  background-color: hsl(280deg, 50%, 20%);
  font-size: 10vw;
}
</style>
