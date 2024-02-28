/**
 *
 * LoginAdminPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Phoenix React | ReactJS Dashboard & WebApp Template</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="relative">
        <div className="absolute hidden opacity-50 ltr:-left-16 rtl:-right-16 -top-10 md:block">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 125 316"
            width={125}
            height={316}
          >
            <title>&lt;Group&gt;</title>
            <g id="<Group>">
              <path
                id="<Path>"
                className="fill-custom-100/50 dark:fill-custom-950/50"
                d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-100 dark:fill-custom-950"
                d="m31.2 229.6l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-200/50 dark:fill-custom-900/50"
                d="m39 237.4l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-200/75 dark:fill-custom-900/75"
                d="m46.8 245.2l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-200 dark:fill-custom-900"
                d="m54.6 253.1l-1.3-3.1v-315.4l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-300/50 dark:fill-custom-800/50"
                d="m62.4 260.9l-1.2-3.1v-315.4l1.2 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-300/75 dark:fill-custom-800/75"
                d="m70.3 268.7l-1.3-3.1v-315.4l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-300 dark:fill-custom-800"
                d="m78.1 276.5l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-400/50 dark:fill-custom-700/50"
                d="m85.9 284.3l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-400/75 dark:fill-custom-700/75"
                d="m93.7 292.1l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-400 dark:fill-custom-700"
                d="m101.5 299.9l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-500/50 dark:fill-custom-600/50"
                d="m109.3 307.8l-1.3-3.1v-315.4l1.3 3.1z"
              />
            </g>
          </svg>
        </div>
        <div className="absolute hidden -rotate-180 opacity-50 ltr:-right-16 rtl:-left-16 -bottom-10 md:block">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 125 316"
            width={125}
            height={316}
          >
            <title>&lt;Group&gt;</title>
            <g id="<Group>">
              <path
                id="<Path>"
                className="fill-custom-100/50 dark:fill-custom-950/50"
                d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-100 dark:fill-custom-950"
                d="m31.2 229.6l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-200/50 dark:fill-custom-900/50"
                d="m39 237.4l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-200/75 dark:fill-custom-900/75"
                d="m46.8 245.2l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-200 dark:fill-custom-900"
                d="m54.6 253.1l-1.3-3.1v-315.4l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-300/50 dark:fill-custom-800/50"
                d="m62.4 260.9l-1.2-3.1v-315.4l1.2 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-300/75 dark:fill-custom-800/75"
                d="m70.3 268.7l-1.3-3.1v-315.4l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-300 dark:fill-custom-800"
                d="m78.1 276.5l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-400/50 dark:fill-custom-700/50"
                d="m85.9 284.3l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-400/75 dark:fill-custom-700/75"
                d="m93.7 292.1l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-400 dark:fill-custom-700"
                d="m101.5 299.9l-1.3-3.1v-315.3l1.3 3.1z"
              />
              <path
                id="<Path>"
                className="fill-custom-500/50 dark:fill-custom-600/50"
                d="m109.3 307.8l-1.3-3.1v-315.4l1.3 3.1z"
              />
            </g>
          </svg>
        </div>
        <div className="mb-0 w-screen lg:mx-auto lg:w-[500px] card shadow-lg border-none shadow-slate-100 relative">
          <div className="!px-10 !py-12 card-body">
            <a href="#!">
              <img
                src="./assets/images/logo-light.png"
                alt=""
                className="hidden h-6 mx-auto dark:block"
              />
              <img
                src="./assets/images/logo-dark.png"
                alt=""
                className="block h-6 mx-auto dark:hidden"
              />
            </a>
            <div className="mt-8 text-center">
              <h4 className="mb-1 text-custom-500 dark:text-custom-500">
                Welcome Back !
              </h4>
              <p className="text-slate-500 dark:text-zink-200">
                Sign in to continue to Tailwick.
              </p>
            </div>
            <form action="index.html" className="mt-10" id="signInForm">
              <div
                className="hidden px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50"
                id="successAlert"
              >
                You have <b>successfully</b> signed in.
              </div>
              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="inline-block mb-2 text-base font-medium"
                >
                  UserName/ Email ID
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter username or email"
                />
                <div
                  id="username-error"
                  className="hidden mt-1 text-sm text-red-500"
                >
                  Please enter a valid email address.
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter password"
                />
                <div
                  id="password-error"
                  className="hidden mt-1 text-sm text-red-500"
                >
                  Password must be at least 8 characters long and contain both
                  letters and numbers.
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <input
                    id="checkboxDefault1"
                    className="border rounded-sm appearance-none size-4 bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
                    type="checkbox"
                    defaultValue=""
                  />
                  <label
                    htmlFor="checkboxDefault1"
                    className="inline-block text-base font-medium align-middle cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <div
                  id="remember-error"
                  className="hidden mt-1 text-sm text-red-500"
                >
                  Please check the "Remember me" before submitting the form.
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  Sign In
                </button>
              </div>
              <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200 dark:before:border-t-zink-500">
                <h5 className="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 dark:bg-zink-600 dark:text-zink-200 rounded relative">
                  Sign In with
                </h5>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="facebook"
                    className="lucide lucide-facebook size-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-orange-500 border-orange-500 hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 active:text-white active:bg-orange-600 active:border-orange-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="mail"
                    className="lucide lucide-mail size-4"
                  >
                    <rect width={20} height={16} x={2} y={4} rx={2} />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="twitter"
                    className="lucide lucide-twitter size-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 active:text-white active:bg-slate-600 active:border-slate-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="github"
                    className="lucide lucide-github size-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </button>
              </div>
              <div className="mt-10 text-center">
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  Don't have an account ?{' '}
                  <a
                    href="auth-register-basic.html"
                    className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
                  >
                    {' '}
                    SignUp
                  </a>{' '}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
