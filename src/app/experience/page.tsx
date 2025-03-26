'use client'

import Image from 'next/image'
import {  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import Footer from "@/components/Footer/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { experience } from "@/data/experience";
import {Badge} from "@/components/ui/badge"; // 引入数据
export default function Experience() {
    return (
        <div className="container mt-50 mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Work Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experience.map((experience, index) => (
                    <Card key={index} className="hover:shadow-xl transition-shadow">
                        <CardHeader className="p-0">
                            <div className="relative w-full h-48">
                                <Image src={experience.image} alt={experience.title} layout="fill" className="rounded-t-lg object-cover" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <CardTitle>{experience.title}</CardTitle>
                            <p className="text-gray-500">{experience.description}</p>
                        </CardContent>
                        <CardFooter>
                            {experience.skills.map((skill, idx) => (<Badge key={idx} variant={"outline"}>{skill}</Badge>))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <Footer/>
        </div>

    );
}