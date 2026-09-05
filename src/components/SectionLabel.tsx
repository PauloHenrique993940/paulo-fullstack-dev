export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-highlight font-mono text-xs text-ink">{index}</span>
      <span className="h-[2px] flex-1 bg-ink" />
      <span>{children}</span>
    </div>
  );
}
