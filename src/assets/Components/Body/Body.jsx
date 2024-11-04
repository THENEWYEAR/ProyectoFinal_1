import React from "react"
import './body.css';
import Titulos from "../Titulos/Titulos.jsx";
import Card from "../Card/Card.jsx";

const Body =()=>{
    return(
        <div className="body-div">
            <Titulos/>
            <div className="app">
                <Card
                    title="Ram de 16GB DD"
                    content="This is some example content for the card."
                    image="https://centrale.cl/wp-content/uploads/Memoria-RAM-16GB-3200Mhz-DDR4-CL16-Kingston-Fury-Beast-Black_Yjr9Urm.webp"
                />
                <Card
                    title="LG UltraGear 48Gq900 48- Negro - 110/220V"
                    content="Here is some more example content."
                    image="https://http2.mlstatic.com/D_NQ_NP_671257-MLU72479028759_102023-O.webp"
                />
                <Card
                    title="Fuente de Poder Corsair CX750F RGB 750W"
                    content="Las fuentes de alimentación totalmente modulares CORSAIR CX-750F RGB Series ofrecen una potencia eficiente 80 PLUS Bronze fiable a su sistema, así como una iluminación viva y personalizable a partir de un ventilador RGB de 120 mm y con una estética limpia."
                    image="https://cdn3.spider.cl/19139-large_default/fuente-de-poder-corsair-cx750f-rgb-750w-certgold-blanca.jpg"
                />
            </div>
        </div>

    )
}

export default Body