import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const hasWidthOverride = /(?:^|\s)max-w-/.test(className);
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-8 ${hasWidthOverride ? "" : "max-w-6xl"} ${className}`}
    >
      {children}
    </div>
  );
}