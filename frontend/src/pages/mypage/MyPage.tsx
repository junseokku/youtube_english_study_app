import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userInfo } from "recoil/user";

const MyPage = () => {
  const user = useRecoilValue(userInfo);

  useEffect(() => {
    // youtube API 테스트 - 성공
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?access_token=${user?.accessToken}&part=snippet&mine=true`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      }
    )
      .then(console.log)
      .catch(console.error);
  }, [user]);

  return <div>user page</div>;
};

export default MyPage;
