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
    <section id="contacts" className=" bg-white dark:bg-[#212121]">
      <div className="py-16 lg:py-10 px-4 mx-auto w-10/12 max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-black">Contact Me!</h1>
        <p className="mb-8 lg:mb-10 font-light text-gray-900 sm:text-xl">
          let's connect to discuss exciting opportunities.
        </p>
        <form action="#" ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm text-start font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="from_name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-[#616161] dark:border-[#757575]"
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm text-start font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-[#616161] dark:border-[#757575]"
              placeholder="Leave a comment..."
              required
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-black rounded-lg bg-gray-400 sm:w-fit dark:bg-[#424242]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
