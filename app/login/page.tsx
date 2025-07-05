import LoginForm from '@/components/auth/LoginForm';
import React from 'react';

type LoginProps = {
 
 }
const Login: React.FC<LoginProps> = () => {
  return (
    <div className="auth-page">
      <LoginForm />
    </div>
  );
};

export default Login;