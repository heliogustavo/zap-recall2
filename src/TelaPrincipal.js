import React from "react";
import styled from "styled-components";
import imgLogo from './img/logo.png';
import Pergunta from "./Pergunta";


export default function TelaPrincipal(props) {
    const { perguntas } = props
    return (
        <ContainerGeral>
            <Logo>
                <img src={imgLogo}></img>
                <h1>ZapRecall</h1>
            </Logo>
            <ContainerPerguntas>
            
                <Pergunta/>


            </ContainerPerguntas>
        </ContainerGeral>
    )
}


const ContainerGeral = styled.div`
display: flex;
flex-direction: column;
align-items: center;
   background-color: #fb6b6b;
   width: 375px;
   overflow: hidden;
`

const Logo = styled.div`
width: 255.61px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
padding-top: 50px;
margin-bottom: 50px;


img{
        width: 52px;
        height: 60px;
        display: flex;
    }
h1{
    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.012em;
    text-align: center;
    color: #FFFFFF;
    display: flex;

   }
`
const ContainerPerguntas = styled.div`
display: flex;
flex-direction: column;
overflow-y: scroll;
display: inline-block;

align-items: center;
width: 100%;
height: 567px;
margin-left: 45px;

`

