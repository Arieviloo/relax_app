import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background-color: var(--background);
    color: var(--white);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }

  /* .gradient-circle{
    background: conic-gradient(
        #21D4FD 0%,
        #B721FF 100%);
    height: 320px;
    width: 320px;
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: -2;
    border-radius: 50%;

}
.circle{
    background-color: lightblue;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 50%;
}
.pointer-container {
    position: absolute;
    top: -40px;
    left: 140px;
    width: 20px;
    height: 190px;
    animation: rotate 7.5s linear forwards infinite;
    transform-origin: bottom center;
}
.pointer{
    background-color: #21D4FD;
    background-image: linear-gradient(180deg, #21D4FD 0%, #B721FF 100%);
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: block;

}
.container.grow{
    animation: grow 3s linear forwards;
}
.container.shrink{
    animation: shrink 3s linear forwards;
}
@keyframes rotate{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}
@keyframes grow{
    from{
        transform: scale(1);
    }
    to{
        transform: scale(1.2);
    }
}
@keyframes shrink{
    from{
        transform: scale(1.2);
    }
    to{
        transform: scale(1);
    }
} */

`

export default GlobalStyles
