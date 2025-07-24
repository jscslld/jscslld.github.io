"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Link, Image } from "@heroui/react";

import { Divider } from "@heroui/react";
import { AnchorIcon } from "./icons";

export const Educations = () => {
    return (
        <div className="mb-3">
            <h1 id="educations" className="text-xl font-semibold">📖 Educations</h1>
            <Divider className="my-2 bg-default-100" />
            <ul className="list-disc list-inside space-y-4 leading-relaxed text-base/6">
                {[
                    ['2024.09 - present', 'Nanjing University', 'Persuing Master’s Degree in Computer Technology'],
                    ['2020.09 - 2024.06', 'Hohai University', 'Bachelor’s Degree in Internet of Things Engineering', '2/122'],
                ].map(([year, school, major, ranking]) => (
                    <li key={year + school} className="flex items-start gap-4">
                        <span className="w-40 flex-shrink-0 text-primary font-semibold">{year}</span>
                        <div className="flex flex-col flex-1">
                            <span className="font-semibold">
                                {school}
                                {ranking && (
                                    <span className="ml-2 text-base font-normal text-default-400">({ranking})</span>
                                )}
                            </span>
                            <span className="italic text-default-500">{major}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    );
}