import '../homePage/homePage.css'
import NavBar from '../../navBar/navBar';
import HomeTitle from '../../homeTitle/homeTitle';
import SildeShow from '../../sildeShow/sildeShow';
const HomePages = () => {

    return (
        <>
            <div class="mainScreen">
                <NavBar />
                <HomeTitle/>
                <SildeShow/>
            </div>
        </>
    )
}
export default HomePages;