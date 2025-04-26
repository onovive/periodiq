"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import client from "@/client";

const ContectUs = ({ message, data }: { message: any; data: any }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const { email, name, city } = formData;

    try {
      // 1 — store lead in Sanity (keeps your existing logic)
      await client.createIfNotExists({
        _id: Math.random().toString(36).slice(2, 10),
        _type: "contact",
        name,
        email,
        city,
      });

      // 2 — subscribe in MailerLite
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, city }),
      });

      setFormData({ email: "", name: "", city: "" });
      setSubmitted(true);
      toast.success(message); // “Thanks! Check your inbox…”
    } catch {
      toast.error("Submission error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-5 py-10 sm:p-24 text-black">
        <input type="text" placeholder={data?.firstName} name="name" value={formData.name} onChange={handleInputChange} className="w-full font-extralight px-3 py-4 text-base border border-[#e8eae8] rounded-lg hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" required />
        <div className="mt-5">
          <input type="email" placeholder={data?.email} name="email" value={formData.email} onChange={handleInputChange} className="w-full font-extralight px-3 py-4 text-base border border-[#e8eae8] rounded-lg hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" required />
        </div>
        <div className="mt-5">
          <input type="text" placeholder={data?.city} name="city" value={formData.city} onChange={handleInputChange} className="w-full font-extralight px-3 py-4 text-base border border-[#e8eae8] rounded-lg hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" required />
        </div>

        <div className="mt-7">
          <button type="submit" disabled={loading} className={`px-12 h-12 text-white rounded-full flex items-center justify-center ${loading ? "bg-[#232523] cursor-not-allowed" : "bg-[#232523] hover:bg-green-900"}`}>
            <span className="relative flex items-center justify-center">
              {/* Always render the button text to preserve width */}
              <span className={loading ? "invisible" : ""}>{data?.submitButton}</span>
              {loading && (
                <span className="absolute flex space-x-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
                </span>
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContectUs;
