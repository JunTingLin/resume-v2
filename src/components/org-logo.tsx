interface OrgLogoProps {
  src: string;
  alt: string;
  size?: "sm" | "md";
}

export function OrgLogo({ src, alt, size = "sm" }: OrgLogoProps) {
  const sizeClass = size === "md" ? "w-12 h-12" : "w-10 h-10";
  return (
    <div
      className={`${sizeClass} flex-shrink-0 rounded-lg border border-gray-100 dark:border-gray-200 bg-white flex items-center justify-center p-1`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.parentElement!.style.display = "none";
        }}
      />
    </div>
  );
}
