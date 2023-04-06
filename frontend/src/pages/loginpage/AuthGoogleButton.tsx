import styled from "@emotion/styled";
import { auth, googleProvider } from "common/FirebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authenticatedUserState } from "recoil/user";

const AuthGoogleButton = () => {
  const setUser = useSetRecoilState(authenticatedUserState);
  const navigate = useNavigate();

  const signInWithGoogle = useCallback(() => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // redirectUrl에서 처리할 수 있도록
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        const userInfo = result.user;

        setUser({ accessToken, userInfo });
        return navigate("/");
      })
      .catch(console.error);
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
