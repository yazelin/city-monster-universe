# City Monster Universe / 城市小怪物宇宙

> **Collect the creatures that places leave behind.**

城市小怪物宇宙是一個持續收集「地方如何在生物身上留下生活痕跡」的角色與 Field Archive 計畫。

牠們不是城市吉祥物，也不是行政區擬人化。牠們只是長期生活在某種環境裡，逐漸被雨、陽光、濕度、材質、交通、生活節奏、記憶與陌生人之間很小的善意塑造成現在的樣子。

第一眼，應該先看到一隻有性格的奇怪生物；第二眼，才慢慢發現牠為什麼會在這個地方長成這樣。

## 核心原則

> **不要畫一座城市會長什麼樣子。  
> 去畫一個在那裡生活很久的生物，最後會留下什麼痕跡。**

- 地標不是角色設計。
- 名產與城市 icon 只能是研究入口，不能是最後答案。
- 正面不等於永遠開心；角色可以疲倦、安靜、笨拙或有點陰鬱。
- 每個 species 都需要生活造成的矛盾與摩擦。
- 行政區不是物種邊界。
- 同一地區可以存在多個 species；同一 species 也可以跨越城市邊界。
- `COLLECTED` 代表「目前有足夠觀察形成暫定描繪」，不代表永遠完成。
- Field Observer 可能看錯，舊版本與修正都是 Archive 的一部分。

完整規則請以 [`WORLD_BIBLE.md`](WORLD_BIBLE.md) 與 [`CREATION_GUIDE.md`](CREATION_GUIDE.md) 為準。

## Taiwan Field Archive

| ID | 暫用名稱 | 狀態 |
|---|---|---|
| TW-001 | 台北種 Taipei | `COLLECTED v1` |
| TW-002 | 台中種 Taichung | `SEED` |
| TW-003 | 高雄種 Kaohsiung | `SEED` |
| TW-004 | 宜蘭種 Yilan | `SEED` |
| TW-005 | 花蓮種 Hualien | `SEED` |
| TW-006 | 台東種 Taitung | `SEED` |

最新進度以 [`ARCHIVE_STATUS.md`](ARCHIVE_STATUS.md) 為準。

## Repository map

```text
README.md                 專案入口
WORLD_BIBLE.md            世界觀 Canon 與共同規則
CREATION_GUIDE.md         實際創作、審核與版本規範
ARCHIVE_STATUS.md         全物種進度索引
ASSET_GUIDE.md            圖像命名、版本與存放規則

species/                  正式 Canon Species Records
  TW-001-taipei.md

field-notes/              Observer 筆記與尚未分類的觀察
community/                未來 Field Observations 規則
prompts/                  生成與探索用 prompt

world/                    早期研究文件；內容可能早於現行 Canon
templates/                早期模板；新物種以 Creation Guide schema 為準
monsters/                 早期角色資料；逐步遷移至 species/

 docs/                     GitHub Pages 唯一發布來源
  assets/                  網站目前直接使用的視覺資產
```

### Canon priority

如果舊文件與新規則衝突，依以下順序判定：

1. `species/*.md` — 個別物種 Canon
2. `WORLD_BIBLE.md` — 世界共同規則
3. `CREATION_GUIDE.md` — 創作與版本規範
4. `ARCHIVE_STATUS.md` — 當前進度
5. `world/`, `monsters/`, `templates/` — 歷史研究資料，不覆蓋現行 Canon

## Visual artifact types

每個物種的圖像用途分開管理：

- `PORTRAIT` — 怪物本體辨識圖
- `COLLECTED PLATE` — 完整 Field Guide 圖鑑
- `FIELD SKETCH` — 未確認研究圖
- `ENVIRONMENTAL SIGHTING` — 棲地中的目擊畫面

詳細檔名與版本規則見 [`ASSET_GUIDE.md`](ASSET_GUIDE.md)。

## Community

未來讀者不是單純「評論角色」，而是補充 Field Record。

Community evidence 可標記為 `OBSERVATION ACCEPTED`、`UNVERIFIED`、`DISPUTED`、`FOLKLORE`；社群投稿不會自動成為 Canon。

規則見 [`community/GUIDELINES.md`](community/GUIDELINES.md)。

## GitHub Pages

目前 Pages 使用 `/docs` 作為發布來源。

- Archive: https://yazelin.github.io/city-monster-universe/
- TW-001: https://yazelin.github.io/city-monster-universe/taipei.html

`site/` 是早期網站副本，不是目前部署來源；不要在兩邊同時修改。

## 開發原則

1. Canon 先寫進 `species/`，網站只是 presentation layer。
2. 不讓重要設定只存在聊天紀錄或 HTML。
3. 新圖像依 `ASSET_GUIDE.md` 命名。
4. 每次正式狀態或版本變更同步更新 `ARCHIVE_STATUS.md`。
5. 不為了填滿欄位而發明未知資訊。
6. 發現矛盾時保留 Revision history，而不是偷偷覆蓋過去。

Taiwan Field Archive 是第一個觀察區域，不是宇宙的終點。但在這裡被看得足夠仔細以前，我們不急著擴張。
