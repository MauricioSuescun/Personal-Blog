import React from "react";
import Form from "./Form";

const Footer = () => {
  return (
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base ">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news. © 2023 CodeBucks.
        All rights reserved.
      </p>
      <Form />
    </footer>
  );
};

export default Footer;
