import React from 'react';
import TWContainer from "../tailwind/TWContainer";
import TWRowGrid from "../tailwind/TWRowGrid";
import TWButton from "../tailwind/TWButton";
import {useRouter} from "next/router";

const IntroSection = () => {
    const router = useRouter();
    return (
        <div className="py-40" style={{backgroundImage: "url(/assets/images/background_game.gif)"}}>
            <TWContainer>
                <div className="flex flex-col text-center">
                    <h1 className="text-h2 mb-8">Ваш помощник в командной игре</h1>
                    <TWRowGrid className="mb-8">
                        <span className="lg:col-span-8 lg:col-start-3 text-h6">
                            <span className="text-emerald-secondary">Талант.</span>
                            Games - инструмент,
                            анализирующий навыки командной игры в популярных многопользовательских проектах.
                        </span>
                    </TWRowGrid>
                    <TWRowGrid>
                        <TWButton
                            color={'emerald'}
                            size={'big'}
                            className="lg:col-span-4 lg:col-start-3"
                            onClick={()=>{
                                fetch(process.env.BACKEND + '/login/talent/', {redirect: 'manual'})
                                    .then((res) => {
                                        router.push(res.url)
                                    })
                            }}
                        >
                            Начать пользоваться
                        </TWButton>

                        <TWButton
                            color={'blue-dark'}
                            size={'big'}
                            className="lg:col-span-4"
                            href="https://docs.google.com/document/d/1IwWm6Q8i1KKtXixOBLRHGdVFGnyyXB4gWyGjBzeGcQU/edit#heading=h.tvmaq5m29558"
                        >
                            Изучить методологию
                        </TWButton>
                    </TWRowGrid>
                </div>
            </TWContainer>
        </div>
    )
}

export default IntroSection;
