"use client"

import * as React from "react"
import Link from "next/link"
import {GitHub, LinkedIn, Phone, Mailbox} from '@/icons/customIcon'

import { useIsMobile } from "@/hooks/use-mobile"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NaviMenu() {
    const isMobile = useIsMobile()

    return (
        <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex-wrap font-mono">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/about">About</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:block">
                    <NavigationMenuTrigger>Personal</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="/photopage">
                                        <div className="font-medium">📷</div>
                                        <div className="text-muted-foreground">
                                            Some photography collection...
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="/movie">
                                        <div className="font-medium">📽️</div>
                                        <div className="text-muted-foreground">
                                            Some movie commentary (might be, in-progress)...
                                        </div>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden md:block">
                    <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <Link href="https://www.linkedin.com/in/zhengwei-guo" className="flex-row items-center gap-2">
                                        <LinkedIn />
                                        LinkedIn
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="mailto:guoz88@mcmaster.ca" className="flex-row items-center gap-2">
                                        <Mailbox />
                                        email
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="tel:+16479188381" className="flex-row items-center gap-2">
                                        <Phone />
                                        phone
                                    </Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <Link href="https://github.com/wayne-guo-super" className="flex-row items-center gap-2">
                                        <GitHub />
                                        GitHub
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
