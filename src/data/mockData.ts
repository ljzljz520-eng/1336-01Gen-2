import type { Project, DonationTier, FundUsage, VolunteerEvent, SafetyGuideline } from '@/types';

export const projects: Project[] = [
  {
    id: 'turtle',
    title: '海龟保护计划',
    description: '守护产卵海滩，监测海龟种群，救助受伤个体。我们在沿海建立了多个海龟保护站，每年孵化并放归数千只小海龟回归大海。',
    iconName: 'Turtle',
    stats: [
      { label: '保护海滩', value: '12 处' },
      { label: '年放归数量', value: '5,000+ 只' },
      { label: '救助个体', value: '300+ 只' },
    ],
    colorFrom: 'from-ocean-500',
    colorTo: 'to-ocean-700',
  },
  {
    id: 'beach',
    title: '海滩清理行动',
    description: '组织志愿者定期清理海岸垃圾，减少海洋塑料污染。通过社区参与和教育宣传，提升公众的海洋环保意识。',
    iconName: 'Waves',
    stats: [
      { label: '清理海滩', value: '28 个' },
      { label: '收集垃圾', value: '15 吨/年' },
      { label: '志愿者参与', value: '8,000+ 人次' },
    ],
    colorFrom: 'from-coral-500',
    colorTo: 'to-coral-700',
  },
  {
    id: 'coral',
    title: '珊瑚礁修复工程',
    description: '培育珊瑚苗种，修复受损珊瑚礁生态系统。与科研机构合作，建立珊瑚苗圃，恢复海洋生物的栖息地。',
    iconName: 'Flower2',
    stats: [
      { label: '修复面积', value: '20,000㎡' },
      { label: '珊瑚种类', value: '35 种' },
      { label: '苗种培育', value: '10 万株' },
    ],
    colorFrom: 'from-coral-400',
    colorTo: 'to-ocean-600',
  },
];

export const donationTiers: DonationTier[] = [
  { amount: 50, description: '可支持 10 只小海龟的安全放归' },
  { amount: 100, description: '可支持 1 次小型海滩清理活动' },
  { amount: 300, description: '可支持 1 平方米珊瑚礁的修复' },
  { amount: 500, description: '可支持 1 个月海龟监测站的运营' },
  { amount: 1000, description: '可支持整套海洋环保教育课程开发' },
];

export const fundUsages: FundUsage[] = [
  {
    category: '保护项目执行',
    percentage: 60,
    description: '用于海龟保护、海滩清理、珊瑚修复等一线项目的直接开支，包括物资、设备、人员费用等',
  },
  {
    category: '公众教育宣传',
    percentage: 18,
    description: '用于环保教育活动、社区宣传、展览等，提升公众海洋保护意识',
  },
  {
    category: '科学研究监测',
    percentage: 12,
    description: '用于海洋生态监测、数据收集、与科研机构的合作研究',
  },
  {
    category: '组织运营管理',
    percentage: 10,
    description: '维持组织日常运转的必要行政开支，确保项目持续有效运行',
  },
];

export const volunteerEvents: VolunteerEvent[] = [
  {
    date: '2026年6月28日（周六）',
    time: '上午 8:00 - 12:00',
    location: '三亚湾椰梦长廊海滩',
    duration: '约 4 小时',
    gatheringPoint: '三亚湾海月广场集合',
  },
  {
    date: '2026年7月5日（周六）',
    time: '上午 7:30 - 11:30',
    location: '青岛第一海水浴场',
    duration: '约 4 小时',
    gatheringPoint: '海水浴场正门集合',
  },
  {
    date: '2026年7月12日（周六）',
    time: '上午 8:00 - 12:00',
    location: '深圳大鹏湾金沙湾',
    duration: '约 4 小时',
    gatheringPoint: '金沙湾海滨公园入口',
  },
];

export const safetyGuidelines: SafetyGuideline[] = [
  {
    category: '安全须知',
    items: [
      '活动全程请听从现场工作人员指挥，不得擅自离队',
      '请勿触碰海洋生物，避免惊扰或伤害海洋生物',
      '注意脚下安全，海滩湿滑区域请小心行走',
      '未成年人参与必须由家长或监护人陪同',
      '如有身体不适请立即告知现场工作人员',
    ],
  },
  {
    category: '装备建议',
    items: [
      '穿着舒适的运动服装和防滑运动鞋',
      '携带遮阳帽、太阳镜、防晒霜',
      '准备足够的饮用水和少量能量补给',
      '建议佩戴手套（清理活动用）',
      '可自备 reusable 水杯，减少一次性塑料使用',
    ],
  },
  {
    category: '注意事项',
    items: [
      '请提前 15 分钟到达集合地点签到',
      '活动当天如遇恶劣天气，将提前通知延期',
      '请保管好个人贵重物品，遗失自行负责',
      '活动过程中请遵守相关环保规定，不留下任何垃圾',
      '完成活动后可领取志愿者服务时长证明',
    ],
  },
];

export const navLinks = [
  { label: '首页', path: '/' },
  { label: '志愿者报名', path: '/volunteer' },
];
