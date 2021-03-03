import React, { useEffect, useState } from 'react'
import '../ChefDigitales/styles.css'

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import chefdig1 from '../../assets/chefdig/Sr Jorge Concha.png'
import chefdig2 from '../../assets/chefdig/dariobravo.png'
import chefdig3 from '../../assets/chefdig/wendyfranco.png'
import chefdig4 from '../../assets/chefdig/Sergio Andres Restrepo.png'
import chefdig5 from '../../assets/chefdig/lauracastañedaprada.png'
import chefdig6 from '../../assets/chefdig/renzo palacios.png'
import chefdig7 from '../../assets/chefdig/Sandra liliana.png'
import chefdig8 from '../../assets/chefdig/laureanosilva.png'
import chefdig9 from '../../assets/chefdig/tatianamurillo.png'
import chefdig10 from '../../assets/chefdig/leonardo rivera.png'
import useSize from '../../utils/hooks/size';


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SwipperChefDigital() {
    let [slidesPerView, setSlidesPerView] = useState(3)
    let size = useSize();
    useEffect(() => {
        if (size.width > 1500) {
            setSlidesPerView(4)
        }
        else if (size.width <= 1500 && size.width > 1000) {
            setSlidesPerView(3)
        }
        else if (size.width <= 1000 && size.width >= 700) {
            setSlidesPerView(2)
        }
        else{
            setSlidesPerView(1)
        }
    }, [size])
    return (
        <div className="container--swipperschefdig">
            <Swiper
                spaceBetween={0}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef2">
                                <img src={chefdig2} />
                            </div>
                            <div className="atras">
                                <h1>Dario Bravo</h1>
                                <p>
                                    15 años de experiencia de proyectos digitales. <br /> desarrollo de productos, planeación e implementación de estrategias publicitarias.
</p>
                            </div>

                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef1">
                                <img src={chefdig1} />
                            </div>
                            <div className="atras">
                                <h1>Jorge Concha</h1>
                                <p>
                                    <br />
Especialista en Growth Hacking y Marketing Digital con más de 20 años de reconocida trayectoria.<br />
 Su prestigio le ha permitido ser reconocido como una autoridad en asuntos de Conversión Digital y Performance <br />
 logrando posicionarse como un modelo a seguir en Colombia, Panamá, España, Perú, Chile y México.
La consigna de su Slogan: “Consiga Clientes para su Empresa".
</p>
                            </div>

                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef3">
                                <img src={chefdig3} />
                            </div>
                            <div className="atras">
                                <h1>Wendy Franco</h1>
                                <p>

                                    Amplia experiencia y liderazgo en la coordinación de todo el equipo de call center, contabilidad,
                                    comunicación con los comerciales, apoya el funcionamiento y cumplimiento de las campañas.
</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef4">
                                <img src={chefdig4} />
                            </div>
                            <div className="atras">
                                <h1>Sergio Andres Restrepo</h1>
                                <p>
                                    Director con amplio conocimiento y experiencia en el desarrollo, ejecución, implementación, control,
                                    optimización y monitoreo las estrategias de marketing digital de Novoclick y de sus clientes finales.

</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef4">
                                <img src={chefdig5} />
                            </div>
                            <div className="atras">
                                <h1>Laura Castañeda Prada</h1>
                                <p></p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef4">
                                <img src={chefdig6} />
                            </div>
                            <div className="atras">
                                <h1>Renzo Palacios</h1>
                                <p></p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef4">
                                <img src={chefdig7} />
                            </div>
                            <div className="atras">
                                <h1>Sandra Liliana</h1>
                                <p></p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef4">
                                <img src={chefdig8} />
                            </div>
                            <div className="atras">
                                <h1>Laureano Silva</h1>
                                <p></p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef4">
                                <img src={chefdig9} />
                            </div>
                            <div className="atras">
                                <h1>Tatiana murillo</h1>
                                <p></p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>

                    <div className="tarjeta-wrap">
                        <div className="tarjeta">
                            <div className="adelante chef4">
                                <img src={chefdig10} />
                            </div>
                            <div className="atras">
                                <h1>Leonardo Rivera</h1>
                                <p></p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    );
} export default SwipperChefDigital