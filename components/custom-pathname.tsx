import { usePathname } from "next/navigation";

const CustomPathName = () => {
  const pathname = usePathname();
  return (
    <>
      <p className="font-bold text-gray-800">
        HOME / {pathname.replaceAll("-", " ").split("/").pop()?.toUpperCase()}{" "}
        Kota Surakarta
      </p>

      <p className="text-3xl font-bold text-gray-800 mt-3">
        {pathname.replaceAll("-", " ").split("/").pop()?.toUpperCase()}
      </p>
    </>
  );
};

export default CustomPathName;
