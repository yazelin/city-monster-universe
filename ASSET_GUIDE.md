# Asset Guide — 視覺資產管理

這份文件避免圖片上傳後出現亂碼檔名、用途混淆，以及把 `COLLECTED PLATE` 誤當 `PORTRAIT` 使用。

## Canonical naming

檔名全部使用小寫 ASCII、連字號與版本號：

```text
tw-001-taipei-portrait-v1.png
tw-001-taipei-collected-v1.png
tw-001-taipei-field-sketch-01.png
tw-001-taipei-sighting-01.png
```

格式：

```text
{species-id}-{slug}-{artifact-type}-{version-or-sequence}.{ext}
```

## Artifact types

- `portrait` — 角色本體辨識圖
- `collected` — 完整 Field Guide Plate
- `field-sketch` — 未確認研究圖
- `sighting` — 環境目擊圖

不要因為某張圖已經完成，就拿它替代另一種 artifact type。

## Current GitHub Pages location

目前 GitHub Pages 從 `/docs` 發布，因此網站需要直接使用的圖像暫放：

```text
docs/assets/
```

在未建立自動 build pipeline 前，不額外複製一份相同 binary 到根目錄 `assets/`，避免兩份檔案版本不同步。

未來若改用 build system，再統一遷移為 source assets + generated site assets。

## Upload checklist

上傳前確認：

1. Species ID 正確。
2. artifact type 正確。
3. 檔名只使用小寫英文、數字、`-`。
4. 正式版本使用 `v1`, `v2`；探索稿使用 `01`, `02`。
5. 不覆蓋舊版 Canon 圖；新版本使用新的版本號。
6. 更新對應 `species/*.md` 的 Visual Artifacts。
7. 更新 `ARCHIVE_STATUS.md`。

## Version principle

舊版應保留作為 Archive history，除非檔案本身損壞、重複或錯誤上傳。

版本更新需能說明屬於：

- `Observation Revision`
- `Visual Revision`
- `Species Drift`

_Last updated: 2026-08-15_
