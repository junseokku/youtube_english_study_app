import styled from "@emotion/styled";
import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";

/**
 * 1. 컴포넌트명 변경 -> 영상 등록 관련
 * 2. 유튜브 url 파싱
 * 3. 입력한 영상이 맞는지 확인시켜주는 UI
 * 4. 등록버튼
 * 5. 팝업띄우고 영상목록으로 이동? 생각해보기
 */
const MyPage = () => {
  const user = useRecoilValue(userInfo);
  const searchVideo = useCallback(async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=zIwLWfaAg-8`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    );

    console.log(response.json());
  }, [user?.accessToken]);

  return (
    <MyPageWrapper>
      <div>영상 URL 입력</div>
      <input />
      <button onClick={searchVideo}>검색</button>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
`;

export default MyPage;
