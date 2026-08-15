const records = [
  {
    id: 'OBS-TW-0001',
    legacy: 'TW-001',
    title: '台北初次觀察',
    place: 'Taipei',
    hypothesis: 'STATE SWITCHING',
    summary: '在高轉換的都市移動環境中，個體會讀取周遭軌跡，並在規則改變前調整自己的狀態。',
    trace: '灰綠、濕水泥與乾濕交界目前只視為 Taipei population trait 候選。',
    status: 'ACCEPTED · SPECIES HYPOTHESIS PROVISIONAL',
    tone: '#68736b',
    href: 'taipei.html'
  },
  {
    id: 'OBS-TW-0002',
    legacy: 'TW-002',
    title: '台中初次觀察',
    place: 'Taichung',
    hypothesis: 'EDGE READING',
    summary: '個體似乎對同一塊空間正在變成什麼用途高度敏感，會隨 passage、parking、commerce、rest 等狀態調整位置。',
    trace: '低矮、圓潤或角落生物般的外型尚未獲得 species evidence。',
    status: 'REVIEWED · MORPHOLOGY UNPROVEN',
    tone: '#8c806b'
  },
  {
    id: 'OBS-TW-0003',
    legacy: 'TW-003',
    title: '高雄研究觀察',
    place: 'Kaohsiung',
    hypothesis: 'PATH DEPENDENCE RESEARCH',
    summary: '研究舊 infrastructure 的方向、尺度與邊界是否仍在塑造今天的生活；目前這是一個跨城市 habitat axis，不是高雄 species。',
    trace: '尚無第三 species hypothesis，也禁止以港口、貨櫃、陽光或工業感直接推導 morphology。',
    status: 'RESEARCH · NO SPECIES HYPOTHESIS',
    tone: '#8b7968'
  }
];

const cards = document.querySelector('#cards');

records.forEach(record => {
  const el = document.createElement('article');
  el.className = 'card' + (record.href ? ' active' : '');
  el.style.setProperty('--tone', record.tone);
  el.innerHTML = `
    <span class="id">${record.id}</span>
    <h3>${record.title}</h3>
    <span class="en">${record.place} · legacy ${record.legacy}</span>
    <p class="personality"><strong>${record.hypothesis}</strong><br>${record.summary}</p>
    <p class="trace">研究註記：${record.trace}</p>
    <span class="status">STATUS · ${record.status}</span>
    ${record.href ? `<a class="card-link" href="${record.href}">OPEN FIELD RECORD →</a>` : ''}
  `;
  cards.appendChild(el);
});