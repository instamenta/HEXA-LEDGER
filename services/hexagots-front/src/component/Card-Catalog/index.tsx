import React from 'react'

export default function CardCatalog() {
   return (
      <div>
         <a href="#" className="block h-64 rounded-lg shadow-lg bg-white"></a>
         <div className="flex items-center justify-between mt-3">
            <div>
               <a href="#" className="font-medium">Product Name</a>
               <a className="flex items-center" href="#">
                  <span className="text-xs font-medium text-gray-600">by</span>
                  <span className="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
               </a>
            </div>
            <span
               className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$34</span>
         </div>
      </div>
   )
}
