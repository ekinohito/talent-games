import React, {useCallback, useState} from 'react';
import Image from "next/image";
import GameType from "../../types/gameType";

interface GameInfo {
    imageSrc: string,
    score: number,
    teamplay: string
}

const games: {[key: string]: GameInfo} = {
    [GameType.CSGO]: {
        imageSrc: '/assets/images/csgo.png',
        score: 67,
        teamplay: 'средняя'
    },
    [GameType.Dota2]: {
        imageSrc: '/assets/images/dota2.png',
        score: 73,
        teamplay: 'хорошая'
    },
    [GameType.Overwatch]: {
        imageSrc: '/assets/images/overwatch.png',
        score: 91,
        teamplay: 'отличная'
    },
}

const AllGames = () => {
    const [activeGame, setActiveGame] = useState<GameType>(GameType.CSGO);

    const onGameChange = useCallback((game: GameType) => {
        setActiveGame(game);
    }, []);

    return (
        <div className="flex flex-col">
            <div className="flex justify-around mb-4 shadow-lg rounded-md">
                {Object.keys(games).map((key, index) =>
                    <div
                        className={`rounded-lg ${activeGame === key ? 'bg-emerald-light': 'bg-white'} px-4 py-2 text-h6 cursor-pointer transition-colors duration-300  `}
                        key={index}
                        onClick={() => onGameChange(key as GameType)}
                    >
                        {key}
                    </div>
                )}
            </div>
            <div className="shadow-lg rounded-md p-2">
                <div className="flex">
                    <div className="flex p-2 items-center mr-8">
                        <Image src={games[activeGame].imageSrc} width={96} height={128}/>
                        <span className="text-h5 ml-3">{activeGame}</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col flex-1 text-body1">
                            <span className="mb-2">Общий счет {games[activeGame].score}</span>
                            <span>У вас {games[activeGame].teamplay} командная работа</span>
                        </div>
                        <span className="text-subtitle2 text-blue-dark">Дополнительная информация...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllGames;
