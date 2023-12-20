import '../homePage/homePage.css'
import NavBar from '../../navBar/navBar';
import HomeTitle from '../../homeTitle/homeTitle';
import SildeShow from '../../sildeShow/sildeShow';
import Footer from '../../footer/footer';
const HomePages = () => {

    return (
        <>
            <div class="mainScreen">
                <NavBar />
                <HomeTitle/>
                <SildeShow/>
                <Footer/>
            </div>
        </>
    )
}
export default HomePages;