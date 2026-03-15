import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 18,
  ...props
}: RevealProps) {
  void delay;
  void y;

  return (
    <div {...props}>
      {children}
    </div>
  );
}
