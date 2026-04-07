export default function Footer() {
  return (
    <footer className="bg-ink text-paper px-6 sm:px-8 py-8 pb-[calc(2rem+30px)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t-[3px] border-ink">
      <div>
        <div className="font-mono text-[1.1rem] sm:text-[1.2rem] font-bold text-yellow">
          YASH PATEL
        </div>
        <div className="font-mono text-[0.68rem] text-[#555] mt-1">
          © 2026 Yash Kiranbhai Patel // SYSTEM_END
        </div>
      </div>

      <div className="font-mono text-right">
        <div className="text-[0.68rem] text-[#444]">
          Built with: Next.js · TypeScript · Tailwind CSS
        </div>
        <div className="text-[0.68rem] text-yellow mt-1">
          Design: Neo-Brutalism
        </div>
      </div>
    </footer>
  );
}
