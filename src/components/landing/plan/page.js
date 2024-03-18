export default function Home() {
  return (
    <div className="flex flex-col-reverse text md:flex-row items-center justify-center gap-20 mt-20 p-4">
      <iframe
        src="https://www.youtube.com/embed/O5O3yK8DJCc?si=nFHptYEU6gHkOgD7"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style={{
          borderRadius: "10px",
        }}
        className="shadow-2xl w-full md:w-1/2 h-80"
      ></iframe>
      <div className="flex flex-col items-center justify-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-800">
          The Plan to make your life more easy!
        </h1>
        <p className="text-gray-600 mt-5">
          Our Business Plan is a written document describing a company&apos;s
          core business activites, Objectives, and how it plans to achieve its
          goals. Our goal is to provide our client high quality Product with
          modern idea accordingly their budgets and according thir reuirements.
        </p>
      </div>
    </div>
  );
}
