import {useEffect, useState} from 'react'

const MercadoLibre = () => {

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
            .then(response =>{
                response.json().then(res =>{
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            })
            .catch(error =>{
                console.log(error)
            })
    },[])

    return(
        <div>
            <h1>Hola mercado libre</h1>
        </div>
    )
}

export default MercadoLibre;