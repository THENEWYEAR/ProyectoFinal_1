import React from "react"
import './body.css';
import Titulos from "../Titulos/Titulos.jsx";
import Card from "../Card/Card.jsx";

const Body =()=>{
    return(
        <div className="body-div">
            <Titulos/>
            <div className="cards-container">
                <Card
                    image="https://www.winpy.cl/files/w24684_kingston_fury_beast_rgb_2.jpg"
                    title="FURY Beast DDR4 RGB de Kingston"
                    description="Kingston FURY Beast DDR4 RGB ofrece un impulso de rendimiento y estilo con velocidades de hasta 3733MHz, estilo agresivo e iluminación RGB que se extiende a lo largo del módulo para obtener efectos suaves y sorprendentes."
                    buttonText="Comprar"
                />
                <Card
                    image="https://s3.amazonaws.com/w3.assets/fotos/27436/1._300.webp"
                    title="Fuente de Poder Gamemax VP-350-RGB 350W  "
                    description="La fuente de alimentación de la serie GameMax VP ofrece el esquema de Valor y rendimiento. 80Plus listo para soporte requiere alta eficiencia, también continúa siendo popular para compilaciones de computadoras."
                    buttonText="Comprar"
                />
                <Card
                    image="https://http2.mlstatic.com/D_NQ_650777-MLA80194089535_102024-V.webp"
                    title="Monitor Gamer 27 Fhd Ips Pivote 90 180hz 1ms Master-G"
                    description="Gracias a la rápida tasa de refresco de 180Hz y el rápido tiempo de respuesta de 1ms, tus juegos serán más fluidos que nunca."
                    buttonText="Comprar"
                />
            </div>
        </div>

    )
}

export default Body