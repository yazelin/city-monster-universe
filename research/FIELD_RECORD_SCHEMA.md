# Taiwan Field Archive — Field Record Schema v0.1

> Field Record 是整個 Archive 的最小證據單位。城市頁、species 頁、encounter map、population study 與未來社群投稿，都應盡量從同一種 record 結構長出來。

## 01. Principle

一筆 Field Record 記錄的是：

> **在某個時間、某個 habitat patch，觀察到某種行為／形態，並對既有分類提供支持或反證。**

它不是「替城市新增一隻怪物」。

Canonical flow:

`PLACE → PATCH → CONDITIONS → OBSERVATION → IDENTIFICATION → EVIDENCE EFFECT → REVIEW`

---

## 02. Identity

### `observation_id`

格式建議：`OBS-TW-0001`

永遠指向 observation，不等於 species ID。

### `record_version`

例如 `1.0`。後續修改分類時保留 revision history。

### `record_status`

允許：

- `DRAFT`
- `UNVERIFIED`
- `REVIEWED`
- `ACCEPTED`
- `DISPUTED`
- `RECLASSIFIED`
- `WITHDRAWN`

---

## 03. Place

### `place_label`

人類可讀名稱，例如「台北」「台中」「高雄」。

### `locality`

更細的生活區域／街區／節點。公開社群資料不要求精確地址。

### `habitat_patch`

真正重要的 ecological unit，例如：

- transfer node
- residential lane
- arcade edge
- market threshold
- riverfront exposure
- inherited rail corridor

### `location_precision`

- `CITY`
- `DISTRICT`
- `NEIGHBORHOOD`
- `SITE`
- `PRIVATE / HIDDEN`

公開網站應允許模糊化位置，避免 Field Archive 變成追蹤個人行程的工具。

---

## 04. Time

### `observed_at`

日期／時間；若不確定可只記 daypart。

### `daypart`

- dawn
- morning
- midday
- afternoon
- evening
- night
- late-night

### `temporal_context`

例如 weekday / weekend / commute peak / market closing / rain event。

---

## 05. Habitat Conditions

目前至少記錄：

### `transition_density`
`LOW / MEDIUM / HIGH / UNKNOWN`

### `use_ambiguity`
`LOW / MEDIUM / HIGH / UNKNOWN`

### `path_dependence`
`LOW / MEDIUM / HIGH / UNKNOWN`

### Shaping variables

可選：

- `density`
- `climate_exposure`
- `material_persistence`
- `time_variability`

不要為了填滿欄位假裝知道答案；`UNKNOWN` 是合法資料。

---

## 06. Observation

### `behavior_observed`

只寫看到／描述到的行為，不先塞 species interpretation。

例如：

> 在兩股反向人流交會前，個體先收窄身體並偏移路徑，通過後恢復原形。

優於：

> 牠使用了 State Switching。

### `morphology_observed`

記錄可見形態、材質、姿態與變化。

### `interaction_observed`

與人、其他 organism、物件、天候、空間邊界的互動。

### `observer_note`

可以保留比較文學性的現場感，但與 evidence fields 分開。

---

## 07. Identification

### `candidate_species`

例如 `SP-TW-001?`。未知可留空。

### `legacy_reference`

migration 前可暫記 `TW-001 / TW-002`。

### `identification_confidence`

- `LOW`
- `MEDIUM`
- `HIGH`

### `alternative_identification`

鼓勵保留第二種解釋，而不是強迫每筆 observation 唯一分類。

---

## 08. Evidence Effect

每筆 observation 必須回答：它對現有 hypothesis 做了什麼？

### `supports`

例如：`STATE_SWITCHING`

### `contradicts`

例如：`TAIPEI_ONLY_RANGE`

### `unexpected_result`

記錄模型沒有預測到的地方。

### `classification_effect`

- `NONE`
- `SUPPORTS`
- `WEAKENS`
- `EXPANDS_RANGE`
- `NARROWS_RANGE`
- `SUGGESTS_POPULATION`
- `SUGGESTS_MERGE`
- `SUGGESTS_SPLIT`
- `REQUIRES_REVIEW`

---

## 09. Media / Creative Evidence

Field Record 可以連結：

- archive illustration
- environmental study
- community illustration
- photograph-like fictional plate
- text vignette

但 media 不自動等於 evidence。必須清楚標示：

- `CANONICAL STUDY`
- `INTERPRETATION`
- `COMMUNITY CONTRIBUTION`
- `NON-CANON FAN WORK`

這讓讀者可以創作，而不需要所有二創都被 Archive 當成物種學事實。

---

## 10. Community Submission

未來讀者投稿建議最少只要求：

1. 大概在哪裡看到？
2. 什麼時間／情境？
3. 那個地方當時怎麼被使用？
4. 牠做了什麼？
5. 你覺得像哪一種？（可選）
6. 有沒有想附上的圖／文字？（可選）

Archive review 再把自然語言整理成 habitat axes。

**不要要求一般讀者先學會 Transition Density / Use Ambiguity 才能投稿。**

---

## 11. Privacy Rule

社群 observation 預設不需要：

- 真實姓名
- 精確住址
- 即時 GPS
- 可辨識私人住宅資訊
- 他人的個資

公開 map 優先使用 neighborhood / habitat patch 粒度。

世界觀的可信度不應建立在侵犯現實隱私上。

---

## 12. Minimal Machine-readable Shape

未來若網站轉為 JSON/YAML，可從以下最小模型開始：

```yaml
observation_id: OBS-TW-0001
record_status: ACCEPTED
place_label: Taipei
locality: null
habitat_patch: transfer-node
location_precision: NEIGHBORHOOD
observed_at: null
daypart: morning
conditions:
  transition_density: HIGH
  use_ambiguity: LOW
  path_dependence: UNKNOWN
observation:
  behavior: ""
  morphology: ""
  interaction: ""
identification:
  candidate_species: null
  legacy_reference: TW-001
  confidence: MEDIUM
evidence:
  supports: []
  contradicts: []
  unexpected_result: null
  classification_effect: NONE
media: []
revision_history: []
```

這是資料結構，不代表現在立刻需要把網站改成 database。

---

## 13. One Record, Many Views

同一筆 `OBS-TW-0001` 未來可以同時出現在：

- Taipei Field Guide
- 某 species page
- habitat research page
- encounter map
- population study
- Archive revision history

**不要為每個頁面複製一份設定。**

網站長期應以 records 為 source of truth，再由不同頁面重新組合。

---

## 14. First Migration Rule

現有 TW-001 / TW-002 的文字設定先不硬拆成大量假 observation。

下一步應只建立少量「reference records」：

- 一筆代表最早 Taipei observation
- 一筆代表最早 Taichung observation
- 一筆代表 Kaohsiung research observation

只有有足夠敘事／研究依據的內容才轉成 record，避免為了資料庫完整度捏造證據。

---

_Last updated: 2026-08-15_