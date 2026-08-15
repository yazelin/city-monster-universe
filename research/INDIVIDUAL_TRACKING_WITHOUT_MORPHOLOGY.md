# Taiwan Field Archive — Individual Tracking Without Morphology v0.1

> **Problem:** Morphology is locked. If we cannot use face, color, limbs, size, clothing, silhouette or other anatomy, how can two observations responsibly claim they may involve the same individual?

## 01. Core rule

During TEXT-ONLY OBSERVATION, the Archive does **not** identify individuals by appearance.

Instead it may assign a temporary `trace_id` to a recurring **behavioral-spatial signature**.

Example:

`TRACE-TP-001`

means:

> multiple records may involve the same individual, but identity is not confirmed.

A trace is not a species and not a character name.

---

## 02. Evidence allowed for a trace

A trace may be strengthened by repeated combinations of:

- recurring micro-location or route
- recurring daypart / temporal window
- characteristic response latency
- repeated order of actions
- consistent avoidance / waiting strategy
- recurring relation to a specific boundary
- repeated return after disturbance
- distinctive route choice when several equivalent options exist

No single item is enough.

The useful unit is a **signature bundle**.

---

## 03. Evidence NOT allowed

While morphology is locked, do not identify an individual using:

- color
- body shape
- apparent height
- number of limbs
- face
- eyes
- clothing-like features
- animal resemblance
- scars / markings
- cute or human-like personality impressions

These may later become morphology evidence, but cannot be used now to force continuity.

---

## 04. Trace confidence

### `TRACE-LOW`
Two records share one or two weak features. Most likely only a candidate recurrence.

### `TRACE-MEDIUM`
Several independent behavioral + spatial features recur under comparable conditions.

### `TRACE-HIGH`
A rare signature bundle recurs across multiple observations, with plausible temporal continuity and alternatives actively tested.

Even `TRACE-HIGH` means **probable same individual**, not certainty.

---

## 05. Anti-anthropomorphism rule

Do not turn a trace into a personality profile.

Bad:
> TRACE-001 is considerate and likes helping commuters.

Better:
> TRACE-001 repeatedly yields space 1–3 seconds before a predicted flow conflict.

Intent is a hypothesis. Behavior is the observation.

---

## 06. Continuity test

To claim that Record B may continue Record A, ask:

1. Could the same individual physically/ecologically plausibly be present?
2. Does the signature recur beyond what the habitat alone would cause?
3. Is the behavior unusual enough to distinguish it from other members of the candidate population?
4. Is there an alternative explanation such as observer expectation or repeated environmental forcing?
5. Would we still link the records if city labels were hidden?

If #2 or #3 cannot be answered, keep the records separate.

---

## 07. Habitat fingerprint problem

A major danger is confusing **same habitat** with **same individual**.

If every organism at a station yields at the same choke point, repeated yielding there does not identify an individual.

Therefore:

`individual signal = repeated behavior - expected habitat response`

The Archive should look for residual quirks after accounting for habitat.

---

## 08. The decisive One Species / Two Modes test

We want a patch that changes through time:

`Phase A: High Transition / Low Ambiguity`

then later:

`Phase B: Low Transition / High Ambiguity`

If a `TRACE-HIGH` candidate persists across both phases and changes from State Switching-like behavior to Edge Reading-like behavior, this strongly supports:

`ONE SPECIES / MULTIPLE BEHAVIORAL MODES`

It does **not** prove it, because trace identity remains probabilistic.

If instead two stable, non-overlapping trace signatures occupy the two conditions, the `TWO SPECIES` model gains support.

---

## 09. Trace record shape

```yaml
trace_id: TRACE-TP-001
trace_status: CANDIDATE
confidence: LOW
linked_observations:
  - OBS-TW-XXXX
signature:
  recurring_patch: null
  temporal_window: null
  response_latency: null
  action_sequence: []
  route_preference: null
habitat_explanations_tested: []
alternative_explanations: []
identity_claim: "possible same individual; unconfirmed"
```

---

## 10. Writing with traces

Literary Field Notes may create the feeling of recurrence without asserting identity.

Useful phrases:

- 「我以為又是牠。」
- 「這次發生的順序和上次一樣。」
- 「我沒有辦法證明是同一個。」
- 「如果不是同一個，那這種習慣可能比個體更重要。」

Avoid:

- 「牠認得我。」 unless behavior supports recognition
- fixed names too early
- visual callbacks that secretly establish anatomy

---

## 11. When a trace becomes scientifically interesting

A trace matters when it lets us distinguish among competing models.

It is not valuable merely because recurring characters are emotionally satisfying.

Strong uses include:

- testing behavioral mode switching
- estimating site fidelity
- testing whether behavior belongs to individual vs species
- detecting learning / habituation
- identifying population-level variation

---

## 12. Current Archive decision

For now:

- No named individuals.
- No canonical recurring protagonist.
- `trace_id` is permitted only as a research device.
- Morphology remains locked.
- Species count remains unresolved.

The next literary experiment should follow one candidate trace across a habitat transition while repeatedly admitting that identity is uncertain.

---

_Last updated: 2026-08-15_