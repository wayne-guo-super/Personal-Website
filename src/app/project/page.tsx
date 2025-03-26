'use client'

import Image from 'next/image'
import {  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Footer from "@/components/Footer/footer";
import { projects } from "@/data/project";

export default function Experience() {
    return (
        <div className="ocntainer mt-40 mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="hover:shadow-xl transition-shadow">
                        <CardHeader className="p-0">
                            <div className="relative w-full h-48">
                                <Image src={project.image} alt={project.title} layout="fill" className="rounded-t-lg object-cover" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <CardTitle>{project.title}</CardTitle>
                            <p className="text-gray-500">{project.description}</p>
                            <Button className="mt-4" onClick={() => window.open(project.link, "_blank")}>
                                View Project
                            </Button>
                        </CardContent>
                        <CardFooter>
                            {project.skills.map((skill, idx) => (<Badge key={idx} variant={"outline"}>{skill}</Badge>))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Footer/>
        </div>

    );
}