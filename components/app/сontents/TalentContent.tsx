import React from 'react';
import {useAppRouter} from "../../../context/AppRouter";
import Image from "next/image";
import TWButton from "../../tailwind/TWButton";
import {useUserInfo} from "../../../context/UserContext";
import {useRouter} from "next/router";

const TalentContent = ({className}: { className?: string }) => {
    const userInfo = useUserInfo();
    const router = useRouter();
    const isAuthenticated = !!userInfo?.state?.email
    if (isAuthenticated) {
        return (
            <div className="grid gap-x-2 lg:grid-cols-12">
                <div className={`col-span-4 gap-y-2 flex flex-col items-center`}>
                    <div
                        className={`flex flex-col gap-y-2 py-2 self-stretch items-center border-2 border-emerald-secondary rounded-md`}>
                        <Image
                            className="cursor-pointer"
                            src="/assets/icons/camera_icon.svg"
                            width={40}
                            height={40}
                        />
                        <span
                            className={`text-body2`}>{`${userInfo.state?.last_name} ${userInfo.state?.first_name[0]}.`}</span>
                        <span className={`text-overline`}>{`${userInfo.state?.email}`}</span>
                        <span className={`text-caption text-emerald`}>Talent ID: 158011</span>
                    </div>
                    <TWButton color={"emerald"} size={"default"} className={"self-stretch"}>Изменить</TWButton>
                    <TWButton color={"blue-dark"} size={"default"} className={"self-stretch"}onClick={()=>{
                        fetch(process.env.BACKEND + '/logout/talent/', {redirect: 'manual'})
                            .then((res) => {
                                router.push(res.url)
                            })
                    }}>Выйти</TWButton>
                </div>
                <div className={`col-span-4`}>
                    <div className={`p-3 h-full border-2 border-emerald-secondary rounded-md`}>
                        <h2 className={`text-subtitle2 text-center pb-2`}>
                            Личные данные
                        </h2>
                        <div className={`grid grid-cols-12 text-caption gap-x-1`}>
                            <div className={`col-span-5 grid grid-rows-4`}>
                            <span className={`row-span-1`}>
                                ФИО
                            </span>
                                <span className={`row-span-1`}>
                                Дата рождения
                            </span>
                                <span className={`row-span-1`}>
                                Пол
                            </span>
                                <span className={`row-span-1`}>
                                Адрес
                            </span>
                            </div>
                            <div className={`col-span-7 grid grid-rows-4 gap-y-2`}>
                            <span className={`row-span-1`}>
                                {`${userInfo.state.last_name} ${userInfo.state.first_name}`}
                            </span>
                                <span className={`row-span-1`}>
                                22.12.1992
                            </span>
                                <span className={`row-span-1`}>
                                М
                            </span>
                                <span className={`row-span-1`}>
                                Россия, г. Москва
                            </span>
                            </div>
                        </div>
                        <h2 className={`text-subtitle2 text-center pt-3 pb-2`}>
                            О себе
                        </h2>
                        <div className={`grid grid-cols-12 text-caption gap-x-1`}>
                            <div className={`col-span-4 grid grid-rows-2`}>
                            <span className={`row-span-1`}>
                                Интересы
                            </span>
                                <span className={`row-span-1`}>
                                Описание
                            </span>
                            </div>
                            <div className={`col-span-8 grid grid-rows-2 gap-y-2`}>
                            <span className={`row-span-1`}>
                                #Компьютерные игры, #Программирование
                            </span>
                                <span className={`row-span-1`}>
                                Занимаюсь программированием, дизайном, играю в игры.
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-span-4`}>
                    <div
                        className={`flex flex-col gap-y-2 py-2 items-center border-2 border-emerald-secondary rounded-md`}>
                        <span className={`text-body2`}>Социальные сети</span>
                        <span className={`text-overline`}>{`${userInfo.state?.email}`}</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`gap-y-2 flex flex-col items-center justify-center min-h-400`}>
                <span>ПРИВЯЖИТЕ СВОЙ АККАУНТ TALENT ID</span>
                <TWButton color={"emerald"} size={"default"}onClick={()=>{
                    fetch(process.env.BACKEND + '/auth/login/talent/', {redirect: 'manual'})
                        .then((res) => {
                            router.push(res.url)
                        })
                }}>Авторизоваться</TWButton>
            </div>)

    }

}

export default TalentContent;
