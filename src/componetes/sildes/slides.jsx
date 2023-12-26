import './sildes.css'
import aa from '../../assert/moon.png'


const Sildes = (Props) => {


    return (<>
        <div class='sildes'>
            <div class='sildeElement'>
                <img alt='' class='sildeImg' src={aa} />
            </div>
            <div class='sildeElement'>
                <span class='sildeText'>
                    {Props.text}
                </span>
            </div>

        </div>

    </>)
}
export default Sildes;