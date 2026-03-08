export function Button({ children, className = "", variant, size, ...props }) {
  let base =
    "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm transition";
  let style =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      : variant === "ghost"
      ? "bg-transparent text-slate-900 dark:text-white"
      : "bg-slate-900 text-white dark:bg-white dark:text-slate-900";

  if (size === "icon") {
    base = "inline-flex h-10 w-10 items-center justify-center rounded-xl transition";
  }

  return (
    <button className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}
