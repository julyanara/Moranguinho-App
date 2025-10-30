import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
        signOut,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = { /* colar config do Console */ };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const registrar = async (email, senha) => {
        try {
                await createUserWithEmailAndPassword(
                        auth,
                        email,
                        senha
                );
                alert("Usuário registrado com sucesso!");
        } catch (error) {
                alert("Erro: " + error.message);
        }
};

export const login = async (email, senha) => {
        try {
                await signInWithEmailAndPassword(auth, email, senha);
                alert("Login realizado!");
        } catch (error) {
                alert("Erro: " + error.message);
        }
};

export const logout = async () => {
        await signOut(auth);
};