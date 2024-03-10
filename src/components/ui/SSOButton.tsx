import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { SSOButtonProps } from "@/types/global";

const SSOButton: React.FC<SSOButtonProps> = ({ provider }) => {
  const { data: session } = useSession();

  const handleLogin = async () => {
    
    const result = await signIn(provider, { callbackUrl: '/', redirect: false }).catch(error => {
      console.error('Sign in error:', error);
      return false; 
    });
    if (result === false) {
      console.error('Sign in failed.');
    }
  };

  if (session && session.user) {
    const userName = session.user.name ?? 'User';
    const userImage = session.user.image ?? ''; 

    return (
      <div className="flex items-center space-x-2">
        {userImage && (
          <img
            src={userImage}
            alt="User Image"
            className="w-8 h-8 rounded-full"
          />
        )}
        <span>Welcome, {userName}!</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="text-white bg-[#FFCC00] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
    >
      Sign in with {provider}
    </button>
  );
};

export default SSOButton;
