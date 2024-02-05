import { useEffect, useState } from 'react';
import './homeTitle.css';
import ETB from '../planet/planet';

const HomeTitle = (props) => {

    const data = props.HomeTitleData;
    const [bIPosition, setBIPosition] = useState(data.defualtBIPosition);
    const [bISize, setBISize] = useState(data.defualtBISize)
    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > 150) {
            setBIPosition(data.nextBIPosition)
            setBISize(data.nextBISize)
        }
        else{
            setBIPosition(data.defualtBIPosition)
            setBISize(data.defualtBISize)
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            listenToScroll();
          };
        window.addEventListener("scroll", handleScroll);
        return () =>
        
        window.removeEventListener("scroll", handleScroll);
    }, [listenToScroll])


    return (
        <>
            <div class="homeTitle" >
                <div class="ETB_position" style={{ 
                    top: `${bIPosition}`
                    ,right:`calc(100% -${bIPosition})`,
                    width: `${bISize}`
                    ,height:`${bISize}` }}>
                <ETB  etb="moon"/>
                </div>
                <span class='mainTitle'>
                    <label class='mainHeading'>{data.mainHeading}</label><br />
                    <label class='subHeading'>{data.subHeading}</label><br /><br />
                    <button class='mainBtn' onClick={()=>{
                        window.location.href="planet"
                    }}>
                        {data.mainBtn}
                    </button>
                </span>
            </div>
        </>
    )
}

export default HomeTitle;