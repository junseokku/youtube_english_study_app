import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "pages/loginpage/LoginPage";
import MyPage from "pages/mypage/MyPage";
import { RecoilRoot } from "recoil";

export const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="*" element={<div>Empty Page</div>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
