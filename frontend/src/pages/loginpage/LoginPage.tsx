import AuthGoogleButton from "pages/loginpage/AuthGoogleButton";
import styled from "@emotion/styled";

/**
 * 1. localStorage 토큰 저장
 * 2. 토큰 있는/없는 경우 나누어서 로그인 처리하기 -> hoc 사용
 */
const LoginPage = () => {
  return (
    <Container>
      <AuthGoogleButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
`;

export default LoginPage;
