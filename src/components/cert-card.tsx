import { OrgLogo } from "./org-logo";

interface CertLink {
  label: string;
  href: string;
}

export interface CertCardProps {
  logo: string;
  name: string;
  issuer: string;
  date: string;
  id: string;
  links: CertLink[];
}

export function CertCard({ logo, name, issuer, date, id, links }: CertCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg flex flex-col gap-2 bg-white dark:bg-gray-900 shadow">
      <div className="flex items-center gap-3">
        <OrgLogo src={logo} alt={`${issuer} logo`} />
        <span className="font-medium">{name}</span>
      </div>
      <span className="text-sm">{issuer}</span>
      <span className="text-sm">{date}</span>
      <span className="text-sm">ID: {id}</span>
      <div className="flex gap-4 mt-1">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gray-400 hover:border-gray-600 transition-colors dark:border-gray-500 dark:hover:border-gray-300 text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
