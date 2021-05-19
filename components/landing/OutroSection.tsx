import React from "react";
import TWContainer from "../tailwind/TWContainer";
import TWRowGrid from "../tailwind/TWRowGrid";
import TWButton from "../tailwind/TWButton";
import Leaderboard from "./Leaderboard";
import {useRouter} from "next/router";

const OutroSection = () => {
    const router = useRouter();

    return (
        <div className="py-32 bg-white">
            <TWContainer>
                <div className="flex flex-col text-center">
                    <h2 className="text-h3 mb-8">
                        Таблица лидеров
                    </h2>
                    <TWRowGrid>
                        <span className="text-h6 mb-12 lg:col-span-10 lg:col-start-2">
                        Соревнуйтесь с другими участниками проекта,
                        чтобы стать лучше в вашей любимой игре, и соберите команду мечты из топовых игроков.
                    </span>
                    </TWRowGrid>
                    <TWRowGrid className="mb-24">
                        <Leaderboard className="lg:col-span-6 lg:col-start-4"/>
                    </TWRowGrid>
                    <h3 className="text-h4 mb-8">
                        Готовы улучшить командное взаимодействие?
                    </h3>
                    <TWRowGrid>
                        <TWButton
                            color={'emerald'}
                            size={'big'}
                            className="lg:col-span-4 lg:col-start-5"
                            onClick={()=>{
                                fetch(process.env.BACKEND + '/auth/login/talent/', {redirect: 'manual'})
                                    .then((res) => {
                                        router.push(res.url)
                                    })
                            }}
                        >
                            Начать пользоваться
                        </TWButton>
                    </TWRowGrid>
                </div>

            </TWContainer>
        </div>
    )
}

export default OutroSection;
