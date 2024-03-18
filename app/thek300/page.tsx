import Image from "next/image";
import picture from "../FileImg/bar.svg";
import Link from "next/link";
import picture4 from "../FileImg/art1.svg";
import artpg1 from "../FileImg/artpg1.svg";
import picture1 from "../FileImg/quan.svg";
import picture2 from "../FileImg/giay.svg";
import picture3 from "../FileImg/ao.svg";
import divies from "../FileImg/divies.jpg";
import goldie from "../FileImg/goldie.jpg";
import stuusy from "../FileImg/stuusy.jpg";
import essen from "../FileImg/essen.jpg";
import levents from "../FileImg/levents.jpg";
export default function TheK300() {
    return (
      <div className=" bg-black">
        <div className="flex justify-center items-center h-full w-full ">
          <div className="relative ">
            <Image
              src={picture}
              alt="picture"
              height={200}
              className="cursor-pointer w-screen "
              priority
            />
            <p className="absolute inset-0 flex justify-center items-center text-gray-400 ">
              <span className="ml-2 text-gray-400 font-sans font:family-popins">
                Trang phục
              </span>
            </p>
          </div>
        </div>
        <div className="ml-24 mr-24 text-2xl text-gray-400 py-8">
          <div className="flex">
            <div className="ml-20">
              {" "}
              <a href="/">
                <Image
                  src={picture4}
                  alt="picture"
                  width={600}
                  height={400}
                  className="cursor-pointer"
                  items-center
                  priority
                />
              </a>
              <p className="text-gray-400 text-center text-sm font-sans font:family-popins ">
                Chi tiết sản phẩm
              </p>{" "}
            </div>
            <div className="ml-60 ">
              <p className="text-gray-400  gap-6 font-sans-serif font:family:roboto font-extrabold">
                <em>Fearless Plannel Shirt in Blue</em>
              </p>
              <a href="https://shp.ee/de5snva ">
                <p className="font-sans font:family-popins text-sm text-gray-400 py-6  custom-cursor hover:text-red-500">
                  Áo:https://shp.ee/de5snva
                </p>
              </a>
              <a href="/">
                <Image
                  src={picture3}
                  alt="picture"
                  width={350}
                  height={250}
                  className="cursor-pointer"
                  items-center
                  priority
                />
              </a>
              <div className="py-6">
                <p className="text-gray-400 py-6 font-sans-serif font:family:roboto font-extrabold ">
                  <em>Skinny Jeans With Knee Rips In Blue</em>
                </p>
                <a href="https://shp.ee/38m8gq1 ">
                  <p className="font-sans font:family-popins text-sm text-gray-400 custom-cursor hover:text-red-500 ">
                    Quần:https://shp.ee/38m8gq1{" "}
                  </p>
                </a>
              </div>
              <div>
                <a href="/">
                  <Image
                    src={picture2}
                    alt="picture"
                    width={350}
                    height={250}
                    className="cursor-pointer"
                    items-center
                    priority
                  />
                </a>
              </div>
              <div className="py-6">
                <p className="text-gray-400 py-6 font-sans-serif font:family:roboto font-extrabold">
                  <em>NIKE Air Force 1</em>
                </p>
                <a href="https://shp.ee/qmujire ">
                  <p className="font-sans font:family-popins text-sm text-gray-400 custom-cursor hover:text-red-500">
                    Giày:https://shp.ee/qmujire{" "}
                  </p>
                </a>
              </div>
              <div>
                <a href="/">
                  <Image
                    src={picture1}
                    alt="picture"
                    width={350}
                    height={250}
                    className="cursor-pointer"
                    items-center
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="font-sans font:family-popins text-gray-400 text-center py-10">
          {" "}
          Gợi ý sản phẩm{" "}
        </p>
        <div className="flex gap-10 ml-24 mr-24 py-4  justify-center items-center">
          <div className="flex flex-col items-center">
            <a href="/">
              <Image
                src={divies}
                alt="picture"
                width={200}
                height={200}
                className="cursor-pointer "
                items-center
                priority
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="/">
              <Image
                src={goldie}
                alt="picture"
                width={200}
                height={200}
                className="cursor-pointer"
                items-center
                priority
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="/">
              <Image
                src={stuusy}
                alt="picture"
                width={200}
                height={200}
                className="cursor-pointer"
                items-center
                priority
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="/Page1.tsx">
              <Image
                src={levents}
                alt="picture"
                width={200}
                height={100}
                className="cursor-pointer"
                items-center
                priority
              />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="/Page1.tsx">
              <Image
                src={essen}
                alt="picture"
                width={200}
                height={100}
                className="cursor-pointer"
                items-center
                priority
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
