import { PROJECTS, Project } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";

const STATUS_STYLE: Record<Project["status"], string> = {
  PRODUCTION: "bg-yellow text-ink border-ink",
  RESEARCH: "bg-red text-paper border-ink",
  COMING_SOON: "bg-[#333] text-paper border-[#333]",
};

const ACCENT: string[] = ["bg-yellow", "bg-red", "bg-blue", "bg-green"];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isRightCol = index % 2 !== 0;

  return (
    <RevealWrapper
      delay={index * 0.07}
      className={`project-card relative overflow-hidden bg-paper border-b-[3px] border-ink p-6 sm:p-8 transition-colors duration-150 hover:bg-[#fafaf0] ${
        !isRightCol ? "lg:border-r-[3px]" : ""
      }`}
    >
      {/* Colour accent bar at top */}
      <div
        className={`absolute top-0 left-0 right-0 h-[5px] ${ACCENT[index % ACCENT.length]}`}
        aria-hidden="true"
      />

      {/* Num + status badge */}
      <div className="flex flex-wrap items-center gap-2 mb-3 mt-1">
        <span className="font-mono text-[0.68rem] text-[#999] font-bold uppercase tracking-[2px]">
          {project.num}
        </span>
        <span
          className={`font-mono text-[0.58rem] font-bold px-2 py-0.5 border-2 uppercase tracking-widest ${
            STATUS_STYLE[project.status]
          }`}
        >
          {project.status.replace(/_/g, " ")}
        </span>
      </div>

      <h3 className="text-[1.25rem] sm:text-[1.35rem] font-bold tracking-tight leading-tight mb-1">
        {project.title}
      </h3>
      <p className="font-mono text-[0.7rem] text-[#666] mb-4">
        {project.subtitle}
      </p>
      <p className="text-[0.88rem] sm:text-[0.9rem] leading-relaxed text-[#333] mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.6rem] font-bold px-2 py-1 border-2 border-ink bg-paper uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action links */}
      {project.status !== "COMING_SOON" ? (
        <div className="flex flex-wrap gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View code for ${project.title} on GitHub`}
              className="font-mono text-[0.72rem] font-bold px-4 py-2 border-2 border-ink bg-ink text-yellow uppercase tracking-wide transition-colors duration-100 hover:bg-yellow hover:text-ink"
            >
              VIEW CODE →
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="font-mono text-[0.72rem] font-bold px-4 py-2 border-2 border-ink bg-paper text-ink uppercase tracking-wide transition-colors duration-100 hover:bg-ink hover:text-yellow"
            >
              LIVE DEMO →
            </a>
          )}
        </div>
      ) : (
        <p className="font-mono text-[0.72rem] text-[#999] italic">
          {"// In design phase. Not yet built."}
        </p>
      )}
    </RevealWrapper>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b-[3px] border-ink">
      <SectionHeader
        title=">_ SELECTED_WORKS // PROJECT_DATABASE"
        count="SECTION_03 / 06"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}

        {/* Placeholder 4th cell */}
        <div
          className="flex flex-col items-center justify-center text-center p-8 min-h-[260px] bg-[#fafafa] border-b-[3px] border-ink lg:border-b-0"
          aria-hidden="true"
        >
          <div className="font-mono text-[2.5rem] mb-3 text-[#ccc]">+</div>
          <div className="font-mono text-[0.7rem] text-[#999] uppercase tracking-[2px] mb-3">
            MORE_INCOMING
          </div>
          <p className="text-[#aaa] text-[0.88rem] mb-5">
            Always building. Always shipping.
          </p>
          <a
            href="https://github.com/Deadpool20x"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.72rem] font-bold px-4 py-2 border-2 border-ink bg-paper text-ink uppercase tracking-wide transition-colors duration-100 hover:bg-ink hover:text-yellow"
          >
            VIEW ALL ON GITHUB →
          </a>
        </div>
      </div>
    </section>
  );
}
