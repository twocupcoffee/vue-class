<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ user.name }} / {{ replace }}</p>
    <button @click="changed">Click me</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Nice to meet you",
      user: {
        name: "Wang",
        insertTime: "2020.06.07T13:57:58"
      }
    };
  },
  methods: {
    changed() {
      this.msg = "You are silly!!";
    }
  },
  computed: {
    replace() {
      return this.user.insertTime.replace("T", "**");
    }
  }
};
</script>
