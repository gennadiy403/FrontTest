<template lang="pug">
  .rounds
    .round(v-for="round in rounds") {{ round.name }}
</template>

<script>
  export default {
    props: ['rounds']
  }
</script>

<style lang="stylus">
  .rounds
    display flex
    justify-content space-around
</style>
