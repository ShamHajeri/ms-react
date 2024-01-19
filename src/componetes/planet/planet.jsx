import './planet.css'
const ETB=({etb})=>{
console.log(`${process.env.PUBLIC_URL}/logo.png`)

    return (
        <div class="container-planet">
        <div class="planet-img" style={{backgroundImage:`url("${process.env.PUBLIC_URL}/earth.jpg")`}}>
        </div>
        <div class="shadow-other">
        </div>
    
    </div>

    )

}
export default ETB;