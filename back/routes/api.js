var express = require('express')
var router = express.Router()

/* GET test json. */
router.get('/test', function (req, res, next) {
  res.json({success: true})
})

function toJSON (template, ...expressions) {
  return JSON.parse(template.reduce((accumulator, part, i) => {
    return accumulator + expressions[i - 1] + part
  }))
}

router.get('/bracket/1', function (req, res, next) {
  res.json(toJSON`
    {
      "teams": {
        "1": {
          "name": "Invictus Gaming",
          "img": "http://wiki.teamliquid.net/commons/images/a/a8/IGlogo_std.png"
        },
        "2": {
          "name": "Team Secret",
          "img": "http://wiki.teamliquid.net/commons/images/a/a7/Secretdotalogo_std.png"
        },
        "3": {
          "name": "Team Liquid",
          "img": "http://wiki.teamliquid.net/commons/images/c/cd/Liquid2017logo_std.png"
        },
        "4": {
          "name": "Virtus.pro",
          "img": "http://wiki.teamliquid.net/commons/images/e/e7/Virtuslogo_std.png"
        },
        "5": {
          "name": "Evil Geniuses",
          "img": "http://wiki.teamliquid.net/commons/images/2/28/Eglogo_std.png"
        },
        "6": {
          "name": "LGD.ForeverYoung",
          "img": "http://wiki.teamliquid.net/commons/images/1/12/Lgdfylogo_hd.png"
        }
      },
      "rounds": [
        {
          "name": "Quarterfinals",
          "matches": [
            {"teams": [{"id": 1, "score": 0}, {"id": 2, "score": 2}]},
            {"teams": [{"id": 3, "score": 2}, {"id": 4, "score": 1}]}
          ]
        },
        {
          "name": "Semifinals",
          "comment": "2 команды сразу проходят в этот раунд, не участвуя в предыдущем",
          "matches": [
            {"teams": [{"id": 5, "score": 2}, {"id": 2, "score": 0}]},
            {"teams": [{"id": 6, "score": 0}, {"id": 3, "score": 2}]}
          ]
        },
        {
          "name": "Finals",
          "matches": [
            {"teams": [{"id": 5, "score": 1}, {"id": 3, "score": 3}]}
          ]
        }
      ]
    }
  `)
})

router.get('/bracket/2', function (req, res, next) {
  res.json(toJSON`
    {
      "teams": {
        "1": {
          "name": "Invictus Gaming",
          "img": "http://wiki.teamliquid.net/commons/images/a/a8/IGlogo_std.png"
        },
        "2": {
          "name": "mousesports",
          "img": "http://wiki.teamliquid.net/commons/images/d/dc/Mousesportslogo_std.png"
        },
        "3": {
          "name": "Team Liquid",
          "img": "http://wiki.teamliquid.net/commons/images/c/cd/Liquid2017logo_std.png"
        },
        "4": {
          "name": "Newbee",
          "img": "http://wiki.teamliquid.net/commons/images/b/b9/Newbeelogo_std.png"
        },
        "5": {
          "name": "Digital Chaos",
          "img": "http://wiki.teamliquid.net/commons/images/3/3f/Digitalchaoslogo_std.png"
        },
        "6": {
          "name": "Team VGJ",
          "img": "http://wiki.teamliquid.net/commons/images/7/70/Team_VG.J_logo_std.png"
        },
        "7": {
          "name": "Virtus.pro",
          "img": "http://wiki.teamliquid.net/commons/images/e/e7/Virtuslogo_std.png"
        },
        "8": {
          "name": "iG Vitality",
          "img": "http://wiki.teamliquid.net/commons/images/7/76/IGVlogo_std.png"
        },
        "9": {
          "name": "TNC Pro Team",
          "img": "http://wiki.teamliquid.net/commons/images/9/98/Tnclogo_std.png"
        },
        "10": {
          "name": "Team Faceless",
          "img": "http://wiki.teamliquid.net/commons/images/e/ea/Teamfacelesslogo_std.png"
        },
        "11": {
          "name": "OG",
          "img": "http://wiki.teamliquid.net/commons/images/a/a0/OGLogo_std.png"
        },
        "12": {
          "name": "Team Random",
          "img": "http://wiki.teamliquid.net/commons/images/4/40/Team_Random_logo_std.png"
        },
        "13": {
          "name": "Thunderbirds",
          "img": "http://wiki.teamliquid.net/commons/images/6/6e/Thunderbirdslogo_std.png"
        },
        "14": {
          "name": "Evil Geniuses",
          "img": "http://wiki.teamliquid.net/commons/images/2/28/Eglogo_std.png"
        },
        "15": {
          "name": "Team Secret",
          "img": "http://wiki.teamliquid.net/commons/images/a/a7/Secretdotalogo_std.png"
        },
        "16": {
          "name": "SG e-sports",
          "img": "http://wiki.teamliquid.net/commons/images/2/2a/SG_e-sportslogo_std.png"
        }
      },
      "rounds": [
        {
          "name": "Round of 16",
          "matches": [
            {"teams": [{"id": 1, "score": 2}, {"id": 2, "score": 1}]},
            {"teams": [{"id": 3, "score": 2}, {"id": 4, "score": 1}]},
            {"teams": [{"id": 5, "score": 0}, {"id": 6, "score": 2}]},
            {"teams": [{"id": 7, "score": 2}, {"id": 8, "score": 0}]},
            {"teams": [{"id": 9, "score": 1}, {"id": 10, "score": 2}]},
            {"teams": [{"id": 11, "score": 2}, {"id": 12, "score": 1}]},
            {"teams": [{"id": 13, "score": 0}, {"id": 14, "score": 2}]},
            {"teams": [{"id": 15, "score": 1}, {"id": 16, "score": 2}]}
          ]
        },
        {
          "name": "Quarterfinals",
          "matches": [
            {"teams": [{"id": 1, "score": 2}, {"id": 3, "score": 1}]},
            {"teams": [{"id": 6, "score": 1}, {"id": 7, "score": 2}]},
            {"teams": [{"id": 10, "score": 1}, {"id": 11, "score": 2}]},
            {"teams": [{"id": 14, "score": 2}, {"id": 16, "score": 1}]}
          ]
        },
        {
          "name": "Semifinals",
          "matches": [
            {"teams": [{"id": 1, "score": 0}, {"id": 7, "score": 2}]},
            {"teams": [{"id": 11, "score": 2}, {"id": 14, "score": 0}]}
          ]
        },
        {
          "name": "Finals",
          "matches": [
            {"teams": [{"id": 7, "score": 2}, {"id": 11, "score": 3}]}
          ]
        }
      ]
    }
  `)
})

module.exports = router
