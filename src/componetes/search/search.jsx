import { useEffect, useState } from 'react';
import { Api } from '../dataService.ts';
import './search.css'
import SearchWidget from './searchWidget';

const Search = ({ closeBtn }) => {

    const [state, setState] = useState({ input: "", result: [], isDom: false })

    useEffect(() => {
        const timeout = setTimeout(
            async () => {
                const url = 'https://newsapi.org/v2/everything?q=' + state.input + '&pageSize=6&language=en';
                const data = await Api.request(url, 'GET', '');
                setState(prevState => { return { ...prevState, result: data } });
            }, 2000)
        return () => clearTimeout(timeout)
    })

    const getData = (value) => {
        setState(prevState => { return { ...prevState, input: value } });
    }


    const hideDom = () => {
        setState(prevState => { return { ...prevState, isDom: true } });
        closeBtn(state.isDom);
    }

    return (
        <div class="searchDom">
            <div class='searchWidget'>
                <div class='search'>
                    <input type="search" value={state.input} onChange={(e) => getData(e.target.value)} />
                    <div class="closeBtn" onClick={hideDom} >
                        <button class='mainBtn'>Close</button>
                    </div>
                </div>
            </div>
            <div class='result'>
                <SearchWidget data={state.result} />
            </div>
        </div>

    )

}

export default Search;