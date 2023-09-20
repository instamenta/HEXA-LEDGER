import Head from "next/head";
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import axios from 'axios';

export default function Home() {

   const {data} = useQuery({
      queryKey: ['repoData'],
      queryFn: () => axios.get('localhost:4002/thread').then()
   });

   console.log(data);

   return (
      <>
         <Head>
            <title>Hexa Ledger</title>
            <meta name="description" content="Web3 Decentralized Platform"/>
            <link rel="icon" href="/favicon.ico"/>
         </Head>

         <section className="text-gray-600 body-font">
            <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
               <div
                  className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
                  <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
                     <strong className="text-teal-500">Decentralization</strong> is not just <strong
                     className="text-fuchsia-700">Animosity</strong>
                  </h1>
                  <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
                     <strong>Hexa Ledger</strong> is an interactive - <strong>decentralized crypto</strong> social media
                     provider. Our goal is to make <strong>Web3</strong> better.
                  </p>
                  <div className="flex justify-center">
                     <Link
                        href="/"
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                     >
                         <span
                            className="relative px-5 py-2.5 text-slate-700 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                             Market Ledger
                         </span>
                     </Link>
                  </div>
               </div>
               <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
                  <img
                     className="w-100 md:ml-1 ml-24 rounded-md"
                     alt="iPhone-12"
                     src="https://i.seadn.io/gcs/files/4ec4c1513b18558725a9d8f5efa5889b.png?auto=format&dpr=1&w=384"
                  />
               </div>
            </div>
            <section className="mx-auto">
               <div className="container px-5 mx-auto lg:px-24 ">
                  <div className="flex flex-col w-full mb-4 text-left lg:text-center">
                     <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
                        Trusted by top-tier product companies
                     </h1>
                  </div>
                  <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
                     <div className="flex items-center justify-center">
                        <img
                           src="/images/Google-Logo.webp"
                           alt="Google Logo"
                           className="block object-contain h-16 greyC"
                        ></img>
                     </div>
                     <div className="flex items-center justify-center">
                        <img
                           src="/images/Shopify-Logo.svg"
                           alt="Shopify Logo"
                           className="block object-contain h-16 greyC"
                        ></img>
                     </div>
                     <div className="flex items-center justify-center">
                        <img
                           src="/images/Cloudflare-Logo.svg"
                           alt="Cloudflare Logo"
                           className="block object-contain h-16 greyC"
                        ></img>
                     </div>
                     <div className="flex items-center justify-center">
                        <img
                           src="/images/PayPal-Logo.png"
                           alt="Paypal Logo"
                           className="block object-contain h-16 greyC"
                        ></img>
                     </div>
                  </div>
               </div>
            </section>
            <div className="grr max-w-7xl pt-20 mx-auto text-center">
               <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
                  Making Web3 even better
               </h1>
               <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
                  Begin your journey with us.
               </h1>
               <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
                  <img
                     className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
                     alt="Placeholder Image"
                     src="https://1042787327-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FdEqLbo96ouKYwsT2VP2p%2Fuploads%2FIEYP65KQ07aaNLppFjmb%2FC18D9F37-34C3-48E2-8352-3345A325C883.jpeg?alt=media&token=033e6951-2b32-4659-be29-b4da1dadf902"
                  ></img>
               </div>
            </div>
            <section className="relative">
               <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                  <div className="py-24 md:py-36">
                     <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                        Subscribe to our newsletter
                     </h1>
                     <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                        Enter your email address and get our newsletters straight away.
                     </h1>
                     <input
                        placeholder="jack@example.com"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
                     ></input>{" "}
                     <Link
                        className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                        href="/"
                     >
                        <span className="justify-center text-slate-700">Subscribe</span>
                     </Link>
                  </div>
               </div>
            </section>
         </section>
      </>
   );
}
