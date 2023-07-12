import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sy8rwsh",
        "template_cely70m",
        form.current,
        "l8MqHFRApw9Vf4YzH"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contacts" className="">
      <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-black">
          Contact Me!
        </h2>
        <p className="mb-6 lg:mb-10 font-light text-center text-gray-900 sm:text-xl">
          let's connect to discuss exciting opportunities.
        </p>
        <form action="#" ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="from_name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
              placeholder="Leave a comment..."
              required
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-gray-400 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
