import React from 'react'
import '../footer/styles.css'
import imglogoredes1 from '../../assets/logoface.png'
import imglogoredes2 from '../../assets/logoin.png'
import imglogoredes3 from '../../assets/logoinsta.png'
import imglogoredes4 from '../../assets/logopinte.png'
import imglogoredes5 from '../../assets/logotwi.png'
import logonovo from '../../assets/logonovoclick.png'


function Footer() {

  return (
    <div className="container-footer">
      <div className='footer-wrapper'>

        <div className="part1-footer">
          <img src={logonovo} />
          <p>
            Somos la autoridad en marketing digital con 18 años de experiencia y presencia
            en 5 paises  (Colombia, España, Panama, Mexico y Peru) con 9 millones de suscriptores, donde cocinamos
            las recetas que necesitas para incrementar de forma inmediata y sobresaliente el volumen de usuarios,
            ingresoso impatos de tu empresa
</p>
        </div>

        <div className="part2-footer">
          <h1>CONTACTO</h1>
          <p>
            <p>Correo: ceo@novoclick.com</p>
            <p>Telefono: SOPORTE NOVOCLICK</p>
            <p>Panama:[507]3912564 -6740-7458 -60473433</p>
            <p>Miami: [1]305 4205329</p>
            <p>Madrid: [34]910603675</p>
            <p>Mexico: [52]5541696824</p>
            <p>Bogota: [57]6130800 -2719855 -5331124 -2712140</p>
          </p>
        </div>

        <div className="part3-footer">
          <h1>Siguenos en</h1>
          <div className="container-redes">
            <img src={imglogoredes1} />
            <img src={imglogoredes2} />
            <img src={imglogoredes3} />
            <img src={imglogoredes4} />
            <img src={imglogoredes5} />
            <h2>Newsletter</h2>
            <input
              className="styles-inputsfooter"
              type="text"
              value="Nombre"
            />

            <input
              className="styles-inputsfooter"
              type="text"
              value="Apellido"
            />
            <input
              className="styles-inputsfooter"
              type="text"
              value="Email"
            />
            <button>Suscribirse</button>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Footer;