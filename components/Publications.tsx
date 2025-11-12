"use client"

import { Badge, Divider } from "@heroui/react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Link, Image, Spacer } from "@heroui/react";
import Icon from "@icon-park/react/es/all";
import { HFIcon } from "./icons";

export const Publications = () => {
    return (
        <div className="mb-3">
            <h1 id="publications" className="text-xl font-semibold">📝 Publications</h1>
            <Divider className="my-2 bg-default-100" />
            <Card className="max-w m-4" shadow="sm">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <a href="/publication/eagle2_5" className="text-base font-semibold leading-none text-default-600 hover:underline">
                                <h4>
                                    Eagle 2.5: Boosting Long-Context Post-Training for Frontier Vision-Language Models
                                </h4>
                            </a>
                            <h5 className="text-base tracking-tight text-default-400 mt-2"><span>Guo Chen</span>,
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
                        </div>
                    </div>


                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400 mb-3">
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-stretch">
                        <div className="relative col-span-6 md:col-span-4 h-full mt-1">
                            <div className="relative inline-block">
                                <div className="absolute top-1 left-1 z-100 px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
                                    NIPS 2025
                                </div>

                                <Image
                                    className="w-full h-auto aspect-[16/9] object-cover rounded-md"
                                    shadow="sm"
                                    src="/assets/publications/eagle2_5/eagle_2_5_performance.png"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center col-span-6 md:col-span-8 h-full leading-6 text-justify">
                            <p>
                                Eagle 2.5 is a family of frontier vision-language models (VLMs) designed for long-context multimodal learning. While most existing VLMs focus on short-context tasks, Eagle 2.5 addresses the challenges of long video comprehension and high-resolution image understanding, providing a generalist framework for both. Eagle 2.5 supports up to 512 video frames and is trained jointly on image + video data.                            </p>
                        </div>
                    </div>
                    <div className="flex mt-3">
                        <Link
                            isExternal
                            href="https://arxiv.org/abs/2504.15271"
                            className="text-base inline-flex items-center gap-1"
                        >
                            <Icon type="file-pdf-one" />
                            Paper
                        </Link>
                        <Spacer x={4} />
                        <Link
                            isExternal
                            href="https://github.com/NVlabs/EAGLE"
                            className="text-base inline-flex items-center gap-1"
                        >
                            <Icon type="github" />
                            Code
                        </Link>
                        <Spacer x={4} />
                        <Link
                            isExternal
                            href="https://huggingface.co/nvidia/Eagle2.5-8B"
                            className="text-base inline-flex items-center gap-1"
                        >
                            <HFIcon />
                            Model
                        </Link>
                        <Spacer x={4} />
                        <Link
                            isExternal
                            href="https://huggingface.co/spaces/nvidia/Eagle2-Demo"
                            className="text-base inline-flex items-center gap-1"
                        >
                            <Icon type="api-app" />
                            Demo
                        </Link>
                    </div>
                </CardBody>
            </Card>
            <Card className="max-w m-4" shadow="sm">
                <div className="relative inline-block">
                    <div className="absolute top-1 right-1 z-100 px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
                        IJCV
                    </div>
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <a href="https://arxiv.org/abs/2506.06253" className="text-base font-semibold leading-none text-default-600 hover:underline">
                                <h4>
                                    Bridging Perspectives: A Survey on Cross-view Collaborative Intelligence with Egocentric-Exocentric Vision
                                </h4>
                            </a>
                            <h5 className="text-base tracking-tight text-default-400 mt-2">
                                <span>Yuping He</span>,
                                <span>Yifei Huang</span>,
                                <span>Guo Chen</span>,
                                <span className="font-bold underline decoration-2 underline-offset-2 text-gray-600">
                                    Lidong Lu
                                </span>,
                                <span>Baoqi Pei</span>,
                                <span>Jilan Xu</span>,
                                <span>Tong Lu</span>,
                                <span>Yoichi Sato</span>
                                </h5>
                        </div>
                    </div>
                </CardHeader>
                </div>
            </Card>
        </div>

    );
}