"use client";
import { videos } from "@/db/videoGalleryData";
import React, { useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import ReactPaginate from "react-paginate";

const VideoGallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(5);

  const onPageChangeHandler = () => {
    console.log("page was changed!");
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center min-h-[50vh] gap-10 xl:">
        {videos.map((video, index) => (
          <div key={index} className="max-w-sm bg-white rounded-lg shadow-lg">
            <a href="#!">
              <iframe
                width="350"
                height="196.875"
                src="https://www.youtube.com/embed/lw6J8vpcJPE?si=mdk9lskLZKrBuYyk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </a>
            <div className="p-6 min-h-20">
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
