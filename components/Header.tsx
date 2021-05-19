import React from 'react';
import Image from "next/image";
import Link from "next/link";
import TWContainer from "./tailwind/TWContainer";
import TWButton from "./tailwind/TWButton";
import {useUserInfo} from "../context/UserContext";
import {useRouter} from "next/router";

const Header = () => {
    const router = useRouter();
    const userInfo = useUserInfo()
    const isAuthenticated = !!userInfo?.state?.email
    const button = isAuthenticated?
        <TWButton color={'blue-dark'} size={'default'} onClick={()=>{
            fetch(process.env.BACKEND + '/api/logout/talent/', {credentials: 'include'})
                .then(() => {
                    router.push('/')
                })
        }}>
            Выйти
        </TWButton>:
        <TWButton color={'emerald'} size={'default'} onClick={()=>{
            fetch(process.env.BACKEND + '/login/talent/', {redirect: 'manual'})
                .then((res) => {
                    router.push(res.url)
                })
        }}>
            Войти
        </TWButton>
    return (
        <div className="py-2.5 shadow z-50">
            <TWContainer>
                <div className="flex justify-between">
                    <Link href="/">
                        <Image
                            className="cursor-pointer"
                            src="/assets/icons/icon.svg"
                            width={110}
                            height={40}
                        />
                    </Link>
                    {button}
                </div>
            </TWContainer>
        </div>
    )
}

export {Header};
