var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function (s) {
    return document.querySelector(s)
  },
  selectAll = function (s) {
    return document.querySelectorAll(s)
  },
  container = select(".container"),
  mainSVG = select(".mainSVG"),
  lamp = MorphSVGPlugin.convertToPath("#lampTop")

TweenMax.set("svg", {
  visibility: "visible",
})

var tl = new TimelineMax()

for (var i = 0; i < 5; i++) {
                                          // this is were you change speed
  var t = TweenMax.to(select(".blob" + i), randomBetween(14, 50),{
    y: 260,
    repeat: -1,
    repeatDelay: randomBetween(1, 3),
    yoyo: true,
    ease: Linear.easeNone,
  })

  tl.add(t, (i + 1) / 0.10)
}

tl.seek(100)

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
