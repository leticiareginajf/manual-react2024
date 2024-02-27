import React from "react"



export default function Dados(props){


    let n1 = 30
    let n2 = 115


return (

    <>
    
    <section>
        <p>Nome:{props.nome()}</p>
        <p>Episódios:{props.episodio()}</p>
        <p>Canal:{props.canal()}</p>
        <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual ' + props.somar(n1,n2)}</p>
    </section>
    
    </>


)


}