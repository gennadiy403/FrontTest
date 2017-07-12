<template lang="pug">
  .tournament
    .tournaments-list
      .get-tournament(@click="getTournament(1)") Tournament 1
      .get-tournament(@click="getTournament(2)") Tournament 2
    rounds-header(:rounds="tournament.rounds")
    grid(
      :tournament="tournament"
      )
</template>

<script>
  import RoundsHeader from './tournament/RoundsHeader'
  import Grid from './tournament/Grid'
  import axios from 'axios'
  export default {
    data () {
      return {
        tournament: {},
        singleTeams: []
      }
    },
    components: {
      RoundsHeader,
      Grid
    },
    methods: {
      getTournament (id) {
        axios.get(`/api/bracket/${id}`)
        .then(response => {
          console.log(`Tournament ${id}`)
          this.tournament = response.data
        })
      }
    }
  }
</script>

<style lang="stylus">
.tournament
  width 970px
  margin 0 auto
  .tournaments-list
    margin-bottom 30px
    width 200px
    .get-tournament
      margin-bottom 5px
      cursor pointer
      border solid 1px tomato
      padding 10px
</style>
