"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
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
      className="mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4"
    >
      <input
        type="email"
        placeholder="Enter your email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="w-full bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
      />

      <input
        type="submit"
        className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
      />
    </form>
  );
}
