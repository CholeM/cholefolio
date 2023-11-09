/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "../Styled/Container";
import Typewriter from 'typewriter-effect'

export default function Hero() {

  return (
    <div className="pt-32 pb-40">
      <Container>
        <div className="flex flex-col lg:flex-row gap-3 items-center">
          <div className="basis-2/3 text-gray-800 dark:text-slate-50">
            <h1 className="py-2.5 text-[3rem]">
              Hello! I&#39;m Chole 👋
            </h1>
            <h3 className="text-[2rem] font-semibold text-violet-800 dark:text-violet-700">
              <Typewriter
                options={{
                  strings: ['Full-stack Developer', 'UX/UI Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <p className="text-base relative block py-4">
              Passionate <span className="text-violet-800 font-medium">developer</span> and 
              <span className="text-violet-800 font-medium"> designer</span> with a strong 
              front-end focus, dedicated to creating seamless, 
              visually captivating digital experiences. 🌟
            </p>
          </div>
          <div>
            <img src="/images/me.png" alt="me avatar" />
          </div>
        </div>
      </Container>
    </div>
  )
}