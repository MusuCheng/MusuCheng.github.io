// src/portfolio.zh.js

const header = {
  homepage: 'https://musucheng.github.io',
  title: '陈柯予',
}

const about = {
  name: '陈柯予（Kevin）',
  role: '数据分析师｜金融分析师',
  picture: 'profile.jpg',
  description:
    '具备云端数据架构与金融分析能力的复合型数据分析师，熟悉从数据采集、清洗、建模到可视化呈现的全流程自动化体系。能够将复杂的业务与投资问题转化为结构化数据模型与量化决策支持方案，提升分析效率与风险识别能力；拥有国际化学习背景与跨文化协作经验，能够在多元团队中高效沟通并推动数据驱动决策。',
  resume: '陈柯予简历2026.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/keyuc',
    github: 'https://github.com/MusuCheng',
  },
}

const experiences = [
  {
    company: '上海复星创富投资管理股份有限公司（PE事业群）',
    role: '研究专员（数据与投研）',
    period: '2021.03 – 2021.08',
    description: [
      '使用 Excel 与 SQL 分析 10+ 投资案例数据，开展行业对标分析、盈利能力拆解及估值区间测算，为投委会决策提供量化支持。',
      '参与医疗、TMT 及消费赛道行业研究，构建市场规模测算模型与竞争格局分析框架，整合宏观与行业指标，形成系统化投资逻辑支持材料。',
      '搭建 DCF、可比公司及多因子估值模型，进行情景与敏感性分析，优化后组合预期 IRR 提升至约 20%。',
      '开发 Power BI 与 Excel 自动化仪表盘，跟踪流动性、杠杆率及债务契约空间等核心指标，报告生成效率提升约 40%。',
      '运用 EDA 与统计趋势分析识别财务异常与业绩驱动因素，提升投资方案匹配度与风险识别能力。',
      '参与多个项目尽职调查，开展利润波动分析、营运资本测算与预测模型优化，通过自动化流程提升数据准确性与分析效率。',
    ],
    stack: ['SQL', 'Excel', 'Power BI', 'Financial Modeling', 'EDA', 'Valuation'],
  },
  {
    company: '上海远海明华资产管理有限公司（投资部门科技组）',
    role: '投资经理助理（数据分析）',
    period: '2020.01 – 2020.08',
    description: [
      '负责目标公司财务数据分析与研究，构建收入增长率、毛利率及现金流预测模型，为投资建议书撰写提供量化支撑。',
      '基于 SQL 构建自动化数据分析流程，并开发可视化仪表盘监控投资组合收益率、杠杆水平及风险指标，提升管理层决策效率。',
      '开展趋势分析、比率分析与敏感性测试，评估多资产组合流动性风险与敞口结构。',
      '支持月度与季度财务结账流程，使用 Excel 进行报表整理与差异分析，提升报告准确性与出具效率。',
      '整理行业资料与专家访谈信息，协助完成投资建议书与项目研究报告。',
    ],
    stack: ['SQL', 'Excel', 'Tableau', 'Risk Analysis', 'Forecasting'],
  },
]

const projects = [
  {
    name: '实时股票数据流与 AI 预测系统',
    description:
      '构建分钟级实时股票数据流；使用 PySpark 处理流数据并存储至 S3 与 Redshift；结合时间序列回归与 LLM 情绪分析进行预测建模，并设计自动化 ETL 与实时监测仪表盘。',
    stack: ['AWS', 'Kinesis', 'Lambda', 'EC2', 'PySpark', 'S3', 'Redshift', 'Tableau'],
    sourceCode: 'https://github.com/MusuCheng',
    livePreview: '',
  },
  {
    name: '信用卡欺诈检测模型',
    description:
      '处理 28.5 万条交易数据；使用 SMOTE 解决类别不平衡问题，使欺诈召回率提升约 15%；训练 SVM / 随机森林 / 逻辑回归模型，AUC 达 97.4%，并使用 ROC 曲线与混淆矩阵评估模型性能。',
    stack: ['Python', 'Scikit-learn', 'SMOTE', 'SVM', 'Random Forest', 'Logistic Regression'],
    sourceCode: 'https://github.com/MusuCheng/credit-card-fraud-detection',
    livePreview: '',
  },
  {
    name: '学生成绩分析数据库系统',
    description:
      '设计标准化数据库结构并绘制 ERD；编写 25+ SQL 查询分析 GPA 趋势与辅导效果；构建交互式可视化仪表盘，用于支持课程与资源规划。',
    stack: ['SQL', 'ERD', 'Tableau', 'Excel'],
    sourceCode: 'https://github.com/MusuCheng',
    livePreview: '',
  },
  {
    name: '猫狗图像分类（Cat vs Dog）',
    description:
      '搭建端到端图像分类流程，包括数据预处理、模型训练与评估；对比深度学习基线与传统机器学习方法，完成模型效果与误差分析。',
    stack: ['Python', 'CNN', 'PyTorch', 'Scikit-learn'],
    sourceCode: 'https://github.com/MusuCheng',
    livePreview: '',
  },
  {
    name: 'NCAA “黑马”预测与聚类分析',
    description:
      '基于 13 个赛季数据进行特征工程，对 2,500+ 球队进行 K-Means 聚类，并用 Tableau 构建交互式仪表盘展示潜在冷门与关键指标。',
    stack: ['Python', 'Tableau', 'K-Means'],
    sourceCode: 'https://github.com/MusuCheng',
    livePreview: '',
  },
]

const skills = [
  // 编程与数据分析
  'Python (Pandas, NumPy, Scikit-learn)',
  'SQL',
  'R',
  'Excel (Power Query, PivotTable)',

  // 数据工程与云计算
  'AWS (Kinesis, Lambda, EC2, S3, Redshift)',
  'PySpark',
  'Neo4j',
  'Oracle Apex',

  // 数据科学与统计分析
  'EDA',
  'Time Series Forecasting',
  'Feature Engineering',
  'Classification Modeling',
  'A/B Testing',
  'Hypothesis Testing',

  // BI 与可视化
  'Tableau',
  'Power BI',
  'KPI Design',
  'Dashboard Automation',

  // 其他
  'Git',
  'SAP',
]

const contact = {
  email: 'kevincky19@gmail.com',
}

export { header, about, experiences, projects, skills, contact }