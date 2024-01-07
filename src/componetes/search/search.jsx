import { useState } from 'react';
import { Api } from '../dataService.ts';
import './search.css'
import SearchWidget from './searchWidget';

const Search = ({closeBtn}) => {

    const [input,setInput]=useState("");
    const [result,setResult]=useState([]);
    const [isDom,setIsDom]=useState(false);

    const getData= async(value)=>{
        setInput(value)
        console.log(value);
        console.log(result);
        // const url=""
        const url = 'https://newsapi.org/v2/everything?q='+`${value}`+'&pageSize=6&language=en';
        const data= await Api.request(url,'GET','');
        setResult(data)
    }
    
    const hideDom=()=>{
        setIsDom(true)
        closeBtn(isDom);
    }

    return (
        <div class="searchDom">
            <div class='searchWidget'>
                <div class='search'>
                    <input type="search" value={input} onChange={(e)=>getData(e.target.value)} /> <button onClick={hideDom} class='mainBtn'>Close</button>
                </div>
            </div>
            <div class='result'>
                <SearchWidget data={result} />
            </div>
        </div>

    )

}

export default Search;