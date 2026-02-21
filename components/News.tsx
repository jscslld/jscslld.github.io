"use client"

import { Badge, Divider } from "@heroui/react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Link, Image, Spacer } from "@heroui/react";
import Icon from "@icon-park/react/es/all";
import { HFIcon } from "./icons";

import React from "react";

/** ============ utils ============ */
function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

function formatMonth(date: string) {
  // date: "2026-01"
  const [y, m] = date.split("-");
  return `${y}-${m}`;
}

function groupByYear(items: NewsItem[]) {
  const map = new Map<string, NewsItem[]>();
  items.forEach((it) => {
    const year = it.date.slice(0, 4);
    const arr = map.get(year) ?? [];
    arr.push(it);
    map.set(year, arr);
  });

  // year desc, within year desc by date
  const years = Array.from(map.keys()).sort((a, b) => (a < b ? 1 : -1));
  return years.map((y) => ({
    year: y,
    items: (map.get(y) ?? []).slice().sort((a, b) => (a.date < b.date ? 1 : -1)),
  }));
}

/** ============ types ============ */
export type NewsTone = "default" | "success" | "info" | "warning" | "danger";

export type NewsItem = {
  id: string;
  date: string; // "YYYY-MM" or "YYYY-MM-DD"
  title: React.ReactNode;
  href?: string; // optional click-through
  badge?: string; // e.g. "ICLR", "Release", "Award"
  tone?: NewsTone;
  icon?: React.ReactNode; // optional left icon/emoji
  meta?: React.ReactNode; // small secondary line
};

/** ============ atoms ============ */
function ToneBadge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: NewsTone;
}) {
  const toneCls =
    tone === "success"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/20"
      : tone === "info"
      ? "bg-sky-50 text-sky-700 ring-sky-200 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-400/20"
      : tone === "warning"
      ? "bg-amber-50 text-amber-800 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-400/20"
      : tone === "danger"
      ? "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/20"
      : "bg-zinc-50 text-zinc-700 ring-zinc-200 dark:bg-white/5 dark:text-zinc-300 dark:ring-white/10";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        toneCls
      )}
    >
      {children}
    </span>
  );
}

function Dot() {
  return (
    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
      <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
      <span className="absolute inline-flex h-5 w-5 rounded-full bg-zinc-200/60 dark:bg-zinc-700/30" />
    </span>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** ============ core components ============ */

export function NewsCard({
  title = "News",
  description,
  children,
  rightSlot,
}: {
  title?: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  rightSlot?: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex items-start justify-between gap-3 px-5 pt-5">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              {title}
            </h2>
            {description ? (
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {description}
              </p>
            ) : null}
          </div>
          {rightSlot ? <div className="pt-0.5">{rightSlot}</div> : null}
        </div>
        <div className="px-2 pb-4 pt-3 sm:px-5">{children}</div>
      </div>
    </section>
  );
}

export function NewsTimeline({
  items,
  groupedByYear = true,
  initialVisible = 8,
  moreLabel = "More News",
}: {
  items: NewsItem[];
  groupedByYear?: boolean;
  initialVisible?: number;
  moreLabel?: string;
}) {
  const [expanded, setExpanded] = React.useState(false);

  const visibleItems = expanded ? items : items.slice(0, initialVisible);
  const hiddenCount = Math.max(0, items.length - initialVisible);

  const content = groupedByYear ? groupByYear(visibleItems) : null;

  return (
    <div className="space-y-4">
      {groupedByYear ? (
        <div className="space-y-6">
          {content!.map(({ year, items: ys }) => (
            <div key={year} className="grid gap-3">
              <div className="flex items-center gap-2 px-3 sm:px-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  {year}
                </span>
                <span className="h-px flex-1 bg-zinc-100 dark:bg-zinc-900" />
              </div>

              <ul className="relative space-y-2">
                <div className="absolute left-[18px] top-0 h-full w-px bg-zinc-100 dark:bg-zinc-900 sm:left-[14px]" />
                {ys.map((it) => (
                  <NewsTimelineItem key={it.id} item={it} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="relative space-y-2">
          <div className="absolute left-[18px] top-0 h-full w-px bg-zinc-100 dark:bg-zinc-900 sm:left-[14px]" />
          {visibleItems.map((it) => (
            <NewsTimelineItem key={it.id} item={it} />
          ))}
        </ul>
      )}

      {hiddenCount > 0 ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-white/5"
        >
          <span>{expanded ? "Show Less" : moreLabel}</span>
          <span className="text-xs text-zinc-400">
            {expanded ? "" : `(+${hiddenCount})`}
          </span>
          <ChevronDownIcon
            className={cn(
              "transition-transform duration-200 text-zinc-500 dark:text-zinc-400",
              expanded && "rotate-180"
            )}
          />
        </button>
      ) : null}
    </div>
  );
}

export function NewsTimelineItem({ item }: { item: NewsItem }) {
  const dateText = item.date.length >= 7 ? formatMonth(item.date.slice(0, 7)) : item.date;

  const Title = (
    <span className="text-zinc-900 dark:text-zinc-100">
      {item.title}
    </span>
  );

  return (
    <li className="group relative pl-10 sm:pl-9">
      <div className="absolute left-[13px] top-3 sm:left-[9px]">
        <Dot />
      </div>

      <div
        className={cn(
          "rounded-xl border border-transparent px-3 py-2",
          "hover:border-zinc-200 hover:bg-zinc-50 dark:hover:border-zinc-800 dark:hover:bg-white/5",
          "transition-colors"
        )}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
            [{dateText}]
          </span>

          {item.icon ? (
            <span className="text-sm leading-none">{item.icon}</span>
          ) : null}

          {item.badge ? <ToneBadge tone={item.tone}>{item.badge}</ToneBadge> : null}
        </div>

        <div className="mt-1">
          {item.href ? (
            <a
              href={item.href}
              className="underline decoration-zinc-200 underline-offset-4 hover:decoration-zinc-400 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
            >
              {Title}
            </a>
          ) : (
            Title
          )}
        </div>

        {item.meta ? (
          <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {item.meta}
          </div>
        ) : null}
      </div>
    </li>
  );
}

/** ============ optional: compact list variant ============ */
export function NewsCompactList({
  items,
  initialVisible = 10,
}: {
  items: NewsItem[];
  initialVisible?: number;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? items : items.slice(0, initialVisible);

  return (
    <div className="space-y-3">
      <ul className="divide-y divide-zinc-100 overflow-hidden rounded-xl border border-zinc-200 bg-white dark:divide-zinc-900 dark:border-zinc-800 dark:bg-zinc-950">
        {visible.map((it) => (
          <li key={it.id} className="px-4 py-3 hover:bg-zinc-50 dark:hover:bg-white/5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
                    [{formatMonth(it.date.slice(0, 7))}]
                  </span>
                  {it.badge ? <ToneBadge tone={it.tone}>{it.badge}</ToneBadge> : null}
                  {it.icon ? <span className="text-sm">{it.icon}</span> : null}
                </div>

                <div className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {it.href ? (
                    <a
                      href={it.href}
                      className="hover:underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700"
                    >
                      {it.title}
                    </a>
                  ) : (
                    it.title
                  )}
                </div>

                {it.meta ? (
                  <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {it.meta}
                  </div>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {items.length > initialVisible ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-white/5"
        >
          {expanded ? "Show Less" : "More News"}
          <ChevronDownIcon className={cn("text-zinc-500", expanded && "rotate-180")} />
        </button>
      ) : null}
    </div>
  );
}

/** ============ usage example ============ */
export function News() {
  const items: NewsItem[] = [
    {
    id: "n-2026-02-21-1",
    date: "2026-02-21",
    icon: "🎉",
    badge: "CVPR 2026",
    tone: "success",
    title: (
        <>
        <a
            href="https://av-reasoner.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
            AV-Reasoner
        </a>{" "}
        is accepted by CVPR 2026.
        </>
    ),
    },
    {
    id: "n-2026-02-01-1",
    date: "2026-02-01",
    icon: "🎉",
    badge: "IJCV",
    tone: "success",
    title: (
        <>
        <a
            href="https://link.springer.com/article/10.1007/s11263-025-02608-y"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
            EgoExoSurvey
        </a>{" "}
        is accepted by IJCV.
        </>
    ),
    },
    {
    id: "n-2025-12-01-1",
    date: "2025-12-01",
    icon: "🚀",
    badge: "Release",
    tone: "info",
    title: (
        <>
            We introduce{" "}
            <a
                href="https://arxiv.org/abs/2512.02005"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
                Audio-Visual Affordance Grounding
            </a>
            , a novel task for segmenting object interaction regions from action sounds.
        </>
    ),
    },
    {
    id: "n-2025-09-18-1",
    date: "2025-09-18",
    icon: "🎉",
    badge: "NIPS 2025",
    tone: "success",
    title: (
        <>
        <a
            href="https://arxiv.org/abs/2504.15271"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
            Eagle 2.5
        </a>{" "}is accepted by NIPS 2025. It is a family of frontier VLMs designed for long-context multimodal learning.
        </>
    ),
    },
    {
    id: "n-2025-06-05-1",
    date: "2025-06-05",
    icon: "🚀",
    badge: "Release",
    tone: "info",
    title: (
        <>
        We present{" "}
        <a
            href="https://av-reasoner.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
            AV-Reasoner
        </a>, a audio-visual counting benchmark. It has been integrated into VlmevalKit.
        </>
    ),
    },
    // {
    //   id: "n-2026-01-1",
    //   date: "2026-01",
    //   icon: "🎉",
    //   badge: "Test",
    //   tone: "success",
    //   title: "Test",
    // },
    // {
    //   id: "n-2026-01-2",
    //   date: "2026-01",
    //   icon: "🚀",
    //   badge: "Release",
    //   tone: "info",
    //   title: "Test",
    //   href: "#",
    //   meta: "Test",
    // },
    // {
    //   id: "n-2025-08-1",
    //   date: "2025-08",
    //   badge: "Test",
    //   tone: "info",
    //   title: "Test",
    // },
    // {
    //   id: "n-2025-07-1",
    //   date: "2025-07",
    //   badge: "Test",
    //   tone: "warning",
    //   title: "Test",
    // },
    // {
    //   id: "n-2024-12-1",
    //   date: "2024-12",
    //   badge: "Test",
    //   tone: "default",
    //   title: "Test",
    // },
  ];

  return (
    <div className="mb-3">
        <h1 id="publications" className="text-xl font-semibold">🔥 News</h1>
        <Divider className="my-2 bg-default-100" />

        <NewsTimeline items={items} initialVisible={10} moreLabel="More News" />
        {/* 或者用紧凑版： */}
        {/* <NewsCompactList items={items} initialVisible={6} /> */}
    </div>
  );
}