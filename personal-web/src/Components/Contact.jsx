import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import mail from "../assets/mailbluue.png";
import call from "../assets/bluecall.png";
import linkedin from "../assets/linkedinicon.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="w-full pt-40 bg-purple-100 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto  rounded-3xl  p-6 sm:p-10">
        
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">

            <h3 className="text-lg sm:text-xl font-semibold text-gray-500 mb-8">
              CONTACT INFO
            </h3>

            <div className="flex flex-col gap-6">

              {/* MAIL */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5  p-5 rounded-2xl">

                <div className="bg-white p-4 rounded-2xl ">
                  <img
                    src={mail}
                    alt="mail"
                    className="w-10 sm:w-12"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    MAIL US
                  </h4>

                  <a
                    href="mailto:ankitkumarmohanty0@gmail.com"
                    className="block text-sm sm:text-base text-gray-500 hover:text-blue-600 break-all"
                  >
                    ankitkumarmohanty0@gmail.com
                  </a>

                  <a
                    href="mailto:ankitkumarmohanty28@gmail.com"
                    className="block text-sm sm:text-base text-gray-500 hover:text-blue-600 break-all"
                  >
                    ankitkumarmohanty28@gmail.com
                  </a>
                </div>
              </div>

              {/* CALL */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5  p-5 rounded-2xl ">

                <div className="bg-white p-4 rounded-2xl ">
                  <img
                    src={call}
                    alt="call"
                    className="w-10 sm:w-12"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    CONTACT US
                  </h4>

                  <h5 className="text-gray-500 text-sm sm:text-base">
                    +91 9040870728
                  </h5>
                </div>
              </div>
            </div>

            {/* SOCIAL INFO */}
            <div className="mt-10">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                SOCIAL INFO
              </h3>

              <div className="flex flex-wrap gap-5 mt-5">

                <a
                  href="https://www.linkedin.com/in/ankit-kumar-mohanty-964a77283/"
                  className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="w-10 sm:w-12"
                  />
                </a>

                <a
                  href="https://x.com/ankit_ak03"
                  className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300"
                >
                  <img
                    src={twitter}
                    alt="twitter"
                    className="w-10 sm:w-12"
                  />
                </a>

                <a
                  href="https://www.instagram.com/mustbeankit/"
                  className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition duration-300"
                >
                  <img
                    src={instagram}
                    alt="instagram "
                    className="w-10 sm:w-12"
                  />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full lg:w-1/2 bg-white rounded-3xl p-6 sm:p-8">

            <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight">
              Let's Connect{" "}
              <span className="text-blue-600">
                Together.
              </span>
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >

              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="w-full h-14 px-5 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="w-full h-14 px-5 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
                className="w-full p-5 bg-white border border-gray-200 rounded-xl outline-none resize-none focus:border-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-4 rounded-xl font-semibold text-lg"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;