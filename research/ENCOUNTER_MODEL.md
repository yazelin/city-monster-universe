# Taiwan Field Archive — Encounter Model

> **城市不是怪物的盒子，而是觀察怪物的窗口。**

這份文件定義 Field Archive 如何描述「某種生物在哪裡比較可能出現」。它把城市、species、population 與 observation 分開，避免重新滑回「一城市一怪物」。

---

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

---

## 02. Place View vs Species View

Archive 必須同時支援兩種閱讀方式。

### PLACE VIEW / 地方視角

問題：

> **在這個地方，我可能遇到誰？**

例如 Taipei Field Guide 不應只有一隻「台北怪物」，而應列出目前在台北不同 habitat patch 中觀察到／推測可能出現的 species、頻率與 population notes。

### SPECIES VIEW / 物種視角

問題：

> **這個 species 可能在哪裡出現？在不同地方有什麼差異？**

Species page 應呈現 habitat preference、confirmed observations、suspected range、local populations 與 uncertainty。

兩個 view 使用同一批 observation records，只是索引方式不同。

---

## 03. Encounter Likelihood / 目擊可能性

Archive 不把行政區直接當 species range。更重要的是 habitat patch 的 encounter likelihood。

暫定五級：

- `★★★★★ — VERY LIKELY`：條件高度符合，反覆目擊可預期
- `★★★★☆ — LIKELY`：多數條件符合
- `★★★☆☆ — POSSIBLE`：條件部分符合，需更多 observation
- `★★☆☆☆ — UNCOMMON`：核心條件偏弱，只可能局部／短暫出現
- `★☆☆☆☆ — UNLIKELY`：作為 negative-control candidate

重要：星等是 **Archive prediction / confidence expression**，不是假裝存在真實統計機率。

在沒有 observation data 前，不寫百分比。

---

## 04. What Determines Encounter Likelihood

暫定模型：

`Encounter likelihood = habitat suitability × time condition × population presence × observation confidence`

其中 habitat suitability 可由跨城市 axes 描述，例如：

- Transition Density
- Use Ambiguity
- Path Dependence
- Climate Exposure
- Material Persistence
- Density
- Time Variability

未來可以增加 axis，但每個 axis 必須能被 observation / falsification 使用，不能只是城市形容詞。

---

## 05. Frequency ≠ Identity

一個 species 在台北很常見，不代表牠是「台北種」。

一個 species 在台中很少見，也不代表台中沒有牠。

例如未來可能出現：

| Species | Taipei | Taichung | Kaohsiung |
|---|---:|---:|---:|
| SP-A | common | occasional | patchy |
| SP-B | occasional | common | common |
| SP-C | rare | local | common |

但這張 city-level table 只能作為入口。真正研究應下鑽到 habitat patch。

---

## 06. Habitat Patch Is the Real Unit

比「台北」更有意義的 observation unit 可能是：

- 高轉換轉乘節點
- 低轉換住宅巷弄
- 市場／店面／停車共用 edge
- 河岸風口
- 山城坡地聚落
- 舊 infrastructure corridor
- 夜間才出現的商業 threshold

因此同一城市可以同時對某 species 有：

`★★★★★` habitat 與 `★☆☆☆☆` habitat。

城市平均值不能取代 patch-level observation。

---

## 07. Observation ID ≠ Species ID

目前 `TW-001 / TW-002 / ...` 是早期 Archive 編號，歷史上混合了 observation 與 classification。後續應逐步拆分：

### Observation ID

建議格式：`OBS-TW-0001`

代表一次可定位、可描述 habitat condition 的 observation record。

### Species ID

建議格式：`SP-TW-001`

只有在多個 observation 支持同一穩定 organism mechanism 後才建立。

### Population ID

若需要，可使用：`POP-SP-TW-001-TP` 等工作代碼，但地方代碼只是索引，不代表行政區就是生態邊界。

重要：**現在不立刻重編既有 TW-001/TW-002，以免破壞 repo 與網站歷史。** 先保留 legacy IDs，等 migration plan 完成後再處理。

---

## 08. Classification Can Merge and Split

多個 observations 可以最後指向同一 species。

例如：

`OBS-TW-0001 ─┐`
`OBS-TW-0047 ─┼→ SP-TW-001`
`OBS-TW-0132 ─┘`

反過來，早期以為是同一 species 的 observations，也可能因新 evidence 被拆成兩個 species。

Archive 必須保留 revision history，而不是把舊錯誤擦掉。

---

## 09. Community Field Records

未來社群參與不只是留言「喜歡這隻」。讀者可以提交：

- 在哪個地方看到疑似 species
- 時間／天氣／daypart
- habitat condition
- 當時 behavior
- 與既有 morphology 是否一致
- 照片式二創／文字 observation
- 對 species identification 的信心

狀態可以是：

`UNVERIFIED → REVIEWED → ACCEPTED / DISPUTED → CLASSIFICATION UPDATED`

這使讀者真的可以影響 encounter map、population study，甚至觸發 species reclassification。

---

## 10. Website Information Architecture

長期網站應至少有：

### Explore by Place

台北／台中／高雄……不是角色頁，而是 Field Guide：

- observed species
- likely species
- habitat patches
- local population notes
- recent sightings

### Explore by Species

- species mechanism
- habitat preference
- confirmed / suspected distribution
- population differences
- observation history
- classification confidence

### Observations

- individual Field Records
- accepted / disputed status
- location + habitat conditions
- community submissions

---

## 11. Current Interpretation of Legacy IDs

- `TW-001`：最早在 Taipei research 中形成的 organism hypothesis；不是 Taipei ownership。
- `TW-002`：最早在 Taichung research 中形成的 organism hypothesis；不是 Taichung ownership。
- `TW-003`：Kaohsiung observation set；目前甚至還沒有第三 species hypothesis。

這些 legacy IDs 是 Archive 歷史，不應再被當成「城市怪物編號」。

---

## 12. Core Rule

如果未來再次混亂，只問兩個問題：

> **我現在是在描述一個地方，還是在描述一個 species？**

以及：

> **我看到的是牠屬於這裡，還是牠只是比較容易在這裡被遇見？**

---

_Last updated: 2026-08-15_