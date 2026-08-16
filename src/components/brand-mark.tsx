export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary/12 ring-1 ring-primary/30 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" aria-hidden="true">
        <path
          d="M12 2.5 20.5 7.25v9.5L12 21.5 3.5 16.75v-9.5L12 2.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="2.6" fill="currentColor" />
      </svg>
    </span>
  );
}
