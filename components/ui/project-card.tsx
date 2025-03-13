import { FC } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  projectUrl: string;
  imageUrl: string;
  index: number;
  year: number;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  projectUrl,
  imageUrl,
  year,
}) => {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={600}
          className="w-full max-h-80 object-top object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-100 transition-opacity group-hover:opacity-0" />
      </div>

      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
            {title}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
            {year}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500/5 text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute right-6 top-6 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-500"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
};

export default ProjectCard;
