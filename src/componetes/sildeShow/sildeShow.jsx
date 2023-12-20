import './sildeShow.css'
import Sildes from '../sildes/slides';


const SildeShow=()=>{
    const sildesData = [{ "text": "Space", "url": "sun.png" }, { "text": "Planet", "url": "sun.png" }, { "text": "Sreach", "url": "sun.png" }, { "text": "Contact", "url": "sun.png" }];

const sildes= sildesData.map((item)=><Sildes text={item.text} image={item.url}/>)

    return(
       <div>
        {sildes}
       </div>
    )
}
export default SildeShow;
