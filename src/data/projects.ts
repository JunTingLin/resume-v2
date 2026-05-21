export const PROJECTS = [
  {
    title: "Multimodal Fusion of News Features in Deep Reinforcement Learning Portfolio Optimization",
    repo: "https://github.com/JunTingLin/DeepTrader",
    thumbnail: "/_static/projects/Trend.png",
    description:
      "This study extends VisionTrader by incorporating news information through two complementary paths: extracting FinBERT-based sentiment scores as additional input features, and fusing news embeddings with price-volume representations via Concatenation, Gating Mechanism, and Cross-Attention. Evaluated robustness of each fusion strategy across different time periods; ongoing research.",
    highlights: ['E.SUN', 'MIR Lab'],
  },
  {
    title: "VisionTrader: Applying Deep Reinforcement Learning to Incorporate Vision Time Series into Portfolio Optimization",
    repo: "https://github.com/JunTingLin/DeepTrader",
    thumbnail: "/_static/projects/VisionTrader02.png",
    description:
      "Addresses instability in DRL-based portfolio optimization by incorporating enhanced market features and technical indicators. Uses Vision Transformer (ViT) to capture cross-asset and temporal relationships, demonstrating superior performance and stability across different markets and time periods.",
    highlights: ['E.SUN', 'MIR Lab', 'IEEE under review'],
  },
  {
    title: "TSMC Cloud Native: Attendance System",
    repo: "https://github.com/JunTingLin/Attendance-System-API",
    thumbnail: "/_static/projects/TSMC Cloud Native.png",
    description:
      "A cloud-native attendance management system built with Spring Boot backend and Terraform-managed GCP infrastructure. Features include JWT-secured APIs, automated CI/CD with Cloud Build, and deployment on Cloud Run with Cloud SQL integration.",
    highlights: ['TSMC courses'],
  },
  {
    title: "Stock Automatic Trading Robot for Taiwan Market",
    repo: "https://github.com/JunTingLin/stock-analysis",
    thumbnail: "/_static/projects/Stock Automatic Trading Robot.png",
    description:
      "This project uses FinLab's real-time data to design and backtest trading strategies. Results, including account performance and monthly returns, are compiled into HTML reports and delivered via LINE Notify.",
    highlights: ['MIR Lab'],
  },
  {
    title: "Automated Recognition",
    repo: "https://github.com/JunTingLin/MODA_company_OCR",
    youtube: "https://youtu.be/_2ykBWYJUKA",
    thumbnail: "/_static/projects/Automated Recognition.png",
    description:
      "Processes and analyzes PDFs and images, including tax forms, certificates, and bid documents.",
    highlights: ["Ministry of Economic Affairs, Taiwan"],
  },
  {
    title: "MedBag Checker: A Mobile Application for Preventing Drug Interactions with Smart Medicine Box Development",
    repo: "https://github.com/JunTingLin/drug_android_frontend",
    youtube: "https://youtu.be/hlqk8Zxjgjg?si=1iwc3cJLI5Lm5wP-",
    thumbnail: "/_static/projects/MedBag Checker.png",
    description:
      "A smart app integrated with a medicine box to ensure drug safety by checking interactions using real-time web scraping and cached databases. Features include medication reminders, intuitive UI, and app-controlled compartments to prevent misuse.",
    highlights: [
      "Project Leader",
      "NSTC '23 Funded",
      "2nd in MIS '23",
      "Wanrun '23 Finalist",
      "MOE Innovation"
    ],
  },
  
] as const;

export const OPEN_SOURCE_CONTRIBUTIONS = [
  {
    title: "Add no-auth fallback support for OpenSearch clusters without authentication",
    repo: "https://github.com/opensearch-project/opensearch-mcp-server-py",
    description:
      "Introduced OPENSEARCH_NO_AUTH environment variable to allow connections to OpenSearch clusters that require no authentication, with validation order placed before boto3 auth to avoid unnecessary AWS requests.",
    highlights: ["PR #73"],
  },
] as const;