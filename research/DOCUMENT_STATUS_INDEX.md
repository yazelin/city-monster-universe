# Taiwan Field Archive — Document Status Index

> **Purpose:** 一眼知道 research 文件現在是規則、working model、protocol、history，還是需要重新審查。

_Last reviewed: 2026-08-15_

## Status vocabulary

- `CANONICAL_CONTROL` — 控制整個研究流程的文件。
- `ACTIVE_WORKING_MODEL` — 目前使用，但可被 evidence 修正。
- `ACTIVE_PROVISIONAL` — 有用的 provisional research，不能當已確認事實。
- `ACTIVE_PROTOCOL` — 目前研究／寫作操作規則。
- `HISTORY` — 保存研究演化，不作 current status source。
- `QUESTION_QUEUE` — 尚未解決問題。
- `REVIEW_NEEDED` — 舊內容可能與 Ledger 有 drift，需要之後逐份校正。

## Canonical control

| File | Status | Role |
|---|---|---|
| `RESEARCH_LEDGER.md` | CANONICAL_CONTROL | 唯一 current research status source |
| `EVIDENCE_AND_CANON_STATUS.md` | CANONICAL_CONTROL | evidence classes / canon levels |
| `SPECIES_HYPOTHESIS_THRESHOLD.md` | CANONICAL_CONTROL | species hypothesis gate |
| `OPEN_QUESTIONS.md` | QUESTION_QUEUE | 下一步研究問題 |
| `RESEARCH_HISTORY.md` | HISTORY | 保存推翻與轉向歷史 |

## Active protocols

| File | Status | Role |
|---|---|---|
| `FIELD_RECORD_SCHEMA.md` | ACTIVE_PROTOCOL | observation data shape |
| `TEXT_ONLY_OBSERVATION_PROTOCOL.md` | ACTIVE_PROTOCOL | morphology lock / text-first rules |
| `INDIVIDUAL_TRACKING_WITHOUT_MORPHOLOGY.md` | ACTIVE_PROTOCOL | trace identity without appearance |
| `BLIND_SIGNATURE_PROTOCOL.md` | ACTIVE_PROTOCOL | trace bias control |

## Active models

| File | Status | Important limitation |
|---|---|---|
| `ENCOUNTER_MODEL.md` | ACTIVE_WORKING_MODEL | variable status must follow Ledger |
| `CROSS_CITY_HABITAT_HYPOTHESES.md` | ACTIVE_PROVISIONAL | mechanisms/axes ≠ species |
| `CLIMATE_EXPOSURE_AXIS.md` | ACTIVE_PROVISIONAL | candidate axis, unconfirmed |
| `CROSS_CITY_ENCOUNTER_MATRIX.md` | ACTIVE_PROVISIONAL | predictions, not measured frequency |

## Review-needed research

`CROSS_CITY_ENCOUNTER_MATRIX.md`, `FIELD_RECORD_SCHEMA.md`, `TEXT_ONLY_OBSERVATION_PROTOCOL.md`, `INDIVIDUAL_TRACKING_WITHOUT_MORPHOLOGY.md`, `BLIND_SIGNATURE_PROTOCOL.md`, `CLIMATE_EXPOSURE_AXIS.md` 目前內容方向仍可用，但尚未全部加上統一 front matter。

這不代表它們失效；只代表 metadata migration 尚未完成。

## Field Notes

`field-notes/FN-001` 至 `FN-007`：

Current retrospective evidence class: `LIT + SIM`

它們是創作／模型測試，不是七筆自然 field observations。未來應逐篇補 metadata，但不需要重寫內容來假裝成 OBS。

## Legacy species / observation materials

`species/TW-001-*`, `species/TW-002-*`, 舊 TW 編號相關內容：`LEGACY / REINTERPRETATION REQUIRED`

`observations/TW-003-*`: 保留 observation history；不得讀成已確認第三 species。

既有 visual plates：`EARLY INTERPRETATION / NOT CURRENT MORPHOLOGY CANON`

## Migration rule

每次整理舊文件時：

1. 不偷偷改寫研究歷史。
2. 先加 status metadata / warning。
3. 若內容與 Ledger 衝突，明確指出 superseded section。
4. 不因格式整理把 provisional claim 升級成 canon。
5. 更新本 Index。

## Source-of-truth order

遇到矛盾時依序查看：

1. `RESEARCH_LEDGER.md`
2. `EVIDENCE_AND_CANON_STATUS.md`
3. `SPECIES_HYPOTHESIS_THRESHOLD.md`
4. relevant active protocol/model
5. Field Notes
6. Legacy material

這個順序防止舊角色頁或早期圖像反過來覆蓋後來研究。
