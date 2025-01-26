"use client";

import Giscus from "@giscus/react";

export const BlogComments = () => {
  return (
    <Giscus
      repo="JunTingLin/resume-v2"
      repoId="R_kgDONvxcTg"
      category="Announcements"
      categoryId="DIC_kwDONvxcTs4CmWu0"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
};
