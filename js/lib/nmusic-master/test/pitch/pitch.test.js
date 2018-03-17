var test = require('tape')
var Pitch = require('../../lib/pitch/pitch.js')

test('new Pitches can be created', function (t) {
  var pitch_Bb4 = new Pitch('Bb4')

  t.equal(pitch_Bb4.name, 'Bb4')
  t.true(pitch_Bb4 instanceof Pitch, 'is instance of Pitch')

  pitch_Bb4.name = 'E4'
  t.equal(pitch_Bb4.name, 'Bb4', 'Pitch is immutable')

  pitch_Bb4.test = 'testing'
  t.equal(typeof pitch_Bb4.test, 'undefined', 'Pitch is immutable')

  t.end()
})

test('Pitch.toString() generates the correct string', function (t) {
  t.equal((new Pitch('Bb5')).toString(), 'Bb5')

  var harmonic = 'C#3 D#3 E3 F#3 G#3 A3 B#3 C#4'
  var mapped = harmonic.split(' ').map(function (pitch) {
    return new Pitch(pitch)
  }).join(' ')
  t.equal(mapped, harmonic, 'toString is being called automatically')

  t.end()
})

test('Pitch prototype parsing methods', function (t) {
  var pitch_Bbb2 = new Pitch('Bbb2')

  t.equal(pitch_Bbb2.sciPitch(), 'Bbb2', 'Pitch.sciPitch() returns correctly')
  t.equal(pitch_Bbb2.letter(), 'B', 'Pitch.letter() returns correctly')
  t.equal(pitch_Bbb2.accidental(), 'bb', 'Pitch.accidental() returns correctly')
  t.equal(pitch_Bbb2.octave(), 2, 'Pitch.octave() returns correctly')
  t.equal(pitch_Bbb2.pitchClass(), 'Bbb', 'Pitch.pitchClass() returns correctly')
  t.equal(pitch_Bbb2.midi(), 45, 'Pitch.midi() returns correctly')
  t.equal(pitch_Bbb2.valueOf(), 45, 'Pitch.valueOf() returns correctly')
  t.equal(pitch_Bbb2 < new Pitch('Bb2'), true, 'toValue being called automatically')

  var pitch_D = new Pitch('D')
  t.equal(pitch_D.accidental(), '', 'Pitch.accidental() returns correctly with empty string')

  t.end()
})

test('Pitch.numAccidental() returns the correct number', function (t) {
  t.equal((new Pitch('A##9')).numAccidental(), 2)
  t.equal((new Pitch('G#2')).numAccidental(), 1)
  t.equal((new Pitch('F4')).numAccidental(), 0)
  t.equal((new Pitch('Bb3')).numAccidental(), -1)
  t.equal((new Pitch('Dbb7')).numAccidental(), -2)

  t.end()
})

test('Pitch.equals() returns true only if notes spelled the same', function (t) {
  var pitch_C4 = new Pitch('C4')
  var pitch_Bb3 = new Pitch('Bb3')

  t.ok(pitch_C4.equals(new Pitch('C4')))
  t.ok(pitch_Bb3.equals(new Pitch('Bb3')))
  t.notOk(pitch_C4.equals(new Pitch('B#3')))
  t.notOk(pitch_Bb3.equals(new Pitch('A3')))

  t.ok(pitch_C4.equals('C4'))
  t.ok(pitch_Bb3.equals('Bb3'))
  t.notOk(pitch_C4.equals('B#3'))
  t.notOk(pitch_Bb3.equals('A3'))

  t.end()
})

test('Pitch.isEnharmonic()', function (t) {
  var pitch_C4 = new Pitch('C4')
  var pitch_Bb3 = new Pitch('Bb3')

  t.ok(pitch_C4.isEnharmonic(new Pitch('C4')))
  t.ok(pitch_C4.isEnharmonic('C4'))
  t.ok(pitch_C4.isEnharmonic(new Pitch('B#3')))
  t.ok(pitch_C4.isEnharmonic('B#3'))
  t.ok(pitch_C4.isEnharmonic(new Pitch('Dbb4')))
  t.ok(pitch_C4.isEnharmonic('Dbb4'))

  t.ok(pitch_Bb3.isEnharmonic(new Pitch('Bb3')))
  t.ok(pitch_Bb3.isEnharmonic(new Pitch('A#3')))

  t.notOk(pitch_C4.isEnharmonic(new Pitch('C#4')))
  t.notOk(pitch_C4.isEnharmonic(new Pitch('B3')))
  t.notOk(pitch_Bb3.isEnharmonic(new Pitch('A##3')))
  t.notOk(pitch_Bb3.isEnharmonic(new Pitch('A3')))

  t.end()
})

test('Pitch.semitonesTo()', function (t) {
  var pitch_C4 = new Pitch('C4')
  var pitch_Bb3 = new Pitch('Bb3')

  t.equal(pitch_C4.semitonesTo(new Pitch('C4')), 0)
  t.equal(pitch_C4.semitonesTo(new Pitch('C#4')), 1)
  t.equal(pitch_C4.semitonesTo(new Pitch('B3')), 1)
  t.equal(pitch_C4.semitonesTo(new Pitch('D4')), 2)
  t.equal(pitch_C4.semitonesTo(new Pitch('C5')), 12)
  t.equal(pitch_C4.semitonesTo(new Pitch('B#4')), 12)
  t.equal(pitch_C4.semitonesTo(new Pitch('C3')), 12)
  t.equal(pitch_C4.semitonesTo(new Pitch('B#2')), 12)
  t.equal(pitch_C4.semitonesTo(new Pitch('Cb3')), 13)

  t.equal(pitch_Bb3.semitonesTo(new Pitch('Bb3')), 0)
  t.equal(pitch_Bb3.semitonesTo(new Pitch('A#3')), 0)
  t.equal(pitch_Bb3.semitonesTo(new Pitch('C5')), 14)
  t.equal(pitch_Bb3.semitonesTo(new Pitch('E5')), 18)

  t.equal(pitch_Bb3.semitonesTo('Bb3'), 0)
  t.equal(pitch_Bb3.semitonesTo('A#3'), 0)
  t.equal(pitch_Bb3.semitonesTo('C5'), 14)
  t.equal(pitch_Bb3.semitonesTo('E5'), 18)

  t.end()
})

test('Pitch.intervalSize and Pitch.simpleIntervalSize', function (t) {
  var pitch_C4 = new Pitch('C4')

  t.equal(pitch_C4.intervalSize(new Pitch('C4')), 1)
  t.equal(pitch_C4.intervalSize(new Pitch('C#5')), 8)
  t.equal(pitch_C4.intervalSize(new Pitch('Cb6')), 15)
  t.equal(pitch_C4.intervalSize(new Pitch('Bb4')), 7)
  t.equal(pitch_C4.intervalSize(new Pitch('B#3')), 2)
  t.equal(pitch_C4.simpleIntervalSize(new Pitch('C4')), 1)
  t.equal(pitch_C4.simpleIntervalSize(new Pitch('C8')), 1)
  t.equal(pitch_C4.simpleIntervalSize(new Pitch('Eb6')), 3)

  t.equal(pitch_C4.intervalSize('B#3'), 2)
  t.equal(pitch_C4.simpleIntervalSize('C4'), 1)

  t.end()
})

test('Pitch.interval and Pitch.simpleInterval', function (t) {
  var pitch_C4 = new Pitch('C4')

  t.equal(pitch_C4.interval(new Pitch('C4')), 'P1')
  t.equal(pitch_C4.interval(new Pitch('C#5')), 'A8')
  t.equal(pitch_C4.interval(new Pitch('Cb6')), 'd15')
  t.equal(pitch_C4.interval(new Pitch('Bb4')), 'm7')
  t.equal(pitch_C4.interval(new Pitch('B#3')), 'd2')
  t.equal(pitch_C4.simpleInterval(new Pitch('C4')), 'P1')
  t.equal(pitch_C4.simpleInterval(new Pitch('C8')), 'P1')
  t.equal(pitch_C4.simpleInterval(new Pitch('Eb6')), 'm3')

  t.equal(pitch_C4.interval('B#3'), 'd2')
  t.equal(pitch_C4.simpleInterval('C4'), 'P1')

  t.end()
})

test('Pitch.plusInterval', function (t) {
  var pitch_C4 = new Pitch('C4')

  t.deepEqual(pitch_C4.plusInterval('m2'), new Pitch('Db4'))
  t.deepEqual(pitch_C4.plusInterval('-m2'), new Pitch('B3'))
  t.deepEqual(pitch_C4.plusInterval(3), new Pitch('E4'))
  t.deepEqual(pitch_C4.plusInterval(-6), new Pitch('E3'))

  t.end()
})

test('Pitch.isHigher', function (t) {
  var pitch_C4 = new Pitch('C4')

  t.true(pitch_C4.isHigher(new Pitch('B3')))
  t.true(pitch_C4.isHigher('B3'))

  t.false(pitch_C4.isHigher(new Pitch('D4')))
  t.false(pitch_C4.isHigher('Db4'))

  t.false(pitch_C4.isHigher(new Pitch('B#3')))
  t.false(pitch_C4.isHigher('B#3'))

  t.end()
})
