import React from "react"
import Dados from './Dados'

export default function Corpo(){

    const cnl ='Tv Toyko'
    const ep = '04'
    const name = 'Naruto Shipudden'


    return(
        <>
        <section>
            <h2 align="center">Corpo</h2>
            <Dados canal={cnl} episodio={ep} nome={name}/>
        </section>
        
        </>
    )

}