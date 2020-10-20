import React, {useState} from 'react';
import Axios from 'axios';
import { Series } from '../model/series';

export function useTVShow () {
    const [ result, setResult ] = useState<Series[]>([]);

    const searchHandler = (text: string) => {
        Axios.get<Series[]>(`http://api.tvmaze.com/search/shows?q=${text}`)
        .then(res => setResult(res.data))
    }

    const movieClickHandler = (series: Series) => {
        window.open(series.show.url);
    }

    return {
        series: result,
        search: searchHandler,
        movieClick: movieClickHandler
    }
}