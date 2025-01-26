import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import { allBlogs } from "contentlayer/generated";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  // const blogs = allBlogs.slice(0, 2).sort((a, b) => {
  //   if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
  //     return -1;
  //   }
  //   return 1;
  // });

  return (
    <React.Fragment>
      <section className="mb-5">
        <Image
          src="/_static/me.jpg"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full cursor-pointer hover:grayscale mb-5"
          priority
        />
        <h1 className="text-2xl font-bold">Jun-Ting Lin</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I am currently pursuing a Master’s degree in Computer Science at the{" "} 
            <a
              href="https://www.inm.ntu.edu.tw/"
              target="_blank"
              className="border-b inline-block"
            >
              GINMNTU
            </a>
            {" "}@{" "}
            <a
              href="https://www.ntu.edu.tw/"
              target="_blank"
              className="border-b inline-block"
            >
              NTU
            </a>
          </p>

          <p className="mt-4 mb-4">
            Under the guidance of Prof. Jyh-Shing Roger Jang in &nbsp;
            <a
              href="http://mirlab.org/"
              target="_blank"
              className="border-b inline-block"
            >
              MIRLab
            </a>
            , my research focuses on AI applications in FinTech, such as portfolio optimization,
            quantitative trading, and pairs trading. I am also involved in a collaborative project
            between our lab and &nbsp;
            <a
              href="https://www.esunfhc.com/"
              target="_blank"
              className="border-b inline-block"
            >
              E.SUN Financial Holding
            </a>
            &nbsp; to enhance the integration of AI and finance.
          </p>

          <p className="mb-4">
            If you are interested in any form of collaboration, please feel free to reach out via &nbsp;
            <a
              href="mailto:support@junting.info"
              className="border-b inline-block"
            >
              email
            </a>
            &nbsp; or any of my social media channels.
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
        <p className="mt-4 border-b inline-block cursor-pointer">
          <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </p>
      </section>

      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />

      {/* <div>
        <h2 className="mb-6 text-2xl font-bold">Latest posts</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug} className="py-1">
              <Link href={`/blog/${blog.slug}`}>
                <BlogCard blog={blog} key={blog.slug} />
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </React.Fragment>
  );
}
