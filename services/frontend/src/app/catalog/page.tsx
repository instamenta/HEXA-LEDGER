'use server';

import clsx from 'clsx'
import Link from 'next/link'
import {Suspense} from 'react'
import {v4 as uuid} from 'uuid'

import Threads from './threads'
import Await from './await'
import Skeleton from './skeleton'


import React from 'react'
import type * as I from '~/types/threads.api'
import * as TenStack from "@tanstack/react-query";
import * as Clerk from '@clerk/nextjs'
import LoadingPage from "~/components/Loading.page";
import ErrorPage from "~/components/Error.page";
import {fetch_with_token, getThreads} from "~/queries/queries.threads";
import {useRouter, useSearchParams} from 'next/navigation';
import Axios, {type AxiosResponse} from "axios";

const Page = async (
   {searchParams}: { searchParams: { [key: string]: string | string[] | undefined } }
) => {

   const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
   const limit = typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10

   const {data: threads, error, isLoading, refetch} = getThreads({page, limit, session})

   const {session} = Clerk.useClerk();
   const router = useRouter();

   const [total, setTotal] = React.useState(0);

   if (isLoading) return (<LoadingPage/>)
   if (error || !threads) return (<ErrorPage/>)

   const handlePrevPage = () => {
      if (skip > 0) setSkip(skip - limit);
   };

   const handleNextPage = () => {``
      setSkip(skip + limit);
   };


   return (
      <main className="flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800">
         <h1 className="text-3xl">Product Category Page Title</h1>
         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
            <span className="text-sm font-semibold">{skip + 1}-{skip + limit} of {total} Products</span>
            <button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
               <div
                  className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
				<span className="font-medium">
					Popular
				</span>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" clipRule="evenodd"
                           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
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
            {/*// <!-- Thread Cards Start -->*/}


            {/*<!-- Product Tile End -->*/}
         </div>
         <div className="flex justify-center mt-10 space-x-1">
            <button className="flex items-center justify-center h-8 w-8 rounded text-gray-400"
                    onClick={handlePrevPage} disabled={skip <= 0}>
               <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
               </svg>
            </button>
            <button className="flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400"
                    onClick={handlePrevPage} disabled>
               Prev
            </button>
            <button onClick={handleNextPage}
                    className="flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600">
               Next
            </button>
            <button
               onClick={handleNextPage}
               className="flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-gray-600 hover:text-indigo-600">
               <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
               </svg>
            </button>
         </div>
      </main>
   )
}
