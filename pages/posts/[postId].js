import { useRouter } from "next/router";
import React from "react";

const singlePost = () => {
  let router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div>
      <h1>postId: {router.query.postId}</h1>
      <button className="btn btn-sm btn-info" onClick={() => goBack()}>
        Go Back
      </button>
    </div>
  );
};

export default singlePost;
