"use client";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold">About Me</h1>

      {/* Education Section */}
      <div className="flex flex-col gap-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span>🎓</span>
          <span>Education</span>
        </h2>

        {/* Education Item 1 */}
        <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg flex flex-col gap-4 bg-white dark:bg-gray-900 shadow">
          <span className="font-semibold text-lg">
            Master in{" "}
            <a
              href="https://www.inm.ntu.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 underline"
            >
              Computer Science
            </a>{" "}
            -{" "}
            <a
              href="https://www.ntu.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 underline"
            >
              National Taiwan University
            </a>
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Sep 2024 - Sep 2026</span>

          <ul className="list-inside list-disc pl-4 text-sm space-y-2">
            <li>
              Multimedia Information Retrieval Lab{" "}
              <a
                href="https://mirlab.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 underline"
              >
                (MIR Lab)
              </a>{" "}
              under the guidance of Prof. Jyh-Shing Roger Jang.
            </li>
            <li>
              <strong>Research:</strong> AI applications in FinTech, covering:
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">
                  Portfolio Optimization
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">
                  Quantitative Trading
                </span>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full">
                  Pairs Trading
                </span>
              </div>
            </li>
            <li>
              <strong>Industry Cooperation:</strong>{" "}
              <a
                href="https://www.esunfhc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 underline"
              >
                E.SUN Financial Holding
              </a>
            </li>
          </ul>
        </div>

        {/* Education Item 2 */}
        <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg flex flex-col gap-4 bg-white dark:bg-gray-900 shadow">
          <span className="font-semibold text-lg">
            Bachelor in{" "}
            <a
              href="https://im.mgt.ncu.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 underline"
            >
              Management Information System
            </a>{" "}
            -{" "}
            <a
              href="https://www.ncu.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 underline"
            >
              National Central University
            </a>
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Sep 2020 - Jun 2024
          </span>

          <ul className="list-inside list-disc pl-4 text-sm space-y-2">
            <li>
              <strong>Academic Achievements:</strong>
              <div className="mt-2">
                <div className="flex items-center gap-4">
                  <span>Cumulative GPA: 97.3/100</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <span>Class Ranking: 1/55 (Top 1.82%)</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <span>Department Ranking: 1/107 (Top 0.93%)</span>
                </div>
              </div>
            </li>
            <li>
              <strong>Coursework:</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  Assembly Language(CSIE)
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  Operating System(CSIE)
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  Computer Network(CSIE)
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  Data Structure(MIS)
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  Algorithm(MIS)
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  Web Programming(MIS)
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  Database Management(MIS)
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  System Analysis and Design(MIS)
                </span>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full">
                  Artificial Intelligence and Machine Learning(MIS)
                </span>
              </div>
            </li>
            <li>
              <strong>Awards:</strong> Dr. Shun-yi Chu Zyxel Scholarship(朱順一合勤),{" "}
              <a
                href="http://www.phitauphi.org.tw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 underline"
              >
                The Phi Tau Phi Scholastic Honor Society of the Republic of China(斐陶斐榮譽會員)
              </a>
            </li>
            <li>
              <strong>Societies:</strong>{" "}
              <a
                href="http://www.phitauphi.org.tw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 underline"
              >
                Google Developer Student Clubs (GDSC)
              </a>
              , Department Association
            </li>
          </ul>
        </div>
      </div>

      <div className="my-1 w-full border-t border-gray-200 dark:border-gray-800" />

      {/* Certifications Section */}
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span>🏅</span>
          <span>Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cert Item 1 */}
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
            <span className="font-medium">AWS Certified Cloud Practitioner</span>
            <span className="text-sm">Amazon Web Services</span>
            <span className="text-sm">Jul 2023</span>
            <span className="text-sm">ID: 7GNK0DV10FV41P9D</span>
            <div className="flex gap-4 mt-1">
              <a
                href="https://www.credly.com/badges/50dfe470-48c0-4336-a8f2-28b02412b50b"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
              >
                View Badge
              </a>
              <a
                href="/_static/certifications/AWS Certified Cloud Practitioner certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Cert Item 2 */}
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
            <span className="font-medium">Java EE 7 Application Developer</span>
            <span className="text-sm">Oracle</span>
            <span className="text-sm">Jul 2022</span>
            <span className="text-sm">ID: 286101419OCPJEE7AD</span>
            <div className="flex gap-4 mt-1">
              <a
                href="/_static/certifications/Oracle Certified Professional, Java EE 7 Application Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Cert Item 3 */}
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
            <span className="font-medium">Java SE 8 Programmer OCP</span>
            <span className="text-sm">Oracle</span>
            <span className="text-sm">Sep 2021</span>
            <span className="text-sm">ID: 286101419OCPJSE8</span>
            <div className="flex gap-4 mt-1">
              <a
                href="https://www.credly.com/badges/334c2e93-b7b5-4db3-ac92-1007f921b9d0"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
              >
                View Badge
              </a>
              <a
                href="/_static/certifications/Oracle Certified Professional, Java SE 8 Programmer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Cert Item 4 */}
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
            <span className="font-medium">Java SE 8 Programmer OCA</span>
            <span className="text-sm">Oracle</span>
            <span className="text-sm">Jul 2021</span>
            <span className="text-sm">ID: 286101419OCAJSE8</span>
            <div className="flex gap-4 mt-1">
              <a
                href="https://www.credly.com/badges/50dfe470-48c0-4336-a8f2-28b02412b50b"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
              >
                View Badge
              </a>
              <a
                href="/_static/certifications/Oracle Certified Associate, Java SE 8 Programmer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Cert Item 5 */}
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
            <span className="font-medium">Blue certificate, score: 810</span>
            <span className="text-sm">TOEIC</span>
            <span className="text-sm">Aug 2021</span>
            <span className="text-sm">ID: 21055942</span>
            <div className="flex gap-4 mt-1">
              <a
                href="/_static/certifications/多益藍色證書.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="my-1 w-full border-t border-gray-200 dark:border-gray-800" />

      {/* Work Experience Section */}
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span>💼</span>
          <span>Work Experience</span>
        </h2>

        

        <div className="flex flex-col gap-6">
          {/* Work Item 1 */}
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
            <span className="font-medium">
              Software Development Intern at {" "}
              <a
                href="https://www.trendmicro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-gray-400 hover:border-gray-600
                           transition-colors dark:border-gray-500 dark:hover:border-gray-300"
              >
                Trend Micro
              </a>
            </span>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              WSE Team
            </span>

            <span className="text-sm">Jul 2025 - Aug 2025</span>

            <div className="text-sm space-y-3">
              <div>
                <strong>Objectives:</strong>
                <ol className="list-decimal list-inside pl-4 mt-1 space-y-1">
                  <li>Monitor how many unique users encountered 5XX errors.</li>
                  <li>Identify where the errors occurred in the domain request flow.</li>
                </ol>
              </div>
              
              <div>
                <strong>Implementation:</strong>
                <ol className="list-decimal list-inside pl-4 mt-1 space-y-1">
                  <li><strong>Tracing:</strong> Connected cross-service requests using Correlation ID and Fingerprint.</li>
                  <li><strong>Logging:</strong> Analyzed microservice access logs through OpenSearch.</li>
                  <li><strong>Observability:</strong> Built Grafana Dashboards.</li>
                  <li><strong>AI Agent:</strong> Designed a FastAPI backend to integrate with the company's internal AI server.</li>
                </ol>
              </div>
              
              <div>
                <strong>Outcome:</strong>
                <p className="pl-4 mt-1">Established a comprehensive observability platform that reduced cross-service error troubleshooting time.</p>
              </div>
            </div>
          </div>


          {/* Work Item 1 */}
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
            <span className="font-medium">
              Cloud Engineer Intern at{" "}
              <a
                href="https://www.fubon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-gray-400 hover:border-gray-600
                           transition-colors dark:border-gray-500 dark:hover:border-gray-300"
              >
                Taipei Fubon Commercial Bank
              </a>
            </span>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Digital Technology R&D Department
            </span>

            <span className="text-sm">Jul 2024 - Aug 2024</span>

            <ul className="list-inside list-disc pl-4 text-sm space-y-1">
              <li>
                Attended meetings on cloud-native platforms(OpenShift, Anthos) and presented on Kubernetes (K8s) components.
              </li>
              <li>
                Set up development environments on a OpenShift cluster.
              </li>
              <li>
                Final Project: Deployed a chatbot to the cloud using AWS Layer 7 Load Balancer.
              </li>
            </ul>
          </div>

          {/* Work Item 2 */}
          <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
            <span className="font-medium">
              Department IT Assistant at{" "}
              <a
                href="https://www.ncu.edu.tw/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-gray-400 hover:border-gray-600
                           transition-colors dark:border-gray-500 dark:hover:border-gray-300"
              >
                National Central University
              </a>
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Institute of Applied Geology
            </span>
            <span className="text-sm">Sep 2022 - Jun 2024</span>

            <ul className="list-inside list-disc pl-4 text-sm space-y-1">
              <li>Built and managed websites using WordPress.</li>
              <li>Maintained network equipment and services, including DHCP, DNS, and Web servers.</li>
              <li>
                Developed a classroom reservation system integrated with the university’s portal using single sign-on
                (SSO).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-1 w-full border-t border-gray-200 dark:border-gray-800" />

      {/* Technologies Section */}
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span>🛠</span>
          <span>Technologies</span>
        </h2>

        <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-gray-900 shadow flex flex-col gap-4">
          <ul className="list-inside list-disc pl-4 text-sm space-y-2">
            {/* Languages */}
            <li>
              <strong>Languages:</strong>{" "}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Python (primary)
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Java
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Kotlin
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  PHP
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  SQL
                </span>
              </div>
            </li>

            {/* Web Development */}
            <li>
              <strong>Web Development:</strong>{" "}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Spring
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Spring Boot
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Spring Security
                </span>
              </div>
            </li>

            {/* Cloud & DevOps */}
            <li>
              <strong>Cloud & DevOps:</strong>{" "}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  AWS
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Docker
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Kubernetes
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  OpenSearch
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Grafana
                </span>
              </div>
            </li>

            {/* ML & DL */}
            <li>
              <strong>ML & DL:</strong>{" "}
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  PyTorch
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  TensorFlow
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  Scikit-learn
                </span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full">
                  W&amp;B
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>      

    </section>
  );
}
