var parsePitch = require('./parse-pitch.js')
var parseInterval = require('./parse-interval.js')
var semitonesBetween = require('./semitones-between.js')

var LETTERS = 'CDEFGAB'
var ACCIDENTAL_FROM_HALFSTEPS = {'-2': 'bb', '-1': 'b', '0': '', '1': '#', '2': '##'}

/**
 * given pitch string plus given interval string equals new pitch string
 *
 * Optionally, give only one parameter and get back a function with that parameter
 * set as the default.
 *
 * @param {PitchString} sciPitch        - a pitch in scientific pitch notation.
 * @param {String|Number} interval - an interval string or number with or without quality. If quality
 *                                   is not provided, accidentals on given pitch will be ignored.
 * @returns {PitchString|Function} the resulting pitch string, or if one argument is null, returns
 * a function with the provided argument set as a default.
 *
 * @throws an error if pitch string or interval string is not valid
 *
 * @example
 * plusInterval('C4', 10)     => 'E5'
 * plusInterval('C4', -10)    => 'A2'
 * plusInterval('C4', 'm10')  => 'Eb5'
 * plusInterval('C4', '-d7')  => 'D#3'
 * var majorscale = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8']
 * majorscale.map(plusInterval('Eb4', null))
 * => ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5']
 * majorscale.map(plusInterval('Eb4', null)).map(plusInterval(null, '-m9'))
 * => ['D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4', 'D4']
 */
var plusInterval = function (sciPitch, interval) {
  if (!sciPitch) {
    if (!parseInterval(interval)) throw new Error('Invalid interval:', interval)
    return function (inputPitch) { return plusInterval(inputPitch, interval) }
  }
  if (!interval) {
    if (!parsePitch(sciPitch)) throw new Error('Invalid pitch:', sciPitch)
    return function (inputInterval) { return plusInterval(sciPitch, inputInterval) }
  }

  var p = parsePitch(sciPitch)
  var i = parseInterval(interval)
  if (!p || !i) throw new Error('Invalid pitch or interval:', sciPitch, interval)

  // deal with special cases of unison intervals: P1, A1, d1
  if (i.size === 1 && i.quality) {
    if (i.quality === 'P') return p.sciPitch
    var s1 = i.direction === 1 ? '' : '-'   // sign for first operation
    var s2 = i.direction === 1 ? '-' : ''   // sign for second operation
    if (i.quality === 'A') return plusInterval(plusInterval(p.sciPitch, s1 + 'M2'), s2 + 'm2')
    if (i.quality === 'd') return plusInterval(plusInterval(p.sciPitch, s1 + 'm2'), s2 + 'M2')
  }

  // calculate the index of the new letter and check if it passed through an octave cycle
  var newLetterIndex = LETTERS.indexOf(p.letter) + (i.simpleSize - 1) * i.direction
  if (newLetterIndex >= LETTERS.length) {
    i.octaves += 1
    newLetterIndex = newLetterIndex % LETTERS.length
  } else if (newLetterIndex < 0) {
    i.octaves += 1
    newLetterIndex += LETTERS.length
  }
  var newPitch = LETTERS[newLetterIndex] + String(i.direction * i.octaves + p.octave)
  if (i.quality === null) return newPitch  // if no quality was requested, return now

  // use requested interval quality to determine accidentals for new pitch
  var halfstepDifference = i.direction * (i.halfsteps - semitonesBetween(p.sciPitch, newPitch))

  return LETTERS[newLetterIndex] +                        // letter
         ACCIDENTAL_FROM_HALFSTEPS[halfstepDifference] +  // accidental
         String(i.direction * i.octaves + p.octave)       // octave number
}

module.exports = plusInterval
