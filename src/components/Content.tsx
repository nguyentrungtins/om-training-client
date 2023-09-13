interface ContentProps {
  title: string;
}

export function Content(props: ContentProps) {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      <div className="w-full sm:w-1/2 xl:w-2/3">
        <div className="mb-4">
          <div className="w-full rounded-2xl bg-white p-4 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <span className="relative rounded-xl bg-blue-100 p-2">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 256 262"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      fill="#4285F4"
                    />
                    <path
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      fill="#34A853"
                    />
                    <path
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      fill="#FBBC05"
                    />
                    <path
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      fill="#EB4335"
                    />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="ml-2 font-bold text-black">
                    {props.title ? props.title : " Google"}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    Google Inc.
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <button className="rounded-full border border-gray-200 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="h-4 w-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                  </svg>
                </button>
                <button className="text-gray-200">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z" />
                  </svg>
                </button>
              </div>
            </div>

            <section className="container mx-auto px-4">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800">
                      Customers
                    </h2>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">
                      240 vendors
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    These companies have purchased in the last 12 months.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-x-3">
                  <button className="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 sm:w-auto">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_3098_154395)">
                        <path
                          d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                          stroke="currentColor"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3098_154395">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Import</span>
                  </button>
                  <button className="flex w-1/2 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-blue-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Add vendor</span>
                  </button>
                </div>
              </div>
              <div className="mt-6 md:flex md:items-center md:justify-between">
                <div className="inline-flex divide-x overflow-hidden rounded-lg border bg-white rtl:flex-row-reverse ">
                  <button className="bg-gray-100 px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm">
                    View all
                  </button>
                  <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-sm">
                    Monitored
                  </button>
                  <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-sm">
                    Unmonitored
                  </button>
                </div>
                <div className="relative mt-4 flex items-center md:mt-0">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mx-3 h-5 w-5 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="block w-full rounded-lg border border-gray-200 bg-white py-1.5 pl-11 pr-5 text-gray-700 placeholder:text-gray-400/70"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right"
                            >
                              <button className="flex items-center gap-x-3 focus:outline-none">
                                <span>Company</span>
                                <svg
                                  className="h-3"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0.1"
                                  />
                                  <path
                                    d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0.1"
                                  />
                                  <path
                                    d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0.3"
                                  />
                                </svg>
                              </button>
                            </th>
                            <th
                              scope="col"
                              className="px-12 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right"
                            >
                              About
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right"
                            >
                              Users
                            </th>
                            <th
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500 rtl:text-right"
                            >
                              License use
                            </th>
                            <th scope="col" className="relative px-4 py-3.5">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          <tr>
                            <td className="whitespace-nowrap p-4 text-sm font-medium">
                              <div>
                                <h2 className="font-medium text-gray-800">
                                  Catalog
                                </h2>
                                <p className="text-sm font-normal text-gray-600">
                                  catalogapp.io
                                </p>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
                              <div className="inline gap-x-2 rounded-full bg-emerald-100/60 px-3 py-1 text-sm font-normal text-emerald-500">
                                Customer
                              </div>
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm">
                              <div>
                                <h4 className="text-gray-700">
                                  Content curating app
                                </h4>
                                <p className="text-gray-500">
                                  Brings all your news into one place
                                </p>
                              </div>
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm">
                              <div className="flex items-center">
                                <p className="text-xs text-white">Test</p>
                              </div>
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm">
                              <div className="h-1.5 w-48 overflow-hidden rounded-full bg-blue-200">
                                <div className="h-1.5 w-2/3 bg-blue-500" />
                              </div>
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm">
                              <button className="rounded-lg p-1 text-gray-500 transition-colors duration-200">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap p-4 text-sm font-medium">
                              <div>
                                <h2 className="font-medium text-gray-800">
                                  Circooles
                                </h2>
                                <p className="text-sm font-normal text-gray-600">
                                  getcirooles.com
                                </p>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
                              <div className="inline gap-x-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-normal text-gray-500">
                                Churned
                              </div>
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm">
                              <div>
                                <h4 className="text-gray-700">
                                  Design software
                                </h4>
                                <p className="text-gray-500">
                                  Super lightweight design app
                                </p>
                              </div>
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm">
                              <div className="flex items-center">
                                <p className="text-xs text-white">Test</p>
                              </div>
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm">
                              <div className="h-1.5 w-48 overflow-hidden rounded-full bg-blue-200">
                                <div className="h-1.5 w-2/5 bg-blue-500" />
                              </div>
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm">
                              <button className="rounded-lg p-1 text-gray-500 transition-colors duration-200">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
                <div className="text-sm text-gray-500">
                  Page{" "}
                  <span className="font-medium text-gray-700">1 of 10</span>
                </div>
                <div className="mt-4 flex items-center gap-x-4 sm:mt-0">
                  <a
                    href="#"
                    className="flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 sm:w-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 rtl:-scale-x-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                    <span>previous</span>
                  </a>
                  <a
                    href="#"
                    className="flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 sm:w-auto"
                  >
                    <span>Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 rtl:-scale-x-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="mb-4">
          <div className="w-full rounded-2xl bg-white p-4 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <span className="relative rounded-xl bg-blue-100 p-2">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 2447.6 2452.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipRule="evenodd" fillRule="evenodd">
                      <path
                        d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                        fill="#36c5f0"
                      />
                      <path
                        d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                        fill="#2eb67d"
                      />
                      <path
                        d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                        fill="#ecb22e"
                      />
                      <path
                        d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                        fill="#e01e5a"
                      />
                    </g>
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="ml-2 font-bold text-black">Slack</span>
                  <span className="ml-2 text-sm text-gray-500">
                    Slack corporation
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <button className="rounded-full border border-gray-200 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="h-4 w-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
                  </svg>
                </button>
                <button className="text-gray-200">
                  <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between space-x-12">
              <span className="flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                COMPLETED
              </span>
              <span className="flex items-center rounded-md border border-green-600 bg-white px-2 py-1 text-xs font-semibold text-green-600">
                MEDIUM PRIORITY
              </span>
            </div>
            <div className="m-auto block">
              <div>
                <span className="inline-block text-sm text-gray-500">
                  Task done :<span className="font-bold text-gray-700">50</span>
                  /50
                </span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <div className="h-full w-full rounded-full bg-pink-400 text-center text-xs text-white" />
              </div>
            </div>
            <div className="my-4 flex items-center justify-start space-x-4">
              <span className="flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-500">
                IOS APP
              </span>
              <span className="flex items-center rounded-md bg-yellow-200 px-2 py-1 text-xs font-semibold text-yellow-600">
                ANDROID
              </span>
            </div>
            <div className="flex -space-x-2">
              <a href="#">
                <img
                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="/images/5.jpg"
                  alt="Guy"
                />
              </a>
              <a href="#" className="">
                <img
                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="/images/6.jpg"
                  alt="Max"
                />
              </a>
              <a href="#" className="">
                <img
                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="/images/7.jpg"
                  alt="Charles"
                />
              </a>
              <a href="#" className="">
                <img
                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  src="/images/8.jpg"
                  alt="Jade"
                />
              </a>
            </div>
            <span className="mt-4 flex w-36 items-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-500">
              DUE DATE : 18 JUN
            </span>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 xl:w-1/3">
        <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
          <div className="w-full rounded-2xl bg-white p-4 shadow-lg">
            <p className="font-bold text-black">Notifications</p>
            <ul>
              <li className="my-6 flex items-center space-x-2">
                <a href="#" className="relative block">
                  <img
                    alt="Maurice Lokumba"
                    src="/images/2.jpg"
                    className="mx-auto h-10 w-10 rounded-full object-cover "
                  />
                </a>
                <div className="flex flex-col">
                  <span className="ml-2 text-sm font-semibold text-gray-900">
                    Maurice
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    Hey Enoch, did you read the Nextjs doc?
                  </span>
                </div>
              </li>
              <li className="my-6 flex items-center space-x-2">
                <a href="#" className="relative block">
                  <img
                    alt="Maurice Lokumba"
                    src="/images/2.jpg"
                    className="mx-auto h-10 w-10 rounded-full object-cover "
                  />
                </a>
                <div className="flex flex-col">
                  <span className="ml-2 text-sm font-semibold text-gray-900">
                    Maurice
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    Hey Enoch, did you read the Nextjs doc?
                  </span>
                </div>
              </li>
              <li className="my-6 flex items-center space-x-2">
                <a href="#" className="relative block">
                  <img
                    alt="Maurice Lokumba"
                    src="/images/2.jpg"
                    className="mx-auto h-10 w-10 rounded-full object-cover "
                  />
                </a>
                <div className="flex flex-col">
                  <span className="ml-2 text-sm font-semibold text-gray-900">
                    Maurice
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    Hey Enoch, did you read the Nextjs doc?
                  </span>
                </div>
              </li>
              <li className="my-6 flex items-center space-x-2">
                <a href="#" className="relative block">
                  <img
                    alt="Maurice Lokumba"
                    src="/images/2.jpg"
                    className="mx-auto h-10 w-10 rounded-full object-cover "
                  />
                </a>
                <div className="flex flex-col">
                  <span className="ml-2 text-sm font-semibold text-gray-900">
                    Maurice
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    Hey Enoch, did you read the Nextjs doc?
                  </span>
                </div>
              </li>
              <li className="my-6 flex items-center space-x-2">
                <a href="#" className="relative block">
                  <img
                    alt="Enoch Ndika"
                    src="/images/1.jpg"
                    className="mx-auto h-10 w-10 rounded-full object-cover "
                  />
                </a>
                <div className="flex flex-col">
                  <span className="ml-2 text-sm font-semibold text-gray-900">
                    Enoch
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    Yeah! that's one of the best docs
                  </span>
                </div>
              </li>
              <li className="my-6 flex items-center space-x-2">
                <a href="#" className="relative block">
                  <img
                    alt="CR7"
                    src="/images/3.png"
                    className="mx-auto h-10 w-10 rounded-full object-cover "
                  />
                </a>
                <div className="flex flex-col">
                  <span className="ml-2 text-sm font-semibold text-gray-900">
                    Cristiano
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    Tailwind JIT is a game changer!
                  </span>
                </div>
              </li>
              <li className="my-6 flex items-center space-x-2">
                <a href="#" className="relative block">
                  <img
                    alt="Lionel Messi"
                    src="/images/4.jpg"
                    className="mx-auto h-10 w-10 rounded-full object-cover "
                  />
                </a>
                <div className="flex flex-col">
                  <span className="ml-2 text-sm font-semibold text-gray-900">
                    Messi
                  </span>
                  <span className="ml-2 text-sm text-gray-400">
                    Yeah can confirm that on Austin 3:16
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
