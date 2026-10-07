// Champions 賽制全攜帶道具庫
window.CHAMPIONS_ITEMS = [
  { id: "None", name: "(無攜帶道具)", desc: "無加成" },
  
  // 核心輸出/增傷道具
  { id: "Choice Band", name: "講究頭帶", desc: "物理攻擊 x1.5，但只能使用同一招式", type: "offensive", mult: 1.5, stat: "atk" },
  { id: "Choice Specs", name: "講究眼鏡", desc: "特殊攻擊 x1.5，但只能使用同一招式", type: "offensive", mult: 1.5, stat: "spa" },
  { id: "Life Orb", name: "生命寶珠", desc: "每次招式傷害 x1.3，自身扣除 1/10 體力", type: "offensive_damage", mult: 1.3 },
  { id: "Expert Belt", name: "達人帶", desc: "造成屬性效果絕佳時，傷害 x1.2", type: "offensive_super", mult: 1.2 },
  { id: "Booster Energy", name: "驅勁能量", desc: "古代活性/夸克充能：最高能力提升 1.3 倍 (速度 1.5 倍)", type: "booster" },

  // 防禦/抗性/生存道具
  { id: "Assault Vest", name: "突擊背心", desc: "特殊防禦 x1.5，但無法使用變化招式", type: "defensive", mult: 1.5, stat: "spd" },
  { id: "Focus Sash", name: "氣勢披帶", desc: "滿血時受到致命攻擊必定剩下 1 HP", type: "defensive" },
  { id: "Eviolite", name: "進化奇石", desc: "未完全進化之寶可夢雙防 (物防/特防) x1.5", type: "eviolite" },

  // 回復與持久道具
  { id: "Sitrus Berry", name: "文柚果", desc: "HP 低於 50% 時立即回復最大 HP 的 1/4", type: "berry" },
  { id: "Leftovers", name: "吃剩的東西", desc: "每回合結束時回復最大 HP 的 1/16", type: "recovery" },
  { id: "Lum Berry", name: "木子果", desc: "解除自身陷入的所有異常狀態", type: "berry" },

  // 功能與戰術道具
  { id: "Choice Scarf", name: "講究圍巾", desc: "速度 x1.5，但只能使用同一招式", type: "speed", mult: 1.5, stat: "spe" },
  { id: "Clear Amulet", name: "清淨墜飾", desc: "防止威嚇及所有對手引起的能力值下降效果", type: "utility" },
  { id: "Covert Cloak", name: "密探斗篷", desc: "免疫對手招式的追加效果 (如畏縮、冰凍、燒傷)", type: "utility" },
  { id: "Safety Goggles", name: "防塵護目鏡", desc: "免疫天氣傷害 (沙暴/冰雹) 及粉末類招式 (如催眠粉、憤怒粉)", type: "utility" },
  { id: "Loaded Dice", name: "太晶微粒 / 充能骰子", desc: "連續攻擊招式固定命中 4~5 次", type: "utility" }
];
