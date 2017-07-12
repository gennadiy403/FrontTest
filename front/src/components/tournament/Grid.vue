<template lang="pug">
  #grid
    .round(v-for="(round, roundIndex) in tournament.rounds")
      ul.vs(v-for="matches in round.matches")
        li.team(
          v-for="team in matches.teams"
          :id="`round${roundIndex}-team${team.id}`"
          :class="{'active': ui.hover.isHover && team.id === ui.hover.teamId, 'winner': isWinner(team, matches)}"
          @mouseover="mouseOver(team.id)"
          @mouseleave="mouseLeave(team.id)"
          )
          img(:src="getTeamById(team.id).img")
          .name {{ getTeamById(team.id).name }}
          .score {{ team.score }}
          bracket(
            v-if="roundIndex !== 0"
            :tournament="tournament"
            :roundId="roundIndex"
            :teamId="team.id"
            )
</template>

<script>
  import Bracket from './grid/Bracket'
  export default {
    data () {
      return {
        ui: {
          hover: {
            isHover: false,
            teamId: null
          }
        },
        svgPosition: {},
        brackets: []
      }
    },
    props: ['tournament'],
    methods: {
      isWinner (team, match) {
        let winner = match.teams.filter(eachTeam => {
          return eachTeam.score < team.score
        })
        if (winner.length) {
          return true
        } else {
          return false
        }
      },
      mouseOver (id) {
        this.ui.hover.isHover = true
        this.ui.hover.teamId = id
      },
      mouseLeave (id) {
        this.ui.hover.isHover = false
        this.ui.hover.teamId = id
      },
      getTeamById (id) {
        return this.tournament.teams.find(team => {
          return team.id === id
        })
      }
    },
    components: {
      Bracket
    }
  }
</script>

<style lang="stylus">
  #grid
    display flex
    flex-direction row
    justify-content space-between
    margin-top 20px
    .round
      display flex
      flex-direction column
      justify-content space-around
      margin-left 10px
      &:first-child
        margin-left 0
      .vs
        margin-left 0
        padding-left 0
        .team
          list-style-type none
          width 200px
          height 30px
          font-size 12px
          line-height 30px
          cursor pointer
          border solid 1px grey
          &.active
            background-color tomato
          &.winner
            font-weight 600
          img
            width 50px
            float left
          .name
            float left
          .score
            position relative
            float right
            width 20px
            background-color #eee
            text-align center
</style>
