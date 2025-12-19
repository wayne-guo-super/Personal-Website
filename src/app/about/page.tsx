'use client'

//data imports
import {experience} from "@/data/experience";
import {projects} from "@/data/project";
//shadcn component imports
import {Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import TerminalIntro from "@/app/about/TerminalIntro";

export default function About() {
    return (
        <div className={"relative bg-[#d3e8e7]"}>
            {/* Intro */}
            <section className="container mx-auto justify-center p-16 flex">
                <TerminalIntro />
            </section>

            {/* Work Experience */}
            <section className="container mx-auto p-6">
                <h1 className="text-2xl font-bold font-mono text-center mb-6">Work Experience</h1>
                <div className="grid grid-cols-1 font-mono md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experience.map((experience, index) => (
                        <Card key={index} className="hover:shadow-xl transition-shadow bg-[#e9f2f2]">
                            <CardHeader className="p-0">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={experience.image}
                                        alt={experience.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg p-4"/>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="font-bold font-3xl p-4">{experience.title}</CardTitle>
                                <CardContent>
                                    <Link
                                        href={experience.organizationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline">
                                    {experience.organization}
                                    </Link>
                                </CardContent>
                                <CardContent>{experience.date}</CardContent>
                                <div style={{ height: "1rem" }}></div>
                                <CardDescription className="text-gray-700 ml-3 mr-3">{experience.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="flex flex-wrap gap-2">
                                {experience.skills.map((skill, idx) => (
                                    <Badge key={idx} variant="outline">{skill}</Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Project */}
            <section className="container mt-20  mx-auto p-6">
                <h1 className="text-2xl font-bold font-mono text-center mb-6">Projects</h1>
                <div className="grid grid-cols-1 font-mono md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="hover:shadow-xl transition-shadow bg-[#e9f2f2]">
                            <CardHeader className="p-0">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-lg p-4"/>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className={"font-bold font-3xl p-4"}>{project.title}</CardTitle>
                                <CardDescription className="text-gray-700 ml-3 mr-3">{project.description}</CardDescription>
                                <Button className="mt-4 mr-4 bg-[#4aaec2] hover:bg-[#18889e] text-gray-200 font-bold py-2 px-4 rounded" onClick={() => window.open(project.link)}>
                                    View Project
                                </Button>
                                {project.github && (
                                    <Button
                                        className="mt-4 bg-[#4aaec2] hover:bg-[#18889e] text-gray-200 font-bold py-2 px-4 rounded"
                                        onClick={() => window.open(project.github)}
                                    >
                                        GitHub
                                    </Button>
                                )}
                            </CardContent>
                            <CardFooter className="flex flex-wrap gap-2">
                                {project.skills.map((skill, idx) => (
                                    <Badge className="bg-[#dfeaf0] font-bold" key={idx} variant={"outline"}>{skill}</Badge>))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Space holder */}
            <div className={" pb-20"}></div>
        </div>

    )
}