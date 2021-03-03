import React, { useCallback, useEffect, useRef, useState } from 'react'
import './styles.css'
let Carrousel = ({ list, responsiveParams, Render, RightButton, LeftButton, time = 2000, autoScroll = true }) => {
    let [templateColumns, settemplateColumns] = useState(list.length);
    let [columns, setcolumns] = useState(0);
    let [id] = useState(new Date().getTime());
    let [isHover, setIsHover] = useState()
    let timeout = useRef(null);
    const widthChanged = useCallback(() => {
        let width = document.body.clientWidth;
        for (let option of responsiveParams) {
            if (option.min && option.max) {
                if (width <= option.max && width > option.min) {
                    setcolumns(option.columns)
                }
            }
            else if (option.min) {
                if (width > option.min) {
                    setcolumns(option.columns)
                }
            }
            else if (option.max) {
                if (width <= option.max) {
                    setcolumns(option.columns)
                }
            }
        }
    }, [responsiveParams])
    let scrollList = useCallback((sign) => {
        let element = document.getElementById(id);
        if (!sign) {
            if (element && !isHover) {
                let sLeft = element.scrollLeft;
                let width = element.clientWidth;
                if (sLeft + 5 + width >= element.scrollWidth)
                    element.scroll({
                        left: 0,
                        behavior: 'smooth'
                    })
                else {
                    element.scroll({
                        left: sLeft += width,
                        behavior: 'smooth'
                    })
                }
            }
        }
        else {
            let sLeft = element.scrollLeft;
            let width = element.clientWidth;
            element.scroll({
                left: sign === "+" ? sLeft += width : sLeft -= width,
                behavior: 'smooth'
            })
        }
    }, [id, isHover])
    useEffect(() => {
        widthChanged()
        window.addEventListener('resize', widthChanged)
        if (autoScroll)
            timeout.current = setInterval(() => scrollList(), time);
        return (() => { window.removeEventListener('resize', widthChanged); clearInterval(timeout.current) })
    }, [isHover, scrollList, widthChanged])
    useEffect(() => {
        settemplateColumns(list.length)
    }, [list])
    return (
        <div className="dishes-grid-container">
            <div
                onMouseEnter={() => { setIsHover(true); console.log('mouse enter') }}
                onMouseLeave={() => { setIsHover(false); console.log('mouse leave') }}
                onTouchEnd={() => { setIsHover(false); console.log('touch end') }}
                onTouchStart={() => { setIsHover(true); console.log('rouch start') }}
                id={id} className="dishes-grid-wrapper">
                <div className="dishes-grid" style={{ gridTemplateColumns: `repeat(${templateColumns},1fr)`, width: `${templateColumns / columns * 100}%` }}>
                    {
                        list.map((item) => {
                            return (
                                <Render key={item.name + item.img} item={item} />
                            )
                        })
                    }
                </div>
                {
                    LeftButton ? <LeftButton onClick={() => scrollList("-")} className="left-button" /> : null
                }
                {
                    RightButton ? <RightButton onClick={() => scrollList("+")} className="right-button" /> : null
                }
            </div>
        </div>
    )
}
export default Carrousel