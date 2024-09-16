'use client';

import Image from 'next/image';
import Head from 'next/head';
// @ts-ignore
import { en, pt } from './ptbr.ts';
import { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState(en);

  const toggleLang = () => {
    setLang(lang === pt ? en : pt);
  };

  const changeLangBTN = (
    <button
      onClick={toggleLang}
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4"
    >
      {lang.toggle}
    </button>
  );

  return (
    <main className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <Head>
        <title>Helio Meira de Souza Leles</title>
      </Head>

      <section className="hero h-screen flex justify-center items-center">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white">
            {lang.welcome}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            <br />
            {lang.whoami}
            <br /> <br />
          </p>
          <a
            href="#my-projects"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
          >
            {lang.explore}
          </a>
          {changeLangBTN}
        </div>
      </section>

      {/* About Section */}
      <section className="about py-12">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            {lang.title_aboutme}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            {lang.body_aboutme}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects py-12 w-fit" id="my-projects">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8">
            {lang.title_projects}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit">
            <a
              className="project bg-white dark:bg-gray-800 rounded shadow-md w-fit"
              href="https://github.com/NullClock/Ejectsoft-BETA"
              target="_blank"
            >
              <div className="container mb-4">
                <Image
                  src="/ejsft.jpeg"
                  alt="EjectSoft Logo"
                  width={500}
                  height={200}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white ml-4 mr-4 mb-4">
                Ejectsoft (BETA)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-4 mr-4 mb-4">
                {lang.desc_ejectsoft}
              </p>
            </a>
            <a
              className="project bg-white dark:bg-gray-800 rounded shadow-md"
              href="https://pushsocket.github.io/"
              target="_blank"
            >
              <div className="container mb-4">
                <Image
                  src="/pushsock.png"
                  alt="PushSocket Logo"
                  width={500}
                  height={200}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white ml-4 mr-4 mb-4">
                PushSocket (broken)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-4 mr-4 mb-4">
                {lang.desc_pushsocket}
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact py-12">
        <div className="container mx-auto p-4 md:p-6 lg:p-8">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white">
            {lang.title_contact}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400">
            {lang.body_contact}
          </p>
          <ul className="list-none">
            <li className="mb-1">
              <a
                href="mailto:helio@xapktech.xyz"
                className="text-blue-500 hover:text-blue-700"
              >
                helio@xapktech.xyz
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://github.com/NullClock"
                className="text-blue-500 hover:text-blue-700"
              >
                GitHub [NullClock]
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
