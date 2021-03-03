import { useEffect, useState } from 'react'
let useSize = () => {
    let [size, setSize] = useState({ width: 0, height: 0 })


    let changeSize = () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        setSize({ width, height });
    }
    useEffect(() => {
        changeSize();
        window.addEventListener('resize', changeSize);
        return () => window.removeEventListener('resize', changeSize);
    }, [])
    return size
}
export default useSize;