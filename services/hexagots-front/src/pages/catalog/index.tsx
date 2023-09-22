import React from 'react'
import {useQuery} from "@tanstack/react-query";
import {useClerk} from '@clerk/nextjs'
import LoadingPage from "~/component/Loading.page";
import ErrorPage from "~/component/Error.page";
import { fetch_with_token} from "~/queries/queries.threads";
import type * as I from '../../types/threads.api'
import Link from "next/link";

export default function Catalog() {
   const {session} = useClerk();

   const {data: threads, error, isLoading} = useQuery(
      ['repoData'],
      () => fetch_with_token<I.SOThreadsModel>(
         'http://localhost:4002/thread?limit=20&skip=0', 'GET', session),
      {enabled: !!session}
   );

   if (isLoading) return (<LoadingPage/>)

   if (error || !threads) return (<ErrorPage/>)

   console.log(threads)

   return (
      <main className="flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800">
         <h1 className="text-3xl">Product Category Page Title</h1>
         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
            <span className="text-sm font-semibold">1-16 of 148 Products</span>
            <button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
               <div
                  className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
				<span className="font-medium">
					Popular
				</span>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                       fill="currentColor">
                     <path fillRule="evenodd"
                           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                           clipRule="evenodd"/>
                  </svg>
               </div>
               <div
                  className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
                  <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Popular</a>
                  <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Featured</a>
                  <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Newest</a>
                  <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Lowest Price</a>
                  <a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Highest Price</a>
               </div>
            </button>
         </div>
         <div
            className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6"
         >
            {/*// <!-- Product Tile Start -->*/}
            {threads.map((thread) => (
                  <div key={thread.id}>
                     <img className="block h-64 rounded-lg shadow-lg bg-white" alt="image"
                          src={thread.image
                             ? thread.image
                             : 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg'
                          }>
                     </img>
                     <div className="flex items-center justify-between mt-3">
                        <div>
                           <Link href="#" className="font-medium">{thread.name}</Link>
                           <Link className="flex items-center" href="#">
                              <span className="text-xs font-medium text-gray-600">by</span>
                              <span className="text-xs font-medium ml-1 text-indigo-500">{thread.owner}</span>
                           </Link>
                        </div>
                        <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">
                           $34
                        </span>
                     </div>
                  </div>
               ))
            }


            {/*<!-- Product Tile End -->*/}
         </div>
         <div className="flex justify-center mt-10 space-x-1">
            <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400">
               <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"/>
               </svg>
            </button>
            <button className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400"
                    disabled>
               Prev
            </button>
            <button
               className="flex items-center justify-center h-8 w-8 rounded bg-indigo-200 text-sm font-medium text-indigo-600"
               disabled>
               1
            </button>
            <button
               className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
               2
            </button>
            <button
               className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
               3
            </button>
            <button
               className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
               Next
            </button>
            <button
               className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
               <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"/>
               </svg>
            </button>
         </div>
      </main>
   )
}
