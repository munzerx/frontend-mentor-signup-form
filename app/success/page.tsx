"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'


import success from "@/public/icon-success.svg";

export default function Success() {
  const router = useRouter();



  const searchParams = useSearchParams()
 
  const email = searchParams.get('email')



  function goHome() {
    router.push("/");
  }
  return (
    <main className="flex mx-6 md:bg-charcoal-grey md:mx-0 md:h-[100vh] justify-center items-center">
      <div className="flex flex-col h-[100vh] gap-6 justify-around bg-white md:w-[30%] md:h-[70%] md:rounded-3xl px-6">
        <div className="flex flex-col gap-6 pt-40 md:pt-8">
          <Image src={success} alt="success" />

          <h1 className="text-dark-slate-grey font-bold text-5xl">
            Thanks for subsribing!
          </h1>
          <p>
            A confirmation email has been sent to {email}. Please open it and
            click the button inside to confirm your subscription
          </p>
        </div>

        <button
          className="bg-dark-slate-grey p-6 rounded-xl mb-4 font-extrabold justify-self-end text-white text-center justify-items-center
              hover:bg-gradient-to-r from-[#ff537b] to-[#ff693a]
              "
          onClick={goHome}
        >
          Dismiss message
        </button>
      </div>
    </main>
  );
}
