import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  Landmark,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const KontakKamiPage = () => {
  return (
    <div className="w-full bg-slate-100 py-4">
      <div className="grid grid-cols-4 gap-5 z-50">
        <div className="flex justify-center items-center bg-white shadow-xl w-[300px] h-[386px]">
          <Image src={`/ppid.png`} alt="ppid" width={200} height={400} />
        </div>
        <div>
          <Card className="w-[300px] h-[386px] shadow-xl">
            <CardHeader>
              <CardTitle className="text-center">About Us</CardTitle>
              <div className="h-1 bg-black w-full"></div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-[4]">
                <div className="flex-1">
                  <Landmark size={40} />
                </div>
                <div className="flex-[3] flex flex-col gap-1 text-sm">
                  <p>Alamat :</p>
                  <p>Kompleks Balai Kota Surakarta</p>
                  <p>Kp. Baru, Kec. Ps. Kliwon</p>
                  <p>Kota Surakarta, Jawa Tengah</p>
                  <p>Kode Pos 57133</p>
                </div>
              </div>
              <div className="flex flex-[4] mt-4">
                <div className="flex-1">
                  <Mail size={40} />
                </div>
                <div className="flex-[3] flex flex-col gap-1 text-sm">
                  <p>Email :</p>
                  <p>ppid@surakarta.go.id</p>
                </div>
              </div>
              <div className="flex flex-[4] mt-4">
                <div className="flex-1">
                  <Phone size={40} />
                </div>
                <div className="flex-[3] flex flex-col gap-1 text-sm">
                  <p>No Telp :</p>
                  <p>(0271) 2931669</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-[300px] h-[386px] shadow-xl">
            <CardHeader>
              <CardTitle className="text-center">Sosial Media</CardTitle>
              <div className="h-1 bg-black w-full"></div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-[4]">
                <div className="flex-1">
                  <Facebook size={32} />
                </div>
                <div className="flex-[3] flex flex-col gap-1 text-sm font-bold">
                  Pemkot Solo
                </div>
              </div>
              <div className="flex flex-[4] mt-4">
                <div className="flex-1">
                  <Twitter size={32} />
                </div>
                <div className="flex-[3] flex flex-col gap-1 text-sm font-bold">
                  <p>@PEMKOT_SOLO</p>
                </div>
              </div>
              <div className="flex flex-[4] mt-4">
                <div className="flex-1">
                  <Instagram size={32} />
                </div>
                <div className="flex-[3] flex flex-col gap-1 text-sm font-bold">
                  <p>@pemkot_solo</p>
                </div>
              </div>
              <div className="flex flex-[4] mt-4">
                <div className="flex-1">
                  <Youtube size={32} />
                </div>
                <div className="flex-[3] flex flex-col gap-1 text-sm font-bold">
                  <p>BatiksoloTv Pemerintah Kota Surakarta</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-[300px] h-[386px] shadow-xl">
            <CardHeader>
              <CardTitle className="text-center">Our Location</CardTitle>
              <div className="h-1 bg-black w-full"></div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center">
                <Image src={`/maps.png`} alt="ppid" width={300} height={400} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KontakKamiPage;
