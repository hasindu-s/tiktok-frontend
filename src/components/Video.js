import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src="https://v16-webapp.tiktok.com/42f55110baea56b81a83ee055f4f7bfc/62a5ca00/video/tos/useast2a/tos-useast2a-pve-0037-aiso/1a09a1e804e14aafac1b4ffe545da277/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3724&bt=1862&btag=80000&cs=0&ds=3&ft=eXd.6HNVMyq8ZtG9Qwe2N5lwyl7Gb&mime_type=video_mp4&qs=0&rc=aGZlZ2Q6aTNlZWk0OTU2OUBpM2Vnbmc6ZmVpZDMzZjgzM0AwMy1jYjUwXjAxXmFgMTZgYSNrNTZucjRfajFgLS1kL2Nzcw%3D%3D&l=202206120511490102230821640BF2CEB7"
      ></video>

      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  );
}

export default Video;
