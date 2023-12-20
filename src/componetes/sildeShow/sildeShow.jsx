import './sildeShow.css'
import Sildes from '../sildes/slides';
import { useState } from 'react';


const SildeShow = () => {
    const sildesData = [{ "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi enim, architecto recusandae perferendis vitae veritatis dolorum commodi veniam beatae atque officiis molestias consectetur ut. Fugit molestiae mollitia ex placeat numquam? Doloremque assumenda voluptatibus eveniet ipsum accusamus cupiditate. Vel reprehenderit ipsa necessitatibus, voluptatum adipisci laudantium laborum, ipsum asperiores, tempore quas deserunt fugit voluptatem labore. Nisi obcaecati veniam, aspernatur corporis placeat debitis molestiae illum nihil porro magni amet ex nobis, qui harum iusto nostrum reiciendis dolorem! Hic sint modi praesentium eveniet eaque. Earum laborum dolor facere error dolorem provident neque, totam dicta iste suscipit. Quia magnam repudiandae neque beatae qui simil", "url": "sun.png" },
    { "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi enim, architecto recusandae perferendis vitae veritatis dolorum commodi veniam beatae atque officiis molestias consectetur ut. Fugit molestiae veniet ipsum accusamus cupiditate. Vel reprehenderit ipsa necessitatibus, voluptatum adipisci laudantium laborum, ipsum asperiores, tempore quas deserunt fugit voluptatem labore. Nisi obcaecati veniam, aspernatur corporis placeat debitis molestiae illum nihil porro magni amet ex nobis, qui harum iusto nostrum reiciendis dolorem! Hic sint modi praesentium eveniet eaque. Earum laborum dolor facere error dolorem provident neque, totam dicta iste suscipit. Quia magnam repudiandae neque beatae qui simil", "url": "sun.png" },
    { "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi enim, architecto recusandae perferendis vitae molestias consectetur ut. Fugit molestiae mollitia ex placeat numquam? Doloremque assumenda voluptatibus eveniet ipsum accusamus cupiditate. Vel reprehenderit ipsa necessitatibus, voluptatum adipisci laudantium laborum, ipsum asperiores, tempore quas deserunt fugit voluptatem labore. Nisi obcaecati veniam, aspernatur corporis placeat debitis molestiae illum nihil porro magni amet ex nobis, qui harum iusto nostrum reiciendis dolorem! Hic sint modi praesentium eveniet eaque. Earum laborum dolor facere error dolorem provident neque, totam dicta iste suscipit. Quia magnam repudiandae neque beatae qui simil", "url": "sun.png" },
    { "text": "Lorem ipsum dolor, sit amet consectetur adipisicing  commodi veniam beatae atque officiis molestias consectetur ut. Fugit molestiae mollitia ex placeat numquam? Doloremque assumenda voluptatibus eveniet ipsum accusamus cupiditate. Vel reprehenderit ipsa necessitatibus, voluptatum adipisci laudantium laborum, ipsum asperiores, tempore quas deserunt fugit voluptatem labore. Nisi obcaecati veniam, aspernatur corporis placeat debitis molestiae illum nihil porro magni amet ex nobis, qui harum iusto nostrum reiciendis dolorem! Hic sint modi praesentium eveniet eaque. Earum laborum dolor facere error dolorem provident neque, totam dicta iste suscipit. Quia magnam repudiandae neque beatae qui simil", "url": "sun.png" },
    { "text": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eligendi enim, architecto recusandae perferendis vitae veritatisatque officiis molestias consectetur ut. Fugit molestiae mollitia ex placeat numquam? Doloremque assumenda voluptatibus eveniet ipsum accusamus cupiditate. Vel reprehenderit ipsa necessitatibus, voluptatum adipisci laudantium laborum, ipsum asperiores, tempore quas deserunt fugit voluptatem labore. Nisi obcaecati veniam, aspernatur corporis placeat debitis molestiae illum nihil porro magni amet ex nobis, qui harum iusto nostrum reiciendis dolorem! Hic sint modi praesentium eveniet eaque. Earum laborum dolor facere error dolorem provident neque, totam dicta iste suscipit. Quia magnam repudiandae neque beatae qui simil", "url": "sun.png" }];
    let [current, setCurrent] = useState(2);
    const arrowPervious = () => {
        if (current > 0)
            setCurrent(current--);
    }
    const arrowNext = () => {
        if (current < 4)
            setCurrent(current++);
    }

    return (
        <div class='sildeShow'>
            <span class='arrowBtn' onClick={arrowPervious}>&lt;</span>
            <Sildes text={sildesData[current].text} image={sildesData[current].url} />
            <span class='arrowBtn' onClick={arrowNext}>&gt;</span>
        </div>
    )
}
export default SildeShow