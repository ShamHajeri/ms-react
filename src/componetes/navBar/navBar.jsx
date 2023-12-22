import './navBar.css'
const NavBar = (props) => {

    const navElementMap = [{ "Name": "Space", "url": "www.stenciljs.com" }, { "Name": "Planet", "url": "www.stenciljs.com" }, { "Name": "Sreach", "url": "www.google.com" }, { "Name": "Contact", "url": "www.google.com" }];
    const navList = navElementMap.map((item) =>
        <a className="navElement" href={item.url}>{item.Name}</a>
    )
    return (
        <div class="navBar">
            <div>
                <div className="navLogo">logo</div>
            </div>
            <div className='navElements'>
                {navList}
            </div>
        </div>
    )
}
export default NavBar;