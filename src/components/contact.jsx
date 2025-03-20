import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone:""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendData();
    }
  };
  const validateForm = () => {
    let newerrors = {};

    if (!formData.name.trim()) {
      newerrors.name = "name is required";
    } else if (formData.name.length < 2) {
      newerrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newerrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newerrors.email = "invalid format";
    }

    if (!formData.message.trim()) {
      newerrors.message = "message is required";
    } else if (formData.message.length < 10) {
      newerrors.message = "Message must be at least 10 characters";
    }
    if(!formData.phone.trim()){
      newerrors.phone="phone number is required"
    }else if(formData.phone.length<10){
      newerrors.phone = "invalid phone number";
    }
    setErrors(newerrors);
    return Object.keys(newerrors).length === 0;
  };

  const sendData = () => {
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" ,phone: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <>
      <h1 id="contact" className="text-3xl text-[#252525] font-black text-center">
        Contact
        <span className="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full"></span>      </h1>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border-2 mb-8 mt-12">
        {submitted && (
          <p className="text-center text-green-500">
            Message Submitted Successfully
          </p>
        )}
        <form  className="space-y-4" onSubmit={handleSubmit}>
          <label className="block font-medium text-md">Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            className={`w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.name
                ? "border-red-500 focus:border-purple-500"
                : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <label className="block font-medium text-md">E-mail</label>
          <input
            type="text"
            placeholder="Enter your email"
            className={`w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.email
                ? "border-red-500 focus:border-purple-500"
                : "border-gray-300"
            }`}
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          
          <label className="block font-medium text-md">Phone</label>
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className={`w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.phone
                ? "border-red-500 focus:border-purple-500"
                : "border-gray-300"
            }`}
            onChange={handleChange}
            name="phone"
            value={formData.phone}
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}

          <label className="block font-medium text-md">Message</label>
          <textarea
            type="text"
            placeholder="Enter your message here..."
            onChange={handleChange}
            name="message"
            value={formData.message}
            className={`w-full p-4 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              errors.message
                ? "border-red-500 focus:border-purple-500"
                : "border-gray-300"
            }`}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
          <button
            type="submit"
            className="w-full bg-[#7843E9] text-white py-3 rounded-lg text-xl font-bold mt-2 hover:bg-[#5a2dbb] transition"
          >
            SEND
          </button>
        </form>
      </div>
    </>
  );
};
