import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Image
        src="/assets/images/home.jpg"
        fill={true}
        alt="home page image"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
        <Link className="rounded-button" href="/treks">
          Explore Treks
        </Link>
      </div>
    </div>
  );
}
