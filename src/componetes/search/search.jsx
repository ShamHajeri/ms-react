import { useState } from 'react';
import { Api } from '../dataService.ts';
import './search.css'
import SearchWidget from './searchWidget';

const Search = () => {

    const [input,setInput]=useState('d');
    const [result,setResult]=useState([]);

    const getData= async(value)=>{
        setInput(value)
        console.log(value);
        console.log(result);
        const url = "https://newsapi.org/v2/everything?q="+`${value}`+"&pageSize=6&language=en";
        const data= await Api.request(url,'GET','');
        setResult(data)
    }
    
    return (
        <div>
            <div class='searchWidget'>
                <div class='search'>
                    <input type="search" value={input} onChange={(e)=>getData(e.target.value)} />
                </div>
            </div>
            <div class='result'>
            
                <SearchWidget data={result} />
      
                
            </div>
        </div>

    )

}

export default Search;