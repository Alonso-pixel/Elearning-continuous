import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Del <div className='tesi'>TESI</div> Para el <div className='tesi'>TESI</div></h1>
          <p>Sitio creado como una plataforma de apoyo para alumnos del TESI</p>
        </div>
      </div>
    </HeroWrapper>
  )
}
//debo cambiar este código si quiero cambiar como se ven los componentes
const HeroWrapper = styled.div`
  background: url(${other_images.logo_tesi2}) center/cover no-repeat;
  height: 300px;

  .container{
    .hero-content{
      // background-color: var(--clr-white);
      background-color: transparent;
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      div{
        color: var(--clr-green);
        white-space: nowrap;
       }
       #tesi{
        white-space: nowrap;
       }
      h1{
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 15px;
        color: var(--clr-gray);
      }

    }
  }
`;

export default Hero