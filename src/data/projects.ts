export const PROJECTS = [
  {
    title: "Stock Automatic Trading Robot for Taiwan Market",
    repo: "https://github.com/JunTingLin/stock-analysis",
    thumbnail: "/_static/projects/Stock Automatic Trading Robot for Taiwan Market.webp",
    description:
      "This project uses FinLab’s real-time data to design and backtest trading strategies. Results, including account performance and monthly returns, are compiled into HTML reports and delivered via LINE Notify.",
    highlights: [],
    tools: ["Python,", "FinLab,", "TA-Lib", "Plotly", "Flask"],
  },
  {
    title: "Taiwan Insider Monitor",
    repo: "https://github.com/JunTingLin/insider-stock",
    thumbnail: "/_static/projects/Taiwan Insider Monitor.webp",
    description:
      "Automates insider trading data extraction from the Taiwan Stock Exchange, focusing on share increases and their market value. Results are saved monthly as Excel files.",
    highlights: [],
    tools: ["requests", "BeautifulSoup", "twstock"],
  },
  {
    title: "Automated Recognition",
    repo: "https://github.com/JunTingLin/MODA_company_OCR",
    thumbnail: "/_static/projects/Automated Recognition.webp",
    description:
      "Processes and analyzes PDFs and images, including tax forms, certificates, and bid documents.",
    highlights: ["Ministry of Economic Affairs, Taiwan"],
    tools: ["Pillow", "OpenCV", "PyMuPDF", "pytesseract", "Google Cloud Vision", "Qt5"],
  },
  {
    title: "MedBag Checker: A Mobile Application for Preventing Drug Interactions with Smart Medicine Box Development",
    repo: "https://github.com/JunTingLin/drug_android_frontend",
    thumbnail: "/_static/projects/MedBag Checker.webp",
    description:
      "A smart app integrated with a medicine box to ensure drug safety by checking interactions using real-time web scraping and cached databases. Features include medication reminders, intuitive UI, and app-controlled compartments to prevent misuse.",
    highlights: [
      "Project Leader",
      "NSTC ’23 Funded",
      "2nd in MIS ’23",
      "Wanrun ’23 Finalist",
      "MOE Innovation"
    ],
    tools: ["Typescript", "React", "Nodejs", "MongoDB", "Socket"],
  },
  {
    title: "Classroom Reservation System",
    repo: "https://github.com/JunTingLin/Classroom-reservation-system",
    thumbnail: "/_static/projects/Classroom Reservation System.webp",
    description:
      "A reservation system with SSO authentication for enrolled students, allowing single bookings and admin-only bulk scheduling.",
    highlights: ["GEO @ NCU"],
    tools: ["Spring Boot", "FullCalendar", "SSO", "MariaDB"],
  },
  {
    title: "NCU Online Bookstore",
    repo: "https://github.com/JunTingLin/BookShop-NCU-SA",
    thumbnail: "/_static/projects/NCU Online Bookstore.webp",
    description:
      "A platform for NCU students to purchase textbooks categorized by departments (e.g., CS, Finance). Members can browse, search, view details, and add books to a shopping cart with options to modify or delete quantities. Admins have a simple interface for efficient management of members, books, and orders.",
    highlights: [],
    tools: ["Java Web", "JSP", "Spring-Security-Crypto", "MySQL"],
  },
  {
    title: "Shopee Competitor Analysis Crawler",
    repo: "https://github.com/brankhsu/python-project-crawler",
    thumbnail: "/_static/projects/Shopee Competitor Analysis Crawler.webp",
    description:
      "This tool helps new Shopee sellers analyze competitors, set optimal prices, estimate revenue, and decide store placement based on data insights.",
    highlights: [],
    tools: ["Python,", "Tkinter", "Matplotlib", "Pandas", "Numpy"],
  },
  {
    title: "Fast Food Ordering System",
    repo: "https://github.com/JunTingLin/java_ordering_system",
    thumbnail: "/_static/projects/Fast Food Ordering System.webp",
    description:
      "The system reads menus and combos from CSV files for easy updates. It generates detailed receipts for customers and logs all transactions with timestamps.",
    highlights: ["Project Leader"],
    tools: ["Java", "Swing"],
  },
] as const;