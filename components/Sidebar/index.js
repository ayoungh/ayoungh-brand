

import Link from "next/link";

const Sidebar = () => {


    return (
      <div className="col-span-2 row-span-full bg-gray-200 ">
        <Link href="/">
          <h1>Anthony Young</h1>
        </Link>

        <div className="flex flex-col">
          <div className="flex bg-red-200 justify-center items-center">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="flex bg-blue-200 justify-center items-center">
            <Link href="/code-cards">Code cards</Link>
          </div>
          <div className="flex bg-red-200 justify-center items-center">
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;