import React, { useState } from 'react';
import './indexstyle.css';
import ReactPlayer from 'react-player/lazy'
import videoInit from '../assets/videoinit.mp4'
import tomatesSection1 from '../assets/tomaticos.png';
import tomatis2 from '../assets/tomatiis.png'
import ItemCliente from '../components/itemcliente/ItemClientes'
import ToolsContain from '../components/tools/toolscontainer'
import DishesContain from '../components/digitaldishes/dishescontain'
import SwipersMoments from '../components/Carruselmoments/index'
import Videopint from '../assets/clickvideo.mp4'
import SwipperTestimonios from '../components/Testimonios/index'
import logohoyos from '../assets/hoyos.png'
import CarruselAsociados from '../components/asociados/carruselasociados'
import { render } from '@testing-library/react'
import img1id from '../assets/identificar.png'
import img2conect from '../assets/conectar.png'
import img3optm from '../assets/optimizar.png'
import organigramahoyos from '../assets/organigrama.jpg'
import academianovoclick from '../assets/acanovo.jpg'
import SwippersBlog from '../components/swippersBlog/index'
import imgblog1 from '../assets/blogimg1.jpg'
import blogtend from '../assets/blogtend.jpg'
import Swippers from '../components/carruselhoyos/swiper'
import SwipperHoyos from '../components/carruselhoyos/index'
import imghoyos from '../assets/hoyos.png'
import SwipperChefDigital from '../components/ChefDigitales/index'
import {db} from '../firebase'


export function Section1() {
    // let [video, setVideo] = useState('')
    // useEffect(() => {
    //     let videoLoaded = require('../assets/videoinit.mp4')
    //     setVideo(videoLoaded.default)
    // }, [])
    return (
        <>
            <div className="player-container" >
                <ReactPlayer
                    url={videoInit}
                    className="react-player"
                    width='100%'
                    height='100%'
                    loop={true}
                    playing
                    muted
                />
                <div className="welcome-novoclik">
                    <h1>BIENVENIDO A NOVOCLIK</h1>
                    <p>Somos la autoridad en marketing<br /> digital tenemos los mejores chefs<br />
                        para cocinar tus recetas basadas en estrategias digitales<br />
                        ¿en que podemos ayudarte?
                    </p>
                    <a href="#section2"><button>Activa tu chef digital</button></a>
                </div>
            </div>
            <div></div>
        </>

    )
}

export function Section2() {
    return (
        <div className="container--section2">
            <div id="section2" className="box-part2">
                <div className="box1-part2">
                    {/* <div><span>QUIENES</span>
                    <div className="bottom-border-dishes"></div>
                    <span className="span2-part1">SOMOS</span>
                </div> */}
                    <span className="dishes-lblue dishes-title">QUIENES</span>
                    <div className="d-flex">
                        <div className="bottom-border-dishes"></div>
                        <span className="dishes-title">SOMOS</span>
                    </div>
                    <img alt='tomates1' src={tomatesSection1} />
                </div>

                <div className="box2-part2">
                    <p>
                        Somos el mejor restaurante digital, nos destacamos por tener 5 estrellas Michelin,
                        somos capaces de resolver tus necesidades de perfomance, tú nos dices el plato digital que quieres y nosotros te ponemos
                        los ingredientes y lo cocinamos para llegar al resultado exquisito,
                        vas a salir satisfecho y encantado después de trabajar con nosotros, tendrás el mejor plato para que todos
tus clientes saboreen el increíble sabor y no paren de hablar de él.</p>
                </div>

            </div>
        </div>
    )
}

export function Section3() {
    return (
        <div className="container-section3">
            <div className="box-part3">
                <div className="box1-part3">
                    <p>
                        Somos el mejor restaurante digital, nos
                        destacamos por tener 5 estrellas Michelin,somos capaces de resolver tus necesidades de perfomance,
                        tú nos dices el plato digital que quieres y nosotros te ponemos los ingredientes y lo cocinamos para llegar
                        al resultado exquisito, vas a salir satisfecho y encantado después de trabajar con nosotros, tendrás el mejor
                        plato para que todos tus clientes saboreen el increíble sabor y no paren de hablar de él.
</p>
                </div>
                {/* <div className="box2-part3">
                <img alt='tomates2' src={tomatis2} />
                <h1><span>QUE</span><br /> <span className="span2-part3">HACEMOS POR TI</span></h1>
            </div> */}
                <div className='box2-part3'>
                    <div className="digital-dishes-header">
                        <img className='tomato2' alt='tomates2' src={tomatis2} />
                        <span className="dishes-lblue dishes-title">QUE</span>
                        <div className="d-flex">
                            <div className="bottom-border-dishes"></div>
                            <span className="dishes-title">HACEMOS POR TI</span>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export function Section4() {
    return (
        <div className="container--section4">
            <ToolsContain />
        </div>
    )
}

export function Section5({ selectedItems, addSelectedItem }) {
    return (

        <div className="container--section5">
            <h1>Platos Digitales</h1>
            <DishesContain selectedItems={selectedItems} addSelectedItem={addSelectedItem} />
        </div>

    )
}

export function Section6() {
    return (
        <div className="box-section6">
            <ItemCliente />
        </div>
    )
}

export function Section7() {

    return (

        <div className="container--section7">
            <h1 className="tittlesection7"> Chef Digitales</h1>
            <p className="psection7">Nuestro team está compuesto de una serie de chefs digitales ellos se encargan de que toda la magia de las recetas basadas en estrategias digitales
            sea posible para tener el resultado más exquisito de nuestros platos.
     </p>
            <SwipperChefDigital />
        </div>
    )
}

function Section8() {
    return (
        <div className="container-section8">
            <h1>Momentos Novoclick</h1>
            <div className="cont-carrusel-section8">
                <SwipersMoments />
            </div>
        </div>
    )

}

function Section9() {
    return (
        <div className="container-section9">
            <h1>GALERIA PINTEREST </h1>

            <ReactPlayer
                url={Videopint}
                className="react-player2"
                loop={true}
                playing={true}
                controls={true}
                width='100%'
                height='100%'

            />

        </div>
    )
}

function Section10() {
    return (
        <div className="containersection10">
            <h1>TESTIMONIOS</h1>
            <p>
                Queremos compartir algunos de los testimonios que hemos tenido con nuestros clientes, <br />
evidenciando la experiencia que han tenido con nuestros platos digitales y como esto ha cumplido las expectativas de la empresa.
</p>

            <SwipperTestimonios />
        </div>

    )

}


function Section12() {
    return (
        <div className="container-section12">
            <img src={imghoyos} className="img--tittlesection12" />

            <SwipperHoyos />

            <h1 className="titleprincipal-section12">
                PROCESO PLANIFICACION
            </h1>


            <div className="container-planification">
                <div className="cards-section12">
                    <h1 className="titleint-section12">1</h1>
                    <h1 className="titleint-section12">IDENTIFICAR</h1>
                    <img className="img-section12" src={img1id} />
                    <p>
                        is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
</p>
                </div>

                <div className="cards-section12">
                    <h1 className="titleint-section12">2</h1>
                    <h1 className="titleint-section12">CONECTAR</h1>
                    <img className="img-section12" src={img2conect} />
                    <p>
                        is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
</p>
                </div>

                <div className="cards-section12">
                    <h1 className="titleint-section12">3</h1>
                    <h1 className="titleint-section12">OPTIMIZAR</h1>
                    <img className="img-section12" src={img3optm} />
                    <p>
                        is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
</p>
                </div>

            </div>
            <Swippers />
        </div>
    )
}

function Section13() {
    return (
        <div className="containersection13">

            <h1>ESTRUCTURA ORGANIGRAMA</h1>
            <img className="img-section12" src={organigramahoyos} />
        </div>
    )
}

function Section14() {
    return (

        <div className="section14">
            <h1 className="titleprincipal-section14">ACADEMIA NOVOCLIK</h1>
            <div className="container-section14">

                <div className="cards1-section14">

                    <h1 className="tittle2-section14">Conceptos básicos sobre el Growth Hacking</h1>
                    <p>
                        Aprende a posicionar tu marca con experimentos sobre resultados y optimización de recursos.
                        En este curso aprendes a generar mayor conversión con menor inversión en canales digitales.
</p>
                </div>
                <div className="cards2-section14">
                    <img src={academianovoclick} />
                </div>
            </div>
            <SwippersBlog />

        </div>
    )

}

function Section15() {
    return (
        <div className="container-section15">
            <h1 className="title1-section15"> BLOG NOVOCLIK</h1>
            <h2>publicaciones permanentes sobre marketing digital que ayude a mejorar el SEO</h2>
            <img src={blogtend} />

            <div className="cards1-blog">
                <h1>Tips para mejorar el SEO con contenido</h1>
                <p>
                    el plato digital que conocemos como SEO  es bastante importante en nuestras estrategias  de marketing digital,
                    ya que gracias a este generamos contenido de calidad que despierte interes entre determinado target de manera organica sin pagos adicionales,
                    acontinuacion te dare unos tips esenciales para lograr que tus recetas encaminadas al objetivo  del plato digital SEO tengan un resultado eficiente
</p>
                <button>Saber mas</button>
            </div>

            <img src={imgblog1} />

            <div className="cards1-blog">
                <h1>Tips para mejorar el SEO con contenido</h1>
                <p>
                    Para saber como tu receta basada estrategia de SEO para llegar al plato digital final
                    sea efectiva y no tenga un declive, es importante conocer las tendencias, a continuación te contaré con
                    la finalidad de que sean funcionales para ti.

</p>
                <button>Saber mas</button>
            </div>
        </div>
    )

}

function Section16() {

    const [nombres, setNombres] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [mensaje, setMensaje] = useState("")

    const handleSubmit= (e) =>{
        e.preventDefault();

        db.collection('contacts').add({
            name: nombres,
            email:email,
            phone:telefono,
            empresa:empresa,
            message:mensaje
        })
        .then(() =>{
            alert('mensaje ha sido enviado')
        }).catch(error =>{
            alert(error.message)
        })
setNombres('')
setEmail('')
setTelefono('')
setEmpresa('')
setMensaje('')
        
    }

    return (
        <div className="container-section16">
            <div className="cards1-section16">
                <h1> CONTACTO</h1>
                <p>
                    Que buena experiencia te llevarías al trabajar con el mejor team de chefs digitales.
                    Estamos al servicio de una atención personalizada de tus necesidades para ofrecerte el mejor.
</p>
            </div>

            <div className="cards2-section16">
                <form onSubmit={handleSubmit}>
                  <input
                    className="styles-inputs"
                    type="text"
                   placeholder="Nombres"
                   value={ nombres } 
                   onChange = {(e) =>  setNombres (e.target.value)  }
                />

                <input
                    className="styles-inputs"
                    type="text"
                   placeholder="email"
                   value={ email } 
                   onChange = {(e) =>  setEmail (e.target.value)  }
                />
                <br />
                <input
                    className="styles-inputs"
                    type="text"
                  placeholder="Telefono"
                  value={ telefono } 
                  onChange = {(e) =>  setTelefono (e.target.value)  }
                />

                <input
                    className="styles-inputs"
                    type="text"
                   placeholder="Empresa"
                   value={ empresa } 
                   onChange = {(e) =>  setEmpresa (e.target.value)  }
                />
                <br />
                <input
                    className="styles-inputsmgs"
                    type="text"
                    placeholder="Mensaje"
                    value={ mensaje } 
                    onChange = {(e) =>  setMensaje (e.target.value)  }
                /> 
                <button type="submit" className="button-section16">ENVIAR</button>
                </form>
            </div>
         
        </div>
    )

}

function IndexPage() {
    let [selectedItems, setSelectedItems] = useState([])
    let addSelectedItem = (item) => {
        setSelectedItems([...selectedItems, item])
    }
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 selectedItems={selectedItems} addSelectedItem={addSelectedItem} />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section12 />
            <Section13 />
            <Section14 />
            <Section15 />
            <Section16 />

        </>
    )
}

export default IndexPage;
