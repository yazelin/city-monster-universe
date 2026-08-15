# City Monster Universe — 創作指南

> `WORLD_BIBLE.md` 定義這個宇宙相信什麼。這份文件定義我們如何創作、評估、記錄與演化每一個物種。

設定文件以繁體中文為主；Archive 系統標籤可保留英文。

## 01. Species ID 與 lived region

`TW-###` 代表發現順序，不代表縣市。行政區只是 Archive 索引，不是物種自然邊界。同一行政區可有多個 species；同一 species 也可能跨行政區。物種可以屬於一個 **lived region / 生活圈**，而不是一座行政城市。

## 02. 每個物種都需要摩擦

正面不等於開朗。每個物種至少要有一個由日常生活造成的矛盾、不方便、笨拙或摩擦。避免所有怪物都變成泛泛的善良、可愛、樂觀、療癒。

## 03. 刻板印象只能是研究入口

名產、地標、口號與觀光意象可作為研究起點，不能成為最後答案。持續往下找到：

`環境 → 重複行為 → 身體痕跡 → 性格`

## 04. Geographic Specificity Test / 地域特異性測試

所有 species 進入 `COLLECTED` 前都必須通過。

### City-name removal test
拿掉城市名稱、地標、名產、Logo、交通工具造型與文字提示後，角色仍須具有具體生活邏輯。

### Relocation test
把同一隻生物想像搬到至少三個其他城市／生活圈。如果幾乎不需修改身體、行為、節奏或棲地邏輯就完全成立，目前抓到的只是 `GENERIC URBAN MORPHOLOGY`，不得強行 `COLLECTED`，應退回 `OBSERVED`、`VISUAL STUDY` 或 `UNDER REVIEW`。

### Combination specificity
「只有這裡才有」不是必要條件。雨、騎樓、機車、陽光、巷弄都可能跨城市存在。真正要找的是：**多種環境與生活力量在某個 lived region 以特殊比例共同塑形後，產生什麼生存策略？**

地域特色來自組合與關係，不來自 icon。

## 05. Cross-species Calibration / 跨物種校準

每建立一個新 species，都反過來檢查舊 species：牠們解決的生活問題是否不同？空間關係是否不同？正面感是否來自不同的行為？身體機制是否真的不同，而非換顏色與配件？

舊角色沒有豁免權。研究方法進化後，`COLLECTED` 可以重新進入 `UNDER REVIEW`。

## 06. Canon Species Schema

正式物種應在 `species/` 擁有 Canon Markdown，包含 Species ID、Region、Status、Version、Habitat、Personality、Core Tension、Body、Weather、Materials、Rhythm、Habits、Human Kindness、Palette、Field Notes、Uncertain Observations、Visual Do/Don't、Community Observations、Revision History。未知就保留未知。

## 07. Visual DNA

優先：不規則輪廓、有觸感表面、克制表情、姿態式擬人、環境累積痕跡、觀察紀錄感、安靜幽默。

避免：企業 mascot、玩具式 3D、generic kawaii、大量配件、地標形身體、觀光 icon 拼貼、永遠笑臉。

## 08. 擬人程度

擬人感來自姿態、重心、猶豫、等待、視線、讓出空間、走路與休息方式，不靠人類服裝解釋人格。

## 09. Evidence States

`CANON`：正式確認。  
`OBSERVATION ACCEPTED`：可信且相容。  
`UNVERIFIED`：有趣但證據不足。  
`DISPUTED`：觀察互相衝突。  
`FOLKLORE`：反覆流傳但 Observer 未確認。

Community contribution 不會自動成為 Canon。

## 10. Observer 可能會看錯

Field Record 不是上帝視角。失敗的 Field Sketch 不必刪除，可標記 `REJECTED AS SPECIES IDENTITY`、`GENERIC URBAN MORPHOLOGY`，成為 Archive 的研究歷史。

## 11. Species 會隨時間改變

區分：`Observation Revision`（理解改變）、`Visual Revision`（描繪改善）、`Species Drift`（物種跟著棲地改變）。

## 12. 視覺資產

`PORTRAIT`：身份辨識。  
`COLLECTED PLATE`：完整圖鑑。  
`FIELD SKETCH`：研究圖，允許最後被否決。  
`ENVIRONMENTAL SIGHTING`：棲地中的目擊。

## 13. 創作流程

1. 觀察地標以外的地方。
2. 收集環境與生活行為痕跡。
3. 判斷研究單位是行政城市還是 lived region。
4. 找出 3–5 個塑形力量。
5. 定義 Core Tension 與小習慣。
6. 找出正面情感來源。
7. 建立材質與氣候語彙。
8. 先寫 `Visual Don'ts`。
9. 製作 `FIELD SKETCH`。
10. 執行 Geographic Specificity Test。
11. 與現有 species 做 Cross-species Calibration。
12. 淘汰 generic / icon-dependent 設計。
13. 收斂 `PORTRAIT`。
14. 成立後才做 `COLLECTED PLATE`。
15. 至少一則 `FIELD NOTE`。
16. 記錄未知與被推翻假說。
17. 通過審查才 `COLLECTED v1`。

## 14. COLLECTED 前檢查

必須確認：像生物而非觀光企劃；能解釋身體成因；至少三種塑形力量；具體 Core Tension；正面感來自行為；不依賴 icon；有居民尺度細節；未知與 Canon 分開；通過 City-name removal test；通過至少三地 Relocation Test；與現有 species 生存策略不同。

若多項答案弱，退回研究階段。

## 15. Repository 原則

Canon 存在 `species/`；網站只是 presentation layer。設定不能只存在 HTML。

## 16. Prompt 原則

Prompt 描述**牠如何生活**，先寫原因、環境、行為與身體反應，不列出城市代表物。

## 17. 卡住時回去觀察

當角色 generic、過度可愛、依賴符號時，不加配件。問牠在不同時間、天氣、等待、獨處、被別人靠近時怎麼使用身體。如果答案同樣適用大量其他城市，繼續研究地域組合。

---

_Last updated: 2026-08-15_
