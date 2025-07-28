"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Link, Image } from "@heroui/react";

import { Divider } from "@heroui/react";
import { AnchorIcon } from "./icons";
import Marquee from "react-fast-marquee";
import { PhotoProvider, PhotoView } from 'react-photo-view';

export const Photo = () => {
    return (
        <div className="mb-3">
            <h1 id="educations" className="text-xl font-semibold">📸 Photo Highlights</h1>
            <Divider className="my-2 bg-default-100" />
            <PhotoProvider>
            <Marquee pauseOnHover>
            <PhotoView src="/assets/photos/0.jpg">
                 <Image
                                className="w-60 h-40 mr-3"
                                shadow="none"
                                src="/assets/photos/0.jpg"
                            />
            </PhotoView>
            <PhotoView src="/assets/photos/1.jpg">
                 <Image
                                className="w-60 h-40 mr-3"
                                shadow="none"
                                src="/assets/photos/1.jpg"
                            />
            </PhotoView>
            <PhotoView src="/assets/photos/2.jpg">
                 <Image
                                className="w-60 h-40 mr-3"
                                shadow="none"
                                src="/assets/photos/2.jpg"
                            />
            </PhotoView>
            <PhotoView src="/assets/photos/3.jpg">
                 <Image
                                className="w-60 h-40 mr-3"
                                shadow="none"
                                src="/assets/photos/3.jpg"
                            />
            </PhotoView>
            <PhotoView src="/assets/photos/4.jpg">
                 <Image
                                className="w-60 h-40 mr-3"
                                shadow="none"
                                src="/assets/photos/4.jpg"
                            />
            </PhotoView>
            </Marquee>
            </PhotoProvider>
           
        </div>

    );
}