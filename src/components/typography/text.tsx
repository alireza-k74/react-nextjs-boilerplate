import * as React from "react";
import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  muted?: boolean;
}

export function Text({ className, muted, ...props }: TextProps) {
  return (
    <p
      className={cn("text-base leading-7", muted && "text-muted-foreground", className)}
      {...props}
    />
  );
}
