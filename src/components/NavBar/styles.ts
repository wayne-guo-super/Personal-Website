"use client"

// styles.ts
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: ui-monospace, monospace;
    font-size: 14px;
    font-weight: bold;
    line-height: 21px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export const Frame = styled.div`
    position: relative;
    padding: 4px 0 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    vertical-align: middle;
    color: #24292e;
    fill: #24292e;
    display: flex;
    align-items: center;
`

export const Title = styled.span`
    vertical-align: middle;
`

export const Content = styled(motion.div)`
    will-change: transform, opacity, height;
    margin-left: 6px;
    padding: 0 0 0 14px;
    border-left: 1px dashed rgba(255, 255, 255, 0.4);
    overflow: hidden;
`

export const ToggleIcon = styled.div`
  width: 1em;
  height: 1em;
  margin-right: 10px;
  cursor: pointer;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`