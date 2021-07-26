/** @jsxImportSource @emotion/react */

import { useContext } from "react";
import { css } from "@emotion/react";
import { SearchContext } from "../../App";

export const SearchBar = () => {
    const [searchInput, setSearchInput] = useContext(SearchContext);

    const handleSetSearchInput = (e) => setTimeout(setSearchInput(e.target.value), 350); 

    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
                margin: auto;
            `}
        >
            <input 
                type="text" 
                value={searchInput} 
                onChange={handleSetSearchInput} 
                placeholder="Search for a task..."
                css={css`
                    width: 17em;
                    text-align: center;
                    height: 2em;
                `}
            />
        </div>
    );
};