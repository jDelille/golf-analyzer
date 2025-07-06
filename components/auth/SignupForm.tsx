"use client";

import React, { useState } from "react";
import styles from "./authForm.module.scss";
import { signUp } from "@/firebase/auth";
import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";

type SignupFormProps = {};
const SignupForm: React.FC<SignupFormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await signUp(email, password);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date(),
        displayName: "",
        bio: "",
        role: "user",
        avatar: "",
      });
      alert(`Signed up as ${user.email}`);
      router.push("/home");
    } catch (error: any) {
      alert("Signup failed: " + error.message);
    }
  };
  return (
    <div className={styles.signupForm}>
      <form onSubmit={handleSignup}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <div>Already have an account? <Link href={"/login"}>Log in</Link></div>
    </div>
  );
};

export default SignupForm;
