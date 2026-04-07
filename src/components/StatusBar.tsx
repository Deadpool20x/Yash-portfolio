const MARQUEE_ITEMS = [
  "OPEN FOR WORK",
  "FULL STACK DEVELOPMENT",
  "AI & ML INTEGRATION",
  "MBIT UNIVERSITY",
  "GUJARAT, INDIA",
  "NEXT.JS · TYPESCRIPT",
  "SYSTEM STATUS: ONLINE",
  "OPEN FOR INTERNSHIPS",
  "DEEP LEARNING",
  "BUILDING REAL SYSTEMS",
];

const ALL_ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function StatusBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-ink border-t-[3px] border-ink flex items-center overflow-hidden"
      style={{ height: 30 }}
      aria-hidden="true"
    >
      <div className="bg-yellow border-r-[3px] border-ink h-[30px] leading-[30px] px-4 font-mono text-[0.65rem] font-bold whitespace-nowrap flex-shrink-0">
        {"/// LIVE"}
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {ALL_ITEMS.map((item, i) => (
            <span
              key={i}
              className="font-mono text-[0.65rem] text-paper px-8"
              style={{ opacity: 0.7 }}
            >
              <span className="text-yellow opacity-100">{"/// "}</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
