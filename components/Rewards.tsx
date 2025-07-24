"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Link, Image } from "@heroui/react";

import { Divider } from "@heroui/react";
import { AnchorIcon } from "./icons";

export const Rewards = () => {
    return (
        <div className="mb-3">
            <h1 id="rewards" className="text-xl font-semibold">🏆 Honors and Awards</h1>
            <Divider className="my-2 bg-default-100" />
            <ul className="list-disc list-inside space-y-3 text-default-700 text-base/6">
                {[
                    ['2024', '17th China College Student Computer Design Competition, Open-source Platform for Intelligent Interpretation of Remote Sensing Image, 2nd Prize.'],
                    ['2023', '12th “China Software Cup” College Student Software Design Competition, Intelligent Resume Parsing System Track, 1st Prize.'],
                    ['2023', 'Eastern Regional Competition of the 14th China College Students Service Outsourcing Innovation and Entrepreneurship Competition, Medical Literature Intelligent Recognition and Retrieval System Track, 3rd Prize.'],
                    ['2022', 'Pengcheng Laboratory “Openl Community Outstanding Developer”'],
                    ['2022', 'Baidu Wave SUMMIT+ 2022 PPSIG Outstanding Open Source Project Award, PP-Geoview: PaddlePaddle-based Intelligent Interpretation Tool for Remote Sensing Image.']
                ].map(([year, desc]) => (
                    <li key={year + desc} className="flex">
                        <span className="w-12 flex-shrink-0 text-primary font-semibold">{year}</span>
                        <p className="text-left">{desc}</p>
                    </li>
                ))}
            </ul>
        </div>

    );
}