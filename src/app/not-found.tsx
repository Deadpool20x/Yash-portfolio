import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-8">
      <div className="text-center border-[3px] border-ink shadow-brutal p-10 sm:p-14 max-w-md w-full bg-paper">
        <div
          className="font-mono font-bold text-yellow leading-none mb-4"
          style={{
            fontSize: "clamp(4rem, 12vw, 6rem)",
            WebkitTextStroke: "2px #0a0a0a",
          }}
        >
          404
        </div>
        <div className="font-mono text-[0.75rem] text-[#666] mb-6 uppercase tracking-[2px]">
          ERROR: PAGE_NOT_FOUND // ROUTE_UNDEFINED
        </div>
        <p className="text-[1rem] text-[#333] mb-8 leading-relaxed">
          This page doesn&apos;t exist. Even I refuse to build things that
          don&apos;t work.
        </p>
        <Link
          href="/"
          className="inline-block bg-ink text-yellow border-[3px] border-ink px-6 py-3 font-mono font-bold text-[0.85rem] uppercase tracking-widest shadow-brutal transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg"
        >
          ← RETURN HOME
        </Link>
      </div>
    </div>
  );
}
