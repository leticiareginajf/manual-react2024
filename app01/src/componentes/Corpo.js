import React from "react"
import Dados from './Dados'

export default function Corpo(){

    /*const cnl ='Tv Toyko'
    const ep = '04'
    const name = 'Naruto Shipudden'*/

     /*function teste(){
        return 'Ola mundo'
    }*/

    const cnl=()=>{
        return 'Tv Toyko'
    }

    const ep=()=>{
        return '04'
    }

    const name=()=>{
        return 'Naruto'
    }


    const somar=(v1,v2)=>{
        return v1+v2
    }

    return(
        <>
        <section>
            <h2 align="center">Corpo</h2>
            <Dados 
            canal={cnl} 
            episodio={ep} 
            nome={name}
            somar={somar}
            />
        </section>
        
        </>
    )

}