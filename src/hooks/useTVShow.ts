import React, {useState} from 'react';
import Axios from 'axios';
import { Series, Show } from '../model/series';

export function useTVShow () {

    const [ details, setDetails ] = useState<Show | null>(null);
    const [ result, setResult ] = useState<Series[]>([]);

    const searchHandler = (text: string) => {
        Axios.get<Series[]>(`http://api.tvmaze.com/search/shows?q=${text}`)
        .then(res => setResult(res.data))
    }

    const movieClickHandler = (series: Series) => {
        setDetails(series.show);
    }

    const closeModal = () => {
        setDetails(null);
    }

    return {
        series: result,
        details,
        closeModal,
        search: searchHandler,
        movieClick: movieClickHandler
    }
}