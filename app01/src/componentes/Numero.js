import React, {userState} from "react";



export default function Numero(props){


    //props.num=500

    return(
        
        <p>
        <p> Valor do state num em Numero: {props.num}</p>
        <button onClick={()=>props.setNum(props.num+10)}>Soma 10</button>
        </p>

    )


}