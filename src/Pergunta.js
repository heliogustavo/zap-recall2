import React, { useState } from "react";
import styled from "styled-components";
import setaPlay from './img/seta_play.png'
import setaVirar from './img/seta_virar.png'
import certo from './img/icone_certo.png'
import quase from './img/icone_quase.png'
import erro from './img/icone_erro.png'


export default function Pergunta() {
    const [statusDeExibicao, setStatusDeExibicao] = useState("estadoInicial");
    const [iconeResposta, setIconeResposta] = useState(null);
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

    function exibirResposta(botaoClicado) {
        if (botaoClicado === "erro") {
            setIconeResposta("erro")
        }
        else if (botaoClicado === "quase") {
            setIconeResposta("quase")
        }
        else {
            setIconeResposta("certo")
        }
    }


    return (
        <>
            {perguntas.map((item, index) => {
                if (statusDeExibicao === "estadoInicial") {
                    return (
                        <BoxInicialPergunta key={index}>
                            <h3>Pergunta {index + 1}</h3>
                            <img src={setaPlay} onClick={() => setStatusDeExibicao("mostrandoPergunta")}></img>
                        </BoxInicialPergunta >
                    )
                }
                else if (statusDeExibicao === "mostrandoPergunta") {
                    return (
                        <MostrarPergunta>
                            <p>{item.question}</p>
                            <img src={setaVirar} onClick={() => setStatusDeExibicao("mostrandoResposta")}></img>
                        </MostrarPergunta>
                    )
                }
                else if (statusDeExibicao === "mostrandoResposta") {
                    return (
                        <MostrarResposta>
                            <p>{item.answer}</p>
                            <CaixaDeBotoes>
                                <BotaoVermelho onClick={() => exibirResposta("erro")}>Não Lembrei</BotaoVermelho>
                                <BotaoAmarelo onClick={() => exibirResposta("quase")}>Quase Não Lembrei</BotaoAmarelo>
                                <BotaoVerde onClick={() => exibirResposta("acerto")}>Zap!!</BotaoVerde>
                            </CaixaDeBotoes>
                        </MostrarResposta>
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
position: relative;
display: flex;
padding: 22px;
width: 299px;
height: 131px;
border-radius: 5px;
background-color: #FFFFD4;
margin-bottom: 25px;


p{
font-family: Recursive;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: #333333;
}
img{
position: absolute;
width: 30px;
height: 20px;
right: 20px;
bottom: 10px; 
}

`
const MostrarResposta = styled.div`
position: relative;
display: flex;
flex-direction: column;
padding: 22px;
width: 299px;
height: 131px;
border-radius: 5px;
background-color: #FFFFD4;
margin-bottom: 25px;

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
const CaixaDeBotoes = styled.div`
width: 100%;
height: 90px;
display: flex;
justify-content: space-around;
align-items: center;
padding-top: 15px;
`
const BotaoVerde = styled.button`
width: 85.17px;
height: 37.17px;
border-radius: 5px;
font-family: Recursive;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;

background-color: #2FBE34;

`
const BotaoAmarelo = styled.button`
width: 85.17px;
height: 37.17px;
border-radius: 5px;
font-family: Recursive;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;

background-color: #FF922E;

`
const BotaoVermelho = styled.button`
width: 85.17px;
height: 37.17px;
border-radius: 5px;
font-family: Recursive;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;

background-color: #FF3030;
`