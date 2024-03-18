import Image from "next/image";
import ceo from "../../../../public/ceo.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold">What our Team Members</h1>
      <p className="text-gray-600 mt-4">The best team ever you can find!</p>
      <div className="flex justify-between w-full items-center mt-10 gap-10">
        <Image
          src={ceo}
          alt="ceo"
          style={{
            borderTopLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            borderBottomLeftRadius: "50%",
            imageRendering: "auto",
          }}
        />
        <div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-gray-600 mt-4 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc vel sollicitudin.
          </p>
        </div>
        <div className="relative">
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-20 top-10 left-0 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-20 top-10 left-10 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-30 top-10 left-10 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-20 bottom-0 right-32 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-20 top-10 left-0 absolute"
          />
        </div>
      </div>
    </div>
  );
}
