import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { useGetLoginInfo } from "@common/hooks/useGetLoginInfo";
import { useNavigate } from "react-router-dom";
import ValidatorUrl from "./ValidatorUrl";
import YoutubeIframe from "./YoutubeIframe";

const MyPage = () => {
  const { user, accessToken } = useGetLoginInfo();
  const [videoId, setVideoId] = useState<string>("");

  return (
    <MyPageWrapper>
      <div>등록하고 싶은 url을 입력하세요</div>
      <ValidatorUrl accessToken={accessToken} setVideoId={setVideoId} />
      <YoutubeIframe videoId={videoId} />
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default MyPage;
