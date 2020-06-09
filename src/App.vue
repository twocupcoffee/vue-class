<template>
  <div id="app">
    <sidebar id="sidebar" />
    <keep-alive><router-view id="router" /></keep-alive>
  </div>
</template>
<script>
import sidebar from "@/views/Sidebar";
export default {
  components: { sidebar }
};
</script>
<style>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  margin-top: 20px;
}
#sidebar {
  width: 300px;
  display: inline-block;
  border: 2px dotted yellow;
  vertical-align: top;
}
#router {
  display: inline-block;
  border: 2px solid red;
}
</style>
