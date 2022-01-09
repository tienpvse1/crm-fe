
import { Navigate } from 'react-router-dom';
import { getToken } from '../cookies';
import { getUser } from '../modules/account/get/account.get';
import { createAccount } from '../modules/account/mutation/account.post';
import { authenticateUser } from '../modules/auth/mutation/auth.post';


export const HomePage = () => {
    
    const token = getToken();
    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <h1>hello world</h1>
            <button onClick={authenticateUser}>Authenticate</button>
            <button onClick={getUser}>get</button>
            <button onClick={createAccount}>create</button>
        </>
    )
}
