import React, {useState} from 'react'
import Led from './componentes/Led'
/*import Numero from './componentes/Numero'
import LedVerde from './componentes/imgs/botaoverde.jpg'
import LedVermelho from './componentes/imgs/botaovermelho.jpg'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import Relogio from './componentes/Relogio'*/
//import Logo from './componentes/imgs/boruto crianca.png'
//import Borutoadulto from './componentes/imgs/Boruto adulto.png'

export default function App() {

  /*const [num, setNum] = useState(10)
  const [nome, setNome] = useState('Leticia')*/


  const [ligado, setLigado] = useState(false)

  const cancelar =(obj)=>{
    //return false
    return obj.preventDefault()
  }



  return (

    <>
      <Led ligado={ligado} setLigado={setLigado}/>
      <a href='https://facebook.com' target='_blannk' onClick={(e)=>cancelar(e)}>Lute isso!</a>
    </>
    
  
  )
}

 /*<>

    <>
      <p> Valor do state num em App: {num}</p>
      <Numero num={num}  setNum={setNum}/>
      <p>{nome}</p>
    </>

    <section className='caixa'>
    <Header/>
    <Corpo/>
    <Relogio/>
    <a href='https://youtube.com' target='_blank'>Clique Aqui</a>
    </section>
    </>*/

/*const canal = 'React - 2024'
const curso = '2024'
const name = 'Leticia Honório'


const testando=()=>{

return ('Escrevendo a mensagem...')

}

function mensagem(){

  return ('Estamos orgulhosos de você se esforça pelo React-2024')

}


/*function background(){

const body = document.body;

body.style.background = "white"*/
/*export default App()*/
/*<section>
  <>{background()}</>
  <header>
  <h1>Curso: {canal}</h1> 
  <h1>{curso}</h1>
  <p>{'Desenvolvedora: ' + name}</p>
  </header>
  <>{testando()}</>
  <><br/>{mensagem()}</>

    <section>
    <img src={Borutoadulto} width={150} alt='150' align='right'/> 
    <img src={Logo} width={150} alt='150' align='right'/>
    </section>
  </section>*/


  /*return(

  <p>Olá Mundo</p>
)*/
 /*<body background-color="red"></body>*/

/*return React.createElement('h1', null, 'Hello world');*/