"use client";
import React, { useState } from "react";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";

const ContactComp = () => {
  const [formData, setFormData] = useState({});
  const [whileSending, setWhileSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setWhileSending(true);
    await messageSend(formData);
    console.log(whileSending);
    setWhileSending(false);
  };

  // exmple Promise fun
  const messageSend = (formData) => {
    return new Promise((resolve, reject) => {
      resolve(
        setTimeout(() => {
          console.log("Message was sended!", formData);
        }, 5000)
      );
    });
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen ">
      <div className="flex flex-col w-full max-w-4xl p-8 space-x-6 overflow-hidden text-white bg-black shadow-lg rounded-xl md:flex-row md:space-x-6 md:space-y-0 sm:p-12">
        <div className="flex flex-col justify-between space-y-8">
          <div>
            <h1 className="text-4xl tracking-wide font-sinha">
              wmsj iïnkao lr.kak
            </h1>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center space-x-2">
              <IconContext.Provider value={{ size: 25 }}>
                <BsWhatsapp color="#5eead4" />
              </IconContext.Provider>
              <span>+94 766251671</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <IconContext.Provider value={{ size: 25 }}>
                <BsWhatsapp color="#5eead4" />
              </IconContext.Provider>
              <span>+94 766008689</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <IconContext.Provider value={{ size: 25 }}>
                <IoCallSharp color="#5eead4" />
              </IconContext.Provider>
              <span>+94 715831684</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <IconContext.Provider value={{ size: 25 }}>
                <MdEmail color="#5eead4" />
              </IconContext.Provider>
              <span>jayantha1978227@gmail.com</span>
            </div>
            <div className="inline-flex items-start justify-start space-x-2">
              <div className="shrink">
                <IconContext.Provider value={{ size: 25 }}>
                  <IoLocationSharp color="#5eead4" />
                </IconContext.Provider>
              </div>
              <span className="text-xl font-sinha">
                l¾hd, ,smskh iq¾hdm;s fcHda;sIHh fiajh frÜyjqqia ykaÈh jeÈl=Uqr
                mdr fudKrd.,
              </span>
            </div>
            <div className="inline-flex items-start justify-start space-x-2">
              <div className="shrink">
                <IconContext.Provider value={{ size: 25 }}>
                  <IoLocationSharp color="#5eead4" />
                </IconContext.Provider>
              </div>
              <span className="text-xl font-sinha">
                Ksjfia ,smskh iq¾hdm;s fcHda;sIHh fiajh uydhdh fudKrd.
              </span>
            </div>
          </div>
          <div className="flex gap-10 items-center justify-center bg-[#267e99] p-3 rounded-full mx-5">
            <a
              target="_blank"
              href={"https://web.facebook.com/profile.php?id=100094727563499"}
              className="transition duration-300 hover:-translate-y-1"
            >
              <IconContext.Provider value={{ size: 25 }}>
                <BsFacebook />
              </IconContext.Provider>
            </a>
            <a
              target="_blank"
              href={
                "https://api.whatsapp.com/send/?phone=94766251671&text&type=phone_number&app_absent=0"
              }
              className="transition duration-300 hover:-translate-y-1"
            >
              <IconContext.Provider value={{ size: 25 }}>
                <BsWhatsapp />
              </IconContext.Provider>
            </a>
          </div>
        </div>
        {/* <div className="relative !ml-0">
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-28"></div>

          <div className="p-8 mt-5 !ml-0 text-gray-600 bg-white shadow-lg rounded-xl md:w-80 relative z-9">
            <form onSubmit={formSubmit} className="flex flex-col space-y-4 ">
              <div>
                <label className="text-sm">Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300 "
                  onChange={handleChange}
                  value={formData.name}
                  disabled={whileSending}
                />
              </div>
              <div>
                <label className="text-sm">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                  onChange={handleChange}
                  value={formData.email}
                  disabled={whileSending}
                />
              </div>
              <div>
                <label className="text-sm">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  row="4"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                  onChange={handleChange}
                  value={formData.message}
                  disabled={whileSending}
                ></textarea>
              </div>
              <input
                type="submit"
                value={`${whileSending ? "Loading ..." : "SEND MESSAGE"}`}
                className="self-end inline-block px-6 py-2 text-sm font-bold text-white uppercase rounded-lg bg-cyan-700"
                disabled={whileSending}
              />
            </form>
          </div>
        </div> */}
        <div className="relative !-ml-6  mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d126.8637920945285!2d81.34740231985063!3d6.867787153905897!2m2!1f51.61659300413206!2f45!3m2!1i1024!2i768!4f35!3m2!1m1!2zNsKwNTInMDcuMCJOIDgxwrAyMCc1NC4zIkU!5e1!3m2!1sen!2slk!4v1698828979317!5m2!1sen!2slk"
            width="390"
            height="390"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-lg sm:ml-10"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
