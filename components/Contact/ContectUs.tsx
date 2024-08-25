"use client";
import React from "react";
import Image from "next/image";
import client from "@/client";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";

const ContectUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });
  const notify = () => toast.success("Thank you for Contacting us !");
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event: any) => {
    const { email, name, city } = formData;
    event.preventDefault();
    const doc = {
      _id: Math.random().toString(36).substr(2, 8),
      _type: "contact",
      name: name,
      email: email,
      city: city,
    };

    client
      .createIfNotExists(doc)
      .then(() => {
        setFormData({ email: "", name: "", city: "" });
        setSubmitted(true);
        toast.success("Thank you for Contacting us !"); // Displays a success message
      })
      .catch(() => {
        toast.error("Submission Error");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="p-5 py-10 sm:p-24  text-black ">
        <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleInputChange} className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" required />
        <div className=" mt-5">
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={handleInputChange} className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" required />
        </div>
        <div className="mt-5">
          <input type="city" placeholder="City" name="city" value={formData.city} onChange={handleInputChange} className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" required />
        </div>

        <div></div>
        <div className="mt-7">
          <button type="submit" className="px-12 py-4 text-white bg-[#232523] hover:bg-green-900 rounded-full">
            Learn more
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContectUs;
