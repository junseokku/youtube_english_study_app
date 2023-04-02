import AuthGoogleButton from "pages/loginpage/AuthGoogleButton";
import styled from "@emotion/styled";

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
