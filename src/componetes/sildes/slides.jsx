import './sildes.css'
import ETB from '../planet/planet'


const Sildes = ({ sildeData }) => {


    return (
        <div class='sildes'>
            <div class="sildeElement" >
                <ETB etb={sildeData.url} />
            </div>

            <span class='sildeText'>
                <h4>{sildeData.heading}</h4>
                {sildeData.text}
            </span>

        </div>
    )
}
export default Sildes;