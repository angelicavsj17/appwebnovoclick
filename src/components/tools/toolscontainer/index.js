import React, { useState } from 'react'
import './styles.css'
import ToolCard from '../toolsCard'
import Tool1 from '../../../assets/tools/Mesa de trabajo 50.png'
import Tool2 from '../../../assets/tools/Mesa de trabajo 51.png'
import Tool3 from '../../../assets/tools/Mesa de trabajo 52.png'
import Tool4 from '../../../assets/tools/Mesa de trabajo 53.png'
import Tool5 from '../../../assets/tools/Mesa de trabajo 54.png'
import Tool6 from '../../../assets/tools/Mesa de trabajo 55.png'
import Tool7 from '../../../assets/tools/Mesa de trabajo 56.png'
import Tool8 from '../../../assets/tools/Mesa de trabajo 57.png'
import Tool9 from '../../../assets/tools/Mesa de trabajo 58.png'
import Tool10 from '../../../assets/tools/Mesa de trabajo 59.png'
import Tool11 from '../../../assets/tools/Mesa de trabajo 60.png'
import Tool12 from '../../../assets/tools/Mesa de trabajo 61.png'
import Tool13 from '../../../assets/tools/Mesa de trabajo 62.png'
import Tool14 from '../../../assets/tools/Mesa de trabajo 63.png'
import Tool15 from '../../../assets/tools/Mesa de trabajo 64.png'
import Tool16 from '../../../assets/tools/Mesa de trabajo 65.png'
import Tool17 from '../../../assets/tools/Mesa de trabajo 66.png'
import Tool18 from '../../../assets/tools/Mesa de trabajo 68.png'
import Tool19 from '../../../assets/tools/Mesa de trabajo 69_1.png'
import Tool20 from '../../../assets/tools/Mesa de trabajo 69.png'
import Tool21 from '../../../assets/tools/Mesa de trabajo 71.png'
import Tool22 from '../../../assets/tools/Mesa de trabajo 72_1.png'
import Tool23 from '../../../assets/tools/Mesa de trabajo 72.png'
import Tool24 from '../../../assets/tools/Mesa de trabajo 73.png'
import Carrousel from '../../Carrousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
let ToolsContainer = () => {
    let [tools] = useState([
        { name: "AWS", description: "Plataforma donde realizamos almacenamiento y bases de datos", img: Tool1 },
        { name: "Samepage", description: "Plataforma donde hacemos el mejor trabajo en equipo, compartimos archivos, gestionamos tareas, calendarios, dibujamos diagramas y editamos hojas de cálculo en tiempo real.", img: Tool2 },
        { name: "seigo", description: "Plataforma donde analizamos tu sitio web y el de tú competencia, desde arquitectura, url´s y mucho más.", img: Tool3 },
        { name: "Similar Web", description: "Plataforma donde analizamos tú sitio web, nos mantenemos al día con tu competencia y sabemos que posición ocupa tu marca en el mercado.", img: Tool4 },
        { name: "H°TMAPS", description: "Plataforma donde hacemos mapas de calor para optimizar tus ventas.", img: Tool5 },
        { name: "hotjar", description: "Plataforma donde optimizamos tus páginas web, medimos interacciones de los visitantes, comportamiento de usuario, contenidos de más interés, etc.", img: Tool6 },
        { name: "BuzzSumo", description: "Plataforma donde descubrimos contenidos más compartidos, rastreamos marcas, competencia, backlinks, identificamos influencers de tu sector y generamos informes de análisis por asunto", img: Tool7 },
        { name: "GetApp", description: "Plataforma donde construímos aplicaciones móviles.", img: Tool8 },
        { name: "Media Toolkit", description: "Plataforma donde encontramos palabras claves y temas relevantes de contenido organico relacionado al tema de tu empresa.", img: Tool9 },
        { name: "woorank", description: "Plataforma donde analizamos tu sitio web, aumentamos la visibilidad de este, analizamos datos de tu sitio para SEO, redes sociales, usabilidad y factores críticos.", img: Tool10 },
        { name: "GERU", description: "Plataforma donde mapeamos embudos de ventas.", img: Tool11 },
        { name: "Send Pulse", description: "Plataforma donde nos conectamos con tu audiencia por el canal que tu quieras (email marketing, SMS,mensajería, web push, etc)", img: Tool12 },
        { name: "Bitrix24", description: "Plataforma donde alcanzamos nuestros objetivos estratégicos efectivamente, mediante el impulso adecuado de tu empresa.", img: Tool13 },
        { name: "Buffer", description: "Plataforma donde programamos tus publicaciones en diferentes redes sociales, generamos engagement con tus usuarios.", img: Tool14 },
        { name: "Google Trends", description: "Plataforma donde sabemos las palabras claves más buscadas en internet y posicionamos contenido de tu página web.", img: Tool15 },
        { name: "Google Analytics", description: "Plataforma donde monitoreamos el estado de tu sitio web, obtenemos tipos de información relevante.", img: Tool16 },
        { name: "Yandex", description: "Plataforma donde seguimos el tráfico de visitas y datos de tú audiencia.", img: Tool17 },
        { name: "Issabel", description: "Plataforma donde montamos servidores incluyecndo email, SMS, video conferencia, centro de llamada y funciones colaborativas.", img: Tool18 },
        { name: "Salesforce", description: "Plataforma donde gestinamos CRM.", img: Tool19 },
        { name: "HubSpot", description: "Plataforma donde realizamos social media marketing, content management, web analytics y landing page.", img: Tool20 },
        { name: "Webinar Ignition", description: "Plataforma donde creamos webinars en vivo.", img: Tool21 },
        { name: "Everwebinar", description: "Plataforma donde creamos webinars automatizados.", img: Tool22 },
        { name: "Google AdWords", description: "Plataforma donde planificamos y elegimos las mejores palabras claves para tus campañas.", img: Tool23 },
        { name: "Zoom", description: "Plataforma donde realizamos reuniones y tranmisión del tema que quieras en vivo.", img: Tool24 },
    ])
    return (
        <div className="container-carrousel">
            <div><h1>Herramientas Novoclick</h1></div>
            <br />
            <br />
            <div className="box1-part4">
                <div className="digital-dishes-header">
                    <div className="d-flex">
                    </div>
                </div>
                {/* <h1><span className="span1part4">HERRAMIENTAS</span><br /> <span>NOVOCLIK</span> </h1> */}
                <p>La magia de nuestras recetas de los platos sucede gracias a nuestro equipo de chefs digitales, son más de 50 profesionales
                con compromiso de alta calidad, quienes son referentes de alto conocimiento experiencial de las siguientes herramientas Novoclick.
                </p>
            </div>
            <br />
            <br />
            <Carrousel
                responsiveParams={[
                    { min: 2000, columns: 6 },
                    { max: 2000, min: 1100, columns: 6 },
                    { max: 1100, min: 500, columns: 3 },
                    { max: 500, min: 400, columns: 2 },
                    { max: 400, columns: 1 },
                ]}
                RightButton={({ className, onClick }) => <FontAwesomeIcon onClick={onClick} className={className} icon={faChevronRight} />}
                LeftButton={({ className, onClick }) => <FontAwesomeIcon onClick={onClick} className={className} icon={faChevronLeft} />}
                list={tools}
                Render={ToolCard}
                time={10000}
                autoScroll={false} />
        </div>
    )
}
export default ToolsContainer