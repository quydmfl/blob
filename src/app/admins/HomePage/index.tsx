/**
 * -- Admin Home Page --
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
      </Helmet>
      {/* =========START SITE========= */}
      <div className="container mx-auto box-border">
        {/* ============START NAVBAR LEFT=========== */}
        <nav></nav>
        {/* ============START NAVBAR TOP=========== */}
        <nav className="flex fixed top-0 left-0 right-0 px-2.5 min-h-16 items-center">
          <div className="flex grow justify-between items-center">
            {/* NAVBAR LOGO */}
            <div className="navbar-logo relative">
              <a href="/" className="navbar-brand" title="logo">
                <div className="flex items-center px-1">
                  <img
                    src="data:image/png;base64,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"
                    alt="blob images"
                    className="w-6"
                  />
                  <p className="logo-text text-xl leading-5 font-medium ml-1">
                    blob
                  </p>
                </div>
              </a>
            </div>
            {/* SEARCHBOX */}
            <div className="navbar-top-search-box relative">
              <div className="search-box w-[25rem] relative">
                <form className="text-xs font-normal relative">
                  <input
                    type="text"
                    className="pl-8 pr-1 px-3 py-[0.35rem] outline-0 rounded-2xl border hover:outline-none focus-visible:outline-none w-full"
                    placeholder="Search..."
                  />
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="magnifying-glass"
                    className="absolute h-3 top-1/2 left-3 translate-y-[-50%]"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    ></path>
                  </svg>
                </form>
              </div>
            </div>
            {/* NAVBAR ICON */}
            <div className="navbar-nav-icons flex flex-row">
              <div className="nav-items flex items-center">
                <button className="px-2 border-0 p-0 btn" type="button">
                  <div className="theme-control-toggle cursor-pointer">
                    <div className="theme-control-toggle-label">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-sun "
                      >
                        <g>
                          <circle cx="12" cy="12" r="5"></circle>
                          <line x1="12" y1="1" x2="12" y2="3"></line>
                          <line x1="12" y1="21" x2="12" y2="23"></line>
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                          <line
                            x1="18.36"
                            y1="18.36"
                            x2="19.78"
                            y2="19.78"
                          ></line>
                          <line x1="1" y1="12" x2="3" y2="12"></line>
                          <line x1="21" y1="12" x2="23" y2="12"></line>
                          <line
                            x1="4.22"
                            y1="19.78"
                            x2="5.64"
                            y2="18.36"
                          ></line>
                          <line
                            x1="18.36"
                            y1="5.64"
                            x2="19.78"
                            y2="4.22"
                          ></line>
                        </g>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>

              <div className="nav-items flex items-center">
                <div className="h-full relative dropdown">
                  <a
                    className="outline-none h-full p-3 box-border"
                    href="/"
                    title=""
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bell align-middle"
                    >
                      <g>
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="nav-items flex items-center">
                <div className="h-full relative dropdown">
                  <a
                    className="outline-none h-full p-3 box-border"
                    href="/"
                    title=""
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                      <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                      <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                      <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                      <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                      <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                      <circle
                        cx="14"
                        cy="14"
                        r="2"
                        fill="currentColor"
                      ></circle>
                      <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                      <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="nav-items flex items-center">
                <div className="h-full relative dropdown">
                  <a
                    className="outline-none h-full p-3 box-border"
                    href="/"
                    title=""
                  >
                    <div className="h-100 w-100 avatar">
                      <img
                        className="rounded-full"
                        src="https://phoenix-react.prium.me/static/media/57.971121ad428013d5bb70.webp"
                        alt=""
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* ============START CONTENT=========== */}
        <div className="content"></div>
      </div>
    </>
  );
}
