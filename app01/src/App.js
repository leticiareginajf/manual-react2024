import React from 'react'

export default function App() {

const canal = 'React - 2024'
const curso = '2024'
const name = 'Leticia Honório'


const testando=()=>{

return ('Escrevendo a mensagem...')

}

function mensagem(){

  return ('Estamos orgulhosos de você se esforça pelo React-2024')

}
  return (
  
  <section>
  <h1>Curso: {canal}</h1> 
  <h1>{curso}</h1>
  <p>{'Desenvolvedora: ' + name}</p>
  <>{testando()}</>
  <><br/>{mensagem()}</>
  </section>
  )
/*return(

  <p>Olá Mundo</p>
)*/

/*return React.createElement('h1', null, 'Hello world');*/

}

/*export default App()*/