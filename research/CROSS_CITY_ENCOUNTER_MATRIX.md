# Cross-City Encounter Matrix — v0.1

> 目的：第一次把 Taipei / Taichung / Kaohsiung 放在同一套 habitat model 下比較。這不是城市排名，也不是替城市分配怪物。

## Reading rule

**城市只是 observation container；habitat patch 才是 encounter prediction 的主要單位。**

目前不使用百分比。所有星等只代表研究預測，需要未來 Field Records 支持或推翻。

---

## 01. Cross-city axes

目前使用三個主要跨城市 axis：

- `Transition Density` — 短時間／短距離內切換行動規則的頻率
- `Use Ambiguity` — 同一空間用途需要重新協商的程度
- `Path Dependence` — 過去用途／結構仍限制現在生活選項的程度

輔助 shaping variables：Climate Exposure、Material Persistence、Density、Time Variability。

---

## 02. Important: do not score whole cities

禁止寫：

- Taipei = Transition ★★★★★
- Taichung = Ambiguity ★★★★★
- Kaohsiung = Path Dependence ★★★★★

因為這會重新製造「一城市一概念」。

正確方式是每座城市都尋找三種 axis 的 High / Low habitat patches。

---

## 03. Taipei research grid

### High Transition candidates

大型車站／轉乘節點、捷運與公車／步行／自行車連續切換區。

**TW-001 prediction:** high encounter likelihood.

### Low Transition controls

長時間維持同一生活模式、低轉乘需求的住宅型街巷。

**TW-001 prediction:** substantially lower.

### High Use Ambiguity candidates

市場邊緣、老街區住商混合 threshold、騎樓／店前／停車／通行共用空間。

**TW-002 prediction:** should be possible even though first observed in Taichung.

### Low Use Ambiguity controls

用途高度固定、通行邊界清楚、時間變化小的空間。

### High Path Dependence candidates

鐵路／基礎設施轉型後仍留下 corridor、街廓、尺度或土地形狀限制的區域。

**Key question:** present behavior 是否真的需要 past constraint 才能解釋？

---

## 04. Taichung research grid

### High Transition candidates

大型車站、轉乘與多模式交通交會處。

**Important:** 如果 TW-001 mechanism 成立，牠理應也能在台中合適 patch 出現。

### Low Transition controls

低轉乘、規則長時間穩定的住宅／生活街區。

### High Use Ambiguity candidates

住商混合 edge、騎樓、店前、停車與通行隨時間重新協商的空間。

**TW-002 prediction:** high encounter likelihood.

### Low Use Ambiguity controls

用途單一且 boundary 清楚的 passage。

### High Path Dependence candidates

舊鐵道 corridor 轉為綠空、步行、自行車與公共空間的區域。

**Important:** 這證明 Path Dependence 不屬於高雄。

---

## 05. Kaohsiung research grid

### High Transition candidates

捷運／輕軌／公車／步行等轉乘節點。

**TW-001 prediction:** possible/high in suitable patches.

### Low Transition controls

低轉乘、長時間單一規則的生活區。

### High Use Ambiguity candidates

騎樓、住商 edge、停車／通行／商業重疊空間。

**TW-002 prediction:** possible/high in suitable patches.

### Low Use Ambiguity controls

用途固定、boundary 清楚的空間。

### High Path Dependence candidates

舊臨港線、港區鐵道與其他舊 infrastructure 轉型後仍塑造新交通／公共生活的 corridor。

**Important:** 這是 observation-rich field，不是 Kaohsiung-only ecology。

---

## 06. First encounter predictions

### TW-001 / State Switching hypothesis

| Habitat | Taipei | Taichung | Kaohsiung |
|---|---|---|---|
| High Transition patch | ★★★★★ | ★★★★☆ | ★★★★☆ |
| Low Transition control | ★☆☆☆☆ | ★☆☆☆☆ | ★☆☆☆☆ |

**Prediction:** city name should matter less than Transition Density.

如果未來低-transition Taipei 比 high-transition Taichung 更容易出現 TW-001，現有 model 需要修正。

### TW-002 / Edge Reading hypothesis

| Habitat | Taipei | Taichung | Kaohsiung |
|---|---|---|---|
| High Use Ambiguity patch | ★★★★☆ | ★★★★★ | ★★★★☆ |
| Low Ambiguity control | ★☆☆☆☆ | ★☆☆☆☆ | ★☆☆☆☆ |

**Prediction:** city name should matter less than Use Ambiguity.

如果 TW-002 只在 Taichung 出現，而 Taipei / Kaohsiung 的高度相似 habitat 完全沒有，必須尋找缺失 variable，而不能直接說「因為牠是台中種」。

---

## 07. Population variation prediction

即使同 species 跨城市成立，也不預期長得完全一樣。

### Possible Taipei shaping pressures

高濕、雨水、遮蔽／暴露切換、密集人工表面等可能留下 population morphology，但需逐項驗證。

### Possible Taichung shaping pressures

材質、日照、街道尺度、住商 edge 使用方式與不同時間節奏可能形成 local variation；禁止先把「慢」或「可愛角落感」當城市人格。

### Possible Kaohsiung shaping pressures

強日照、熱、海風／鹽分、開放尺度與港區材質可能形成 local variation；禁止把貨櫃、船、吊車直接變成 anatomy。

**Species mechanism should persist; population surface may change.**

---

## 08. Strongest falsification test

目前最重要的不是找到更多「符合」案例，而是以下交叉比較：

1. `High Transition Taichung` vs `Low Transition Taipei`
2. `High Use Ambiguity Taipei` vs `Low Ambiguity Taichung`
3. `High Use Ambiguity Kaohsiung` vs `High Use Ambiguity Taichung`
4. 相似 Path Dependence habitat 在 Taipei / Taichung / Kaohsiung 是否產生相似 behavior

如果 habitat 比 city 更能預測 organism，支持 habitat-driven taxonomy。

如果 city 仍有強烈殘差，代表我們漏掉 climate、material、history、culture、human habit 或其他 ecological variable。

---

## 09. What we are NOT claiming yet

目前不能說：

- TW-001 已確認存在於三城市
- TW-002 已確認存在於三城市
- 星等是真實出現率
- Path Dependence 已對應某 species
- 三城市已研究完成

目前只是建立**可被未來 observation 推翻的 prediction framework**。

---

## 10. Next Field Record Format

下一批 observation 不再以「城市角色研究」開始，而使用：

`PLACE → PATCH → AXIS PROFILE → EXPECTED ORGANISM → OBSERVED BEHAVIOR → SUPPORT / CONTRADICTION`

Example:

`Taichung → high-transition station patch → Transition HIGH / Ambiguity LOW → expect TW-001-like behavior → [observation] → support/contradict`

這會成為未來真正 Field Records 的基本資料結構。

---

## 11. What this means for the story

讀者未來可以在 Taipei page 發現不只一種 organism，也可能在 Taichung page 再遇到曾在 Taipei 看過的 species。

重逢不是重複內容，而是新的問題：

> **牠為什麼也在這裡？牠在這裡長得一樣嗎？**

這會讓城市探索從「收集城市代表」轉成真正的生態觀察。

---

_Last updated: 2026-08-15_