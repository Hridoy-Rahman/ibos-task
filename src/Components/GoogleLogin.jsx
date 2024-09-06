import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {

                navigate('/products', { replace: true });
            })
            .catch(error => {
                console.error('Google sign-in error:', error);
            });
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="border-2 rounded p-2">
                    <button onClick={handleGoogleSignIn} className="flex items-center gap-2">
                        <FcGoogle className='text-2xl' /> 
                        <span className='text-sm'>Sign in with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;
