"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-b border-gray border-0 p-0 mx- focus:ring-0 placeholder:text-center placeholder:text-lg"
      />
      and I want to discuss a potential project. You can email me at{" "}
      <input
        type="email"
        placeholder="email"
        {...register("email", {})}
        className="outline-none border-b border-gray border-0 p-0 mx- focus:ring-0 placeholder:text-center placeholder:text-lg"
      />
      or reach out to me at
      <input
        type="tel"
        placeholder="phone number"
        {...register("phone number", {})}
        className="outline-none border-b border-gray border-0 p-0 mx- focus:ring-0 placeholder:text-center placeholder:text-lg"
      />
      Here are some details about my project: <br />
      <textarea
        {...register("project details", {})}
        rows={3}
        className="w-full outline-none border-b border-gray border-0 p-0 mx- focus:ring-0 placeholder:text-center placeholder:text-lg"
      />
      <input
        type="submit"
        value="Send Request"
        className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid rounded border-light text-light bg-dark cursor-pointer"
      />
    </form>
  );
}
