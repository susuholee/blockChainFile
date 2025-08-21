import React, { useState } from 'react'
import { LoginStore } from './store/Store';
import C from './C'

const Login = () => {
    const [name, setName] = useState("suho");
    return (
        <LoginStore.Provider value={{name, setName}}>
            <C />
        </LoginStore.Provider>
    )
}

export default Login
