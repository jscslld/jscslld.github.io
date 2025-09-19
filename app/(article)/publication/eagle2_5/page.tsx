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
  const bibtex = `@article{chen2025eagle,
  title={Eagle 2.5: Boosting long-context post-training for frontier vision-language models},
  author={Chen, Guo and Li, Zhiqi and Wang, Shihao and Jiang, Jindong and Liu, Yicheng and Lu, Lidong and Huang, De-An and Byeon, Wonmin and Le, Matthieu and Rintamaki, Tuomas and others},
  journal={arXiv preprint arXiv:2504.15271},
  year={2025}
}`;
  return (
  <>
  <div className="flex flex-col lg:flex-row mt-10 gap-4">
    <div className="flex-[5] lg:px-16">
      <h1 className="text-4xl font-bold text-wrap text-gray-800 dark:text-gray-200">
        Eagle 2.5: Boosting Long-Context Post-Training for Frontier Vision-Language Models
      </h1>
      <h5 className="text-xl/8 tracking-tight text-default-400 mt-2"><span>Guo Chen</span>, 
<span>Zhiqi Li</span>, 
<span>Shihao Wang</span>, 
<span>Jindong Jiang</span>, 
<span>Yicheng Liu</span>, 
<span className="font-bold underline decoration-2 underline-offset-2 text-gray-600">
  Lidong Lu
</span>, 
<span>De-An Huang</span>, 
<span>Wonmin Byeon</span>, 
<span>Matthieu Le</span>, 
<span>Max Ehrlich</span>, 
<span>Tuomas Rintamaki</span>, 
<span>Tyler Poon</span>, 
<span>Tong Lu</span>, 
<span>Limin Wang</span>, 
<span>Bryan Catanzaro</span>, 
<span>Jan Kautz</span>, 
<span>Andrew Tao</span>, 
<span>Zhiding Yu</span>, 
<span>Guilin Liu</span></h5>
<div className="flex mt-3">
    <Link
        isExternal
        href="https://arxiv.org/abs/2504.15271"
        className="text-xl inline-flex items-center gap-1"
    >
         <Icon type="file-pdf-one" />
        Paper
    </Link>
    <Spacer x={4} />
    <Link
        isExternal
        href="https://github.com/NVlabs/EAGLE"
        className="text-xl inline-flex items-center gap-1"
    >
        <Icon type="github" />
        Code
    </Link>
    <Spacer x={4} />
    <Link
        isExternal
        href="https://huggingface.co/nvidia/Eagle2.5-8B"
        className="text-xl inline-flex items-center gap-1"
    >
        <HFIcon/>
        Model
    </Link>
    <Spacer x={4} />
    <Link
        isExternal
        href="https://huggingface.co/spaces/nvidia/Eagle2-Demo"
        className="text-xl inline-flex items-center gap-1"
    >
        <Icon type="api-app" />
        Demo
    </Link>
</div>
<HeadingWithAnchor id="abstract" level={1} className="mt-10">
        Abstract
</HeadingWithAnchor>
<div className="flex justify-center items-center">
  <Image
    className="text-center"
    src="/assets/publications/eagle2_5/eagle_2_5_performance.png"
    width={"80%"}
  />
</div>
<p className="text-xl/8 mt-3 ">We introduce Eagle2.5, a frontier vision-language model (VLM) for long-context multimodal learning. Our work addresses the challenges in long video comprehension and high-resolution image understanding, introducing a generalist framework for both tasks. The proposed training framework incorporates Automatic Degrade Sampling and Image Area Preservation, two techniques that preserve contextual integrity and visual details. The framework also includes numerous efficiency optimizations in the pipeline for long-context data training. Finally, we propose Eagle-Video-110K, a novel dataset that integrates both story-level and clip-level annotations, facilitating long-video understanding. Eagle2.5 demonstrates substantial improvements on long-context multimodal benchmarks, providing a robust solution to the limitations of existing VLMs. Notably, our best model Eagle2.5-8B achieves 72.4% on Video-MME with 512 input frames, matching the results of top-tier commercial model such as GPT-4o and large-scale open-source models like Qwen2.5-VL-72B and InternVL2.5-78B.</p>
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
