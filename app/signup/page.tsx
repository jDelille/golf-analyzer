import SignupForm from '@/components/auth/SignupForm';
import React from 'react';

type SignupProps = {
 
 }


const Signup: React.FC<SignupProps> = () => {
  return (
    <div className="auth-page">
      <SignupForm />
    </div>
  );
};

export default Signup;