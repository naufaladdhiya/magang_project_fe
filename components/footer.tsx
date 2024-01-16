import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#2D343E] w-full p-8 mt-20 font-medium text-white">
      <Image src="/logo.png" width={300} height={100} alt="logo" />
      <div className="flex gap-16 mt-10 flex-1">
        <div className="flex flex-col">
          <p className="text-2xl w-[634px]">
            PEJABAT PENGELOLA INFORMASI DAN DOKUMENTASI KOTA SURAKARTA
          </p>
          <div className="mt-16 text-base">
            <p>Telepon: (0271) 2931669</p>
            <p>Alamat: ppid@surakarta.go.id</p>
            <p>Email: ppid@surakarta.go.id</p>
          </div>
        </div>
        <div className="">
          <p className="text-2xl">Social Media</p>
          <div className="grid grid-cols-2 gap-5 my-5">
            <div className="flex items-center gap-5">
              <Instagram size={40} />
              <a href="" className="text-xl font-medium">
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-5">
              <Youtube size={40} />
              <a href="" className="text-xl font-medium">
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-5">
              <Facebook size={40} />
              <a href="" className="text-xl font-medium">
                Instagram
              </a>
            </div>

            <div className="flex items-center gap-5">
              <Twitter size={40} />
              <a href="" className="text-xl font-medium">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
