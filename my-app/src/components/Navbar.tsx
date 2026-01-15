"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();

  return (
    <nav className="flex gap-20 p-16 border-b-2   ">
<Link href="/">Home</Link>
<Link href="/users">Users</Link>
<Link href="/products">Products</Link>

<button
onClick={()=> router.push("/dashboard")}
>Login</button>
    </nav>
  )
}

export default Navbar