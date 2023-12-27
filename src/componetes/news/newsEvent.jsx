import React from 'react';
import './news.css'
import News from '../news/news';


const NewsEvent = () => {

    const datar = [
        {
            heading: 'jfon iuhu whahioahoi HIAAHFAIOSA HIOAH IISASUHVAH WAOIHOIHOIAI IOAH IOASIAUAVIAIPW',
            img: ''
        },
        {
            heading: 'jfon iuhu whahioahoi HIAAHFAIOSA HIOAH IISASUHVAH WAOIHOIHOIAI IOAH IOASIAUAVIAIPW',
            img: ''
        },
        {
            heading: 'jfon iuhu whahioahoi HIAAHFAIOSA HIOAH IISASUHVAH WAOIHOIHOIAI IOAH IOASIAUAVIAIPW',
            img: ''
        }

    ]
    return (

        <div class='newsBanner'>
            {datar.map((item)=>
                <News newsData={item}/>
            )}
        </div>
    )
}

export default NewsEvent;