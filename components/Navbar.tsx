import Image from "next/image";
import Link from "next/link";
import k300 from "../public/k300.jpg";
import picture from  "../public/picture.jpg"
import picture2 from "../public/picture2.jpg";
import picture3 from "../public/picture3.jpg";
import picture4 from "../public/picture4.jpg";
import picture5 from "../public/picture5.jpg";
import picture6 from "../public/picture6.jpg";
import './Page1'
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
          <p className="absolute inset-0 flex justify-center items-center text-gray-400 font-sans-serif font:family:roboto ">
           The K300
          </p>
        </div>
      </div>
      <article className="text-wrap ... text-center text-black py-8 text-4xl text-gray-400 font-sans-serif font:family:roboto font-extrabold ">
        <h3>THE K300 SHOP</h3>
      </article>
      <div className="flex justify-center items-center py-8">
        <Image
          src={k300}
          alt="picture"
          width={300}
          height={300}
          className="cursor-pointer"
          items-center
          priority
        />
      </div>
      <div>
        <article className="text-wrap overflow-hidden ... text-center text-gray-400 py-6 font-sans font:family-popins text-xl ">
          <p>
            Cho ra mắt cửa hàng đầu tiên vào năm 2010,<br></br>với mong muốn
            mang đến những sản phẩm thời trang youthful style<br></br> chất
            lượng và giá cả phù hợp. Sau 5 năm tìm hiểu và nỗ lực hết mình
            <br></br> vào đầu năm 2016, chúng tôi bắt đầu cho ra những sản phẩm
            made in Vietnam<br></br> mang xu hướng mới mẻ cùng chất lượng tốt
            nhất và được bán trên toàn quốc.<br></br>
            Các sản phẩm của THE K300 hầu như được lấy cảm hứng<br></br> từ văn
            hóá thời trang đường phố, tự do hoặc mang hơi hướng retro.
          </p>
          <h3 className="text-4xl text-gray-400 font-sans font:family-popins"> It Today</h3>
          <p className="text-gray-400 font-sans font:family-popins">
            {" "}
            Biểu tượng cho tinh thần khiêm nhường nhưng không ngừng sáng tạo.
            <br></br>
            Mang theo ý nghĩa <em>Nó là ngày hôm nay</em> với mỗi trang phục tạo
            ra,<br></br> nên luôn phù hợp với bạn mỗi ngày.<br></br>
            Những sản phẩm của chúng tôi sẽ không bao giờ đi trước thời đại và
            cũng<br></br> không bao giờ lỗi thời, nó sẽ luôn dành cho{" "}
            <em> ngày hôm này</em>.
          </p>
        </article>
        <div className="flex justify-center items-center py-6">
          <Image
            src={picture2}
            alt="picture"
            width={600}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
        </div>
        <article className="text-wrap overflow-hidden ... text-center text-gray-400 py-6  text-xl font-sans font:family-popins">
          <p> Địa chỉ liên hệ:</p>
          <p>
            830 Cách Mạng Tháng 8, Phường 5, Quận Tân Bình, Ho Chi Minh City,
            Vietnam
          </p>
          <p>Thông tin liên hệ:</p>
          <p>Website: 3hundred.vn</p>
          <p> Facebook: https://www.facebook.com/TheK300/</p>
          <p> Tiktok: https://www.tiktok.com/@k300shop</p>
        </article>
      </div>
      <div className="flex gap-6 ml-24 mr-24 text-2xl">
        <div className="flex flex-col items-center">
            <a href="/">
          <Image
            src={picture3}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400 "> Trang phục 1</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture4}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 2</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture5}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 3</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/Page1.tsx">
          <Image
            src={picture6}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 4</p>
        </div>
      </div>

    {/*............................................... */}
      <div className="flex gap-6 ml-24 mr-24 py-6 text-2xl" >
        <div className="flex flex-col items-center">
            <a href={"/"}>
          <Image
            src={picture3}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400 "> Trang phục 1</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture4}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 2</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture5}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 3</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture6}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 4</p>
        </div>
      </div>
        {/*............................................... */}
      <div className="flex gap-6 ml-24 mr-24 py-6 text-2xl" >
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture3}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400 "> Trang phục 1</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture4}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 2</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture5}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 3</p>
        </div>
        <div className="flex flex-col items-center">
        <a href="/">
          <Image
            src={picture6}
            alt="picture"
            width={500}
            height={300}
            className="cursor-pointer"
            items-center
            priority
          />
          </a>
          <p className="text-gray-400"> Trang phục 4</p>
        </div>
      </div>
    </div>
  );
}
