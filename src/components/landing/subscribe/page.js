export default function Home() {
  return (
    <div
      className="bg-gray-100 md:w-5/6 mx-auto w-full h-80 my-10 flex justify-between lg:items-center  max-w-6xl relative"
      style={{
        borderRadius: 100,
      }}
    >
      <div className="max-w-md lg:ml-10 mt-16 ml-6  ">
        <h1 className="lg:text-4xl text-xl font-bold mb-8 ">
          Subscribe Newsletter
        </h1>
        <p>
          Subscribe to our newsletter and get the latest news and updates
          directly to your inbox.
        </p>
        <div className="flex justify-center items-center lg:hidden relative">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 rounded-full w-3/4 mt-10"
          />
          <button className="bg-blue-400 text-white p-2 rounded-full absolute right-10 top-10">
            Subscribe
          </button>
        </div>
      </div>
      <div
        className="hidden lg:flex justify-center items-center relative w-full mr-20"
        style={{
          zIndex: 1,
        }}
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 rounded-full w-full mt-10"
        />
        <button className="bg-blue-900 text-white p-2 rounded-full absolute right-0 top-10">
          Subscribe
        </button>
      </div>

      <div
        className="absolute justify-center items-center bg-blue-400 w-1/3 h-full rounded-l-full right-0 lg:block hidden"
        style={{
          borderRadius: 100,
        }}
      ></div>
    </div>
  );
}
