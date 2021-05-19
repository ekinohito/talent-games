import React from 'react';
import Image from "next/image";
import {useAppRouter} from "../../context/AppRouter";
import AppCategory from "../../types/appCategory";
import AccountType from "../../types/accountType";
import GameType from "../../types/gameType";

const menuItems: {[key: string]: {
    images: {[key: string]: string},
    action: "SET_ACCOUNT" | "SET_GAME",
    stateKey: string
}} = {
    [AppCategory.Accounts]: {
        images: {
            [AccountType.Kruzhok]: "/assets/images/kruzhok.svg",
            [AccountType.Steam]: "/assets/images/steam.png",
            [AccountType.Blizzard]: "/assets/images/blizzard.png"
        },
        action: "SET_ACCOUNT",
        stateKey: "account"
    },
    [AppCategory.Results]: {
        images: {
            [GameType.CSGO]: "/assets/images/csgo.png",
            [GameType.Dota2]: "/assets/images/dota2.png",
            [GameType.Overwatch]: "/assets/images/overwatch.png"
        },
        action: "SET_GAME",
        stateKey: "game"
    }
}

menuItems[AppCategory.Leaderboard] = menuItems[AppCategory.Results];

const ContentMenu = ({className}: {className?: string}) => {
    const {state, dispatch} = useAppRouter();
    return (
        <div className={`flex ${className} bg-white rounded-lg shadow-md px-2`}>

            {Object.keys(menuItems[state.category].images).map((key, index) =>
                <div className="flex items-center" key={index}>
                    <div
                        className="flex p-4 items-center cursor-pointer relative select-none"
                        key={index}
                        onClick={() => dispatch({type: menuItems[state.category].action, payload: key as GameType | AccountType})}
                    >
                        <Image src={menuItems[state.category].images[key]} height={128} width={96}/>
                        <span className="ml-2 text-body1">{key}</span>
                        {key === state[menuItems[state.category].stateKey] ?<svg className="absolute bottom-2 transition-opacity" width="100%" height="5" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="2.5" x2="90%" y2="2.5" stroke="#188E8E" strokeWidth="4"/>
                        </svg> : null}
                    </div>
                    {index !== 2 ?<svg className="mx-2" width="1" height="128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" x2="0" y2="100%" stroke="#CBCBCB"/>
                    </svg> : null}
                </div>

            )}
        </div>
    )
}

export default ContentMenu;
