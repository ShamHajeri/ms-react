import './eventPage.css';
import NavBar from '../../navBar/navBar';
import Footer from '../../footer/footer';
import Data from '../../../assert/data/Data.ts';

const EventPage = () => {
    const data =Data.EventPage
    console.log(data);

    const TLHTML=  data.Event.map((item)=><><div class="TLName"><span>{item.Name}</span></div></>);  

    return (
    <>
        <NavBar></NavBar>
        <div class='event'>
            <div class="eventDiv">
                <div class='descriptionBox'>
                    <span class='description'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magni hic ab eaque, tempora asperiores consectetur quam eligendi magnam, optio accusamus qui distinctio sint accusantium blanditiis! Harum eveniet libero sed veniam temporibus ullam delectus nobis doloremque debitis aperiam. Accusamus earum iusto ducimus nemo perspiciatis, distinctio, labore qui amet saepe fugit dolorem ad voluptate blanditiis quam repellendus ex? Ipsam, possimus adipisci assumenda reprehenderit ea aperiam perferendis, corrupti, voluptatum modi molestiae sit quaerat! Earum laboriosam in suscipit totam unde animi nam eius, aliquam laborum minus omnis voluptates nisi sapiente voluptatibus modi? Consequuntur possimus esse voluptates recusandae, tempora vel deserunt ab, magnam facere beatae impedit distinctio, labore culpa. Quas repudiandae assumenda soluta aut ut quibusdam, sit molestias, debitis voluptatibus a explicabo ipsa? Nesciunt quis vitae non! Rerum alias voluptate aperiam perferendis doloremque temporibus repudiandae. Soluta necessitatibus quibusdam provident, eius itaque at odio, ipsa quaerat neque maxime accusantium illum iste ab tempore impedit distinctio corporis non dolorem. Odio, deserunt cum! Animi repellat eligendi error aut, saepe laborum beatae! Pariatur quis vitae commodi, sed dolores quos explicabo, et inventore voluptates ut sequi maxime eos quaerat accusamus blanditiis magnam? Recusandae libero necessitatibus similique corrupti quos obcaecati hic veniam rerum consequuntur repellendus eos molestias labore, id sint!
                    </span>
                </div>
            </div>
            <div class="timeLine">
                {TLHTML}
            </div>
        </div>
        <Footer></Footer>
    </>)
}
export default EventPage;