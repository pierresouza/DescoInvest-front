import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

export const handleSiginWithGitHub = async () => {
  const gitProvider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, gitProvider);
    console.log({ result });
  } catch (error) {
    console.log({ error });
  }
};
export const handleSiginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  } catch (error) {
    console.log({ error });
  }
};

interface ICreateAcount {
  email: string;
  password: string;
}
export const handleCreateAcount = ({ email, password }: ICreateAcount) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log({ created: result });
    })
    .catch((error) => console.log(error));
};
