"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface HeadingWithAnchorProps {
  id: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

const defaultSizeByLevel: Record<number, string> = {
  1: "text-3xl",
  2: "text-2xl",
  3: "text-xl",
  4: "text-lg",
  5: "text-base",
  6: "text-sm",
};

export const HeadingWithAnchor: FC<HeadingWithAnchorProps> = ({
  id,
  level = 1,
  children,
  className,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      id={id}
      className={clsx(
        "group relative font-bold",
        defaultSizeByLevel[level],
        className,
      )}
    >
      <a href={`#${id}`} className="no-underline text-inherit">
        <span
          className={clsx(
            "absolute -ml-6 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity",
          )}
        >
          #
        </span>
        {children}
      </a>
    </HeadingTag>
  );
};