import React from "react"



export default function Dados(props){

return (

    <>
    
    <section>
        <p>Nome:{props.nome}</p>
        <p>Episódios:{props.episodio}</p>
        <p>Canal:{props.canal}</p>
    </section>
    
    </>


)


}