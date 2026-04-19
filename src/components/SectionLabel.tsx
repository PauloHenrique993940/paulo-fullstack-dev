export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase">
      <span className="bg-ink px-2 py-1 text-paper">{index}</span>
      <span className="h-[2px] flex-1 bg-ink" />
      <span>{children}</span>
    </div>
  );
}
