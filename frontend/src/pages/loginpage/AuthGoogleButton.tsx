import styled from "@emotion/styled";
import { auth, googleProvider } from "@common/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authenticatedUserState } from "@store/user";
import { LOGIN_INFO_KEY } from "@common/utils/LocalStorageKeys";

const AuthGoogleButton = () => {
  const setUser = useSetRecoilState(authenticatedUserState);
  const navigate = useNavigate();

  const signInWithGoogle = useCallback(async () => {
    try {
      const signResult = await signInWithPopup(auth, googleProvider);
      // todo -redirectUrl에서 처리할 수 있도록
      const credential = GoogleAuthProvider.credentialFromResult(signResult);
      const accessToken = credential?.accessToken
        ? credential?.accessToken
        : "";
      const user = signResult.user;

      setUser({ accessToken, user });
      localStorage.setItem(
        LOGIN_INFO_KEY,
        JSON.stringify({ accessToken, user })
      );
      return navigate("/");
    } catch (err) {
      console.error(err);
    }
  }, [navigate, setUser]);

  return <LoginButton onClick={signInWithGoogle}>Google Login</LoginButton>;
};

const LoginButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  font-size: 2rem;
  background-color: transparent;
  padding: 10px 20px;
  :hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

export default AuthGoogleButton;
