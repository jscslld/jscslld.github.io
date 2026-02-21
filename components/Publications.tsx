"use client";

import React from "react";
import {
  Badge,
  Divider,
  Card,
  CardHeader,
  CardBody,
  Link,
  Image,
  Spacer,
} from "@heroui/react";
import Icon from "@icon-park/react/es/all";
import { HFIcon } from "./icons";

/** ===== Types ===== */
type Author = {
  name: string;
  highlight?: boolean; // 是否强调显示（比如你自己）
};

type PublicationLink =
  | { type: "paper"; label?: string; href: string }
  | { type: "code"; label?: string; href: string }
  | { type: "model"; label?: string; href: string }
  | { type: "benchmark"; label?: string; href: string }
  | { type: "demo"; label?: string; href: string }
  | { type: "custom"; label: string; href: string; icon?: React.ReactNode };

type Publication = {
  id: string;
  title: string;
  href: string; // 详情页 or 外链
  venue?: string; // e.g. CVPR 2026 / NeurIPS 2025 / IJCV
  venueBadgePosition?: "left" | "right";
  image?: {
    src: string;
    alt?: string;
  };
  authors: Author[];
  abstract?: string;
  links?: PublicationLink[];
};

/** ===== Small utils ===== */
function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

function renderLinkIcon(type: PublicationLink["type"]) {
  switch (type) {
    case "paper":
      return <Icon type="file-pdf-one" />;
    case "code":
      return <Icon type="github" />;
    case "model":
    case "benchmark":
      return <HFIcon />;
    case "demo":
      return <Icon type="api-app" />;
    default:
      return null;
  }
}

function renderLinkLabel(link: PublicationLink) {
  if (link.type === "custom") return link.label;
  return link.label ?? (link.type[0].toUpperCase() + link.type.slice(1));
}

/** ===== Reusable sub components ===== */
function AuthorsLine({ authors }: { authors: Author[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-0.5 gap-y-1 text-base tracking-tight text-default-400">
      {authors.map((a, idx) => (
        <React.Fragment key={`${a.name}-${idx}`}>
          <span
            className={cn(
              a.highlight &&
                "font-bold underline decoration-2 underline-offset-2 text-gray-600"
            )}
          >
            {a.name}
          </span>
          {idx !== authors.length - 1 && <span>,</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function VenueBadge({
  venue,
  position = "left",
}: {
  venue?: string;
  position?: "left" | "right";
}) {
  if (!venue) return null;

  return (
    <div
      className={cn(
        "absolute top-2 z-20 pointer-events-none",
        position === "left" ? "left-2" : "right-2"
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "inline-flex items-center",
          "px-3 py-1",
          "text-sm font-medium leading-none",
          "rounded-md",
          "bg-blue-600 text-white",
          "shadow-sm",
          "select-none",
          "whitespace-nowrap"
        )}
      >
        {venue}
      </span>
    </div>
  );
}

function pickCols(abstract: string) {
  const t = abstract.trim().replace(/\s+/g, " ");
  const n = t.length;

  // 摘要很短：图片更窄（更高），文本更宽（更矮）
  if (n < 220) return "md:grid-cols-[180px_1fr]";

  // 摘要正常：均衡
  if (n < 520) return "md:grid-cols-[220px_1fr]";

  // 摘要很长：图片稍宽一点（信息更清楚），文本稍窄（避免一行太长）
  return "md:grid-cols-[260px_1fr]";
}

function PublicationCard({ pub }: { pub: Publication }) {
  const hasMedia = Boolean(pub.image?.src);
  const hasAbstract = Boolean(pub.abstract?.trim());
  const hasLinks = Boolean(pub.links?.length);

  return (
    <Card className="mx-0 my-4 overflow-hidden rounded-xl" shadow="sm">
      <div
        className={cn(
          "flex flex-col gap-4 p-4",
          hasMedia && "md:flex-row md:items-stretch"
        )}
      >
        {/* Left Image */}
        {hasMedia && (
        <div className="relative w-full md:w-[min(40%,400px)] shrink-0">
            <div className="h-full overflow-hidden rounded-lg">
            <Image
                src={pub.image!.src}
                alt={pub.image?.alt ?? pub.title}
                removeWrapper
                shadow="none"
                className="w-full h-full object-fill"
            />
            </div>
        </div>
        )}

        {/* Right Content (title + authors + abstract + links) */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Title Row */}
          <div className="flex items-start justify-between gap-3">
            <Link
              href={pub.href}
              className="min-w-0 flex-1 text-base font-semibold leading-snug text-default-600 hover:underline"
            >
              {pub.title}
            </Link>

            {pub.venue && (
              <span className="shrink-0 inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-blue-600 text-white shadow-sm whitespace-nowrap">
                {pub.venue}
              </span>
            )}
          </div>

          <div className="mt-2">
            <AuthorsLine authors={pub.authors} />
          </div>

          {/* Abstract */}
          {hasAbstract && (
            <p className="mt-3 leading-6 text-justify text-small text-default-400 whitespace-pre-line">
              {pub.abstract}
            </p>
          )}

          {/* Links */}
          {hasLinks && (
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
              {pub.links!.map((l, i) => {
                const icon =
                  l.type === "custom" ? l.icon : renderLinkIcon(l.type);
                return (
                  <Link
                    key={`${pub.id}-link-${i}`}
                    isExternal
                    href={l.href}
                    className="text-base inline-flex items-center gap-1"
                  >
                    {icon}
                    {renderLinkLabel(l)}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

/** ===== Main component ===== */
export const Publications = () => {
  const publications: Publication[] = [
    {
      id: "av-reasoner",
      title:
        "AV-Reasoner: Improving and Benchmarking Clue-Grounded Audio-Visual Counting for MLLMs",
      href: "/publication/av-reasoner",
      venue: "CVPR 2026",
      venueBadgePosition: "left",
      image: {
        src: "https://av-reasoner.github.io/teaser.jpg",
        alt: "AV-Reasoner teaser",
      },
      authors: [
        { name: "Lidong Lu", highlight: true },
        { name: "Guo Chen" },
        { name: "Zhu Wei" },
        { name: "Zhiqi Li" },
        { name: "Yicheng Liu" },
        { name: "Tong Lu" },
      ],
      abstract:
        "CG-AV-Counting is a clue-grounded benchmark for evaluating counting ability in long-form videos. It contains 497 long videos, 1,027 multimodal questions, and 5,845 manually annotated reasoning clues, supporting both black-box and white-box evaluation.\nBuilt on this benchmark, AV-Reasoner leverages GRPO-based reinforcement learning and curriculum learning to generalize counting ability from related tasks, achieving state-of-the-art performance across multiple benchmarks.",
      links: [
        { type: "paper", href: "https://arxiv.org/abs/2506.05328" },
        { type: "code", href: "https://github.com/AV-Reasoner/AV-Reasoner" },
        { type: "model", href: "https://huggingface.co/lulidong/AV-Reasoner" },
        {
          type: "benchmark",
          href: "https://huggingface.co/datasets/CG-Bench/CG-AV-Counting",
          label: "Benchmark",
        },
      ],
    },
    {
      id: "eagle2_5",
      title:
        "Eagle 2.5: Boosting Long-Context Post-Training for Frontier Vision-Language Models",
      href: "/publication/eagle2_5",
      venue: "NIPS 2025",
      venueBadgePosition: "left",
      image: {
        src: "/assets/publications/eagle2_5/eagle_2_5_performance.png",
        alt: "Eagle 2.5 performance",
      },
      authors: [
        { name: "Guo Chen" },
        { name: "Zhiqi Li" },
        { name: "Shihao Wang" },
        { name: "Jindong Jiang" },
        { name: "Yicheng Liu" },
        { name: "Lidong Lu", highlight: true },
        { name: "De-An Huang" },
        { name: "Wonmin Byeon" },
        { name: "Matthieu Le" },
        { name: "Max Ehrlich" },
        { name: "Tuomas Rintamaki" },
        { name: "Tyler Poon" },
        { name: "Tong Lu" },
        { name: "Limin Wang" },
        { name: "Bryan Catanzaro" },
        { name: "Jan Kautz" },
        { name: "Andrew Tao" },
        { name: "Zhiding Yu" },
        { name: "Guilin Liu" },
      ],
      abstract:
        "Eagle 2.5 is a family of frontier vision-language models (VLMs) designed for long-context multimodal learning. While most existing VLMs focus on short-context tasks, Eagle 2.5 addresses the challenges of long video comprehension and high-resolution image understanding, providing a generalist framework for both. Eagle 2.5 supports up to 512 video frames and is trained jointly on image + video data.",
      links: [
        { type: "paper", href: "https://arxiv.org/abs/2504.15271" },
        { type: "code", href: "https://github.com/NVlabs/EAGLE" },
        { type: "model", href: "https://huggingface.co/nvidia/Eagle2.5-8B" },
        { type: "demo", href: "https://huggingface.co/spaces/nvidia/Eagle2-Demo" },
      ],
    },
    {
      id: "ego-exo-survey",
      title:
        "Bridging Perspectives: A Survey on Cross-view Collaborative Intelligence with Egocentric-Exocentric Vision",
      href: "https://arxiv.org/abs/2506.06253",
      venue: "IJCV",
      venueBadgePosition: "right",
      authors: [
        { name: "Yuping He" },
        { name: "Yifei Huang" },
        { name: "Guo Chen" },
        { name: "Lidong Lu", highlight: true },
        { name: "Baoqi Pei" },
        { name: "Jilan Xu" },
        { name: "Tong Lu" },
        { name: "Yoichi Sato" },
      ],
      // 这条你原来没有 teaser/abstract，我先按“只有 header + venue”保留
      links: [{ type: "paper", href: "https://arxiv.org/abs/2506.06253" }],
    },
  ];

  return (
    <section className="mb-3">
      <h1 id="publications" className="text-xl font-semibold">
        📝 Publications
      </h1>
      <Divider className="my-2 bg-default-100" />

      <div className="mx-4">
        {publications.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  );
};