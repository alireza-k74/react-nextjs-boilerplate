import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
}

const headingClasses = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
} as const;

export function Heading({ as: Component = "h2", className, ...props }: HeadingProps) {
  return <Component className={cn(headingClasses[Component], className)} {...props} />;
}
