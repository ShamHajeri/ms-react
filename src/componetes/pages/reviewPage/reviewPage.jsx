import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../../navBar/navBar';
import './reviewPage.css';
import Footer from '../../footer/footer';
import aa from '../../../assert/logo.png';

const ReviewPage = () => {
    return (
        <>
            <NavBar />
            <div class='reviewPage'>
                <div class='imgAndHeading'>
                    <div class='imgDiv'></div>
                    <div class='mainHead'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, minima?
                    </div>
                </div>
                <div class='des'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate provident tempora. Temporibus in ex libero architecto praesentium odit! Necessitatibus, nostrum. Aspernatur eveniet optio eius dolor. A accusantium, incidunt fuga provident quidem natus soluta laudantium deserunt molestias id repellendus, amet pariatur omnis eveniet. Voluptate accusantium earum delectus quas, sit aut soluta alias, perferendis, expedita pariatur suscipit adipisci laudantium voluptatibus voluptas molestiae deserunt autem? Commodi, quisquam itaque voluptate numquam libero necessitatibus sint reiciendis dolorum perspiciatis omnis aperiam illum doloribus alias culpa tempora modi suscipit qui. Rem magni beatae officia dolorum, placeat voluptatem amet earum? Et enim dolor, doloremque eaque libero asperiores. Rem commodi, atque dolorem, quos perferendis voluptate repellat delectus quis voluptatibus modi cumque! Porro iure est culpa voluptate nemo quasi omnis molestias placeat, dolorum qui et quod voluptates molestiae deserunt. Sapiente, rerum. Est, totam dolore. Temporibus nihil dicta aperiam. Mollitia exercitationem odit fugiat dolore at accusantium sint quo unde accusamus tenetur repellendus distinctio quibusdam ratione harum nostrum laborum voluptate delectus in saepe eveniet fugit velit, voluptatum quod. Iure voluptatem facilis tenetur similique illo placeat quos praesentium qui. Facilis reprehenderit animi labore. Nisi quo quasi architecto iusto aspernatur? Dicta incidunt delectus harum consequuntur accusantium recusandae quo, distinctio dolor, error, minus qui.
                    </p>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ReviewPage
