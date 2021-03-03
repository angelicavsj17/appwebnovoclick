import React, { useState } from 'react'
import DishesHeader from '../dishesheader'
import DishesRow from '../dishesrow'
import DishesBackground from '../dishesBackground'
import DishesCardCarrousel from '../dishescardcarrousel'
import Carrousel from '../../Carrousel'
import DishItemSelection from '../dishitemselection'

let DishesContain = ({ selectedItems, addSelectedItem }) => {
    let [dishesSelected, setDishesSelected] = useState("Aperitivo");
    let [itemSelected, setItemSelected] = useState('')
    let dishes = [
        {
            name: "Aperitivo",
            img: '/dishesfrontpage/dishesicons/aperitivos.png',
            backgroundImage: '/dishesfrontpage/backgroundImage/aperitivo.png',
            color: "rgb(142, 223, 244)",
            props: [
                {
                    name: "Analisis Web", img: '/dishesfrontpage/aperitivos/analisisweb.png', items: [
                        'Análisis SEO del sitio web.',
                        'Análisis de rendimiento web',
                        'Medición de la experiencia del cliente',
                        'Análisis de contenido',
                        'Reporte de recomendaciones de mejora',
                        'Análisis de arquitectura del sitio web'
                    ]
                },
                {
                    name: "Analisis de competencia", img: '/dishesfrontpage/aperitivos/analisisderrss.png', items: [
                        'Brief',
                        'Análisis de búsquedas orgánicas y pagas',
                        'Análisis de keywords',
                        'Análisis de autoridad del dominio',
                        'Análisis de back links',
                        'Análisis de publicidad en Display',
                        'Mapa de posicionamiento de la competencia',
                        'Número de páginas indexadas'
                    ]
                },
                {
                    name: "Cluster de audiencia", img: '/dishesfrontpage/aperitivos/clusterdeaudiencia.png', items: [
                        'Brief',
                        'Definición e identificación de cluster de audiencia',
                        'Definición de buyer persona por cada cluster',
                        'Alcance por cluster',
                        'Enfoque de contenido por cada cluster'
                    ]
                },
                {
                    name: "Análisis de estrategia de atracción", img: '/dishesfrontpage/aperitivos/analisisdeestrategiadeatracción.png', items: [
                        'Brief',
                        'Análisis de contenido de valor',
                        'Análisis de volumen de tráfico orgánico',
                        'Análisis de crecimiento de RRSS ',
                        'Análisis de generación de leads',
                        'Medición de resultados'
                    ]
                },
                {
                    name: "Analisis de pauta digital", img: '/dishesfrontpage/aperitivos/analisisdepautadigital.png', items: [
                        'Brief',
                        'Análisis de canales de pauta digital (SEM,pauta programática, pauta en RRSS)',
                        'Análisis de publicidad Mobile',
                        'Análisis de publicidad geolocalizada',
                        'Análisis de presupuesto ',
                        'Análisis de objetivos de pauta digital'
                    ]
                },
                {
                    name: "Analitica de base de datos", img: '/dishesfrontpage/aperitivos/analiticadebasesdedatos.png', items: [
                        'Brief',
                        'Análisis de rebote',
                        'Análisis de actualización de la base',
                        'Normalización de la base'
                    ]
                },
                {
                    name: "Analisis de gestion y conversion de leads", img: '/dishesfrontpage/aperitivos/analisisdegestionyconversióndeleads.png', items: [
                        'Brief',
                        'Análisis de embudos de conversión (Modelo Lead Scoring)',
                        'Análisis de procesos (definición de tiempos de atención de leads, protocolos, procesos  de calidad, guiones )',
                        'Análisis de herramientas de gestión (CRM, distribución de leads a los agentes de ventas, canales de atención de leads)',
                        'Análisis de modelos de automatización'
                    ]
                },
                {
                    name: "Analisis de satisfaccion del cliente", img: '/dishesfrontpage/aperitivos/analisisdesatisfacciondecliente.png', items: [
                        'Brief',
                        'Análisis de reacciones en RRSS',
                        'Análisis de comentarios en RRSS',
                        'Análisis de sentimientos a través de llamada',
                        'Análisis para medir reacciones en texto'
                    ]
                }
            ]
        },
        {
            name: "Platos Fuertes",
            img: '/dishesfrontpage/dishesicons/platosfuertes.png',
            backgroundImage: '/dishesfrontpage/backgroundImage/platofuerte.png',
            color: "rgb(247, 176, 94)",
            props: [
                {
                    name: "Estrategia SEO", img: '/dishesfrontpage/platosfuertes/1 Estrategia SEO.png', items: [
                        'Ingredientes:',
                    ]
                },
                {
                    name: "Estrategia SEM", img: '/dishesfrontpage/platosfuertes/2 Estrategia SEM .png', items: [
                        'ESTRATEGIA SEM',
                        'Brief',
                        'Definición de objetivos ',
                        'Modelado de la estrategia y selección de palabras claves',
                        'Estimación el retorno de la inversión (ROI de la campaña)',
                        'Ejecución táctica (Creación de grupos de anuncios y revisión diseño de la página de aterrizaje o la landing page)',
                        'Medición, optimización  y reporte de la campaña'
                    ]
                },
                {
                    name: "E-mail marketing", img: '/dishesfrontpage/platosfuertes/3 E-mail Marketing .png', items: [
                        'Brief',
                        'Definición de los objetivos del e-mail marketing',
                        'Elección de audiencias (base del cliente y/o suscriptores de Novoclick)',
                        'Tageo de las audiencias vs. perfil de buyer persona',
                        'Modelado de la estrategia, frecuencia de envíos y automatización del embudo',
                        'Ejecución táctica',
                        'Resolución de insumos de diseño y habeas data de flyer y landing page ',
                        'Medición, optimización  y reporte de estrategia '
                    ]
                },
                {
                    name: "Administracion de trafico en rrss", img: '/dishesfrontpage/platosfuertes/4 Administración de tráfico en RRSS.png', items: [
                        'Brief',
                        'Análisis de situación actual',
                        'Definición de la estrategia y los KPI’s de RRSS',
                        'Modelado de la estrategia de contenidos, tráfico y presupuesto de pauta',
                        'Ejecución táctica (parrilla de contenidos y diseño de piezas de publicación)',
                        'Administración por publicaciones y por RRSS',
                        'Medición, optimización  y reporte de estrategia'
                    ]
                },
                {
                    name: "Analitica de datos", img: '/dishesfrontpage/platosfuertes/5 Analítica de datos.png', items: [
                        'ADMINISTRACIÓN DE RRSS: ETAPAS DE PREPARACIÓN',
                        'Brief ',
                        'Entendimiento de la necesidad ',
                        'Definición de objetivos',
                        'Ejecución táctica',
                        'Medición, optimización  y reporte de estrategia'
                    ]
                },
                {
                    name: "Whatsapp marketing", img: '/dishesfrontpage/platosfuertes/6 Whatsapp Marketing.png', items: [
                        'Brief',
                        'Definición de la estrategia de WhatsApp Marketing',
                        'Validación de la bases de datos',
                        'Creación de la parrilla de contenidos ',
                        'Creación optin : link para llevar a un sitio',
                        'Diseño del sitio de aterrizaje '
                    ]
                },
                {
                    name: "SMS marketing", img: '/dishesfrontpage/platosfuertes/smsmarketing.png', items: [
                        'Brief',
                        'Definición de la estrategia de WhatsApp Marketing',
                        'Validación de la bases de datos',
                        'Creación de la parrilla de contenidos',
                        'Creación optin : link para llevar a un sitio',
                        'Diseño del sitio de aterrizaje'
                    ]
                },
                {
                    name: "Publicidad en redes sociales", img: '/dishesfrontpage/platosfuertes/8 Publicidad en Redes Sociales .png', items: [
                        'Brief',
                        'Definición de los objetivos y presupuesto de la publicidad',
                        'Modelado de segmentación y parrilla ',
                        'Diseño creatividades y contenido audiovisual (post,stories)',
                        'Programación embudos y automatizaciones ',
                        'Mención en las RRSS de Novoclick',
                        'Retargeting en RRSS',
                        'Medición, optimización  y reporte de estrategia'
                    ]
                },
                {
                    name: "Publicidad programaticada", img: '/dishesfrontpage/platosfuertes/9 Publicidad programática.png', items: [
                        'Brief',
                        'Definición de los objetivos y presupuesto de la publicidad programática',
                        'Resolución de clusters de audiencia ',
                        'Definición de canales (Mobile, display , video, push ad, audio ad)',
                        'Definición de las tácticas (-campañas: campañas por audiencia, campañas dirigidas a apps móviles, campañas dirigidas a listas de sitios, campañas dirigidas a geolocalización,campañas contextuales y campañas de retargeting-formatos:tradicional, online, push ad, alto impacto, nativos, audio ad)',
                        'Medición, optimización  y reporte de campaña'
                    ]
                },
                {
                    name: "Envio masivo SMS", img: '/dishesfrontpage/platosfuertes/EnviomasivoSMS.png', items: [
                        'Brief',
                        'Definición de la estrategia de WhatsApp Marketing',
                        'Validación de la bases de datos',
                        'Creación de la parrilla de contenidos ',
                        'Creación optin : link para llevar a un sitio',
                        'Diseño del sitio de aterrizaje',
                    ]
                },
                { name: "Mailing", img: '/dishesfrontpage/platosfuertes/mailing.png' },
                {
                    name: "Push app web", img: '/dishesfrontpage/platosfuertes/push app web.png', items: [
                        'Brief',
                        'Definición de los objetivos y presupuesto de la publicidad programática',
                        'Resolución de clusters de audiencia ',
                        'Definición de canales (Mobile, display , video, push ad, audio ad)',
                        'Definición de las tácticas (-campañas: campañas por audiencia, campañas dirigidas a apps móviles, campañas dirigidas a listas de sitios, campañas dirigidas a geolocalización,campañas contextuales y campañas de retargeting-formatos:tradicional, online, push ad, alto impacto, nativos, audio ad)',
                        'Medición, optimización  y reporte de '
                    ]
                },
                {
                    name: "Servicios de voz", img: '/dishesfrontpage/platosfuertes/Serviciodevoz.png', items: [

                    ]
                },
                {
                    name: "SMS landing page", img: '/dishesfrontpage/platosfuertes/smslandingpage.png', items: [

                    ]
                }
            ]
        },
        {
            name: "Platos Especiales",
            img: '/dishesfrontpage/dishesicons/platosespeciales.png',
            backgroundImage: '/dishesfrontpage/backgroundImage/especial.png',
            color: "rgb(244, 211, 80)",
            props: [
                {
                    name: "De conversion", img: '/dishesfrontpage/platosespeciales/A.- PLATOS ESPECIAL DE CONVERSIÓN PARA.png', items: [
                        'Brief',
                        'Definición e identificación de cluster de audiencia',
                        'Definición de buyer persona por cada cluster',
                        'Creación de embudos de conversión y predicción ',
                        'Definición de objetivos MQL (Lead scoring)',
                        'Modelado de la estrategia digital ',
                        'Selección de canales digitales por cluster (email marketing, SEM, Publicidad en RRSS, Whatsapp marketing, SMS y otros)',
                        'Definición de landing page con habeas data ',
                        'Gestión de leads (cronograma, canales de gestión, guiones y rutas)',
                        'Definición de canales de calificación y frecuencia de contacto',
                        'Creación del guión informativo y de calificación',
                        'Entrega de data en panel de cliente en tiempo real ',
                        'Reporte de gestión y calificación',
                        'Poscalificación opcional de gestión comercial'
                    ]
                },
                {
                    name: "Por objetivo", img: '/dishesfrontpage/platosespeciales/B.- PLATOS ESPECIALES POR OBJETIVO.png', items: [
                        'Brief',
                        'Definición e identificación de cluster de audiencia',
                        'Definición de buyer persona por cada cluster',
                        'Definición de KPI’s',
                        'Creación de embudos de tráfico ',
                        'Modelado de la estrategia digital ',
                        'Selección de canales digitales por cluster (email marketing, SEM, Publicidad en RRSS, Whatsapp marketing, SMS y otros)',
                        'Reportería por estrategia '
                    ]
                },
                {
                    name: "Interactivo", img: '/dishesfrontpage/platosespeciales/C PLATOS ESPECIALES INTERACTIVO.png', items: [
                        '-Ferias virtuales',
                        '-Webinars',
                        '-Teatros y Eventos en vivo',

                        'FERIAS VIRTUALES',
                        '1.	Brief',
                        '2.	Definición de objetivos (alcance, tráfico, Leads)',
                        '3.	Modelado de estrategia de la feria',
                        '4.	Creación del embudo de conversión',
                        '5.	Creación de wireframe y mockups de la feria',
                        '6.	Creación de parrilla de pauta digital',
                        '7.	Diseño de piezas gráficas por canal digital y diseño de landing page con habeas data',
                        '8.	Medición, optimización  y reporte de estrategia',

                        'WEBINARS (Video transmisiones ó MasterClass en vivo ó diferidos)',
                        '1.	Brief',
                        '2.	Definición de objetivos, cronograma',
                        '3.	Modelado de la estrategia (Convocatoria, MQL, Preproducción, Evento)',
                        '4.	Creación del embudo de conversión y automatización',
                        '5.	Preproducción (diseño de piezas gráficas, grabación y edición webinar)',
                        '6.	Capacitación de la plataforma',
                        '7.	Montaje del evento',
                        '8.	Definición clusters de audiencia y canales digitales',
                        '9.	Implementación de pauta digital',
                        '10.	Automatización (correo bienvenida, alertas recordatorias, alertas previas al evento)',
                        '11.	Medición y reporte de estrategia',
                        '12.	Implementación en canales digitales del cliente (página web, redes sociales)',


                        'TEATRO, EVENTOS EN VIVO Y EN DIFERIDO',
                        '1.	Brief',
                        '2.	Definición de objetivos, cronograma',
                        '3.	Modelado de la estrategia (Convocatoria, Preproducción)',
                        '4.	Creación del embudo de conversión y automatización',
                        '5.	Preproducción (diseño de piezas gráficas, grabación)',
                        '6.	Capacitación de la plataforma',
                        '7.	Montaje del show',
                        '8.	Definición clusters de audiencia y canales digitales',
                        '9.	Implementación de pauta digital',
                        '10.	Inscripción, reservas, boletería, registro y certificación',
                        '11.	Automatización (correo bienvenida, alertas recordatorias, alertas previas al evento)',
                        '12.	Promoción a patrocinadores ',
                        '13.	Operación del evento ',
                        '14.	Medición y reporte de estrategia',
                    ]
                },
            ]
        },
        {
            name: "Adiciones",
            img: '/dishesfrontpage/dishesicons/adiciones.png',
            backgroundImage: '/dishesfrontpage/backgroundImage/adiciones.png',
            color: "rgb(96, 173, 181)",
            props: [
                {
                    name: "Calificación de leads", img: '/dishesfrontpage/adiciones/CALIFICACIÓN DE LEADS.png', items: [
                        'Brief',
                        'Definición de objetivos y parámetros de calificación de leads (MQL Lead scoring)',
                        'Modelado de la estrategia ( cronograma, contact center robótico, humano o híbrido, embudo, guiones y contenidos)',
                        'Integración y trazabilidad por origen de registros (leads de diferentes canales online y offline)',
                        'Entrega de data en panel de cliente en tiempo real ',
                        'Reporte de gestión y calificación',
                        'Poscalificación opcional de gestión comercial'
                    ]
                },
                {
                    name: "Conversión de leads", img: '/dishesfrontpage/adiciones/CONVERSIÓN DE LEADS.png', items: [
                        'Brief',
                        'Definición de objetivos y parámetros de calificación de leads (MQL Lead scoring)',
                        'Modelado de la estrategia ( cronograma, contact center robótico, humano o híbrido, embudo, guiones y contenidos)',
                        'Integración y trazabilidad por origen de registros (leads de diferentes canales online y offline)',
                        'Integración a su canal de ventas (asignación y/o agendamiento de responsable)',
                        'Creación de alertas de notificación para cada responsable',
                        'Seguimiento de cumplimiento de las agendas realizadas ',
                        'Reagendamiento de no asistencia',
                        'Entrega de data en panel de cliente en tiempo real ',
                        'Poscalificación opcional de gestión comercial',
                        'Reporte de gestión y calificación'
                    ]
                },
                {
                    name: "Gestión de leads", img: '/dishesfrontpage/adiciones/GESTIÓN DE LEADS.png', items: [
                        'Brief',
                        'Definición de objetivos ',
                        'Modelado de la estrategia (cronograma, contact center robótico, humano o híbrido, embudo, guiones y contenidos)',
                        'Integración y trazabilidad por origen de registros (leads de diferentes canales online y offline)',
                        'Ejecución táctica ',
                        'Entrega de huella de gestión en panel administrable ',
                        'Reportería de estrategia '
                    ]
                },
            ]
        },
        {
            name: "Postres",
            img: '/dishesfrontpage/dishesicons/postres.png',
            backgroundImage: '/dishesfrontpage/backgroundImage/postres.png',
            color: "rgb(202, 231, 113)",
            props: [
                {
                    name: "Contacto", img: '/dishesfrontpage/postres/contact.png', items: [
                        'Creación de marcador predictivo',
                        'Omnicanalidad (atención de chatbots, interacciones y llamadas',
                        'Análisis de speech',
                        'Análisis automático de voz del cliente',
                        'Análisis de aseguramiento de calidad',
                        'Reconocimiento de voz para IVR'
                    ]
                },
                {
                    name: "Crm", img: '/dishesfrontpage/postres/customer.png', items: [
                        'Brief de integración',
                        'Modelado de la solución API ',
                        'Creación de código de integración',
                        'Pruebas de integración',
                        'Implementación de la solución',
                        'Soporte'
                    ]
                },
                {
                    name: "Consumidor", img: '/dishesfrontpage/postres/crm.png', items: [
                        'Creación de cuentas WhatsApp Business verificado ',
                        'Creación de la cuenta verificada vía API WhatsApp',
                        'Creación subcuentas (áreas de mercadeo, comercial, administrativo)',
                        'Automatización de mensajes inteligencia artificial',
                        'Plataforma de atención',
                        'API para envíos masivos',
                        'Integración de sistemas masivos',
                        'Creación de tableros de control y seguimiento',
                        'Control de asistencia de las sesiones',
                        'Configuración de horas de servicio',
                        'Configuración de usuarios por sub. cuentas',
                        'Seguimiento de keywords'
                    ]
                },
                {
                    name: "Plataforma", img: '/dishesfrontpage/postres/plataforma.png', items: [
                        'Brief de necesidad comercial',
                        '2.	Modelado de la solución CRM a medida',
                        '3.	Definición de presupuesto y tiempo de implementación',
                        '4.	Capacitación equipo comercial',
                        '5.	Implementación de la solución',
                        '6.	Soporte'
                    ]
                },
            ]
        },
    ]
    let handleChange = (name) => {
        setDishesSelected(name)
    }
    let handleItemSelect = ({ item }) => {
        setItemSelected(item)
    }
    return (
        <>
            <DishesHeader />
            <DishesRow handleChange={handleChange} dishes={dishes} dishesSelected={dishesSelected} />
            <DishesBackground backgroundImage={dishes.find((e) => e.name === dishesSelected).backgroundImage}>
                <Carrousel
                    list={dishes.find((e) => e.name === dishesSelected).props}
                    responsiveParams={[
                        { min: 1100, columns: 3 },
                        { max: 2000, min: 1100, columns: 3 },
                        { max: 1100, min: 500, columns: 2 },
                        { max: 500, columns: 1 },
                    ]}
                    Render={({ item }) => <DishesCardCarrousel handleItemSelect={handleItemSelect} item={item} />}
                />
                <DishItemSelection addSelectedItem={addSelectedItem} selectedItems={selectedItems} itemSelected={itemSelected} />
            </DishesBackground>
        </>
    )
}
export default DishesContain