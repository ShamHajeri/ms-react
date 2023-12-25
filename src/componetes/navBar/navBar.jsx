import './navBar.css'
import HomePage from '../../assert/data/Data.ts';


const NavBar = () => {

    const navElementMap = HomePage.NavBar.nav
    const navList = navElementMap.map((item) =>
        <a className="navElement" href={item.url}>{item.Name}</a>
    )
    return (
        <div class="navBar">
            <div>
                <div className="navLogo"/>
  
            </div>
            <div className='navElements'>
                {navList}
            </div>
        </div>
    )
}
export default NavBar;