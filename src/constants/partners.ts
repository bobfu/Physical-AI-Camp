
export type PartnerCategory = 'Organizer' | 'Real-Time AI Devkit' | 'VC' | 'Community';

export interface Partner {
  id: string; // Pinyin ID
  name_zh: string;
  name_en?: string;
  category: PartnerCategory;
}

export const FIXED_PARTNERS: Partner[] = [
  { id: 'rte_kaifazhe_shequ', name_zh: "RTE 开发者社区", name_en: "RTE Developer Community", category: "Organizer" },
  { id: 'chaoyinsu_jihua', name_zh: "超音速计划", name_en: "Supersonic Program", category: "Organizer" },
  { id: 'shenwang', name_zh: "声网", name_en: "Agora", category: "Organizer" },
];

export const PARTNERS_LIST: Partner[] = [
  // Real-Time AI Devkit
  { id: 'shenwang_duihuashi_ai', name_zh: "声网对话式 AI", category: "Real-Time AI Devkit" },
  { id: 'shangtang', name_zh: "商汤", category: "Real-Time AI Devkit" },
  { id: 'spatialwalk', name_zh: "SpatialWalk", category: "Real-Time AI Devkit" },
  { id: 'xiaosu_keji', name_zh: "小宿科技", category: "Real-Time AI Devkit" },
  { id: 'xiaoyingtao_keji', name_zh: "小樱桃科技", category: "Real-Time AI Devkit" },
  { id: 'minimax', name_zh: "MiniMax", category: "Real-Time AI Devkit" },
  { id: 'z_ai_startup_program', name_zh: "Z.AI Startup Program", category: "Real-Time AI Devkit" },
  { id: 'jiejue_xingchen', name_zh: "阶跃星辰", category: "Real-Time AI Devkit" },
  { id: 'yue_zhi_an_mian', name_zh: "月之暗面", category: "Real-Time AI Devkit" },
  { id: 'seeed', name_zh: "Seeed", category: "Real-Time AI Devkit" },
  // VC
  { id: 'wuyuan_ziben', name_zh: "五源资本", category: "VC" },
  { id: 'gaolin_ziben', name_zh: "高瓴资本", category: "VC" },
  { id: 'jiacheng_ziben', name_zh: "嘉程资本", category: "VC" },
  { id: 'zhenge_jijin', name_zh: "真格基金", category: "VC" },
  // 社区伙伴
  { id: 's_chuang', name_zh: "S 创", category: "Community" },
  { id: 'chaihuo_chuangke_kongjian', name_zh: "柴火创客空间", category: "Community" },
  { id: 'inno100', name_zh: "INNO100", category: "Community" },
  { id: 'jizhiliu', name_zh: "机智流", category: "Community" },
  { id: 'naofang_dianbo', name_zh: "脑放电波", category: "Community" },
  { id: 'waic_up', name_zh: "WAIC UP!", category: "Community" },
  { id: 'bonjour', name_zh: "Bonjour!", category: "Community" },
  { id: 'research_ai_plus', name_zh: "Research AI+", category: "Community" },
  { id: 'xiaohongshu_keji', name_zh: "小红书科技", category: "Community" },
  { id: 'qishifu_keting', name_zh: "启师傅客厅", category: "Community" },
  { id: 'fenzi_fenmu', name_zh: "分子分母", category: "Community" },
];
