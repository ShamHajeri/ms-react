import './planet.css'
const ETB=({etb})=>{
      
    return (
        <div class="container-planet">
        <div class="planet-img" style={{backgroundImage:`url("${process.env.PUBLIC_URL}/${etb}.jpg")`}}>
        </div>
        <div class="shadow-other">
        </div>
    
    </div>

    )

}
export default ETB;