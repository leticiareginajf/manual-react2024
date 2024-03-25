import React from 'react'
import LedVerde from './imgs/botaoverde.jpg'
import LedVermelho from './imgs/botaovermelho.jpg'

export default function Led(props) {

  return (

    <>
    
    <img style={{width: '50px'}} src={props.ligado?LedVerde:LedVermelho}></img>
    <button onClick={()=>props.setLigado(!props.ligado)}>
        {props.ligado?'Desligar':'Ligar'}
    </button>
    
    </>
    
  
  )
}