"use client";

import { EDUCATION, CERTIFICATIONS, WORK_EXPERIENCE } from "@/data/about";

export default function AboutPage() {
  return (
    <section className="flex flex-col gap-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold">About Me</h1>

      {/* Education Section */}
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span>🎓</span>
          <span>Education</span>
        </h2>
        {EDUCATION.map((edu, index) => (
          <div key={index} className="flex flex-col gap-1">
            {/* Degree - School (with links) */}
            <span className="font-medium">
              {/* Degree with link if available */}
              {edu.degreeUrl ? (
                <a
                  href={edu.degreeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300"
                >
                  {edu.degree}
                </a>
              ) : (
                edu.degree
              )}
              {" - "}
              {/* School with link if available */}
              {edu.schoolUrl ? (
                <a
                  href={edu.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300"
                >
                  {edu.school}
                </a>
              ) : (
                edu.school
              )}
            </span>

            <span className="text-sm">
              {edu.startDate} - {edu.endDate}
            </span>

            {/* Details */}
            <p className="text-sm">{edu.details}</p>
          </div>
        ))}
      </div>

      <div className="my-1 w-full border-t border-gray-200 dark:border-gray-800" />

      {/* Certifications Section */}
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span>✅</span>
          <span>Certifications</span>
        </h2>
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="font-medium">{cert.name}</span>
            <span className="text-sm">{cert.issuer}</span>
            <span className="text-sm">{cert.date}</span>
            <span className="text-sm">ID: {cert.credentialId}</span>

            {/* Badge Link */}
            {cert.badgeUrl && (
              <a
                href={cert.badgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-block border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300"
                
              >
                View Badge
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="my-1 w-full border-t border-gray-200 dark:border-gray-800" />

      {/* Work Experience Section */}
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span>💼</span>
          <span>Work Experience</span>
        </h2>
        {WORK_EXPERIENCE.map((job, index) => (
          <div key={index} className="flex flex-col gap-1">
            <span className="font-medium">
              {job.position} at{" "}
              {/* Company with link if available */}
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </span>
            <span className="text-sm">
              {job.startDate} - {job.endDate}
            </span>
            <ul className="list-inside list-disc text-sm">
              {job.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
