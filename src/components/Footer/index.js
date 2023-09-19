import React from "react";
import Form from "./Form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base ">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <Form />
      <div className="flex items-center mt-8">
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="http://example.com"
          className="inline-block w-6 h-6 mr-4 fill-light"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
      <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-center">
          &copy; 2023 MauricioSuescun. All rights reserved.
        </span>
        <Link href="/sitemap.xml" className="text-center underline">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="https://mauricio-suescun.vercel.app/" className="underline">
            Yesid Mauricio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
