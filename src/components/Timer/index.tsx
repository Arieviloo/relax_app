import { useState, useEffect } from 'react'
import { Container, Box, Text, WhatBox } from './styles'

export const Timer = () => {
  const [init, setInit] = useState(0)
  console.log(init)
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
    if (init !== 0) {
      initApp()
    } else {
      alreadyStartedApp()
    }
  }, [init])

  return (
    <Container>
      <h1>Respiração 4-7-8</h1>
      <Box>
        {init === 0 && (
          <WhatBox>
            <p>O que é respiração 4-7-8? </p>
            <p>
              - Gostamos de chamá-la de respiração 4-7-8, justamente porque
              consiste em: Puxar o ar pelo nariz por 4 segundos; Segurar o ar
              nos pulmões por 7 segundos; Soltar o ar pela boca durante 8
              segundos.
            </p>
          </WhatBox>
        )}
        <Text>{title}</Text>
      </Box>
    </Container>
  )
}
