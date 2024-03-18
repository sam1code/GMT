import Image from "next/image";
import google from "../../../../public/google.webp";
import airbnb from "../../../../public/airbnb.png";
import uber from "../../../../public/uber.png";
import amazon from "../../../../public/amazon.png";

export default function Home() {
  return (
    <main className="flex flex-col px-24">
      <h1 className="text-4xl font-bold">Our Clients</h1>
      <div className="flex lg:flex-row flex-col gap-10 items-center mt-4">
        <p className="text-gray-600 max-w-sm">
          Several selected clients, who already believe in our service.
        </p>
        <div className="flex items-center lg:gap-10 flex-wrap">
          <Image
            alt="client"
            className="object-cover"
            width={150}
            height={150}
            src={google}
          />
          <Image
            alt="client"
            className="object-cover"
            width={150}
            height={150}
            src={airbnb}
          />
          <Image
            alt="client"
            className="object-cover"
            width={150}
            height={150}
            src={uber}
          />
          <Image
            alt="client"
            className="object-cover"
            width={150}
            height={150}
            src={amazon}
          />
        </div>
      </div>
    </main>
  );
}
