<template lang="pug">
  svg(
    :style="this.svgPosition"
    :id="`svg-round${roundId}-team${teamId}`"
    )
    line(
      v-for="line in svgLine"
      v-if="havePreviousGame()"
      :x1="line.x1"
      :y1="line.y1"
      :x2="line.x2"
      :y2="line.y2"
      stroke-width="1"
      stroke="rgb(0,0,0)"
      )
    line(
      v-for="line in svgZeroLine"
      v-if="!havePreviousGame()"
      :x1="line.x1"
      :y1="line.y1"
      :x2="line.x2"
      :y2="line.y2"
      stroke-width="1"
      stroke="rgb(0,0,0)"
      )
</template>

<script>
export default {
  props: ['setBrackets', 'roundId', 'teamId', 'tournament'],
  data () {
    return {
      svgPosition: {},
      svgLine: [],
      svgZeroLine: []
    }
  },
  mounted () {
    this.getBracketCoordinates()
  },
  watch: {
    'tournament' () {
      setTimeout(() => {
        this.getBracketCoordinates()
      })
    }
  },
  methods: {
    havePreviousGame () {
      let roundId = this.roundId
      let teamId = this.teamId
      if (document.getElementById(`round${roundId - 1}-team${teamId}`)) {
        return true
      } else {
        return false
      }
    },
    getBracketCoordinates () {
      let roundId = this.roundId
      let teamId = this.teamId
      let point = document.getElementById(`round${roundId}-team${teamId}`)
      let to = {
        top: point.offsetTop,
        left: point.offsetLeft,
        width: point.offsetWidth,
        height: point.offsetHeight
      }
      if (this.havePreviousGame()) {
        let previousPoint = document.getElementById(`round${roundId - 1}-team${teamId}`).parentElement
        let from = {
          top: previousPoint.offsetTop,
          left: previousPoint.offsetLeft,
          width: previousPoint.offsetWidth,
          height: previousPoint.offsetHeight
        }
        if (to.top > from.top) {
          // team is lower
          this.svgPosition = {
            left: from.left + from.width,
            width: to.left - (from.left + from.width),
            top: from.top + from.height / 2,
            height: to.top - from.top - to.height / 2
          }
          this.svgLine = [
            {
              x1: 0,
              y1: 0,
              x2: this.svgPosition.width / 2,
              y2: 0
            },
            {
              x1: this.svgPosition.width / 2,
              y1: 0,
              x2: this.svgPosition.width / 2,
              y2: this.svgPosition.height
            },
            {
              x1: this.svgPosition.width / 2,
              y1: this.svgPosition.height,
              x2: this.svgPosition.width,
              y2: this.svgPosition.height
            }
          ]
        } else {
          // team is heighter
          this.svgPosition = {
            left: from.left + from.width,
            width: to.left - (from.left + from.width),
            top: to.top + to.height / 2,
            height: from.top - to.top + from.height / 4
          }
          this.svgLine = [
            {
              x1: 0,
              y1: this.svgPosition.height,
              x2: this.svgPosition.width / 2,
              y2: this.svgPosition.height
            },
            {
              x1: this.svgPosition.width / 2,
              y1: this.svgPosition.height,
              x2: this.svgPosition.width / 2,
              y2: 0
            },
            {
              x1: this.svgPosition.width / 2,
              y1: 0,
              x2: this.svgPosition.width,
              y2: 0
            }
          ]
        }
      } else {
        // team is havent previous game
        this.svgPosition = {
          top: point.offsetTop,
          left: point.offsetLeft - 15,
          width: 15,
          height: 15
        }
        this.svgZeroLine = [
          {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: this.svgPosition.height
          },
          {
            x1: 0,
            y1: this.svgPosition.height,
            x2: this.svgPosition.width,
            y2: this.svgPosition.height
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus">
  svg
    position absolute
    width 0
    height 0
</style>
