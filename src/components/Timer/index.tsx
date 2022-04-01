import { useState, useEffect } from 'react'
import { Container, Box, Text, WhatBox } from './styles'

export const Timer = () => {
  const [init, setInit] = useState(0)
  console.log(init)
  const [title, setTitle] = useState('')

  const totalTime = 19000
  const breatheTime = 4000
  const holdTime = 7000

  useEffect(() => {
    setTimeout(() => {
      setTitle('in')
      console.log('test', Date())
      setTimeout(() => {
        setTitle('hold')
        console.log('aqui', Date())
        setTimeout(() => {
          console.log('hold', Date())

          setTitle('out')
        }, holdTime)
      }, breatheTime)
      setInit(init + 1)
    }, totalTime)
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
