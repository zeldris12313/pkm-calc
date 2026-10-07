// 屬性剋制倍率表
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

// Champions 寶可夢數據庫 (第一批核心)
window.POKEMON_DB = [
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
      { name: "精神衝擊", en: "Psyshock", type: "超能力", cat: "special", bp: 80 },
      { name: "力量寶石", en: "Power Gem", type: "岩石", cat: "special", bp: 80 },
      { name: "十萬伏特", en: "Thunderbolt", type: "電", cat: "special", bp: 90 },
      { name: "魔法葉", en: "Magical Leaf", type: "草", cat: "special", bp: 60 },
      { name: "黑夜魔影", en: "Night Shade", type: "幽靈", cat: "special", bp: 50 }
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
      { name: "重磅衝撞", en: "Heavy Slam", type: "鋼", cat: "physical", bp: 100 },
      { name: "冰凍拳", en: "Ice Punch", type: "冰", cat: "physical", bp: 75 },
      { name: "火焰拳", en: "Fire Punch", type: "火", cat: "physical", bp: 75 },
      { name: "地震", en: "Earthquake", type: "地面", cat: "physical", bp: 100, spread: true }
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
      { name: "近身戰", en: "Close Combat", type: "格鬥", cat: "physical", bp: 120 },
      { name: "排水拳", en: "Drain Punch", type: "格鬥", cat: "physical", bp: 75 },
      { name: "地獄突刺", en: "Throat Chop", type: "惡", cat: "physical", bp: 80 },
      { name: "地震", en: "Earthquake", type: "地面", cat: "physical", bp: 100, spread: true },
      { name: "過熱", en: "Overheat", type: "火", cat: "special", bp: 130 }
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
      { name: "意念頭錘", en: "Zen Headbutt", type: "超能力", cat: "physical", bp: 80 },
      { name: "嬉鬧", en: "Play Rough", type: "妖精", cat: "physical", bp: 90 },
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
  },
  {
    name: "土地雲 (靈獸)", en: "Landorus-Therian", types: ["地面", "飛行"],
    bs: { hp: 89, atk: 145, def: 90, spa: 105, spd: 80, spe: 91 },
    moves: [
      { name: "地震", en: "Earthquake", type: "地面", cat: "physical", bp: 100, spread: true },
      { name: "大地之力", en: "Earth Power", type: "地面", cat: "special", bp: 90 },
      { name: "岩崩", en: "Rock Slide", type: "岩石", cat: "physical", bp: 75, spread: true },
      { name: "尖石攻擊", en: "Stone Edge", type: "岩石", cat: "physical", bp: 100 },
      { name: "急速折返", en: "U-turn", type: "蟲", cat: "physical", bp: 70 },
      { name: "飛天", en: "Fly", type: "飛行", cat: "physical", bp: 90 },
      { name: "熱風", en: "Heat Wave", type: "火", cat: "special", bp: 95, spread: true },
      { name: "污泥波", en: "Sludge Wave", type: "毒", cat: "special", bp: 95, spread: true }
    ]
  },
  {
    name: "巨金怪", en: "Metagross", types: ["鋼", "超能力"],
    bs: { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 },
    moves: [
      { name: "彗星拳", en: "Meteor Mash", type: "鋼", cat: "physical", bp: 90 },
      { name: "鐵頭", en: "Iron Head", type: "鋼", cat: "physical", bp: 80 },
      { name: "子彈拳", en: "Bullet Punch", type: "鋼", cat: "physical", bp: 40 },
      { name: "意念頭錘", en: "Zen Headbutt", type: "超能力", cat: "physical", bp: 80 },
      { name: "地震", en: "Earthquake", type: "地面", cat: "physical", bp: 100, spread: true },
      { name: "重踏", en: "Bulldoze", type: "地面", cat: "physical", bp: 60, spread: true },
      { name: "冰凍拳", en: "Ice Punch", type: "冰", cat: "physical", bp: 75 },
      { name: "雷電拳", en: "Thunder Punch", type: "電", cat: "physical", bp: 75 },
      { name: "岩崩", en: "Rock Slide", type: "岩石", cat: "physical", bp: 75, spread: true },
      { name: "撲擊", en: "Body Press", type: "格鬥", cat: "physical", bp: 80 }
    ],
    megas: [
      { name: "超級巨金怪 (Mega)", types: ["鋼", "超能力"], bs: { hp: 80, atk: 145, def: 150, spa: 105, spd: 110, spe: 110 } }
    ]
  },
  {
    name: "噴火龍", en: "Charizard", types: ["火", "飛行"],
    bs: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    moves: [
      { name: "熱風", en: "Heat Wave", type: "火", cat: "special", bp: 95, spread: true },
      { name: "噴射火焰", en: "Flamethrower", type: "火", cat: "special", bp: 90 },
      { name: "空氣斬", en: "Air Slash", type: "飛行", cat: "special", bp: 75 },
      { name: "過熱", en: "Overheat", type: "火", cat: "special", bp: 130 },
      { name: "暴風", en: "Hurricane", type: "飛行", cat: "special", bp: 110 },
      { name: "閃焰衝鋒", en: "Flare Blitz", type: "火", cat: "physical", bp: 120 },
      { name: "龍之波動", en: "Dragon Pulse", type: "龍", cat: "special", bp: 85 },
      { name: "真氣彈", en: "Focus Blast", type: "格鬥", cat: "special", bp: 120 },
      { name: "日光束", en: "Solar Beam", type: "草", cat: "special", bp: 120 }
    ],
    megas: [
      { name: "超級噴火龍Y (Mega Y)", types: ["火", "飛行"], bs: { hp: 78, atk: 104, def: 78, spa: 159, spd: 115, spe: 100 } },
      { name: "超級噴火龍X (Mega X)", types: ["火", "龍"], bs: { hp: 78, atk: 130, def: 111, spa: 130, spd: 85, spe: 100 } }
    ]
  },
  {
    name: "袋獸", en: "Kangaskhan", types: ["一般"],
    bs: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
    moves: [
      { name: "報恩/泰山壓頂", en: "Body Slam", type: "一般", cat: "physical", bp: 85 },
      { name: "擊掌奇襲", en: "Fake Out", type: "一般", cat: "physical", bp: 40 },
      { name: "突襲", en: "Sucker Punch", type: "惡", cat: "physical", bp: 70 },
      { name: "增強拳", en: "Power-Up Punch", type: "格鬥", cat: "physical", bp: 40 },
      { name: "吸取拳", en: "Drain Punch", type: "格鬥", cat: "physical", bp: 75 },
      { name: "地震", en: "Earthquake", type: "地面", cat: "physical", bp: 100, spread: true },
      { name: "岩崩", en: "Rock Slide", type: "岩石", cat: "physical", bp: 75, spread: true },
      { name: "咬碎", en: "Crunch", type: "惡", cat: "physical", bp: 80 }
    ],
    megas: [
      { name: "超級袋獸 (Mega)", types: ["一般"], bs: { hp: 105, atk: 125, def: 100, spa: 60, spd: 100, spe: 100 } }
    ]
  },
  {
    name: "耿鬼", en: "Gengar", types: ["幽靈", "毒"],
    bs: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    moves: [
      { name: "暗影球", en: "Shadow Ball", type: "幽靈", cat: "special", bp: 80 },
      { name: "污泥炸彈", en: "Sludge Bomb", type: "毒", cat: "special", bp: 90 },
      { name: "污泥波", en: "Sludge Wave", type: "毒", cat: "special", bp: 95, spread: true },
      { name: "十萬伏特", en: "Thunderbolt", type: "電", cat: "special", bp: 90 },
      { name: "真氣彈", en: "Focus Blast", type: "格鬥", cat: "special", bp: 120 },
      { name: "魔法閃耀", en: "Dazzling Gleam", type: "妖精", cat: "special", bp: 80, spread: true },
      { name: "冰凍之風", en: "Icy Wind", type: "冰", cat: "special", bp: 55, spread: true }
    ],
    megas: [
      { name: "超級耿鬼 (Mega)", types: ["幽靈", "毒"], bs: { hp: 60, atk: 65, def: 80, spa: 170, spd: 95, spe: 130 } }
    ]
  },
  {
    name: "轟擂金剛猩", en: "Rillaboom", types: ["草"],
    bs: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
    moves: [
      { name: "木槌", en: "Wood Hammer", type: "草", cat: "physical", bp: 120 },
      { name: "青草滑梯", en: "Grassy Glide", type: "草", cat: "physical", bp: 55 },
      { name: "鼓擊", en: "Drum Beating", type: "草", cat: "physical", bp: 80 },
      { name: "拍落", en: "Knock Off", type: "惡", cat: "physical", bp: 65 },
      { name: "十萬馬力", en: "High Horsepower", type: "地面", cat: "physical", bp: 95 },
      { name: "急速折返", en: "U-turn", type: "蟲", cat: "physical", bp: 70 },
      { name: "排水拳", en: "Drain Punch", type: "格鬥", cat: "physical", bp: 75 }
    ]
  }
];
