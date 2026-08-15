# Taiwan Field Archive — Evidence & Canon Status System v1.0

> 目的：清楚區分「創作材料」「研究工具」「觀察資料」「暫時假說」與「目前可依賴的世界觀」。

## 01. Evidence classes

### `LIT` — Literary Observation
為了測試語氣、感受、可能行為而寫的文學目擊。

- 可以啟發 hypothesis。
- 不能單獨提升 hypothesis confidence。
- 不得偽裝成真實採集資料。

### `SIM` — Constructed / Simulation Test
刻意設計的思想實驗、四格 habitat test、blind bundle 等。

- 用來檢查模型是否自洽、是否能做不同預測。
- 可以證明「概念可分離」。
- 不能證明自然世界真的如此。

### `OBS` — Field Observation
具有實際 observation provenance 的紀錄。

最低要求：
- locality precision 可標示為粗略，不要求 GPS；
- time precision 誠實標示；
- observer 知道哪些是看到、哪些是推論；
- habitat conditions 有基本紀錄；
- unknown 欄位允許留白。

### `REP` — Independent Replication
獨立 observation 在不同時間／observer／patch 重複支持同一 prediction。

這是 hypothesis 升級的重要 evidence。

### `NEG` — Negative / Contradictory Evidence
預測應出現但沒有出現，或 observation 與現有模型衝突。

NEG 不應被刪掉；它與 positive evidence 同等重要。

### `LEG` — Legacy Material
早期角色圖、舊分類、舊城市人格、舊網頁敘述。

保留歷史，但不自動代表 current canon。

---

## 02. Canon status

Evidence class 和 canon status 是兩回事。

一篇 `OBS` 可能是真實 observation，但它的 interpretation 仍然只是 hypothesis。

### `CANON-A` — Operational Canon
目前足以指導整個專案，不應隨意違反。

目前例子：
- city ≠ species boundary
- first observed ≠ range
- morphology locked
- Archive 可以犯錯與 reclassify

### `CANON-B` — Working Model
目前最好用的模型，但仍預期會被修正。

例如 active habitat axes / behavioral mechanisms。

### `PROVISIONAL`
有理由保留，但 evidence 尚弱。

### `OPEN`
多個模型仍競爭，不能選邊。

### `REJECTED`
已被目前框架淘汰，但保留歷史。

### `UNKNOWN`
沒有足夠資訊，且不應猜。

---

## 03. Every research file should declare itself

新文件頂部至少標示：

```yaml
record_type: LIT | SIM | OBS | REP | NEG | LEG
canon_effect: NONE | PROPOSED | LEDGER_UPDATED
morphology_status: LOCKED
```

若同一文件混合文學與研究註解，要明確分段，不讓讀者誤以為文學細節就是 evidence。

---

## 04. Interpretation ladder

不要從「看到一次」直接跳到 species。

建議順序：

`event → observation → recurring pattern → mechanism hypothesis → population pattern → species hypothesis → morphology study`

任何階段都可以退回。

---

## 05. Promotion rule

只有 `LIT` / `SIM`：
- 可以建立問題。
- 可以建立 prediction。
- 不足以確認自然分布、individual、population 或 species。

`OBS`：
- 可以開始支持／削弱 prediction。

`REP` + controls + competing explanations：
- 才適合提升 working confidence。

`NEG`：
- 必須納入升降級判斷。

---

## 06. No false precision

如果沒有資料，不寫：
- 假時間
- 假座標
- 假天氣
- 假 observer count
- 假 encounter frequency

使用：
- `unknown`
- `approximate`
- `narrative-only`
- `constructed test`

Archive 的可信度來自知道自己不知道什麼。

---

## 07. Website consequence

公開網站未來應能區分：

- `FIELD NOTE` — 文學／觀察敘事
- `OBSERVATION RECORD` — 正式紀錄
- `WORKING HYPOTHESIS` — Archive interpretation
- `LEGACY INTERPRETATION` — 早期圖像／分類

不要全部混成「怪物百科」。

---

## 08. Current retrospective classification

目前 FN-001 ~ FN-007 主要應視為：

`LIT + SIM`

它們非常有價值，因為建立了可測試的研究問題；但它們不是七筆真實 field observations。

因此它們不能單獨證明：
- species existence
- species range
- individual identity
- encounter frequency

這個限制從現在開始明文保存。

---

_Last updated: 2026-08-15_