import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen bg-black">
      <SignIn />
      <div className="text-sm mt-2 flex">
        <p>Forgot Password?</p>
        <Link href="/forget-password" className="text-blue-400 ml-2">
          Reset here
        </Link>
      </div>
    </div>
  );
}
