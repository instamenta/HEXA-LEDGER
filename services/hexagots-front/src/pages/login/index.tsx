import { SignIn } from "@clerk/nextjs";

export default function Page() {
   return(
      <div className="flex align-middle justify-center  w-max">
      <SignIn />
   </div>
   );
}