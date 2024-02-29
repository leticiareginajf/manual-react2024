import React from 'react'
import Borutocrianca from './imgs/boruto crianca.png'
import './App.css'



export default function Headers() {

const textoDestaque={

    color: 'yellow',
    fontSize: '5em'

}
return (

    <>
    <header>
        <h1 align="center" style={{color: 'blue', fontSize:'5em'}}>Animes</h1>
        <h2 style={textoDestaque}>Série Boruto</h2>
        <p className='texto'>Testando Estilo CSS</p>
        <img src={Borutocrianca} width={170} alt='170'/>
    </header>
    
    </>


)


}