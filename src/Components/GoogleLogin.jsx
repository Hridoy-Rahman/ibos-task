import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const GoogleLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div >          
            <div className="flex justify-center">
                <div className="border-2 rounded p-2">
                    <button onClick={handleGoogleSignIn} className="flex items-center gap-2">
                    <FcGoogle /> Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;