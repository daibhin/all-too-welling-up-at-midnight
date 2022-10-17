import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";

const Home: NextPage = () => {
  var currentTime = new Date().getTime() / 1000;
  let midnightsRelease = 1666328400;
  let secondsUntilRelease = midnightsRelease - currentTime;

  let allTooWellLength = 10 * 60;
  let allTooWellTimes = Math.floor(secondsUntilRelease / allTooWellLength);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0">
      <Head>
        <title>All Too Welling Up To Midnight</title>
        <meta
          name="description"
          content="How many times can you listen to the All Too Well 10 minute version before the Midnights launch?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-screen bg-[#E8E8E3] h-full place-items-end">
        <h1 className="flex-wrap p-2 md:p-4 lg:p-8 font-bold text-sm md:text-md font-heavy lg:text-xl text-gradient bg-gradient-to-r from-[#4C5881] to-[#618CA2]">
          How many times can you listen to the All Too Well 10 minute version
          before Midnights launches?
        </h1>
        <div className="flex flex-1 flex-col space-y-4 items-end">
          <div>
            <div className="font-black text-5xl md:text-6xl whitespace-nowrap mr-4 bg-repeat text-gradient bg-gradient-to-r from-[#4C5881] via-[#A8C3D1] to-[#A8C3D1]">
              {allTooWellTimes} times
            </div>
            <div className="relative h-[75vw] w-[75vw] md:h-[80vw] max-h-[80vh] md:w-[80vw] max-w-[80vh]">
              <Image
                src="/taylor.jpeg"
                alt="Taylor Swift holding a lighter"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
