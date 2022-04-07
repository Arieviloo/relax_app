import { useState, useEffect } from 'react'
import { Container, Box, Text, WhatBox, BtnStart } from './styles'
import { motion } from 'framer-motion'

export const Timer = () => {
  const [init, setInit] = useState(0)
  const [title, setTitle] = useState('')
  const [start, setStart] = useState(false)

  const totalTime = 19000
  const breatheTime = 4000
  const holdTime = 7000

  const initApp = () => {
    return setTimeout(() => {
      setTitle('inspirar')
      setTimeout(() => {
        setTitle('segurar')
        setTimeout(() => {
          setTitle('expirar')
        }, holdTime)
      }, breatheTime)
      setInit(init + 1)
    }, totalTime)
  }

  const alreadyStartedApp = () => {
    setTitle('inspirar')
    setTimeout(() => {
      setTitle('segurar')
      setTimeout(() => {
        setTitle('expirar')
      }, holdTime)
    }, breatheTime)
    setInit(init + 1)
  }

  useEffect(() => {
    if (start === true) {
      if (init !== 0) {
        initApp()
      } else {
        alreadyStartedApp()
      }
    }
  }, [start, init])

  const handleToStart = () => {
    setStart(!start)
  }

  return (
    <Container>
      <h1>Respiração 4-7-8</h1>
      <Box>
        {init === 0 && (
          <WhatBox>
            <p>O que é respiração 4-7-8? </p>
            <p>
              - Gosto de chamá-la de respiração 4-7-8 justamente porque consiste
              em:
            </p>
            <ul>
              <li>Puxar o ar pelo nariz por 4 segundos; </li>
              <li>Segurar o ar nos pulmões por 7 segundos; </li>
              <li>E soltar o ar pela boca durante 8 segundos.</li>
            </ul>
            <BtnStart onClick={handleToStart}> Começar </BtnStart>
          </WhatBox>
        )}
        <Text>{title}</Text>
      </Box>
      {init === 0 && (
        <motion.h2 animate={{ fontSize: '18px' }}>
          *preste atenção na sua respiração
        </motion.h2>
      )}
    </Container>
  )
}
