"use client";
import React, { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";

const AvatarCrop = ({ img, outPut }) => {
  const editorRef = useRef();
  const [zoom, setZoom] = useState(1);

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setZoom(scale);
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      localStorage.setItem("avatar", canvas.toDataURL("avatar/png"));
    }
  };

  // function downloadImage(imageDataUrl, fileName) {
  //   const link = document.createElement("a");
  //   link.href = imageDataUrl;
  //   link.download = fileName;
  //   link.click();
  // }

  return (
    <>
      <AvatarEditor
        ref={editorRef}
        onMouseUp={handleSave}
        image={img}
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
          onTouchEnd={handleSave}
          onMouseUp={handleSave}
        />
      </div>
    </>
  );
};

export default AvatarCrop;
