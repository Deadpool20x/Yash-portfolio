import { SKILLS, SkillLevel } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";

function LevelTag({ level }: { level: SkillLevel }) {
  return (
    <span
      className={`font-mono text-[0.6rem] font-bold px-2 py-0.5 border-2 uppercase whitespace-nowrap flex-shrink-0 ${
        level === "ADVANCED"
          ? "bg-yellow text-ink border-ink"
          : "bg-blue text-paper border-blue"
      }`}
    >
      {level}
    </span>
  );
}

const ROW_ONE = SKILLS.slice(0, 3);
const ROW_TWO = SKILLS.slice(3);

function SkillRow({ categories }: { categories: typeof SKILLS }) {
  return (
    <div
      className="grid border-b-[3px] border-ink last:border-b-0"
      style={{
        gridTemplateColumns: `repeat(${categories.length}, 1fr)`,
      }}
    >
      {categories.map((cat, i) => (
        <RevealWrapper
          key={cat.title}
          delay={i * 0.05}
          className={`${i < categories.length - 1 ? "border-r-[3px] border-ink" : ""}`}
        >
          <div className="bg-yellow border-b-[3px] border-ink px-4 sm:px-5 py-3 font-mono text-[0.65rem] sm:text-[0.75rem] font-bold uppercase tracking-[2px]">
            {cat.title}
          </div>
          {cat.skills.map((skill, j) => (
            <div
              key={skill.name}
              className={`skill-item flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 transition-colors duration-100 hover:bg-yellow gap-2 ${
                j < cat.skills.length - 1 ? "border-b-2 border-[#e0e0e0]" : ""
              }`}
            >
              <span className="text-[0.82rem] sm:text-[0.9rem] font-semibold">
                {skill.name}
              </span>
              <LevelTag level={skill.level} />
            </div>
          ))}
        </RevealWrapper>
      ))}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="border-b-[3px] border-ink">
      <SectionHeader
        title=">_ TECH_STACK // SYSTEM_NODES"
        count="SECTION_02 / 06"
      />
      {/* Mobile: single column */}
      <div className="block lg:hidden">
        {SKILLS.map((cat, i) => (
          <RevealWrapper
            key={cat.title}
            delay={i * 0.04}
            className="border-b-[3px] border-ink last:border-b-0"
          >
            <div className="bg-yellow border-b-[3px] border-ink px-5 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[2px]">
              {cat.title}
            </div>
            {cat.skills.map((skill, j) => (
              <div
                key={skill.name}
                className={`flex items-center justify-between px-5 py-3 gap-2 ${
                  j < cat.skills.length - 1 ? "border-b-2 border-[#e0e0e0]" : ""
                }`}
              >
                <span className="text-[0.88rem] font-semibold">{skill.name}</span>
                <LevelTag level={skill.level} />
              </div>
            ))}
          </RevealWrapper>
        ))}
      </div>
      {/* Desktop: 3-column grid rows */}
      <div className="hidden lg:block">
        <SkillRow categories={ROW_ONE} />
        <SkillRow categories={ROW_TWO} />
      </div>
    </section>
  );
}
