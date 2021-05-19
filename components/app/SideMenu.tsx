import React from 'react';
import {useAppRouter} from "../../context/AppRouter";
import AppCategory from "../../types/appCategory";

const categories: {[key: string]: string} = {
    [AppCategory.Accounts]: "Аккаунты",
    [AppCategory.Results]: "Мои результаты",
    [AppCategory.Leaderboard]: "Таблица лидеров"
}

const SideMenu = ({className}: {className?: string}) => {
    const {state, dispatch} = useAppRouter();

    return (
        <div className={`py-4 px-12 flex flex-col ${className} bg-white rounded-lg shadow-md`}>
            {Object.keys(categories).map((key, index) =>
                <div className={`flex 
                                justify-between 
                                text-subtitle1
                                ${state.category === key ? 'text-emerald-secondary' : 'text-black'}
                                py-4
                                cursor-pointer
                                select-none
                                transition-colors
                               `}
                     onClick={() => dispatch({type: "SET_CATEGORY", payload: key as AppCategory})}
                >
                    <span>{categories[key]}</span>
                    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1L10.5 10.5L0.5 20" stroke={state.category === key ? "#48BABA" : "black"}/>
                    </svg>
                </div>
            )}
        </div>
    )
}

export default SideMenu;
