"use client";
import React, { useEffect, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";
import { getAllVideo } from "../api/videoGallery";
import { toastError } from "./toast";
import LoadingScreen from "./LoadingScreen";
import YouTube from "react-youtube";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  // fetch data
  const fetchData = async (pageNumber) => {
    try {
      setIsLoading(true);
      const data = await getAllVideo(pageNumber);
      setVideos(data.rows);
      setPageCount(Math.ceil(data.count / 10));
      setIsLoading(false);
    } catch (error) {
      toastError(error);
    }
  };

  useEffect(() => {
    setVideos([]);
    setCurrentPage(0);
    fetchData(1);
  }, []);

  const onPageChangeHandler = ({ selected }) => {
    setVideos([]);
    setCurrentPage(selected);
    fetchData(selected + 1);
  };

  const youtubeOpts = {
    height: "196.875",
    width: "350",
  };

  return (
    <div>
      {isLoading ? <LoadingScreen /> : null}
      <div className="flex flex-wrap justify-center min-h-[50vh] gap-10 xl:">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg w-[351px] h-[350px]"
          >
            <YouTube videoId={video.video_id} opts={youtubeOpts} />
            <div className="w-full h-auto p-3">
              <h5 className="mb-2 text-xl font-medium text-gray-900">
                {video.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-10 lg:my-16">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<GrLinkNext size={20} />}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          previousLabel={<GrLinkPrevious size={20} />}
          pageCount={pageCount}
          onPageChange={onPageChangeHandler}
          containerClassName={"h-[50px] flex items-center "}
          pageLinkClassName={
            "px-2 sm:px-5 py-1 sm:py-2  m-[8px] rounded-[5px] border-2 border-solid border-black hover:bg-black hover:text-white transition duration-300"
          }
          activeClassName={"bg-black text-white  py-3  m-[8px] rounded-[5px]"}
          forcePage={currentPage}
        />
      </div>
    </div>
  );
};

export default VideoGallery;
