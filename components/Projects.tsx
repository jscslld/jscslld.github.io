"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Link, Image, Spacer } from "@heroui/react";

import { Divider } from "@heroui/react";
import { AnchorIcon } from "./icons";

export const Projects = () => {
    return (
        <div className="mb-3">
            <h1 id="projects" className="text-xl font-semibold">🧑‍💻 Projects</h1>
            <Divider className="my-2 bg-default-100" />
            <Card className="max-w m-4" shadow="sm">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar
                            isBordered
                            radius="full"
                            size="md"
                            src="/assets/projects/geoview-logo.png"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Geoview: Intelligent Interpretation Tool for Remote Sensing Image</h4>
                            <h5 className="text-small tracking-tight text-default-400"><Link
                                isExternal
                                showAnchorIcon
                                anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                                href="https://github.com/jscslld"
                                className="text-sm/6  font-semibold"
                            >
                                Lidong Lu
                            </Link>, <Link
                                isExternal
                                showAnchorIcon
                                anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                                href="https://github.com/terayco"
                                className="text-sm/6"
                            >
                                    Lingming Cao
                                </Link>, <Link
                                    isExternal
                                    showAnchorIcon
                                    anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                                    href="https://github.com/yibaikuai"
                                    className="text-sm/6"
                                >
                                    Bokun Yi
                                </Link>, <Link
                                    isExternal
                                    showAnchorIcon
                                    anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                                    href="https://github.com/Bobholamovic"
                                    className="text-sm/6"
                                >
                                    Manhui Lin
                                </Link> *in no particular order</h5>
                        </div>
                    </div>
                    <div><Button
                        color="default"
                        radius="full"
                        as={Link}
                        size="sm"
                        className="mr-1"
                        href="https://mp.weixin.qq.com/s/yW4Qx93n14n8dqnWMRDGBQ"
                        isExternal
                    >
                        {"Report"}
                    </Button>
                        <Button
                            color="primary"
                            radius="full"
                            size="sm"
                            as={Link}
                            href="https://github.com/PaddleCV-SIG/GeoView"
                            isExternal
                        >
                            {"Code"}
                        </Button></div>

                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400 mb-3">
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-stretch">
                        <div className="relative col-span-6 md:col-span-4 h-full">
                            <Image
                                alt="Album cover"
                                className="w-full h-full object-cover rounded-md"
                                shadow="sm"
                                src="/assets/projects/geoview.png"
                            />
                        </div>
                        <div className="flex flex-col justify-center col-span-6 md:col-span-8 h-full leading-6 text-justify">
                            <p>
                                GeoView is an open-source remote sensing image intelligent interpretation tool based on PaddleRS. It is designed to enable rapid deployment of deep learning models in the field of remote sensing on web platforms. GeoView provides pre-trained models for a variety of tasks, including change detection, scene classification, object detection, image restoration, and land cover classification. Since its open-source release, it has received 152⭐️ on GitHub.
                            </p>
                        </div>
                    </div>
                </CardBody>
            </Card>

            <Card className="max-w m-4" shadow="sm">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar
                            isBordered
                            radius="full"
                            size="md"
                            src="/assets/projects/resume-logo.png"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">LLM-based Intelligent Resume Parsing System</h4>
                            <h5 className="text-small tracking-tight text-default-400"><Link
                                isExternal
                                showAnchorIcon
                                anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                                href="https://github.com/jscslld"
                                className="text-sm/6  font-semibold"
                            >
                                Lidong Lu
                            </Link>, <Link
                                isExternal
                                showAnchorIcon
                                anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                                href="https://github.com/Ni-Mr"
                                className="text-sm/6"
                            >
                                    Wuguang Ni
                                </Link>, <Link
                                    isExternal
                                    showAnchorIcon
                                    anchorIcon={<AnchorIcon width="1rem" height="1rem" />}
                                    href="https://github.com/Max-Lii"
                                    className="text-sm/6"
                                >
                                    Haoru Li
                                </Link>, <span>
                                    Xiaoying Wang
                                </span> *in no particular order</h5>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400 mb-3">
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-stretch">
                        <div className="relative col-span-6 md:col-span-4 h-full">
                            <Image
                                alt="Album cover"
                                className="w-full h-full object-cover rounded-md"
                                shadow="sm"
                                src="/assets/projects/resume.png"
                            />
                        </div>
                        <div className="flex flex-col justify-center col-span-6 md:col-span-8 h-full leading-6 text-justify">
                            <p>
                                The core parsing algorithm is based on the ChatGLM2-6B model, and it leverages P-Tuning V2 for efficient fine-tuning on a dataset of over a thousand resume parsing samples. This process allows the general model to better adapt to downstream tasks involving common parsing fields. For custom parsing fields, the algorithm uses in-context learning, injecting domain knowledge into the model’s context through prompts to enhance the LLM’s ability to parse unknown fields.                            </p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>

    );
}