import AuthGoogleButton from "@pages/loginpage/AuthGoogleButton";
import styled from "@emotion/styled";
import { userInfo } from "@store/user";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "@common/FirebaseConfig";

const LoginPage = () => {
  const { accessToken, user } = useRecoilValue(userInfo);
  const navigate = useNavigate();

  // todo - accessToken 검증 필요 -> 로그아웃/갱신 둘 중 하나 하도록
  // useEffect(() => {
  //   if (accessToken && user) {
  //     navigate("/");
  //   }
  // }, [accessToken, user]);
  return (
    <Container>
      <ServiceTitle>유튜브 자막/어휘 추출 사이트</ServiceTitle>
      <AuthGoogleButton />
    </Container>
  );
};

const ServiceTitle = styled.h1`
  padding: 20px;
  font-size: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default LoginPage;
