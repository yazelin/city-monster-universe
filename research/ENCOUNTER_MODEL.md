---
document_status: ACTIVE_WORKING_MODEL
canon_status: CANON-B
record_type: RESEARCH_MODEL
supersedes: one-city-one-monster encounter assumptions
canonical_status_source: research/RESEARCH_LEDGER.md
last_status_review: 2026-08-15
---

# Taiwan Field Archive — Encounter Model

> **STATUS NOTE:** 本文件仍有效，但細節若與 `RESEARCH_LEDGER.md` 衝突，以 Ledger 為準。Climate Exposure 目前只到 `CANDIDATE CROSS-CITY AXIS`，不得因本文件列入模型就視為已確認。

> **城市不是怪物的盒子，而是觀察怪物的窗口。**

這份文件定義 Field Archive 如何描述「某種生物在哪裡比較可能出現」。它把城市、species、population 與 observation 分開，避免重新滑回「一城市一怪物」。

## 01. Canonical Ecological Model

目前採用的基本世界模型是：

> **台灣存在一個尚未完全被分類的都市／生活環境生物群。不同 species 的分布由 habitat conditions 決定；不同城市、街區、時間、季節與氣候只會改變 encounter likelihood、population traits 與可觀察行為。**

因此：
- 一座城市可以同時存在許多 species。
- 同一 species 可以在許多城市出現。
- 同一城市內不同街區的 encounter likelihood 可以差非常多。
- 同一 species 在不同地方可能形成不同 population morphology。
- 「尚未目擊」不等於「不存在」。
- First observed location 只是 Archive history，不是物種所有權。

## 02. Place View vs Species View

### PLACE VIEW / 地方視角
> **在這個地方，我可能遇到誰？**

### SPECIES VIEW / 物種視角
> **這個 species 可能在哪裡出現？在不同地方有什麼差異？**

兩個 view 使用同一批 observation records，只是索引方式不同。

## 03. Encounter Likelihood

暫定五級：
- `★★★★★ — VERY LIKELY`
- `★★★★☆ — LIKELY`
- `★★★☆☆ — POSSIBLE`
- `★★☆☆☆ — UNCOMMON`
- `★☆☆☆☆ — UNLIKELY`

星等只代表 Archive prediction / confidence expression，不是假統計機率；沒有 observation data 前不寫百分比。

## 04. Habitat variables

工作模型可考慮：
- Transition Density — ACTIVE
- Use Ambiguity — ACTIVE
- Path Dependence — ACTIVE RESEARCH
- Climate Exposure — CANDIDATE AXIS
- Material Persistence — shaping variable
- Density — shaping variable
- Time Variability — shaping variable

任何 variable 的最新地位由 `RESEARCH_LEDGER.md` 決定。

## 05. Frequency ≠ Identity

一個 species 在某城市常見，不代表牠屬於那座城市；真正研究單位應下鑽到 habitat patch。

## 06. Observation ID ≠ Species ID ≠ Trace ID

- Observation: `OBS-TW-0001`
- Species: `SP-TW-001`（只有通過 species threshold 後才建立）
- Trace: `TRACE-...`（可能同一 individual 的研究代碼，不等於確認個體）

既有 `TW-001 / TW-002 / TW-003` 保留為 legacy IDs，等待未來 migration。

## 07. Classification Can Merge and Split

多個 observations 可以最後指向同一 species；早期被視為同一 species 的 observations 也可以被拆分。Archive 保留 revision history，不擦掉錯誤。

## 08. Evidence status

文學 Field Notes 與 constructed tests 不等於正式 field observations。證據等級依 `EVIDENCE_AND_CANON_STATUS.md`：`LIT / SIM / OBS / REP / NEG / LEG`。

## 09. Current interpretation of legacy IDs

- `TW-001`：Taipei research 中形成的 legacy organism hypothesis；species status unresolved。
- `TW-002`：Taichung research 中形成的 legacy organism hypothesis；species status unresolved。
- `TW-003`：Kaohsiung observation set；目前沒有第三 species hypothesis。

## 10. Core Rule

> **我現在是在描述一個地方，還是在描述一個 species？**

> **我看到的是牠屬於這裡，還是牠只是比較容易在這裡被遇見？**

_Last content/status review: 2026-08-15_