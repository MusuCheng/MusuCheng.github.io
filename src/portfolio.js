const header = {
  homepage: 'https://musucheng.github.io',
  title: 'Keyu Chen',
}

const about = {
  name: 'Keyu (Kevin) Chen',
  role: 'Data Analyst | Financial Analyst',
  picture: 'profile.jpg',
  description:
    'Recent graduate of Rutgers Business School (MITA) with hands-on experience in analytics and financial modeling. Skilled in building end-to-end data workflows and dashboards using Python, SQL, Tableau, Power BI, and AWS to support forecasting, KPI tracking, and business decision-making.',
  resume: 'KevinResume_FDA.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/keyuc',
    github: 'https://github.com/MusuCheng',
  },
}

const experiences = [
  {
    company: 'Fosun Capital Investment Management, LLC',
    role: 'Financial Data Analyst',
    period: 'May 2024 – Dec 2024',
    description: [
      'Analyzed financial datasets for 10+ investment cases using Python and SQL to support valuation, portfolio monitoring, and IC decision-making.',
      'Built DCF, comps, and multi-factor valuation models; scenario analysis improved projected portfolio IRR from ~19% to 22%.',
      'Automated Excel + Power BI dashboards for liquidity, leverage, covenant headroom, and valuation KPIs; reduced reporting turnaround time by ~35–40%.',
    ],
    stack: ['Python', 'SQL', 'Excel', 'Power BI', 'Financial Modeling'],
  },
  {
    company: 'Ocean Fortune Glory Asset Management, LLC',
    role: 'Financial Data Analyst',
    period: 'May 2023 – Aug 2023',
    description: [
      'Processed and reconciled 285K+ portfolio and transaction records using SQL and Excel to ensure recurring reporting accuracy.',
      'Built automated SQL workflows and Tableau dashboards to visualize portfolio returns and key risk indicators, improving decision efficiency.',
      'Performed trend, variance, and ratio analysis to assess risk exposure, leverage, and liquidity across holdings.',
    ],
    stack: ['SQL', 'Excel', 'Tableau', 'Risk Analysis'],
  },
]

/**
 * ✅ Project keyword bolding (next step):
 * If you want keywords like AWS / PySpark / Redshift to be bold inside description,
 * we can change the ProjectContainer to render description as HTML.
 * Then you can write: 'Built a <strong>AWS</strong> pipeline ...' here.
 */
const projects = [
  {
    name: 'Real-Time Stock Price Streaming & AI Forecasting Pipeline',
    description:
      'Built a real-time stock data pipeline on AWS (Kinesis/Lambda/EC2) ingesting minute-level feeds. Processed streaming data with PySpark and stored in S3 + Redshift. Implemented a hybrid forecasting workflow and visualized trends and anomaly alerts in Tableau.',
    stack: ['AWS', 'Kinesis', 'Lambda', 'EC2', 'PySpark', 'S3', 'Redshift', 'Tableau'],
    sourceCode: 'https://github.com/MusuCheng',
    livePreview: '',
  },
  {
    name: 'Cat vs Dog Image Classification',
    description:
      'Built an end-to-end image classification pipeline including preprocessing, model training, and evaluation. Compared deep learning baselines with traditional ML approaches.',
    stack: ['Python', 'CNN', 'PyTorch', 'Scikit-learn'],
    sourceCode: 'https://github.com/MusuCheng',
    livePreview: '',
  },
  {
  name: 'Credit Card Fraud Detection',
  description:
    'Developed a supervised machine learning pipeline to detect fraudulent credit card transactions using highly imbalanced data. Performed data preprocessing, feature scaling, and model evaluation with precision-recall tradeoffs, emphasizing recall and F1-score for fraud detection scenarios.',
  stack: ['Python', 'Scikit-learn', 'Logistic Regression', 'Random Forest', 'Imbalanced Data'],
  sourceCode: 'https://github.com/MusuCheng/credit-card-fraud-detection',
  livePreview: '',
  },
    {
    name: 'Student Performance Optimization',
    description:
      'Built SQL datasets merging academic records for 500+ students and created dashboards and forecasting tools to support curriculum and budget planning.',
    stack: ['SQL', 'Tableau', 'Excel'],
    sourceCode: 'https://github.com/MusuCheng',
    livePreview: '',
  },
  {
    name: 'NCAA Cinderella Prediction',
    description:
      'Engineered features from 13 NCAA seasons, clustered 2,500+ teams using K-Means, and visualized upset predictions in interactive Tableau dashboards.',
    stack: ['Python', 'Tableau', 'K-Means'],
    sourceCode: 'https://github.com/MusuCheng',
    livePreview: '',
  },
]

const skills = [
  // Data & Analytics
  'SQL',
  'Python',
  'Excel',
  'Tableau',
  'Power BI',

  // Cloud & Big Data (AWS)
  'AWS',
  'S3',
  'Redshift',
  'Kinesis',
  'Lambda',
  'EC2',
  'Athena',
  'Glue',
  'QuickSight',
  'IAM',
  'CloudWatch',
  'PySpark',

  // Finance & Modeling
  'Financial Modeling',
  'Forecasting',
  'DCF',
  'Scenario Analysis',
  'Variance Analysis',
  'Budgeting',

  // Tools & Systems
  'SAP',
  'Git',
]

const contact = {
  email: 'kevincky19@gmail.com',
}

export { header, about, experiences, projects, skills, contact }
