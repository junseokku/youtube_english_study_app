import React from "react";

const YoutubeIframe = ({ videoId }: { videoId: string }) => {
  if (videoId === "loading") {
    return <div>loading</div>;
  }
  if (videoId === "noResult") {
    return <div>No exist url</div>;
  }
  if (videoId === "error") {
    return <div>Error</div>;
  }
  if (videoId === "parseError") {
    return <div>Parse Error</div>;
  }
  if (videoId === "") {
    return <div>Enter the url and Press Button</div>;
  }

  return (
    <>
      <iframe
        id="ytplayer"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
      />
      <div>찾는 동영상이 맞을까요? 이 동영상을 등록할까요?</div>
      <button>등록</button>
    </>
  );
};

export default YoutubeIframe;
