# Taiwan Field Archive — Status

> 這份文件是專案的單一進度索引。既有 `TW-###` 是 legacy Archive IDs，不等於縣市代表角色，也不再預設一個 ID 必然等於一個正式 species。

## Canonical model

**台灣存在尚未完全被分類的生活環境生物群。城市是觀察窗口，不是物種容器。**

同一城市可出現多種 species；同一 species 可跨城市出現。真正要記錄的是 habitat suitability、encounter likelihood、population variation 與 observation confidence。

詳細規則：`research/ENCOUNTER_MODEL.md`

## Classification flow

`OBSERVATION → HABITAT PATTERN → SPECIES HYPOTHESIS → CROSS-REGION EVIDENCE → CLASSIFICATION`

正式 species 可經歷：

`PROVISIONAL → COLLECTED → UNDER REVIEW → RECLASSIFIED / MERGED / SPLIT`

## Current archive

| Legacy ID | Record | First research field | Species status | Range | Current hypothesis |
|---|---|---|---|---|---|
| TW-001 | Taipei Observation 001 | 台北 | `PROVISIONAL / COLLECTED v1 UNDER REVIEW` | `UNKNOWN / broader than Taipei likely` | State Switching；Adaptive Trajectory 為 behavior；濕／灰綠可能是 Taipei population trait |
| TW-002 | Taichung Observation 002 | 台中 | `PROVISIONAL — FIELD VALIDATION` | `UNKNOWN / broader than Taichung likely` | Edge Reading；Negotiable Body 尚未證明 |
| TW-003 | Kaohsiung Observation 003 | 高雄 | `NO NEW SPECIES HYPOTHESIS` | `N/A` | 高雄 observation 已促成 Path Dependence 研究，但該 axis 已移至 cross-city layer |
| TW-004 | Yilan Observation 004 | 宜蘭 | `NOT RESEARCHED` | `UNKNOWN` | 不預設宜蘭專屬 species |
| TW-005 | Hualien Observation 005 | 花蓮 | `NOT RESEARCHED` | `UNKNOWN` | 不預設花蓮專屬 species |
| TW-006 | Taitung Observation 006 | 台東 | `NOT RESEARCHED` | `UNKNOWN` | 不預設台東專屬 species |

## Important distinctions

**First observed ≠ Species range.**

**First hypothesized in a place ≠ Place-specific ecological mechanism.**

**Frequency ≠ Identity.**

「某 species 在台北很常見」不代表牠是台北種；「台中很少見」也不代表台中沒有牠。

**Habitat patch > administrative boundary.**

同一城市內可以同時存在某 species 的高適生與低適生區域。

## Cross-city research axes

目前研究中的 habitat axes：

- `Transition Density`
- `Use Ambiguity`
- `Path Dependence`

它們都是跨城市研究變數，不等於 species，也不屬於最初提出它們的城市。

詳見：`research/CROSS_CITY_HABITAT_HYPOTHESES.md`

## ID migration direction

未來應拆分：

- `OBS-TW-####` — observation record
- `SP-TW-###` — confirmed / provisional species
- population layer — 同 species 的地方族群

目前先保留 TW-001/TW-002 等 legacy IDs，避免破壞既有 repo、圖片與 GitHub Pages；正式 migration 另做規劃。

## Next work

1. 建立 Taipei / Taichung / Kaohsiung 的 cross-city habitat comparison，而不是各自尋找「專屬概念」。
2. 開始把 observation 與 species 資料結構拆開。
3. 網站長期改為雙入口：`Explore by Place` + `Explore by Species`。
4. Encounter likelihood 暫用 qualitative levels，不假裝有真實百分比。
5. 社群回報未來應能成為 Field Observation，影響 range / population / classification。

_Last updated: 2026-08-15_
