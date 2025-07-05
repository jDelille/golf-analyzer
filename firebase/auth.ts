import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "./firebase";

/**
 * Sign up a new user with email and password
 * @param email 
 * @param password 
 * @returns 
 */
export async function signUp(email: string, password: string): Promise<User> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Sign up error:", error);
    throw error;
  }
}

/**
 * Log in an existing user with email and password
 * @param email 
 * @param password 
 * @returns 
 */
export async function login(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

/**
 * Log out the currently authenticated user
 */
export async function logout(): Promise<void> {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
}