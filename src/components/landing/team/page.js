import Image from "next/image";
import ceo from "../../../../public/ceo.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Our Team Members</h1>
      <p className="text-gray-600 mt-4">The best team ever you can find!</p>
      <div className="flex flex-col lg:flex-row justify-around w-full items-center mt-10 gap-10">
        <div className="flex   justify-center gap-10">
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderTopLeftRadius: "50%",
              borderBottomRightRadius: "50%",
              borderBottomLeftRadius: "50%",
              imageRendering: "auto",
              maxHeight: "300px",
              maxWidth: "300px",
            }}
          />
          <div>
            <h1 className="text-2xl font-bold">Mr. Sivraj Dukare</h1>
            <p className="text-gray-600 mt-4 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
        </div>
        <div className="relative mt-28 lg:mt-0 z-10">
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-40 top-10 left-10 z-40"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-24 -bottom-20 -left-10 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-20 -bottom-20 -right-0 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-16 -bottom-0 -right-16 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-16 -top-0 -right-16 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-20 -top-20 -right-0 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-24 -top-24 right-24 absolute"
          />
          <Image
            src={ceo}
            alt="ceo"
            style={{
              borderRadius: "50%",
              imageRendering: "auto",
            }}
            className="w-32 top-2 right-40 absolute z-10"
          />
        </div>
      </div>
    </div>
  );
}
