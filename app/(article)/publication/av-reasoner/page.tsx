"use client"
import { MobileSidebar, SideBar } from "@/components/Sidebar";
import { AboutMe } from "@/components/Aboutme";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { Rewards } from "@/components/Rewards";
import { Educations } from "@/components/Educations";
import { Photo } from "@/components/Photo";
import { DocsToc } from "@/components/Toc";
import { HeadingWithAnchor } from "@/components/HeadingWithAnchor";
import {CodeBlock} from "@/components/CodeBlock"
import { Link } from "@heroui/link";
import { Spacer } from "@heroui/react";
import Icon, {ALL_ICON_KEYS, IconType} from '@icon-park/react/es/all';
import { HFIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Image } from "@heroui/react";

export default function Eagle2_5_VL() {
  const markdownHeadings = [
    { id: "abstract", text: "Abstract", level: 2 },
    { id: "citation", text: "Citation", level: 2 },
  ];
  const bibtex = `@misc{lu2025avreasoner,
    title={AV-Reasoner: Improving and Benchmarking Clue-Grounded Audio-Visual Counting for MLLMs}, 
    author={Lidong Lu and Guo Chen and Zhiqi Li and Yicheng Liu and Tong Lu},
    year={2025},
    eprint={2506.05328},
    archivePrefix={arXiv},
    primaryClass={cs.CV},
    url={https://arxiv.org/abs/2506.05328}, 
}`;
  return (
  <>
  <div className="flex flex-col lg:flex-row mt-10 gap-4">
    <div className="flex-[5] lg:px-16">
      <h1 className="text-4xl font-bold text-wrap text-gray-800 dark:text-gray-200">
        AV-Reasoner: Improving and Benchmarking Clue-Grounded Audio-Visual Counting for MLLMs
      </h1>
      <h5 className="text-xl/8 tracking-tight text-default-400 mt-2"><span className="font-bold underline decoration-2 underline-offset-2 text-gray-600">
                                    Lidong Lu
                                </span>,&ensp;
                                <span>Guo Chen</span>,&ensp;
                                <span>Zhu Wei</span>,&ensp;
                                <span>Zhiqi Li</span>,&ensp;
                                <span>Yicheng Liu</span>,&ensp;
                                <span>Tong Lu</span></h5>
<div className="flex mt-3">
    <Link
                            isExternal
                            href="https://arxiv.org/abs/2506.05328"
                            className="text-xl inline-flex items-center gap-1"
                        >
                            <Icon type="file-pdf-one" />
                            Paper
                        </Link>
                        <Spacer x={4} />
                        <Link
                            isExternal
                            href="https://github.com/AV-Reasoner/AV-Reasoner"
                            className="text-xl inline-flex items-center gap-1"
                        >
                            <Icon type="github" />
                            Code
                        </Link>
                        <Spacer x={4} />
                        <Link
                            isExternal
                            href="https://huggingface.co/lulidong/AV-Reasoner"
                            className="text-xl inline-flex items-center gap-1"
                        >
                            <HFIcon />
                            Model
                        </Link>
                        <Spacer x={4} />
                        <Link
                            isExternal
                            href="https://huggingface.co/datasets/CG-Bench/CG-AV-Counting"
                            className="text-xl inline-flex items-center gap-1"
                        >
                            <HFIcon />
                            Benchmark
                        </Link>
</div>
<HeadingWithAnchor id="abstract" level={1} className="mt-10">
        Abstract
</HeadingWithAnchor>
<div className="flex justify-center items-center">
  <Image
    className="text-center"
    src="https://av-reasoner.github.io/teaser.jpg"
    width={"100%"}
  />
</div>
<p className="text-xl/8 mt-3 ">Despite progress in video understanding, current MLLMs struggle with counting tasks. Existing benchmarks are limited by short videos, close-set queries, lack of clue annotations, and weak multimodal coverage. In this paper, we introduce CG-AV-Counting, a manually-annotated clue-grounded counting benchmark with 1,027 multimodal questions and 5,845 annotated clues over 497 long videos. It supports both black-box and white-box evaluation, serving as a comprehensive testbed for both end-to-end and reasoning-based counting. To explore ways to improve model's counting capability, we propose AV-Reasoner, a model trained with GRPO and curriculum learning to generalize counting ability from related tasks. AV-Reasoner achieves state-of-the-art results across multiple benchmarks, demonstrating the effectiveness of reinforcement learning. However, experiments show that on out-of-domain benchmarks, reasoning in the language space fails to bring performance gains.

</p>
<HeadingWithAnchor id="citation" level={1} className="mt-10 mb-5">
        Citation
</HeadingWithAnchor>
<CodeBlock code={bibtex} language="bib" />
    </div>
    


    <div className="flex-[1] z-10 pl-0">
      <DocsToc items={markdownHeadings} />
    </div>
  </div>
</>
  );
}
