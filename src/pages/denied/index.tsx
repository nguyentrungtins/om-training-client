import Link from "next/link";

export default function Denied() {
  return (
    <div className="flex items-center justify-center px-6 mx-auto pt-12">
        <div className="w-full">
            <div className="flex flex-col items-center max-w-lg mx-auto text-center">
                <p className="text-sm font-medium text-blue-500">403 error</p>
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Access Denied</h1>
                <p className="mt-4 text-gray-500">You dont have permission to view this site.</p>
                <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                    <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <span>Go back</span>
                    </button>
                    <Link href={'/'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary-700 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                        Take me home
                    </Link>
                </div>
            </div>

        </div>
    </div>
  );
}
