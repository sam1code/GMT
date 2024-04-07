export default function Home() {
  return (
    <div className="flex flex-col-reverse text md:flex-row items-center justify-center gap-20 mt-20 p-4">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/i7hLKddvXn4?si=luZwemF81ZnJtOtU&amp;start=6"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
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
