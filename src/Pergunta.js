import React, { useState } from "react";
import styled from "styled-components";
import setaPlay from './img/seta_play.png'
import setaVirar from './img/seta_virar.png'


export default function Pergunta() {
    const [statusDeExibicao, setStatusDeExibicao] = useState ("estadoInicial");
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
            question: "Componentes devem iniciar com __",
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

    function mudarStatusDeExibicao() {

    }


    return (
        <>
            {perguntas.map((item, index) => {
                if (statusDeExibicao === "estadoInicial") {
                    return (
                        <BoxInicialPergunta key={index}>
                            <h3>Pergunta {index + 1}</h3>
                            <img src={setaPlay} onClick={mudarStatusDeExibicao}></img>
                        </BoxInicialPergunta >
                    )
                }
                else if (statusDeExibicao === "mostrandoPergunta") {
                    return (
                        <MostrarPergunta>
                            <p>{item.question}</p>
                            <img src={setaVirar} onClick={mudarStatusDeExibicao}></img>
                        </MostrarPergunta>
                    )
                }

            }
            )}
        </>
    )
}



const BoxInicialPergunta = styled.div`
width: 300px;
height: 100%;
display: flex;
align-items: center;
width: 300px;
height: 65px;
margin-bottom: 25px;
background: #FFFFFF;
font-family: 'Recursive';
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
justify-content: space-between;
padding-left: 15px;
padding-right: 15px;
border-radius: 5px;
h3{
font-family: Righteous;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;   
color:  #333333;

}
`
const MostrarPergunta = styled.div`
width: 299px;
height: 131px;
border-radius: 5px;

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