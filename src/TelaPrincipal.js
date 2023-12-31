import React, { useState } from "react";
import styled from "styled-components";
import imgLogo from './img/logo.png';
import Pergunta from "./Pergunta";


export default function TelaPrincipal(props) {
    const [contadorDeConclusao, setContadorDeConclusao] = useState(0);
    const [ boasVindas, setBoasVindas] =  useState(true)
    const perguntas = [
        {
            question: "O que é JSX??",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            question: "Componentes devem iniciar com ____",
            answer: "letra maiúscula"
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes"
        },
        {
            question: "Usamos estado (state) para __",
            answer: " dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }]
        if(boasVindas){
            return(
                <TelaBoasVindas >
                <img src={imgLogo}></img>
                <h1>ZapRecall</h1>
                    <IniciarZap onClick={()=> setBoasVindas(false)} data-test="start-btn"> Iniciar Recall</IniciarZap>
                </TelaBoasVindas>
            )
        }
    else {
     return (

        <ContainerGeral>
            <Logo>
                <img src={imgLogo}></img>
                <h1>ZapRecall</h1>
            </Logo>
            <ContainerPerguntas>
                {perguntas.map((cadaPergunta, index) => (
                    <Pergunta question={cadaPergunta.question} answer={cadaPergunta.answer} index={index} contadorDeConclusao={contadorDeConclusao} setContadorDeConclusao={setContadorDeConclusao} />
                ))}
            </ContainerPerguntas>
            <Rodape data-test="footer"><p> {contadorDeConclusao} / {perguntas.length} CONCLUÍDOS</p></Rodape>
        </ContainerGeral>
    )
                }
}


const ContainerGeral = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
   background-color: #fb6b6b;
   width: 375px;
   height: 667px;
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
margin-bottom: 65px;
align-items: center;
width: 100%;
height: 567px;
margin-left: 35px;
`
const Rodape = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: absolute ;
width: 375px;
height: 70px;
bottom: 0px;    
left: 0px;
background-color: grey;
box-shadow: 0px -4px 6px 0px #0000000D;

p{
font-family: Recursive;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

color: #333333;
}
`
const TelaBoasVindas = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
width: 375px;
height: 667px;
top: -1923px;
left: -694px;
border: 1px;
background-color: linear-gradient(0deg, #DBDBDB, #DBDBDB);
border: 1px solid #DBDBDB;
img{
width: 136px;
height: 161px;
margin-bottom: 30px;

}
h1{
font-family: Righteous;
font-size: 36px;
font-weight: 400;
line-height: 45px;
letter-spacing: -0.012em;
text-align: center;
color: #FFFFFF;
margin-bottom: 30px;
}
background-color:  #FB6B6B;
`

const IniciarZap = styled.button`
width: 246px;
height: 54px;
border-radius: 5px;
border: 1px solid #DBDBDB;
color: #FB6B6B;
background-color: #FFFFFF;

font-family: Recursive;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
color: #d70900;

`
