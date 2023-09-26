"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import illustrationMobile from "@/public/illustration-sign-up-mobile.svg";
import illustrationDesktop from "@/public/illustration-sign-up-desktop.svg";
import iconList from "@/public/icon-list.svg";
import Success from "../success/page";

export default function Subscribe() {
  const [emailCheck, setEmailCheck] = useState(true);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function checkSubmit(event) {
    event.preventDefault();
    if (!email || !emailRegex.test(email)) {
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
      router.push(`/success?email=${email}`);
    }
  }

  return (
    <main className="flex flex-col bg-charcoal-grey md:h-screen">
      <div className="flex flex-col bg-white m-auto justify-center md:flex-row-reverse md:rounded-xl md:w-2/4 md:h-3/4 md:p-5">
        <div className="rounded-b-md w-screen md:w-3/6 md:h-full md:rounded-xl">
          <Image src={illustrationMobile} alt="" className="w-full md:hidden" />

          <Image
            src={illustrationDesktop}
            alt=""
            className="h-full w-full bg-red-100 hidden md:block object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col mt-6 px-5 gap-4 md:justify-center">
          <h1 className="font-bold text-4xl text-charcoal-grey">
            Stay updated!
          </h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>

          <p className="flex flex-row gap-2">
            <Image src={iconList} alt="" /> Product discovery and building what
            matters
          </p>
          <p className="flex flex-row gap-2">
            <Image src={iconList} alt="" /> Measuring to ensure updates are a
            success
          </p>
          <p className="flex flex-row gap-2">
            <Image src={iconList} alt="" /> And much more!
          </p>

          <form className="flex flex-col mt-10" onSubmit={checkSubmit}>
            <div className="flex flex-row justify-between">
              <label className="text-sm font-bold">Email address</label>
              <label
                className={`text-sm font-bold text-tomato ${
                  emailCheck ? "hidden" : "block"
                }`}
              >
                Valid email required
              </label>
            </div>
            <input
              type="email"
              placeholder="email@company.com"
              className={`mb-4 border-2 rounded-xl p-5 ${
                emailCheck ? "" : "bg-red-300 placeholder:text-tomato"
              }`}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <button
              type="submit"
              className="bg-dark-slate-grey p-5 rounded-xl mb-4 font-extrabold text-white text-center justify-items-center
              hover:bg-gradient-to-r from-[#ff537b] to-[#ff693a]
              "
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
