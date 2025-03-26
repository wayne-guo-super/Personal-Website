"use client"

import React, {JSX, useState} from 'react'
import { Container, Frame, Title, Content, ToggleIcon } from './styles'
import * as Icons from '@/icons'

const Tree: React.FC<{
    name: string | JSX.Element
    defaultOpen?: boolean
    style?: React.CSSProperties
    children?: React.ReactNode
}> = ({ children, name, defaultOpen = false, style }) => {
    const [isOpen, setOpen] = useState(defaultOpen)

    // Icon decision
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]

    // Framer Motion variants
    const variants = {
        open: { opacity: 1, height: 'auto', y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
        closed: { opacity: 0, height: 0, y: 20, transition: { duration: 0.3, ease: 'easeIn' } },
    }

    return (
        <Frame>
            <ToggleIcon as={Icon} onClick={() => setOpen(!isOpen)} style={{ opacity: children ? 1 : 0.3 }} />
            <Title style={style}>{name}</Title>
            <Content
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={variants}
            >
                {children}
            </Content>
        </Frame>
    )
}

export default Tree