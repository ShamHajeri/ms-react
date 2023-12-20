import './sildeShow.css'
import Sildes from '../sildes/slides';
import { useState } from 'react';


const SildeShow = () => {
    const sildesData = [{ "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi enim, architecto recusandae perferendis vitae veritatis dolorum commodi veniam beatae atque officiis molestias consectetur ut. Fugit molestiae mollitia ex placeat numquam? Doloremque assumenda voluptatibus eveniet ipsum accusamus cupiditate. Vel reprehenderit ipsa necessitatibus, voluptatum adipisci laudantium laborum, ipsum asperiores, tempore quas deserunt fugit voluptatem labore. Nisi obcaecati veniam, aspernatur corporis placeat debitis molestiae illum nihil porro magni amet ex nobis, qui harum iusto nostrum reiciendis dolorem! Hic sint modi praesentium eveniet eaque. Earum laborum dolor facere error dolorem provident neque, totam dicta iste suscipit. Quia magnam repudiandae neque beatae qui simil", "url": "sun.png" }];
     const [current,setCurrent]= useState(0);

    const sildes = <Sildes text={sildesData[0].text} image={sildesData[0].url} />

    return (
        <div class='sildeShow'>
            <div class='arrowBtn'>&lt;</div>
            {sildes}
            <div class='arrowBtn'>&gt;</div>
        </div>
    )
}
export default SildeShow;
