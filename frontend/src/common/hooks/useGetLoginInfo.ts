import { LOGIN_INFO_KEY } from "@common/utils/LocalStorageKeys";
import { authenticatedUserState } from "@store/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

/**
 * 로그인 정보가 이중 관리가 되고 있고, 로직 개선 필요한가..?
 * 로컬 스토리지 - 새로고침
 * 리코일 -
 */
export const useGetLoginInfo = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(authenticatedUserState);
  const navigator = useNavigate();

  useEffect(() => {
    // todo - 모달 띄우기
    // todo - accessToken 검증하기.
    if (loginInfo?.accessToken && loginInfo?.user) {
      setLoginInfo({
        accessToken: loginInfo?.accessToken,
        user: loginInfo?.user,
      });
    } else {
      navigator("/login");
    }
  }, []);

  return loginInfo;
};
