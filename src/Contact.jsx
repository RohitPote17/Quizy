import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_sma0boj",  // Replace with your EmailJS Service ID
        "template_rw8gx2e", // Replace with your EmailJS Template ID
        formData,
        "VkNTmEc3XNu1AHsbi"   // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <div className="contact-sec w-full h-[120vh] bg-zinc-950">
        <div className="top w-full h-[40%] bg-white"></div>
        <div className="bott w-full h-[60%] flex items-center justify-between p-4 gap-10">
          {/* Left Form Section */}
          <div className="btm-left w-[50%] h-full p-2 relative">
            <div className="con-form border-2 absolute w-full h-full border-white border-solid rounded-md flex items-center justify-center">
              <form className="w-8/12 h-4/6 rounded-md p-3 text-white" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name..."
                  className="w-full h-[8vh] mb-3 rounded-md p-2 bg-transparent border-b-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email..."
                  className="w-full h-[8vh] mb-3 rounded-md p-2 bg-transparent border-b-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Write Your Message / Query..."
                  className="w-full h-[8vh] mb-3 rounded-md p-2 bg-transparent border-b-2 text-white"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="font-extrabold text-white w-full border-2 rounded-md p-2 border-green-700 border-solid"
                >
                  Submit
                </button>
                {status && <p className="text-white mt-2">{status}</p>}
              </form>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="btm-right w-[50%] h-full p-4 text-white">
            <h1 className="text-2xl font-extrabold mb-5">Get In Touch</h1>
            <p className="italic font-bold mb-5 w-[75%] leading-[2] tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit
              veritatis quasi quo, expedita voluptate accusantium recusandae ex corrupti eaque!
            </p>
            <p className="text-zinc-300 w-[75%] leading-[2] tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit atque iusto
              repellendus dicta tempora, nostrum minus? Officiis, at. Quis consequuntur molestiae
              voluptatem nihil?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
