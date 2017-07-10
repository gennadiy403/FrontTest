<template lang="pug">
  .grid
    .round(v-for="(round, index) in tournament.rounds")
      ul.vs(v-for="matches in round.matches")
        li.team(
          v-for="team in matches.teams"
          :class="{'active': ui.hover.isHover && team.id === ui.hover.teamId }"
          @mouseover="mouseOver(team.id)"
          @mouseleave="mouseLeave(team.id)"
          )
          img(:src="getTeamById(team.id).img")
          .name {{ getTeamById(team.id).name }} {{ team.id }}
          .score {{ team.score }}
      //- .single-teams(
      //-   v-for="team in singleTeams"
      //-   v-if="index === 0"
      //-   )
      //-   div {{ team.name }}
      ul.vs(
        v-for="team in singleTeams"
        v-if="index === 0"
        )
        li.team(
          :class="{'active': ui.hover.isHover && team.id === ui.hover.teamId }"
          @mouseover="mouseOver(team.id)"
          @mouseleave="mouseLeave(team.id)"
          )
          img(:src="getTeamById(team.id).img")
          .name {{ getTeamById(team.id).name }} {{ team.id }}
          .score {{ team.score }}
</template>

<script>
  export default {
    data () {
      return {
        ui: {
          hover: {
            isHover: false,
            teamId: null
          }
        }
      }
    },
    props: ['tournament', 'singleTeams'],
    methods: {
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
    }
  }
</script>

<style lang="stylus">
  .grid
    display flex
    flex-direction row
    justify-content space-between
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
