import React, {useReducer, useEffect, createContext, useContext} from 'react';

type UserInfo = {
    email: string,
    first_name: string,
    last_name: string,
}

interface UserInfoValue {
    state: UserInfo,
    dispatch: React.Dispatch<UserInfoAction>
}

const UserInfoContext = createContext<UserInfoValue>(null);

// Helper function to get Context
const useUserInfo = () => useContext<UserInfoValue>(UserInfoContext);

interface UserInfoAction {
    type: "SET",
    payload: UserInfo
}

const UserInfoReducer = (state: UserInfo, action: UserInfoAction): UserInfo => {
    switch (action.type) {
        case "SET":
            return {
                ...state,
                ...action.payload as UserInfo
            }
        default:
            return state;
    }
}

/**
 * This is a helper component that generate the Provider wrapper
 */
const UserInfoProvider = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<UserInfo, UserInfoAction>>(UserInfoReducer, null);
    // We use useEffect to make API calls.
    useEffect(() => {
        async function fetchData() {
            const user = await fetch(process.env.BACKEND + '/user/?format=json', {
                credentials: 'include'
            })
            dispatch({type: "SET", payload: await user.json()})
        }
        fetchData().catch(() => {});
    }, []);
    return (
        <UserInfoContext.Provider value={{state, dispatch}}>
            {children}
        </UserInfoContext.Provider>
)
}

export {UserInfoProvider, useUserInfo};
export type { UserInfoValue };
