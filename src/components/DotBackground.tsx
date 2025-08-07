"use client";

import { cn } from "@/lib/utils";
import React, { FunctionComponent, type PropsWithChildren } from "react";

export const DotBackground: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-background relative z-0 flex h-full w-full items-center justify-center">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#262626_1px,transparent_1px)]",
        )}
      />

      <div className="bg-background pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="z-10 h-full w-full">{children}</div>
    </div>
  );
};
