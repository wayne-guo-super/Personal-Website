'use client'

import {experience} from "@/data/experience";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import Footer from "@/components/Footer/footer";
import {projects} from "@/data/project";
import {Button} from "@/components/ui/button";

export default function About() {
    return (
        <div className={"relative bg-green-50"}>
            <p className="ml-8 pt-48 font-bold font-mono text-2xl text-gray-700">
                Hey there, I am Wayne, and welcome to my site.
            </p>
            <div className="container mt-50 mx-auto p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Work Experience</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experience.map((experience, index) => (
                        <Card key={index} className="hover:shadow-xl transition-shadow">
                            <CardHeader className="p-0">
                                <div className="relative w-full h-48">
                                    <Image src={experience.image} alt={experience.title} layout="fill"
                                           className="rounded-t-lg object-cover"/>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle>{experience.title}</CardTitle>
                                <p className="text-gray-500">{experience.description}</p>
                            </CardContent>
                            <CardFooter>
                                {experience.skills.map((skill, idx) => (
                                    <Badge key={idx} variant={"outline"}>{skill}</Badge>))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <Footer/>
            </div>
            <div className="container mt-50 mx-auto p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="hover:shadow-xl transition-shadow">
                            <CardHeader className="p-0">
                                <div className="relative w-full h-48">
                                    <Image src={project.image} alt={project.title} layout="fill"
                                           className="rounded-t-lg object-cover"/>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle>{project.title}</CardTitle>
                                <p className="text-gray-500">{project.description}</p>
                                <Button className="mt-4 mr-4 bg-cyan-200 hover:bg-cyan-400 text-black-400 font-bold py-2 px-4 rounded" onClick={() => window.open(project.link, "_blank")}>
                                    View Project
                                </Button>
                                {project.github && (
                                    <Button
                                        className="mt-4 bg-cyan-200 hover:bg-cyan-400 text-black-400 font-bold py-2 px-4 rounded"
                                        onClick={() => window.open(project.github, "_blank")}
                                    >
                                        GitHub
                                    </Button>
                                )}
                            </CardContent>
                            <CardFooter>
                                {project.skills.map((skill, idx) => (
                                    <Badge key={idx} variant={"outline"}>{skill}</Badge>))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <Footer/>
            </div>
        </div>

    )
}