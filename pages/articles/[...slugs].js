import { useRouter } from "next/router";
import React from "react";

const singleArticle = () => {
  const router = useRouter();
  const slugs = router.query.slugs || [];
  console.log(slugs);
  return (
    <div>
      {slugs.map((slug) => (
        <p>{slug}</p>
      ))}
    </div>
  );
};

export default singleArticle;
