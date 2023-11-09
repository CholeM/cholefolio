"use client";
import React, { useRef, useState } from "react";
import Container from "../Styled/Container";
import { sendContactForm } from "@/services";

export default function Contact() {
  const [alert, setAlert] = useState("");
  const [alertSec, setAlertSec] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    if (formData.get("bot-field")) {

      return;
    } else {
      const res = await sendContactForm({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      if (res == 0) {
        setAlert("Thank you for your valuable message!");
        setAlertSec(true);
        formRef.current.reset();
      } else {
        setAlert("Something went wrong! Please try again");
        setAlertSec(true);
      }
    }
  };

  return (
    <div className="pb-16">
      <Container>
        <h2
          id="contact"
          className="text-4xl sm:text-2xl md:text-4xl font-semibold pb-8 underline decoration-8 decoration-violet-500 underline-offset-[12px]"
        >
          Let&#39;s Connect ✉️
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="basis-1/2">
            <p className="text-base">
              If you have any questions about me, my projects or would like to
              discuss the best games of the past decade, I&#39;m your girl!
            </p>
            <p className="text-base pt-3">
              You can send me a message via the form below.
            </p>
          </div>
          <div className="pt-3 lg:pt-0 basis-1/2">
            {alertSec && (
              <div className="bg-purple-200 text-purple-900 font-medium p-2 mb-3 flex flex-row justify-between">
                <p className="text-base">{alert}</p>
                <p
                  className="text-2xl"
                  onClick={() => {
                    setAlertSec(false);
                  }}
                >
                  &times;
                </p>
              </div>
            )}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              onChange={handleChange}
              className="flex flex-col gap-4"
            >
              <input
                name="name"
                id="name"
                label="name"
                placeholder="name"
                type="text"
                required
                onChange={handleChange}
                className="border-2 rounded-md p-1.5 border-violet-400"
              />
              <input
                name="email"
                id="email"
                label="email"
                placeholder="email"
                type="email"
                required
                onChange={handleChange}
                className="border-2 rounded-md p-1.5 border-violet-400"
              />
              <textarea
                name="message"
                id="message"
                label="message"
                placeholder="message"
                rows="8"
                type="text"
                required
                onChange={handleChange}
                className="border-2 rounded-md p-1.5 border-violet-400"
              />
              <input name="bot-field" type="text" className="hidden" />
              <button
                type="submit"
                className="bg-violet-900 hover:bg-violet-800 text-white text-lg shadow-md font-medium uppercase rounded-lg w-1/4 px-4 py-1.5"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
