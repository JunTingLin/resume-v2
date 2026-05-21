import { GitHubIcon, YouTubeIcon } from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import Image from "next/image";

type Props = {
  project: {
    title: string;
    repo?: string;
    youtube?: string;
    thumbnail?: string;
    description: string;
    highlights?: readonly string[];
  };
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50"
      key={project.title}
    >
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={`Logo of ${project.title}`}
          className="h-50 w-full rounded-t-lg object-cover bg-no-repeat"
          width={0}
          height={0}
          unoptimized
        />
      )}
      <div className="p-4">
        <a className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {project.title}
        </a>
        <div className=" z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
          {project.description}
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="z-10 mt-4">
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <span
                  key={item}
                  className="inline-block bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300
                             px-2 py-0.5 text-xs rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center pt-4 gap-4">
          {project.repo && (
            <SocialLink
              icon={GitHubIcon}
              href={project.repo}
              className="h-6 w-6 flex-none"
            />
          )}
          {project.youtube && (
            <SocialLink
              icon={YouTubeIcon}
              href={project.youtube}
              className="h-6 w-6 flex-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};
