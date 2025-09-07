export const PROJECTS = [
  {
    title: "TSMC Cloud Native - Attendance System",
    repo: "https://github.com/JunTingLin/Attendance-System-API",
    youtube: "",
    thumbnail: "/_static/projects/TSMC Cloud Native - Attendance System.png",
    description:
      "A cloud-native attendance management system built with Spring Boot backend and Terraform-managed GCP infrastructure. Features include JWT-secured APIs, automated CI/CD with Cloud Build, and deployment on Cloud Run with Cloud SQL integration.",
    highlights: [],
    tools: ["Spring Boot", "Spring Security (JWT)", "Swagger", "Terraform", "GCP Cloud Run", "GCP Cloud SQL", "Cloud Build CI/CD"],
  },
  {
    title: "Stock Automatic Trading Robot for Taiwan Market",
    repo: "https://github.com/JunTingLin/stock-analysis",
    youtube: "",
    thumbnail: "/_static/projects/Stock Automatic Trading Robot for Taiwan Market.png",
    description:
      "This project uses FinLab’s real-time data to design and backtest trading strategies. Results, including account performance and monthly returns, are compiled into HTML reports and delivered via LINE Notify.",
    highlights: [],
    tools: ["Python,", "FinLab,", "TA-Lib", "Plotly", "Flask"],
  },
  {
    title: "Taiwan Insider Monitor",
    repo: "https://github.com/JunTingLin/insider-stock",
    youtube: "",
    thumbnail: "/_static/projects/Taiwan Insider Monitor.png",
    description:
      "Automates insider trading data extraction from the Taiwan Stock Exchange, focusing on share increases and their market value. Results are saved monthly as Excel files.",
    highlights: [],
    tools: ["requests", "BeautifulSoup", "twstock"],
  },
  {
    title: "Automated Recognition",
    repo: "https://github.com/JunTingLin/MODA_company_OCR",
    youtube: "https://youtu.be/_2ykBWYJUKA",
    thumbnail: "/_static/projects/Automated Recognition.png",
    description:
      "Processes and analyzes PDFs and images, including tax forms, certificates, and bid documents.",
    highlights: ["Ministry of Economic Affairs, Taiwan"],
    tools: ["Pillow", "OpenCV", "PyMuPDF", "pytesseract", "Google Cloud Vision", "Qt5"],
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
      "NSTC ’23 Funded",
      "2nd in MIS ’23",
      "Wanrun ’23 Finalist",
      "MOE Innovation"
    ],
    tools: ["Android", "Firebase", "ChatGPT", "Django", "BeautifulSoup", "Selenium", "MySQL", "Arduino"],
  },
  {
    title: "Classroom Reservation System",
    repo: "https://github.com/JunTingLin/Classroom-reservation-system",
    youtube: "",
    thumbnail: "/_static/projects/Classroom Reservation System.png",
    description:
      "A reservation system with SSO authentication for enrolled students, allowing single bookings and admin-only bulk scheduling.",
    highlights: ["GEO @ NCU"],
    tools: ["Spring Boot", "FullCalendar", "SSO", "MariaDB"],
  },
  {
    title: "NCU Online Bookstore",
    repo: "https://github.com/JunTingLin/BookShop-NCU-SA",
    youtube: "",
    thumbnail: "/_static/projects/NCU Online Bookstore.png",
    description:
      "A platform for NCU students to purchase textbooks categorized by departments (e.g., CS, Finance). Members can browse, search, view details, and add books to a shopping cart with options to modify or delete quantities. Admins have a simple interface for efficient management of members, books, and orders.",
    highlights: [],
    tools: ["Java Web", "JSP", "Spring-Security-Crypto", "MySQL"],
  },
  {
    title: "Shopee Competitor Analysis Crawler",
    repo: "https://github.com/brankhsu/python-project-crawler",
    youtube: "",
    thumbnail: "/_static/projects/Shopee Competitor Analysis Crawler.png",
    description:
      "This tool helps new Shopee sellers analyze competitors, set optimal prices, estimate revenue, and decide store placement based on data insights.",
    highlights: [],
    tools: ["Python,", "Tkinter", "Matplotlib", "Pandas", "Numpy"],
  },
  {
    title: "Fast Food Ordering System",
    repo: "https://github.com/JunTingLin/java_ordering_system",
    youtube: "",
    thumbnail: "/_static/projects/Fast Food Ordering System.png",
    description:
      "The system reads menus and combos from CSV files for easy updates. It generates detailed receipts for customers and logs all transactions with timestamps.",
    highlights: ["Project Leader"],
    tools: ["Java", "Swing"],
  },
] as const;