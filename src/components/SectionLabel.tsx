export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase">
      <span className="comic-burst flex h-10 w-10 items-center justify-center bg-destructive font-display text-lg text-paper">{index}</span>
      <span className="h-[2px] flex-1 bg-ink" />
      <span>{children}</span>
    </div>
  );
}
