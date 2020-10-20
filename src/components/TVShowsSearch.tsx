import React, {useState} from 'react'
import css from '../App.module.css';

export interface TVShowsSearchProps {
    search: (text: string) => void;
}

export const TVShowsSearch: React.FC<TVShowsSearchProps> = ({search}) => {

    const [ text, setText ] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        search(text);
    }

    return (
        <>
            <form onSubmit={searchHandler}>
                <input
                type="text"
                placeholder="Search for TV series"
                value={text}
                onChange={onChangeHandler}
                />
            </form>

        </>
    )
}

export default TVShowsSearch;

