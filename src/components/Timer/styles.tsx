import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Box = styled.section`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`
const textgrowth = keyframes`
  0%{font-size: 48px;}
  15%{font-size: 48px;}
  85%{font-size: 68px;}
  100%{ font-size: 68px;}
`

export const WhatBox = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  ul {
    margin-left: 3rem;
    font-size: 16px;
    line-height: 1.5;
  }
`

export const BtnStart = styled.button`
  padding: 1.7rem 5rem;
  margin-top: 2rem;
  border: none;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: var(--highlight);
  &:hover {
    filter: brightness(1.3);
    color: var(--white);
  }
`

export const Text = styled.h2`
  font-size: 60px;
  padding: 10rem 0;
  /* animation: ${textgrowth} 4s infinite alternate-reverse linear; */
`
