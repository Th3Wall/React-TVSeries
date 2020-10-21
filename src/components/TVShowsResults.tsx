import React from 'react'
import css from '../App.module.css';
import { Series } from '../model/series';

export interface TVShowsResultsProps {
    result: Series[];
    movieClick: (series: Series) => void;
}

export const TVShowsResults: React.FC<TVShowsResultsProps> = ({result, movieClick}) => {
    return (
        <>
            {result.length} results

            <div className={css.grid}>
            {
                result.map(series => {
                const { show: {id, image, name} } = series;

                return <div key={id} className={css.gridItem}>
                    <div className={css.movie} onClick={() => movieClick(series)}>
                    {
                        image ?
                        <img src={image?.medium} alt=""/> :
                        <NoImage />
                    }
                    <div className={css.movieText}>{name}</div>
                    </div>
                </div>
                })
            }
            </div>
        </>
    )
}

export default TVShowsResults;


export const NoImage = () => {
    return <div className={css.noImage}></div>;
}
