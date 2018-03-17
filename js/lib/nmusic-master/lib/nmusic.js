var Pitch = require('./pitch/pitch.js')
var parsePitch = require('./pitch/parse-pitch.js')

var nmusic = function (input) {
  if (input instanceof Pitch) return input
  if (parsePitch(input)) return new Pitch(input)
  return null
}

nmusic.Pitch = Pitch
nmusic.intervalQuality = require('./pitch/interval-quality.js')
nmusic.intervalSize = require('./pitch/interval-size.js')
nmusic.interval = require('./pitch/interval.js')
nmusic.parseInterval = require('./pitch/parse-interval.js')
nmusic.parsePitch = require('./pitch/parse-pitch.js')
nmusic.plusInterval = require('./pitch/plus-interval.js')
nmusic.semitonesBetween = require('./pitch/semitones-between.js')
nmusic.simplifyIntervalSize = require('./pitch/simplify-interval-size.js')
nmusic.toMidi = require('./pitch/to-midi.js')
nmusic.isHigher = require('./pitch/is-higher.js')
nmusic.sortPitches = require('./pitch/sort-pitches.js')

nmusic.Key = require('./key/key.js')
nmusic.modeIntervals = require('./key/mode-intervals.js')
nmusic.scaleSet = require('./key/scale-set.js')
nmusic.scale = require('./key/scale.js')

exports = module.exports = nmusic
