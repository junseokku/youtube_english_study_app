import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function getVideoIdFromUrl(url: string) {
  const queryString = url.split("?")[1];
  if (!queryString) return null;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("v");
}

export const ValidatorUrl = ({
  accessToken,
  setVideoId,
}: {
  accessToken: string;
  setVideoId: (url: string) => void;
}) => {
  const [urlInputValue, setUrlInputValue] = useState<string>("");
  const navigate = useNavigate();
  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setUrlInputValue(e.currentTarget.value),
    []
  );
  const searchVideo = useCallback(async () => {
    const videoId = getVideoIdFromUrl(urlInputValue);

    // 파싱을 못함 - 유효하지 않은 videoId
    if (!videoId) {
      setVideoId("parseError");
      return;
    }

    setVideoId("loading");

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${
        import.meta.env.VITE_API_KEY
      }&part=snippet`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // if (data?.error?.code === 401) {
        //   navigate('/login');
        //   alert('토큰 만료')
        // }
        console.log(data);

        if (data?.items.length > 0) {
          setVideoId(videoId ?? "");
        } else {
          setVideoId("noResult");
        }
      });
  }, [accessToken, urlInputValue]);
  return (
    <Wrapper>
      <Input onChange={onChangeInput} />
      <button onClick={searchVideo}>입력</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Input = styled.input``;

export default ValidatorUrl;
