import { SignUp } from "@clerk/nextjs";

export default function Page() {
   return (
      <div className="flex align-middle w-max">
         <SignUp />
      </div>
   )
}