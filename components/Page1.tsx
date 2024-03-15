import Image from "next/image";
import picture from "../public/picture.jpg";
import Link from "next/link";
import k300 from "../public/k300.jpg";
import picture7 from "../public/picture7.jpg";
import picture10 from "../public/picture10.jpg";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center items-center h-full w-full">
        <div className="relative">
          <Image
            src={picture}
            alt="picture"
            height={200}
            className="cursor-pointer w-screen"
            priority
          />
          <p className="absolute inset-0 flex justify-center items-center text-gray-400 ">
            <span className="ml-2 text-gray-400">Trang phục</span>
          </p>
        </div>
      </div>
      <div className="gap-10 ml-24 mr-24 text-2xl text-gray-400">
        <div className="flex">
          <div className="mr-40">
            {" "}
            <a href="/">
              <Image
                src={picture7}
                alt="picture"
                width={600}
                height={400}
                className="cursor-pointer"
                items-center
                priority
              />
            </a>
            <p className="text-gray-400 text-center">Trang phục 1</p>{" "}

          </div>
          <div>
          <p className="text-gray-400 text-center gap-6">Fearless Plannel Shirt in Blue</p>
            <a href="/">
              <Image
                src={picture10}
                alt="picture"
                width={350}
                height={250}
                className="cursor-pointer"
                items-center
                priority
              />
            </a>
            <p className="text-gray-400 text-center">Trang phục 2</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
