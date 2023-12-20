"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import profileAvatar from "../../../public/profile-avatar.png";
import AvatarEditor from "react-avatar-editor";

const Avatar = ({ editorRef, selectedAvatar }) => {
  const [zoom, setZoom] = useState(1);

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setZoom(scale);
  };

  return (
    <div>
      {selectedAvatar ? (
        <>
          <AvatarEditor
            ref={editorRef}
            image={URL.createObjectURL(selectedAvatar)}
            width={300}
            height={300}
            border={50}
            color={[208, 232, 148, 0.7]} // RGBA
            scale={zoom}
            rotate={0}
            style={{ width: "320px", height: "320px" }}
          />
          <div className="flex items-center justify-center mt-5">
            <span>Zoom</span>
            <input
              name="scale"
              type="range"
              onChange={handleScale}
              min={"1"}
              max="3"
              step="0.01"
              defaultValue="1"
            />
          </div>
        </>
      ) : (
        <>
          <Image
            alt="sample avatar"
            src={profileAvatar}
            width={500}
            height={500}
            className="rounded-md cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default Avatar;
