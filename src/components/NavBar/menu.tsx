import React from 'react'
import Tree from './Tree'
import Link from 'next/link'
import { Container } from './styles'

export default function Menu() {
    return (
        <Container>
            <Tree name="menu" defaultOpen>
                <Tree name={<Link href="/about">about</Link>} style={{ color: '#37ceff' }} />
                <Tree name={"booth"}>
                    <Tree name={"soon..."}></Tree>
                </Tree>
                <Tree name="contact">
                    <Tree name={<Link href="https://www.linkedin.com/in/zhengwei-guo">LinkedIn</Link>} style={{ color: '#37ceff' }}/>
                    <Tree name={<Link href="mailto:guoz88@mcmaster.ca">email</Link>} style={{ color: '#37ceff' }}/>
                    <Tree name={<Link href="tel:+16479188381">phone</Link>} style={{ color: '#37ceff' }}/>
                </Tree>
                <Tree name={<span>🙀 waiting for more</span>} />
            </Tree>
        </Container>
    )
}