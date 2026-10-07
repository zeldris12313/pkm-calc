// 屬性相剋表
window.TYPE_CHART = {
  "一般": { "岩石": 0.5, "幽靈": 0, "鋼": 0.5 },
  "火": { "火": 0.5, "水": 0.5, "草": 2, "冰": 2, "蟲": 2, "岩石": 0.5, "龍": 0.5, "鋼": 2 },
  "水": { "火": 2, "水": 0.5, "草": 0.5, "地面": 2, "岩石": 2, "龍": 0.5 },
  "電": { "水": 2, "電": 0.5, "草": 0.5, "地面": 0, "飛行": 2, "龍": 0.5 },
  "草": { "火": 0.5, "水": 2, "草": 0.5, "毒": 0.5, "地面": 2, "飛行": 0.5, "蟲": 0.5, "岩石": 2, "龍": 0.5, "鋼": 0.5 },
  "冰": { "火": 0.5, "水": 0.5, "草": 2, "冰": 0.5, "地面": 2, "飛行": 2, "龍": 2, "鋼": 0.5 },
  "格鬥": { "一般": 2, "冰": 2, "毒": 0.5, "飛行": 0.5, "超能力": 0.5, "蟲": 0.5, "岩石": 2, "幽靈": 0, "惡": 2, "鋼": 2, "妖精": 0.5 },
  "毒": { "草": 2, "毒": 0.5, "地面": 0.5, "岩石": 0.5, "幽靈": 0.5, "鋼": 0, "妖精": 2 },
  "地面": { "火": 2, "電": 2, "草": 0.5, "毒": 2, "飛行": 0, "蟲": 0.5, "岩石": 2, "鋼": 2 },
  "飛行": { "電": 0.5, "草": 2, "格鬥": 2, "蟲": 2, "岩石": 0.5, "鋼": 0.5 },
  "超能力": { "格鬥": 2, "毒": 2, "超能力": 0.5, "惡": 0, "鋼": 0.5 },
  "蟲": { "火": 0.5, "草": 2, "格鬥": 0.5, "毒": 0.5, "飛行": 0.5, "超能力": 2, "幽靈": 0.5, "惡": 2, "鋼": 0.5, "妖精": 0.5 },
  "岩石": { "火": 2, "冰": 2, "格鬥": 0.5, "地面": 0.5, "飛行": 2, "蟲": 2, "鋼": 0.5 },
  "幽靈": { "一般": 0, "超能力": 2, "幽靈": 2, "惡": 0.5 },
  "龍": { "龍": 2, "鋼": 0.5, "妖精": 0 },
  "惡": { "格鬥": 0.5, "超能力": 2, "幽靈": 2, "惡": 0.5, "妖精": 0.5 },
  "鋼": { "火": 0.5, "水": 0.5, "電": 0.5, "冰": 2, "岩石": 2, "鋼": 0.5, "妖精": 2 },
  "妖精": { "火": 0.5, "格鬥": 2, "毒": 0.5, "龍": 2, "惡": 2, "鋼": 0.5 }
};

// Champions 寶可夢庫 (第一批次)
window.POKEMON_LIST_PART1 = [
  {
    name: "班基拉", en: "Tyranitar", types: ["岩石", "惡"],
    bs: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
    moves: [
      { name: "岩崩", en: "Rock Slide", type: "岩石", cat: "physical", bp: 75, spread: true },
      { name: "尖石攻擊", en: "Stone Edge", type: "岩石", cat: "physical", bp: 100 },
      { name: "咬碎", en: "Crunch", type: "惡", cat: "physical", bp: 80 },
      { name: "拍落", en: "Knock Off", type: "惡", cat: "physical", bp: 65 },
      { name: "狂舞揮打", en: "Brutal Swing", type: "惡", cat: "physical", bp: 60, spread: true },
      { name: "地震", en: "Earthquake", type: "地面", cat: "physical", bp: 100, spread: true },
      { name: "重踏", en: "Bulldoze", type: "地面", cat: "physical", bp: 60, spread: true },
      { name: "十萬馬力", en: "High Horsepower", type: "地面", cat: "physical", bp: 95 },
      { name: "蠻力", en: "Superpower", type: "格鬥", cat: "physical", bp: 120 },
      { name: "低空踢", en: "Low Kick", type: "格鬥", cat: "physical", bp: 80 },
      { name: "冰凍拳", en: "Ice Punch", type: "冰", cat: "physical", bp: 75 },
      { name: "火焰拳", en: "Fire Punch", type: "火", cat: "physical", bp: 75 },
      { name: "雷電拳", en: "Thunder Punch", type: "電", cat: "physical", bp: 75 },
      { name: "重磅衝撞", en: "Heavy Slam", type: "鋼", cat: "physical", bp: 100 },
      { name: "鐵頭", en: "Iron Head", type: "鋼", cat: "physical", bp: 80 }
    ],
    megas: [
      { name: "超級班基拉 (Mega)", types: ["岩石", "惡"], bs: { hp: 100, atk: 164, def: 150, spa: 95, spd: 120, spe: 71 } }
    ]
  },
  {
    name: "振翼髮", en: "Flutter Mane", types: ["幽靈", "妖精"],
    bs: { hp: 55, atk: 55, def: 55, spa: 135, spd: 135, spe: 135 },
    moves: [
      { name: "月亮之力", en: "Moonblast", type: "妖精", cat: "special", bp: 95 },
      { name: "魔法閃耀", en: "Dazzling Gleam", type: "妖精", cat: "special", bp: 80, spread: true },
      { name: "暗影球", en: "Shadow Ball", type: "幽靈", cat: "special", bp: 80 },
      { name: "力量寶石", en: "Power Gem", type: "岩石", cat: "special", bp: 80 },
      { name: "精神衝擊", en: "Psyshock", type: "超能力", cat: "special", bp: 80 },
      { name: "十萬伏特", en: "Thunderbolt", type: "電", cat: "special", bp: 90 },
      { name: "魔法葉", en: "Magical Leaf", type: "草", cat: "special", bp: 60 }
    ]
  },
  {
    name: "鐵臂膀", en: "Iron Hands", types: ["格鬥", "電"],
    bs: { hp: 154, atk: 140, def: 108, spa: 50, spd: 68, spe: 50 },
    moves: [
      { name: "排水拳", en: "Drain Punch", type: "格鬥", cat: "physical", bp: 75 },
      { name: "近身戰", en: "Close Combat", type: "格鬥", cat: "physical", bp: 120 },
      { name: "瘋狂伏特", en: "Wild Charge", type: "電", cat: "physical", bp: 90 },
      { name: "雷電拳", en: "Thunder Punch", type: "電", cat: "physical", bp: 75 },
      { name: "重踏", en: "Bulldoze", type: "地面", cat: "physical", bp: 60, spread: true },
      { name: "地震", en: "Earthquake", type: "地面", cat: "physical", bp: 100, spread: true },
      { name: "重磅衝撞", en: "Heavy Slam", type: "鋼", cat: "physical", bp: 100 },
      { name: "冰凍拳", en: "Ice Punch", type: "冰", cat: "physical", bp: 75 },
      { name: "火焰拳", en: "Fire Punch", type: "火", cat: "physical", bp: 75 }
    ]
  },
  {
    name: "熾焰咆哮虎", en: "Incineroar", types: ["火", "惡"],
    bs: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
    moves: [
      { name: "閃焰衝鋒", en: "Flare Blitz", type: "火", cat: "physical", bp: 120 },
      { name: "熱風", en: "Heat Wave", type: "火", cat: "special", bp: 95, spread: true },
      { name: "拍落", en: "Knock Off", type: "惡", cat: "physical", bp: 65 },
      { name: "狂舞揮打", en: "Brutal Swing", type: "惡", cat: "physical", bp: 60, spread: true },
      { name: "地獄突刺", en: "Throat Chop", type: "惡", cat: "physical", bp: 80 },
      { name: "近身戰", en: "Close Combat", type: "格鬥", cat: "physical", bp: 120 },
      { name: "排水拳", en: "Drain Punch", type: "格鬥", cat: "physical", bp: 75 },
      { name: "過熱", en: "Overheat", type: "火", cat: "special", bp: 130 },
      { name: "地震", en: "Earthquake", type: "地面", cat: "physical", bp: 100, spread: true }
    ]
  },
  {
    name: "連擊流武道熊師", en: "Urshifu-Rapid-Strike", types: ["格鬥", "水"],
    bs: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
    moves: [
      { name: "水流連打", en: "Surging Strikes", type: "水", cat: "physical", bp: 25, hits: 3, autoCrit: true },
      { name: "近身戰", en: "Close Combat", type: "格鬥", cat: "physical", bp: 120 },
      { name: "排水拳", en: "Drain Punch", type: "格鬥", cat: "physical", bp: 75 },
      { name: "水流噴射", en: "Aqua Jet", type: "水", cat: "physical", bp: 40 },
      { name: "冰凍拳", en: "Ice Punch", type: "冰", cat: "physical", bp: 75 },
      { name: "雷電拳", en: "Thunder Punch", type: "電", cat: "physical", bp: 75 },
      { name: "鐵頭", en: "Iron Head", type: "鋼", cat: "physical", bp: 80 },
      { name: "毒擊", en: "Poison Jab", type: "毒", cat: "physical", bp: 80 }
    ]
  },
  {
    name: "一擊流武道熊師", en: "Urshifu", types: ["格鬥", "惡"],
    bs: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
    moves: [
      { name: "暗冥強擊", en: "Wicked Blow", type: "惡", cat: "physical", bp: 75, autoCrit: true },
      { name: "近身戰", en: "Close Combat", type: "格鬥", cat: "physical", bp: 120 },
      { name: "排水拳", en: "Drain Punch", type: "格鬥", cat: "physical", bp: 75 },
      { name: "突襲", en: "Sucker Punch", type: "惡", cat: "physical", bp: 70 },
      { name: "拍落", en: "Knock Off", type: "惡", cat: "physical", bp: 65 },
      { name: "冰凍拳", en: "Ice Punch", type: "冰", cat: "physical", bp: 75 },
      { name: "毒擊", en: "Poison Jab", type: "毒", cat: "physical", bp: 80 }
    ]
  },
  {
    name: "厄鬼椪 (火灶面具)", en: "Ogerpon-Hearthflame", types: ["草", "火"],
    bs: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    moves: [
      { name: "棘藤棒", en: "Ivy Cudgel", type: "火", cat: "physical", bp: 100 },
      { name: "木槌", en: "Wood Hammer", type: "草", cat: "physical", bp: 120 },
      { name: "青草滑梯", en: "Grassy Glide", type: "草", cat: "physical", bp: 55 },
      { name: "蠻力", en: "Superpower", type: "格鬥", cat: "physical", bp: 120 },
      { name: "尖石攻擊", en: "Stone Edge", type: "岩石", cat: "physical", bp: 100 },
      { name: "拍落", en: "Knock Off", type: "惡", cat: "physical", bp: 65 }
    ]
  },
  {
    name: "厄鬼椪 (水井面具)", en: "Ogerpon-Wellspring", types: ["草", "水"],
    bs: { hp: 80, atk: 120, def: 84, spa: 60, spd: 96, spe: 110 },
    moves: [
      { name: "棘藤棒", en: "Ivy Cudgel", type: "水", cat: "physical", bp: 100 },
      { name: "木槌", en: "Wood Hammer", type: "草", cat: "physical", bp: 120 },
      { name: "青草滑梯", en: "Grassy Glide", type: "草", cat: "physical", bp: 55 },
      { name: "蠻力", en: "Superpower", type: "格鬥", cat: "physical", bp: 120 },
      { name: "尖石攻擊", en: "Stone Edge", type: "岩石", cat: "physical", bp: 100 },
      { name: "拍落", en: "Knock Off", type: "惡", cat: "physical", bp: 65 }
    ]
  }
];

// 將分批名單註冊到全域陣列
window.CHAMPIONS_ALL_POKEMON = window.CHAMPIONS_ALL_POKEMON || [];
window.CHAMPIONS_ALL_POKEMON = window.CHAMPIONS_ALL_POKEMON.concat(window.POKEMON_LIST_PART1);
