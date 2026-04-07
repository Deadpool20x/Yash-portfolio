import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";

const INFO_ROWS = [
  { key: "NAME", val: "Yash Kiranbhai Patel", link: null, highlight: false },
  { key: "UNIVERSITY", val: "MBIT, New Vallabh Vidyanagar, Gujarat", link: null, highlight: false },
  { key: "DEGREE", val: "B.Tech — Information Technology", link: null, highlight: false },
  { key: "YEAR", val: "3rd Year (2023 – Present)", link: null, highlight: false },
  { key: "CGPA", val: "7.69 / 10.0", link: null, highlight: false },
  { key: "LOCATION", val: "Gujarat, India", link: null, highlight: false },
  { key: "EMAIL", val: "yashpatelkiran4@gmail.com", link: null, highlight: false },
  { key: "STATUS", val: "🟢 AVAILABLE FOR INTERNSHIPS", link: null, highlight: true },
  { key: "GITHUB", val: "github.com/Deadpool20x", link: "https://github.com/Deadpool20x", highlight: false },
  { key: "LANGUAGES", val: "English · Gujarati · Hindi", link: null, highlight: false },
];

export default function AboutSection() {
  return (
    <section id="about" className="border-b-[3px] border-ink">
      <SectionHeader title=">_ ABOUT // WHO_AM_I" count="SECTION_01 / 06" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — bio text */}
        <RevealWrapper className="border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-ink p-6 sm:p-8 lg:p-12">
          <h2
            className="font-bold tracking-[-2px] leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            I build things that{" "}
            <mark className="bg-yellow px-1 not-italic">actually work.</mark>
          </h2>
          <p className="text-[1rem] leading-relaxed text-[#333] mb-4">
            I&apos;m Yash Patel, a 3rd-year B.Tech IT student at MBIT
            University, Gujarat. I specialize in building production-grade
            full-stack applications with deep AI/ML integration — not just
            demos, but real systems with real architecture.
          </p>
          <p className="text-[1rem] leading-relaxed text-[#333] mb-4">
            My projects span AI-powered civic management platforms, real-time
            cognitive load estimators using dual-branch deep learning, and
            full-stack systems built to production standards. I don&apos;t just
            write code — I design systems.
          </p>
          <p className="text-[1rem] leading-relaxed text-[#333]">
            My approach: pick a real problem, understand the architecture before
            writing the first line, and ship only what works. No vaporware. No
            premature complexity. Just working software.
          </p>
        </RevealWrapper>

        {/* Right — info table */}
        <RevealWrapper delay={0.1} className="p-6 sm:p-8 lg:p-12">
          <div className="border-[3px] border-ink shadow-brutal">
            {INFO_ROWS.map((row, i) => (
              <div
                key={i}
                className={`flex font-mono text-[0.75rem] sm:text-[0.8rem] ${
                  i < INFO_ROWS.length - 1 ? "border-b-2 border-ink" : ""
                }`}
              >
                <div className="bg-ink text-yellow px-3 sm:px-4 py-3 min-w-[110px] sm:min-w-[130px] font-bold flex-shrink-0">
                  {row.key}
                </div>
                <div
                  className={`px-3 sm:px-4 py-3 break-all ${
                    row.highlight ? "text-green font-bold" : ""
                  }`}
                >
                  {row.link ? (
                    <a
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue hover:underline"
                    >
                      {row.val}
                    </a>
                  ) : (
                    row.val
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
