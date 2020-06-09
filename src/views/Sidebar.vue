<template>
  <div>
    <h1>我是不朽哒！！！</h1>
    <ul>
      <li><router-link to="/Example01">能被你发现啦！！！</router-link></li>
      <li><router-link to="/example02">Data()</router-link></li>
    </ul>
    <ul>
      <li>
        <router-link to="/example03/students/12/homework/1">
          路由传参
        </router-link>
      </li>
      <li>
        <router-link to="/example03/students/13/homework/2">
          路由传参
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
h1 {
  color: blue;
}
</style>
