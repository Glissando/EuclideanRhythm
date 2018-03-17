## Classes
<dl>
<dt><a href="#Key">Key</a></dt>
<dd></dd>
<dt><a href="#Pitch">Pitch</a></dt>
<dd></dd>
</dl>
## Functions
<dl>
<dt><a href="#modeIntervals">modeIntervals(modeName)</a> ⇒ <code>Array.&lt;string&gt;</code></dt>
<dd><p>returns the intervals that define the scale degrees of a given mode</p>
</dd>
<dt><a href="#scaleSet">scaleSet(tonic, mode)</a> ⇒ <code><a href="#PitchString">Array.&lt;PitchString&gt;</a></code></dt>
<dd><p>given a pitch string and scale mode, build a pitch class scale from that pitch</p>
</dd>
<dt><a href="#scale">scale(tonic, mode)</a> ⇒ <code><a href="#PitchString">Array.&lt;PitchString&gt;</a></code></dt>
<dd><p>given a pitch string and scale mode, build a scale from that pitch</p>
</dd>
<dt><a href="#intervalQuality">intervalQuality(sciPitch1, sciPitch2)</a> ⇒ <code>String</code></dt>
<dd><p>the interval quality between two pitch strings</p>
</dd>
<dt><a href="#intervalSize">intervalSize(sciPitch1, sciPitch2)</a> ⇒ <code>Number</code></dt>
<dd><p>the generic interval size between two pitch strings, disregarding accidentals</p>
</dd>
<dt><a href="#interval">interval(sciPitch1, sciPitch2)</a> ⇒ <code>String</code></dt>
<dd><p>the interval between two pitch strings</p>
</dd>
<dt><a href="#isHigher">isHigher(sciPitch1, sciPitch2)</a> ⇒ <code>boolean</code></dt>
<dd><p>does this pitch sound higher than that pitch?</p>
</dd>
<dt><a href="#parseInterval">parseInterval(interval)</a> ⇒ <code>Object</code> | <code>false</code></dt>
<dd><p>parses an interval string or number and return its properties in an object or
return false if the string or number is not valid</p>
</dd>
<dt><a href="#parsePitch">parsePitch(sciPitch)</a> ⇒ <code>object</code> | <code>false</code></dt>
<dd><p>parses a pitch string and return its components in an object or
false if the string is not valid</p>
</dd>
<dt><a href="#plusInterval">plusInterval(sciPitch, interval)</a> ⇒ <code><a href="#PitchString">PitchString</a></code> | <code>function</code></dt>
<dd><p>given pitch string plus given interval string equals new pitch string</p>
<p>Optionally, give only one parameter and get back a function with that parameter
set as the default.</p>
</dd>
<dt><a href="#semitonesBetween">semitonesBetween(sciPitch1, sciPitch2)</a> ⇒ <code>Number</code></dt>
<dd><p>the number of semitones between these two pitch strings</p>
</dd>
<dt><a href="#simplifyIntervalSize">simplifyIntervalSize(intervalSize)</a> ⇒ <code>Number</code></dt>
<dd><p>simplify compound intervals to within the range of 1-7. Works for
negative intervals as well.</p>
</dd>
<dt><a href="#sortPitches">sortPitches(pitches)</a> ⇒ <code><a href="#PitchString">Array.&lt;PitchString&gt;</a></code></dt>
<dd><p>helper function to sort an array of PitchStrings from lowest to highest</p>
</dd>
<dt><a href="#toMidi">toMidi(sciPitch)</a> ⇒ <code>Number</code></dt>
<dd><p>the <a href="http://newt.phys.unsw.edu.au/jw/notes.html">midi number</a> of this pitch string</p>
</dd>
<dt><a href="#clone">clone(obj)</a> ⇒ <code>object</code> | <code>array</code></dt>
<dd><p>helper function to clone a simple object/array made up of primitives.
Will not work if the object or array contains non-primitives.</p>
</dd>
</dl>
## Typedefs
<dl>
<dt><a href="#MusicLetter">MusicLetter</a> : <code>&#x27;A&#x27;</code> | <code>&#x27;B&#x27;</code> | <code>&#x27;C&#x27;</code> | <code>&#x27;D&#x27;</code> | <code>&#x27;E&#x27;</code> | <code>&#x27;F&#x27;</code> | <code>&#x27;G&#x27;</code></dt>
<dd><p>[A-G] representing a musical lettername</p>
</dd>
<dt><a href="#AccidentalString">AccidentalString</a> : <code>&#x27;#&#x27;</code> | <code>&#x27;b&#x27;</code> | <code>&#x27;##&#x27;</code> | <code>&#x27;bb&#x27;</code></dt>
<dd><p>&#39;#&#39; for sharp, &#39;b&#39; for flat.
                                                &#39;##&#39;&#39; for double sharp, &#39;bb&#39; for double flat.</p>
</dd>
<dt><a href="#PitchString">PitchString</a> : <code>string</code></dt>
<dd><p><a href="#MusicLetter">MusicLetter</a> + [<a href="#AccidentalString">AccidentalString</a>] +
                                [octave number]. Must match the regular expression:
                                /(A-G)(b{1,2}|#{1,2})?(\d{1,2})?/. Accidental and octave number are optional,
                                but if octave number is not provided, it will default to octave 4.</p>
</dd>
<dt><a href="#PitchClassString">PitchClassString</a> : <code>string</code></dt>
<dd><p><a href="#MusicLetter">MusicLetter</a> + [<a href="#AccidentalString">AccidentalString</a>].</p>
</dd>
</dl>
<a name="Key"></a>
## Key
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| tonic | <code>[Pitch](#Pitch)</code> | the tonic of this scale. Although all Pitch instances have an octave number, it is not used in the Key methods. |
| modeName | <code>string</code> | a string representing the mode name. If custom mode is provided, defaults to 'custom-scale' |
| mode | <code>Array.&lt;string&gt;</code> | an array of interval strings representing the interval each scale degree is from tonic |
| scale | <code>[Array.&lt;PitchString&gt;](#PitchString)</code> | an array of pitch class strings |


* [Key](#Key)
  * [new Key(tonic, mode)](#new_Key_new)
  * [.toString()](#Key+toString) ⇒ <code>String</code>
  * [.inKey(pitch)](#Key+inKey) ⇒ <code>boolean</code>
  * [.accidentalOn(pitch)](#Key+accidentalOn) ⇒ <code>string</code>
  * [.pitchAtDegree(degree)](#Key+pitchAtDegree) ⇒ <code>[Pitch](#Pitch)</code>
  * [.scaleDegree(pitch)](#Key+scaleDegree) ⇒ <code>number</code>
  * [.plusInterval(pitch, intervalSize)](#Key+plusInterval) ⇒ <code>[Pitch](#Pitch)</code>
  * [.range(lo, hi)](#Key+range) ⇒ <code>[Array.&lt;Pitch&gt;](#Pitch)</code>

<a name="new_Key_new"></a>
### new Key(tonic, mode)
Creates a new key. Note that most Key methods use pitch classes without reguards
to octave number.


| Param | Type | Description |
| --- | --- | --- |
| tonic | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music)) of this scale. Octave number may be provided, but do not affect the Key methods. |
| mode | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | a string representing a mode name (minor, major, dorian) or an array of interval strings representing the interval each scale degree is from tonic |

<a name="Key+toString"></a>
### key.toString() ⇒ <code>String</code>
**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>String</code> - the tonic + the modeName ('Bb major')  
<a name="Key+inKey"></a>
### key.inKey(pitch) ⇒ <code>boolean</code>
is this pitch a member of this key?

**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>boolean</code> - is this pitch in the key?  

| Param | Type | Description |
| --- | --- | --- |
| pitch | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a pitch string or Pitch |

**Example**  
```js
var a_major = new Key('A3', 'major')
a_major.inKey('C3')   => false
a_major.inKey('C#3')  => true
```
<a name="Key+accidentalOn"></a>
### key.accidentalOn(pitch) ⇒ <code>string</code>
given a letter and key, returns the accidental that should be on this letter
in this key. This method only works for standard keys like major or dorian which map evenly
to the seven music letters.

**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>string</code> - the accidental that needs to be added to this letter for it
to be in the key  

| Param | Type | Description |
| --- | --- | --- |
| pitch | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a pitch string or Pitch |

<a name="Key+pitchAtDegree"></a>
### key.pitchAtDegree(degree) ⇒ <code>[Pitch](#Pitch)</code>
returns the Pitch at the requested scale degree. Although Pitches default to octave
number 4, this should be thought of as a pitch class

**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>[Pitch](#Pitch)</code> - a pitch class string  

| Param | Type | Description |
| --- | --- | --- |
| degree | <code>number</code> | the desired scale degree of this scale (an integer > 0) |

**Example**  
```js
var a_major = new Key('A3', 'major')
a_major.scaleDegree(3)   => 'C#4'<Pitch>
a_major.scaleDegree(10)  => 'C#4'<Pitch>
```
<a name="Key+scaleDegree"></a>
### key.scaleDegree(pitch) ⇒ <code>number</code>
returns the scale degree of this pitch or -1 if it is not in the key

**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>number</code> - the scale degree of this pitch or -1 if not in key  

| Param | Type | Description |
| --- | --- | --- |
| pitch | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a pitch string or Pitch |

**Example**  
```js
var a_major = new Key('A3', 'major')
a_major.scaleDegree('C3')   => -1
a_major.scaleDegree('C#3')  => 3
```
<a name="Key+plusInterval"></a>
### key.plusInterval(pitch, intervalSize) ⇒ <code>[Pitch](#Pitch)</code>
gets the correct pitch in the key which is the given interval size away

**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>[Pitch](#Pitch)</code> - the resulting Pitch  

| Param | Type | Description |
| --- | --- | --- |
| pitch | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | the starting Pitch or pitch string |
| intervalSize | <code>number</code> | an interval as a positive or negative number. |

**Example**  
```js
var a_flat_major = new Key('Ab', 'major')
a_flat_major.plusInterval('C4', 2)   => Pitch: Db4
a_flat_major.plusInterval('C4', -2)  => Pitch: Bb3
a_flat_major.plusInterval('Eb2', 4)  => Pitch: Ab2
a_flat_major.plusInterval('G5', -10) => Pitch: Eb4
```
<a name="Key+range"></a>
### key.range(lo, hi) ⇒ <code>[Array.&lt;Pitch&gt;](#Pitch)</code>
Get all the notes in this key between lo and hi (both inclusive)

**Kind**: instance method of <code>[Key](#Key)</code>  
**Returns**: <code>[Array.&lt;Pitch&gt;](#Pitch)</code> - an array of Pitches with all the notes of this key
between lo and hi (both inclusive)  
**Throws**:

- an Error if lo and hi are not both [inKey](#Key+inKey)


| Param | Type | Description |
| --- | --- | --- |
| lo | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | the starting Pitch or pitch string |
| hi | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | the ending Pitch or pitch string |

<a name="Pitch"></a>
## Pitch
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Pitch.name | <code>[PitchString](#PitchString)</code> | this pitch in scientific pitch notation |


* [Pitch](#Pitch)
  * [new Pitch(sciPitch)](#new_Pitch_new)
  * [.toString()](#Pitch+toString) ⇒ <code>[PitchString](#PitchString)</code>
  * [.valueOf()](#Pitch+valueOf) ⇒ <code>Number</code>
  * [.equals(that)](#Pitch+equals) ⇒ <code>Boolean</code>
  * [.isEnharmonic(that)](#Pitch+isEnharmonic) ⇒ <code>Boolean</code>
  * [.isHigher(that)](#Pitch+isHigher) ⇒ <code>Boolean</code>
  * [.sciPitch()](#Pitch+sciPitch) ⇒ <code>[PitchString](#PitchString)</code>
  * [.letter()](#Pitch+letter) ⇒ <code>[MusicLetter](#MusicLetter)</code>
  * [.accidental()](#Pitch+accidental) ⇒ <code>[AccidentalString](#AccidentalString)</code>
  * [.octave()](#Pitch+octave) ⇒ <code>Number</code>
  * [.pitchClass()](#Pitch+pitchClass) ⇒ <code>[PitchClassString](#PitchClassString)</code>
  * [.numAccidental()](#Pitch+numAccidental) ⇒ <code>Number</code>
  * [.midi()](#Pitch+midi) ⇒ <code>Number</code>
  * [.semitonesTo(that)](#Pitch+semitonesTo) ⇒ <code>Number</code>
  * [.intervalSize(that)](#Pitch+intervalSize) ⇒ <code>Number</code>
  * [.simpleIntervalSize(that)](#Pitch+simpleIntervalSize) ⇒ <code>Number</code>
  * [.interval(that)](#Pitch+interval) ⇒ <code>String</code>
  * [.simpleInterval(that)](#Pitch+simpleInterval) ⇒ <code>String</code>
  * [.plusInterval(interval)](#Pitch+plusInterval) ⇒ <code>[Pitch](#Pitch)</code>

<a name="new_Pitch_new"></a>
### new Pitch(sciPitch)
Creates a new immutable Pitch or if given an existing Pitch, returns it.

**Throws**:

- Will throw an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>[PitchString](#PitchString)</code> &#124; <code>[Pitch](#Pitch)</code> | a pitch string in scientific pitch notation or a Pitch. |

**Example**  
```js
var p = new Pitch('Bb3')
p.name               => 'Bb3'
// if you forget the 'new' keyword, the constructor will call it for you
var p2 = Pitch('C4')
p2 instanceof Pitch  => true
// if given a Pitch as its argument, the same Pitch will be returned
var p3 = Pitch(p2)
p2 === p3            => true
// this can be used to write functions which accept pitch strings or Pitches as a parameter
```
<a name="Pitch+toString"></a>
### pitch.toString() ⇒ <code>[PitchString](#PitchString)</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>[PitchString](#PitchString)</code> - string in scientfic pitch notation  
<a name="Pitch+valueOf"></a>
### pitch.valueOf() ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the midi number of this pitch, so enharmonic notes will be equal  
**See**: [pitch.midi()](#Pitch+midi)  
<a name="Pitch+equals"></a>
### pitch.equals(that) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Boolean</code> - is this pitch spelled the same as that pitch?  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a Pitch or a pitch string |

<a name="Pitch+isEnharmonic"></a>
### pitch.isEnharmonic(that) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Boolean</code> - does this pitch sound identical to that pitch?  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a Pitch or a pitch string |

<a name="Pitch+isHigher"></a>
### pitch.isHigher(that) ⇒ <code>Boolean</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Boolean</code> - does this pitch sound higher than that pitch?  
**See**: [isHigher](#isHigher)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a Pitch or a pitch string |

<a name="Pitch+sciPitch"></a>
### pitch.sciPitch() ⇒ <code>[PitchString](#PitchString)</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>[PitchString](#PitchString)</code> - in [scientfic pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)
(same as pitch.name)  
<a name="Pitch+letter"></a>
### pitch.letter() ⇒ <code>[MusicLetter](#MusicLetter)</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>[MusicLetter](#MusicLetter)</code> - will return 'A', 'B', 'C', 'D', 'E', 'F', or 'G'  
<a name="Pitch+accidental"></a>
### pitch.accidental() ⇒ <code>[AccidentalString](#AccidentalString)</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>[AccidentalString](#AccidentalString)</code> - 'b', 'bb', '#', '##' (double sharp is not 'x'),
or '', the empty string if there is no accidental.  
<a name="Pitch+octave"></a>
### pitch.octave() ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the octave number (C4 is
[middle C](https://en.wikipedia.org/wiki/C_(musical_note)#Middle_C))  
<a name="Pitch+pitchClass"></a>
### pitch.pitchClass() ⇒ <code>[PitchClassString](#PitchClassString)</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>[PitchClassString](#PitchClassString)</code> - the [pitch class](https://en.wikipedia.org/wiki/Pitch_class),
same as [pitch.sciPitch()](#Pitch+sciPitch) but without octave number.  
<a name="Pitch+numAccidental"></a>
### pitch.numAccidental() ⇒ <code>Number</code>
returns the number of accidentals on this letter:
positive for sharps, negative for flats.

**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - how many half steps from its letter, will be in the range [-2, 2]  
**Example**  
```js
var p = new Pitch('Abb3')
p.halfSteps() => -2
```
<a name="Pitch+midi"></a>
### pitch.midi() ⇒ <code>Number</code>
What is the [midi number](http://newt.phys.unsw.edu.au/jw/notes.html) of this pitch?

**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the midi number for this pitch. C4 is 60.  
**Example**  
```js
toMidi('C4')    => 60
toMidi('B#3')   => 60
toMidi('Bb3')   => 58
toMidi('A#3')   => 58
```
<a name="Pitch+semitonesTo"></a>
### pitch.semitonesTo(that) ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - how many half steps are there between these pitches?  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a Pitch or a pitch string |

<a name="Pitch+intervalSize"></a>
### pitch.intervalSize(that) ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the interval size between these pitches  
**See**: [intervalSize](#intervalSize)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a Pitch or a pitch string |

<a name="Pitch+simpleIntervalSize"></a>
### pitch.simpleIntervalSize(that) ⇒ <code>Number</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>Number</code> - the simple interval size between these pitches in range [1,7]  
**See**: [simple](#intervalSize.simple)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a Pitch or a pitch string |

<a name="Pitch+interval"></a>
### pitch.interval(that) ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - the interval between these pitches  
**See**: [interval](#interval)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a Pitch or a pitch string |

<a name="Pitch+simpleInterval"></a>
### pitch.simpleInterval(that) ⇒ <code>String</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>String</code> - the simple interval between these pitches  
**See**: [simple](#interval.simple)  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Pitch](#Pitch)</code> &#124; <code>[PitchString](#PitchString)</code> | a Pitch or a pitch string |

<a name="Pitch+plusInterval"></a>
### pitch.plusInterval(interval) ⇒ <code>[Pitch](#Pitch)</code>
**Kind**: instance method of <code>[Pitch](#Pitch)</code>  
**Returns**: <code>[Pitch](#Pitch)</code> - the resulting Pitch  
**See**: [plusInterval](#plusInterval)  

| Param | Type | Description |
| --- | --- | --- |
| interval | <code>String</code> &#124; <code>Number</code> | an interval string or number with or without quality. If   interval quality is not provided, accidentals on this Pitch will be ignored. |

**Example**  
```js
var pitch_C4 = new Pitch('C4')
plusInterval(pitch_C4, 10)     => Pitch: E5
plusInterval(pitch_C4, -10)    => Pitch: A2
plusInterval(pitch_C4, 'm10')  => Pitch: Eb5
plusInterval(pitch_C4, '-d7')  => Pitch: D#3
```
<a name="modeIntervals"></a>
## modeIntervals(modeName) ⇒ <code>Array.&lt;string&gt;</code>
returns the intervals that define the scale degrees of a given mode

**Kind**: global function  
**Returns**: <code>Array.&lt;string&gt;</code> - an array of interval strings representing the
interval each scale degree is from tonic, always starting with 'P1' for tonic  

| Param | Type | Description |
| --- | --- | --- |
| modeName | <code>&#x27;major&#x27;</code> &#124; <code>&#x27;minor&#x27;</code> &#124; <code>&#x27;ionian&#x27;</code> &#124; <code>&#x27;dorian&#x27;</code> &#124; <code>&#x27;phrygian&#x27;</code> &#124; <code>&#x27;lydian&#x27;</code> &#124; <code>&#x27;mixolydian&#x27;</code> &#124; <code>&#x27;aeolian&#x27;</code> &#124; <code>&#x27;locrian&#x27;</code> | a mode name |

**Example**  
```js
modeIntervals('major')  => ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']
modeIntervals('dorian') => ['P1', 'M2', 'm3', 'P4', 'P5', 'M6', 'm7']
```
<a name="scaleSet"></a>
## scaleSet(tonic, mode) ⇒ <code>[Array.&lt;PitchString&gt;](#PitchString)</code>
given a pitch string and scale mode, build a pitch class scale from that pitch

**Kind**: global function  
**Returns**: <code>[Array.&lt;PitchString&gt;](#PitchString)</code> - an array of pitch class strings (without octave number)  
**See**: for a similar function which uses octave numbers, see [scale](#scale)  

| Param | Type | Description |
| --- | --- | --- |
| tonic | <code>[PitchString](#PitchString)</code> | the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music)) of this scale. If octave number is provided, it will be ignored. |
| mode | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | a string representing a mode name (minor, major, dorian) or an array of interval strings representing the interval each scale degree is from tonic |

**Example**  
```js
scale('Eb4', 'major')
=> ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D']
```
<a name="scale"></a>
## scale(tonic, mode) ⇒ <code>[Array.&lt;PitchString&gt;](#PitchString)</code>
given a pitch string and scale mode, build a scale from that pitch

**Kind**: global function  
**Returns**: <code>[Array.&lt;PitchString&gt;](#PitchString)</code> - an array of pitch strings  

| Param | Type | Description |
| --- | --- | --- |
| tonic | <code>[PitchString](#PitchString)</code> | the [tonic](@link https://en.wikipedia.org/wiki/Tonic_(music)) of this scale |
| mode | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | a string representing a mode name (minor, major, dorian) or an array of interval strings representing the interval each scale degree is from tonic |

**Example**  
```js
scale('Eb4', 'major')
=> ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5']
```
<a name="intervalQuality"></a>
## intervalQuality(sciPitch1, sciPitch2) ⇒ <code>String</code>
the interval quality between two pitch strings

**Kind**: global function  
**Returns**: <code>String</code> - a character representing the interval between the two pitches:
- 'P' = perfect
- 'm' = minor
- 'M' = major
- 'd' = diminished
- 'A' = augmented  
**Throws**:

- an error if either string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |

**Example**  
```js
intervalQuality('C4', 'E4')    => 'M'
intervalQuality('E4', 'Eb4')   => 'm'
intervalQuality('C4', 'F4')    => 'P'
intervalQuality('C4', 'F#4')   => 'A'
intervalQuality('B3', 'Ab4')   => 'd'
```
<a name="intervalSize"></a>
## intervalSize(sciPitch1, sciPitch2) ⇒ <code>Number</code>
the generic interval size between two pitch strings, disregarding accidentals

**Kind**: global function  
**Returns**: <code>Number</code> - the absolute interval size between the two pitches. Always positive, even if
the first argument is higher than the second.  
**Throws**:

- an error if string is not a valid pitch

**See**: [simple](#intervalSize.simple) for returning the simple interval size  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |

**Example**  
```js
intervalSize('C4', 'E4')    => 3
intervalSize('E4', 'C4')    => 3
intervalSize('C4', 'E5')    => 10
intervalSize('C4', 'Eb5')   => 10
intervalSize('C5', 'C5')    => 1
```
<a name="intervalSize.simple"></a>
### intervalSize.simple(sciPitch1, sciPitch2) ⇒ <code>Number</code>
the generic simple interval size (1-7) between two pitch strings, disregarding accidentals

**Kind**: static method of <code>[intervalSize](#intervalSize)</code>  
**Returns**: <code>Number</code> - the simple interval size between the two pitches in range [1, 7].
Contrary to standard practice, an octave is considered compound and reduces to 1.  
**Throws**:

- an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |

**Example**  
```js
intervalSize.simple('C4', 'E4')    => 3
intervalSize.simple('C4', 'E5')    => 3
intervalSize.simple('C1', 'E9')    => 3
```
<a name="interval"></a>
## interval(sciPitch1, sciPitch2) ⇒ <code>String</code>
the interval between two pitch strings

**Kind**: global function  
**Returns**: <code>String</code> - the interval between the two pitches  
**Throws**:

- an error if either string is not a valid pitch

**See**: [simple](#interval.simple) for returning the simple interval  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |

**Example**  
```js
interval('C4', 'E4')    => 'M3'
interval('E4', 'Eb4')   => 'm3'
interval('C4', 'F4')    => 'P4'
interval('C4', 'F#4')   => 'A4'
interval('B3', 'Ab4')   => 'd7'
```
<a name="interval.simple"></a>
### interval.simple(sciPitch1, sciPitch2) ⇒ <code>Number</code>
the simple interval between two pitch strings

**Kind**: static method of <code>[interval](#interval)</code>  
**Returns**: <code>Number</code> - the simple interval between the two pitches.
Contrary to standard practice, an octave is considered compound and reduces to 1 as in [simple](#intervalSize.simple)  
**Throws**:

- an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>String</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>String</code> | a pitch in scientific pitch notation. |

**Example**  
```js
interval.simple('C4', 'E4')    => 'M3'
interval.simple('C4', 'E5')    => 'M3'
interval.simple('C1', 'E9')    => 'M3'
```
<a name="isHigher"></a>
## isHigher(sciPitch1, sciPitch2) ⇒ <code>boolean</code>
does this pitch sound higher than that pitch?

**Kind**: global function  
**Returns**: <code>boolean</code> - is sciPitch1 higher than sciPitch2?  
**Throws**:

- Will throw an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |

**Example**  
```js
isHigher('D4', 'C4')    => true
isHigher('C4', 'D4')    => false
isHigher('C4', 'B#3')   => false   // enharmonic, so they actually sound equal
isHigher('B##3', 'C4')  => true    // B##3 sounds higher than C4
```
<a name="parseInterval"></a>
## parseInterval(interval) ⇒ <code>Object</code> &#124; <code>false</code>
parses an interval string or number and return its properties in an object or
return false if the string or number is not valid

**Kind**: global function  
**Returns**: <code>Object</code> &#124; <code>false</code> - False if invalid interval else an object
with the following properties:
- interval: string
- direction: number -1 or 1
- quality: string of 'm', 'M', 'P', 'd', or 'A' OR null if not given
- size: number, size of the interval, never negative
- simpleSize: number in range [1,7]
- perfectable: boolean (if false, this is an imperfect interval)
- octaves: number of octave changes. Will be >= 0.
- halfsteps: number|undefined if given quality, number of halfsteps this interval translates to  

| Param | Type | Description |
| --- | --- | --- |
| interval | <code>String</code> &#124; <code>Number</code> | an interval string with interval quality or a number representing only interval size. Both types of input may be signed ('-P5' or -5) to indicate a descending interval. |

**Example**  
```js
parseInterval('-M6')  => {interval: '-M6', direction: -1, quality: 'M', size: 6, simpleSize: 6,
                          perfectable: false, octaves: 0, halfsteps: 9}
parseInterval(12)     => {interval: '12', direction: 1, quality: null, size: 12, simpleSize: 5,
                          perfectable: true, octaves 1}
parseInterval('M5')   => false
```
<a name="parsePitch"></a>
## parsePitch(sciPitch) ⇒ <code>object</code> &#124; <code>false</code>
parses a pitch string and return its components in an object or
false if the string is not valid

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>false</code> - False if invalid pitch string or an object
with the following properties:
- letter: string
- accidental: [AccidentalString](#AccidentalString)
- numAccidental: number of accidentals [-2, 2], positive for sharps, negative for flats
- octave: integer (if not provided, defaults to 4)
- sciPitch: [PitchString](#PitchString)  

| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation |

**Example**  
```js
parsePitch('Bb3')   => {letter: 'B', accidental: 'b', numAccidental: -1, octave: 3, sciPitch:'Bb3'}
parsePitch('Xb4')   => false
```
<a name="plusInterval"></a>
## plusInterval(sciPitch, interval) ⇒ <code>[PitchString](#PitchString)</code> &#124; <code>function</code>
given pitch string plus given interval string equals new pitch string

Optionally, give only one parameter and get back a function with that parameter
set as the default.

**Kind**: global function  
**Returns**: <code>[PitchString](#PitchString)</code> &#124; <code>function</code> - the resulting pitch string, or if one argument is null, returns
a function with the provided argument set as a default.  
**Throws**:

- an error if pitch string or interval string is not valid


| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |
| interval | <code>String</code> &#124; <code>Number</code> | an interval string or number with or without quality. If quality                                   is not provided, accidentals on given pitch will be ignored. |

**Example**  
```js
plusInterval('C4', 10)     => 'E5'
plusInterval('C4', -10)    => 'A2'
plusInterval('C4', 'm10')  => 'Eb5'
plusInterval('C4', '-d7')  => 'D#3'
var majorscale = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7', 'P8']
majorscale.map(plusInterval('Eb4', null))
=> ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5']
majorscale.map(plusInterval('Eb4', null)).map(plusInterval(null, '-m9'))
=> ['D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4', 'D4']
```
<a name="semitonesBetween"></a>
## semitonesBetween(sciPitch1, sciPitch2) ⇒ <code>Number</code>
the number of semitones between these two pitch strings

**Kind**: global function  
**Returns**: <code>Number</code> - the semitones between these two pitch strings.  
**Throws**:

- Will throw an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch1 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |
| sciPitch2 | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |

**Example**  
```js
semitonesBetween('C4', 'Db4')   => 1
semitonesBetween('C4', 'B#3')   => 0
semitonesBetween('C4', 'C5')    => 12
```
<a name="simplifyIntervalSize"></a>
## simplifyIntervalSize(intervalSize) ⇒ <code>Number</code>
simplify compound intervals to within the range of 1-7. Works for
negative intervals as well.

**Kind**: global function  
**Returns**: <code>Number</code> - the simplified interval  
**Throws**:

- Will throw an error if intervalSize is 0


| Param | Type | Description |
| --- | --- | --- |
| intervalSize | <code>Number</code> | any valid interval number |

**Example**  
```js
simplifyIntervalSize(10)   => 3
simplifyIntervalSize(-12)  => -5
simplifyIntervalSize(-4)   => -4
simplifyIntervalSize(8)    => 1
```
<a name="sortPitches"></a>
## sortPitches(pitches) ⇒ <code>[Array.&lt;PitchString&gt;](#PitchString)</code>
helper function to sort an array of PitchStrings from lowest to highest

**Kind**: global function  
**Returns**: <code>[Array.&lt;PitchString&gt;](#PitchString)</code> - a new clone of the provided pitch string
array sorted from low pitch to high pitch  

| Param | Type | Description |
| --- | --- | --- |
| pitches | <code>[Array.&lt;PitchString&gt;](#PitchString)</code> | an array of pitch strings |

<a name="toMidi"></a>
## toMidi(sciPitch) ⇒ <code>Number</code>
the [midi number](http://newt.phys.unsw.edu.au/jw/notes.html) of this pitch string

**Kind**: global function  
**Returns**: <code>Number</code> - the midi number for this pitch. C4 is 60.
[Enharmonic](https://en.wikipedia.org/wiki/Enharmonic) notes will return the same
midi number.  
**Throws**:

- Will throw an error if string is not a valid pitch


| Param | Type | Description |
| --- | --- | --- |
| sciPitch | <code>[PitchString](#PitchString)</code> | a pitch in scientific pitch notation. |

**Example**  
```js
toMidi('C4')    => 60
toMidi('B#3')   => 60
toMidi('Bb3')   => 58
toMidi('A#3')   => 58
```
<a name="clone"></a>
## clone(obj) ⇒ <code>object</code> &#124; <code>array</code>
helper function to clone a simple object/array made up of primitives.
Will not work if the object or array contains non-primitives.

**Kind**: global function  
**Returns**: <code>object</code> &#124; <code>array</code> - a new clone of the provided object or array  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> &#124; <code>array</code> | an object array made up only of primitives |

<a name="MusicLetter"></a>
## MusicLetter : <code>&#x27;A&#x27;</code> &#124; <code>&#x27;B&#x27;</code> &#124; <code>&#x27;C&#x27;</code> &#124; <code>&#x27;D&#x27;</code> &#124; <code>&#x27;E&#x27;</code> &#124; <code>&#x27;F&#x27;</code> &#124; <code>&#x27;G&#x27;</code>
[A-G] representing a musical lettername

**Kind**: global typedef  
<a name="AccidentalString"></a>
## AccidentalString : <code>&#x27;#&#x27;</code> &#124; <code>&#x27;b&#x27;</code> &#124; <code>&#x27;##&#x27;</code> &#124; <code>&#x27;bb&#x27;</code>
'#' for sharp, 'b' for flat.
                                                '##'' for double sharp, 'bb' for double flat.

**Kind**: global typedef  
<a name="PitchString"></a>
## PitchString : <code>string</code>
[MusicLetter](#MusicLetter) + [[AccidentalString](#AccidentalString)] +
                                [octave number]. Must match the regular expression:
                                /(A-G)(b{1,2}|#{1,2})?(\d{1,2})?/. Accidental and octave number are optional,
                                but if octave number is not provided, it will default to octave 4.

**Kind**: global typedef  
**Example**  
```js
'C4'     // middle C on a piano, the fourth octave
'B3'     // the B one note below C4 on the piano (octave numbers change on C)
'Eb3'    // Eb in octave 3
'F#2'    // F# in octave 2
'F##7'   // F double sharp in octave 7
'Dbb5'   // D double flat in octave 5
```
<a name="PitchClassString"></a>
## PitchClassString : <code>string</code>
[MusicLetter](#MusicLetter) + [[AccidentalString](#AccidentalString)].

**Kind**: global typedef  
**Link**: same as [PitchString](#PitchString) but without octave number.  
**Example**  
```js
'C'
'Eb'
'F#'
'F##'
'Dbb'
```
