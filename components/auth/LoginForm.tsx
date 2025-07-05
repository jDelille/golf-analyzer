"use client";

import React, { useState } from "react";
import styles from "./authForm.module.scss";
import { login } from "@/firebase/auth";
import { useRouter } from "next/navigation";

type LoginFormProps = {};
const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      alert(`Logged in as ${user.email}`);
      router.push("/home");
    } catch (error: any) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleLogin}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
