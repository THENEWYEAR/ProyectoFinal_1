import React from "react"
import './footer.css'



const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyrigth">
                        <div className="Footer-logo"><img src="src/assets/Images/generico2.png" alt="logo"/></div>
                        <p>
                        @{new Date().getFullYear()} Código int. Todos los derechos reservados
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <li><a
                            href="https://support.wix.com/es/article/crear-una-pol%C3%ADtica-de-t%C3%A9rminos-y-condiciones">Términos
                            y condiciones</a></li>
                        <a href="/Privacidad">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer