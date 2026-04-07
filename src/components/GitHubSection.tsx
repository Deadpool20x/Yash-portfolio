import { getGitHubStats } from "@/lib/github";
import SectionHeader from "./SectionHeader";
import RevealWrapper from "./RevealWrapper";

export default async function GitHubSection() {
  const stats = await getGitHubStats();

  const joinedYear = stats?.created_at
    ? new Date(stats.created_at).getFullYear()
    : "—";

  const GH_STATS = [
    { label: "REPOSITORIES", value: stats?.public_repos ?? "—" },
    { label: "FOLLOWERS", value: stats?.followers ?? "—" },
    { label: "FOLLOWING", value: stats?.following ?? "—" },
    { label: "JOINED", value: joinedYear },
  ];

  return (
    <section id="github" className="border-b-[3px] border-ink">
      <SectionHeader
        title=">_ CODING_STATS // LIVE_FEED"
        count="SECTION_05 / 06"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        {/* Left — stat cards */}
        <RevealWrapper className="border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-ink p-6 sm:p-8 lg:p-12">
          <div className="font-mono text-[0.72rem] text-[#999] mb-6 uppercase tracking-[2px]">
            GITHUB // Deadpool20x
          </div>

          {GH_STATS.map((s) => (
            <div
              key={s.label}
              className="border-[3px] border-ink px-5 py-4 mb-4 shadow-brutal flex justify-between items-center"
            >
              <span className="font-mono text-[0.72rem] uppercase tracking-widest text-[#444]">
                {s.label}
              </span>
              <span className="font-mono text-[1.3rem] sm:text-[1.4rem] font-bold">
                {s.value}
              </span>
            </div>
          ))}

          <a
            href="https://github.com/Deadpool20x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile for Deadpool20x"
            className="block text-center font-mono text-[0.75rem] font-bold px-4 py-3 border-2 border-ink bg-ink text-yellow uppercase tracking-wide mt-2 transition-colors duration-100 hover:bg-yellow hover:text-ink"
          >
            VIEW_GH →
          </a>
        </RevealWrapper>

        {/* Right — contribution graphs */}
        <RevealWrapper delay={0.1} className="p-6 sm:p-8 lg:p-12">
          <div className="font-mono text-[0.72rem] text-[#999] mb-4 uppercase tracking-[2px]">
            CONTRIBUTION_MATRIX // LAST 12 MONTHS
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/FFD600/Deadpool20x"
            alt="GitHub contribution graph for Yash Patel (Deadpool20x)"
            className="w-full border-[3px] border-ink shadow-brutal"
            loading="lazy"
          />

          <div className="mt-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-stats.vercel.app/api?username=Deadpool20x&show_icons=true&theme=default&hide_border=true&title_color=0a0a0a&icon_color=FFD600&text_color=333333&bg_color=f5f5f0"
              alt="GitHub stats summary for Yash Patel"
              className="w-full border-[3px] border-ink shadow-brutal"
              loading="lazy"
            />
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
