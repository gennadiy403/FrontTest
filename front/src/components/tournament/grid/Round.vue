<template lang="pug">

  .round(v-for="round in tournament")
    ul.vs
      li 1
      li 2
</template>

<script>
  export default {
    props: ['tournament']
  }
</script>

<style lang="stylus" scoped>

</style>
