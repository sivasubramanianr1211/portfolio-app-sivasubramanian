// Profile.tsx

import React from "react";
import ProfileImg from "../assets/profile-img.jpg";
import SpotAward from "../assets/spot-award.jpg";
import useWindowSize from "../utils/useWindowSize";
import DreamTeamAward from "../assets/dream-team-award.jpg";

const Profile: React.FC = () => {
  const { width: windowWidth } = useWindowSize();
  console.log(windowWidth);
  const isMobile: boolean = windowWidth !== undefined && windowWidth < 768;

  return (
    <div className="items-center m-0 p-[10px]">
      <div className="flex justify-center">
        <div className="border-solid border-2 border-[#1b0e64] rounded-[8px]">
          <img
            className="rounded-[6px]"
            height={"180px"}
            width={"180px"}
            src={ProfileImg}
            alt=""
          />
        </div>
      </div>
      <div className="text-center mt-[5px] text-[#1b0e64] p-[10px]">
        <p className="text-[20px] mb-[5px]">
          Senior Software Engineer - Full Stack Development
        </p>
        <p>
          Hi, I'm Sivasubramanian Ramiah, focusing on creating web/app
          applications
        </p>
      </div>
      <div className="sm:flex justify-center gap-[10px] text-center text-[#1b0e64] p-[10px]">
        <img
          className="cursor-pointer rounded-[6px]"
          height={isMobile ? "300px" : "200px"}
          width={isMobile ? "300px" : "200px"}
          src={SpotAward}
          onClick={() => {
            window.open(SpotAward, "__blank");
          }}
          alt=""
        />
        <img
          className={
            isMobile
              ? "cursor-pointer rounded-[6px] mt-[10px]"
              : "cursor-pointer rounded-[6px]"
          }
          height={isMobile ? "300px" : "200px"}
          width={isMobile ? "300px" : "200px"}
          src={DreamTeamAward}
          onClick={() => {
            window.open(DreamTeamAward, "__blank");
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
