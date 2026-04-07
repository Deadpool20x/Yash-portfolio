interface SectionHeaderProps {
  title: string;
  count: string;
}

export default function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <div className="bg-ink text-yellow px-6 lg:px-8 py-4 border-b-[3px] border-ink flex items-center justify-between">
      <span className="font-mono text-[0.85rem] lg:text-[1rem] font-bold uppercase tracking-[2px]">
        {title}
      </span>
      <span className="font-mono text-[0.65rem] lg:text-[0.72rem] text-[#666] tracking-widest hidden sm:block">
        {count}
      </span>
    </div>
  );
}
