import './navBar.css'
import HomePage from '../../assert/data/Data.ts';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navElementMap = HomePage.NavBar.nav;
    const navigate = useNavigate();
    const navList = navElementMap.map((item) =>
        <a class="navElement" onClick={() => navigate(`${item.url}`)}>{item.Name}</a>
    )
    return (
        <div class="navBar">
            <div>
                <div class="navLogo" onClick={() => {
                    window.location.href = '/home'
                }} />
            </div>
            <div class='navElements'>
                {navList}
            </div>
            <div class='searchBar'>
                <div class='searchClass1'>
                    Search
                </div>
            </div>
        </div>
    )
}
export default NavBar;