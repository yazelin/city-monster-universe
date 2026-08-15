# City Monster Universe — Creation Guide

> WORLD_BIBLE.md defines what this universe believes.  
> This document defines how we create, evaluate, record, and evolve each species.

---

## 01. Species IDs are discovery numbers

`TW-###` represents the order in which a species entered the Taiwan Field Archive.

It does **not** represent county/city order, geography, or administrative boundaries.

Therefore a future second Taipei-area species may be `TW-027`, and a cross-boundary river species may appear anywhere in the sequence.

Never renumber established species simply to make the archive geographically tidy.

---

## 02. Every species needs friction

Positive does not mean cheerful.

Each species should contain at least one tension, inconvenience, awkwardness, contradiction, or small imperfection created by everyday life.

Examples of useful tensions:

- hurried but considerate
- quiet but observant
- sturdy but easily overheated
- sociable but needs long periods alone
- slow to react but difficult to unsettle

Avoid making every monster generically kind, cute, optimistic, or comforting.

A species becomes memorable when its warmth exists alongside a believable inconvenience.

---

## 03. Stereotypes are research leads, not final designs

Famous foods, landmarks, slogans, tourist imagery, and city stereotypes may be used as research entry points.

They cannot be the final explanation for a species.

When a familiar association appears, ask one layer deeper:

- What daily behavior created this association?
- Who encounters it repeatedly?
- What does the environment feel like before it becomes a postcard?
- What material, rhythm, inconvenience, or kindness would a resident notice?

Do not stop at:

`Taichung = famous attraction`

Continue until reaching:

`environment → repeated behavior → bodily trace → personality`

---

## 04. Canon Species Schema

Each collected species should eventually have a canonical Markdown record under `species/`.

Recommended fields:

- Species ID
- Common Name
- Archive / Region
- Classification
- Status
- Version
- Habitat
- Personality
- Core Tension
- Body
- Weather
- Materials
- Rhythm
- Habits
- Memory
- Human Kindness
- Palette
- Field Notes
- Uncertain Observations
- Visual Do's
- Visual Don'ts
- Community Observations
- Revision History

Not every field needs to be known at first. Unknown information should remain explicitly unknown rather than being invented to fill the template.

---

## 05. Visual DNA

Across different species, the universe should retain a recognizable visual family without forcing identical silhouettes.

### Prefer

- irregular, slightly imperfect silhouettes
- tactile surfaces
- restrained expressions
- anthropomorphic posture rather than fully human anatomy
- aged, environmental, slightly weathered palettes
- material traces that feel accumulated rather than decorated
- observational compositions
- quiet humor
- evidence of use, weather, waiting, walking, leaning, carrying, resting

### Avoid

- polished corporate mascot aesthetics
- glossy toy-like 3D rendering as the default
- generic kawaii expressions
- excessive accessories used to explain personality
- costumes that literally represent a city
- tourist-poster compositions
- landmark-shaped anatomy
- city logos or obvious icon collages
- permanently smiling characters

### Visual test

Remove the city name, caption, landmark, and famous food.

If the creature still feels like it has lived somewhere specific for a long time, the design is moving in the right direction.

---

## 06. Anthropomorphism level

A monster should feel emotionally readable without becoming a human in costume.

Anthropomorphism can come from:

- posture
- weight distribution
- hesitation
- reaching
- waiting
- looking away
- making room
- protecting an object
- walking rhythm
- resting behavior

Human clothing is optional and should not become the primary shortcut for personality.

---

## 07. Canon and community evidence

Community contributions do not automatically become canon.

Suggested evidence states:

### CANON
Confirmed in the current official species record.

### OBSERVATION ACCEPTED
A credible community observation consistent with existing evidence. It may inform a future revision.

### UNVERIFIED
Interesting but not sufficiently supported yet.

### DISPUTED
Multiple observations conflict, or the classification remains uncertain.

### FOLKLORE
A repeated local story or claimed sighting that the Field Observer has never verified.

`FOLKLORE` should not be treated as a joke category. Some folklore may eventually become verified; some may remain unresolved indefinitely.

---

## 08. The Observer can be wrong

Field records are not omniscient narration.

The Observer documents what they currently believe they have seen.

Therefore revisions are part of the fiction rather than continuity failures.

Use language such as:

`REVISION NOTE — Earlier classification appears to have been incorrect.`

or

`FIELD CLASSIFICATION DISPUTED.`

An earlier drawing may remain in the archive as historical evidence instead of being erased.

---

## 09. Species change over time

Cities change, so species may change too.

Possible forces include:

- new transit systems
- disappearing shops
- redevelopment
- changing rivers and coastlines
- extreme weather
- demographic shifts
- new working patterns
- altered nightlife
- new forms of public space
- changing relationships between strangers

Therefore `v1 → v2` does not necessarily mean "we drew it better."

Sometimes the creature itself has changed.

When appropriate, distinguish:

- **Observation Revision** — our understanding changed
- **Visual Revision** — depiction improved while canon stayed stable
- **Species Drift** — the species appears to be changing with its habitat

---

## 10. Visual artifact types

### PORTRAIT
Creature-first image for recognition, collection cards, thumbnails, and identity.

### COLLECTED PLATE
Full field-guide composition containing the creature plus notes, details, material studies, palette, or annotations.

### FIELD SKETCH
Unconfirmed research image. Contradictions and rough hypotheses are allowed.

### ENVIRONMENTAL SIGHTING
The creature observed inside its habitat. The monster does not need to face the viewer or dominate the composition.

Do not use a Collected Plate as a Portrait merely because it is the only finished image available.

---

## 11. Creation workflow

For each new species:

1. Observe the place beyond landmarks.
2. Collect environmental and behavioral traces.
3. Identify 3–5 shaping forces from the World Bible.
4. Define one core tension.
5. Define several tiny daily habits.
6. Define the source of its positive emotional pull.
7. Establish material and climate vocabulary.
8. Write Visual Don'ts before generating images.
9. Produce exploratory Field Sketches.
10. Reject designs that depend on obvious city symbols.
11. Select or refine a Portrait candidate.
12. Produce a Collected Plate only after the creature itself is convincing.
13. Write at least one Field Note.
14. Record uncertainties instead of hiding them.
15. Mark `COLLECTED v1` only when enough evidence exists for a provisional depiction.

---

## 12. Pre-collection review

Before approving `COLLECTED v1`, ask:

- Does it look like a creature before it looks like a tourism concept?
- Can we explain why its body became this way?
- Are at least 3 shaping forces visible or implied?
- Does it have a specific contradiction or friction?
- Is its warmth expressed through behavior rather than a smile?
- Does it rely on a landmark, famous food, or icon?
- Does its palette come from lived surfaces and climate?
- Is there at least one resident-scale detail?
- Are uncertain claims clearly separated from canon?
- Could community observations genuinely change our understanding later?

If several answers are weak, return the species to `OBSERVED` or `VISUAL STUDY` rather than forcing collection.

---

## 13. Repository structure

Target structure:

```text
WORLD_BIBLE.md
CREATION_GUIDE.md
species/
  TW-001-taipei.md
  TW-002-taichung.md
field-notes/
community/
docs/
assets/
```

The website is a presentation layer. Canon should not exist only inside HTML.

---

## 14. Prompt principle

Prompts should describe causes before symbols.

Prefer:

`A small anthropomorphic creature shaped by persistent humidity, covered walkways, hurried pedestrian rhythm, aged grey-green tile and concrete surfaces, slightly forward-leaning posture, restrained expression, subtle evidence of making room for others.`

Avoid:

`Cute Taipei monster with Taipei 101, MRT sign, EasyCard and umbrella.`

The prompt should explain **how the creature has lived**, not list what city it represents.

---

## 15. Stop designing and observe again

When a design becomes generic, overly symbolic, excessively cute, or difficult to distinguish without a caption, do not solve the problem by adding more accessories.

Return to observation.

Ask what the creature does at 07:40, 15:20, midnight, during rain, while waiting, while alone, or when another creature needs a little space.

Behavior usually produces better design information than another icon.

---

_Last updated: 2026-08-15_
