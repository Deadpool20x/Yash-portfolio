import { HACKATHONS } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="border-b-[3px] border-ink">
      <SectionHeader
        title=">_ EXPERIENCE_LOG // HACKATHONS"
        count="SECTION_04 / 06"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {HACKATHONS.map((h, i) => (
          <RevealWrapper
            key={i}
            delay={i * 0.1}
            className={`hack-card p-6 sm:p-8 border-b-[3px] border-ink ${
              i % 2 === 0 ? "lg:border-r-[3px]" : "lg:border-b-0"
            } ${i === HACKATHONS.length - 1 && HACKATHONS.length % 2 !== 0 ? "lg:border-b-0" : ""}`}
          >
            {/* Year / status line */}
            <div className="font-mono text-[0.68rem] uppercase tracking-[2px] text-[#999] mb-3">
              {h.year} {"// "}
              <span
                className={
                  h.status === "UPCOMING" ? "text-red" : "text-green"
                }
              >
                {h.status}
              </span>
            </div>

            <h3 className="text-[1.1rem] sm:text-[1.2rem] font-bold tracking-tight mb-1">
              {h.title}
            </h3>
            <div className="font-mono text-[0.72rem] text-[#666] mb-4">
              {h.org}
            </div>
            <p className="text-[0.86rem] sm:text-[0.88rem] leading-relaxed text-[#333]">
              {h.description}
            </p>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
