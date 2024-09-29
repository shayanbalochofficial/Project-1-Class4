import Image from "next/image";
import Polyfils from "../Assets/polyfils.jpg";
import marketing from "../Assets/marketing.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black ">
      <div className="h-[100vh]">
        {" "}
        {/* -----------------------Hero 1 ---------------------- */}
        {/* ---------------------------------    Navbar Starts Here   ---------------------------------- */}
        <nav className="flex justify-between pl-[34px] pr-[34px] pt-[30px] mr-[20px] ml-[20px] top-0  bg-blue-400">
          <div className="font-extrabold">
            <Link href="/">
              <h1 className=" text-[18px] ">Marketing</h1>
            </Link>
          </div>
          <div className="flex gap-8">
            <Link href="/" className=" font-semibold hover:underline ">
              Home
            </Link>
            <Link href="../Assets" className=" hover:underline">
              Blog
            </Link>
            <Link href="#" className=" hover:underline">
              Properties
            </Link>
            <Link href="#" className=" hover:underline">
              About
            </Link>
            <Link href="#" className=" hover:underline">
              Github
            </Link>
          </div>
          <div className=" flex gap-3">
            <Link href="#">EN</Link>
            <Link href="#" className=" opacity-75">
              ES
            </Link>
          </div>
        </nav>
        {/* -----------------------------------Hero Section -------------------------------- */}
        <div className=" flex flex-col w-[100%] text-center bg-slate-200 ">
          <h1 className=" mt-[10%] text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
            Building Something Amazing
          </h1>
          <p className="mt-2 text-lg font-light text-black-200 sm:text-xl md:text-2xl">
            Must today firm from bag. Investment try cold a when <br />
            capital. Everything wait person service.
          </p>
          <div className=" pt-8 ml-[20%] ">
            <Image src={Polyfils} alt="Hero" width={800} height={300} />
          </div>
        </div>
      </div>
      {/* ---------------------------------------Hero 2---------------------------------- */}
      <div className="h-[80vh] py-8 md:py-12 lg:py-20 bg-yellow-100">
        <div className=" text-center">
          <h1 className=" text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
            Cards
          </h1>
          <p className="mt-2 text-lg font-light text-black-200 sm:text-xl md:text-2xl">
            Apply should stuff quickly. Each born member name
            <br /> technology hot forget. Similar world far study woman.
          </p>
        </div>
        <div className="flex justify-center gap-20 pt-20 ">
          <div className=" text-center w-[30%] p-5 gap-5 ">
            <h1 className="text-2xl font-bold">Business Planning</h1>
            <p className="pt-2 text-lg">
              Question want reality fund. Decision environment despite nothing.
            </p>
          </div>
          <div className=" text-center w-[30%] p-5 gap-5 ">
            <h1 className="text-2xl font-bold">Premium Support</h1>
            <p className="pt-2 text-lg">
              Almost end push. Picture truth performance detail concern.
            </p>
          </div>
          <div className=" text-center w-[30%] p-5 gap-5 ">
            <h1 className="text-2xl font-bold">Consulting</h1>
            <p className="pt-2 text-lg">
              Course smile middle road because
              <br /> about listen force
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------Hero 3---------------------------------- */}
      <div className="h-[80vh] py-10  ml-14 md:py-12 lg:py-20 flex gap-[10%] bg-purple-100">
        <div className=" w-[40%] text-left pt-[9%] ">
          <h1 className=" text-2xl font-black sm:text-3xl md:text-4xl lg:text-5xl">
            Marketing Strategy
          </h1>
          <p className="mt-2 text-lg font-light text-black-200 sm:text-xl md:text-2xl">
            Character big eat half stuff if. Technology share hot later. Tough
            improve kid politics.
          </p>
          <button className="px-6 py-3 mt-2 text-lg transition-colors rounded-md  bg-blue-600 text-white hover:bg-blue-700">
            {" "}
            Get Started
          </button>
        </div>
        <div className=" ml-10 float-right w-[40%] ">
          <Image src={marketing} alt="Marketing" width={400} height={300} />
        </div>
      </div>
      {/* ----------------------------------FAQs------------------------------------ */}
      <div className=" py-8 md:py-12 lg:py-20 bg-green-100">
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-3xl pt-8 font-black sm:text-4xl md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-lg font-light leading-tight text-black-200 sm:text-xl md:text-2xl">
            Cupiditate reprehenderit dignissimos maxime distinctio quia iste.
            Eum aliquam nulla voluptatum iure.
          </p>
        </div>
        <div className=" gap-14 pr-[60px] pl-[60px] pt-10 pb-10 ">
          <div className="flex">
            <div className="flex flex-col gap-9">
              {/* -----2boxes------- */}
              <div className=" ">
                <h3 className="text-xl font-semibold md:text-2xl">
                  Move weight here just either attorney?
                </h3>
                <p className="mt-2 ">
                  Officier journal personnage maintenant. Métier arracher cou
                  secours voler air. Maintenant parole prévenir creuser froid
                  distinguer affaire rocher.
                </p>
              </div>{" "}
              <div className="">
                <h3 className="text-xl font-semibold md:text-2xl">
                  Pass role air campaign up gas service.
                </h3>
                <p className="mt-2 ">
                  Time have local give cover mission. Throw where size size
                  relationship. Her year wife. Stock type ten tough plant. Catch
                  wear various. Section follow charge side member.
                </p>
              </div>
              {/* --------------till Here=--------------------------*/}
            </div>
            <div className="flex flex-col gap-9 ">
              <div className="">
                {" "}
                <h3 className="text-xl font-semibold md:text-2xl ">
                  Trial successful really various party show?
                </h3>
                <p className="mt-2 ">
                  Capital four individual ball head gun. Development purpose
                  radio report. Find feel attorney practice.
                </p>
              </div>
              <div className="">
                {" "}
                <h3 className="text-xl font-semibold md:text-2xl">
                  Move weight here just either attorney?
                </h3>
                <p className="mt-2 ">
                  Officier journal personnage maintenant. Métier arracher cou
                  secours voler air. Maintenant parole prévenir creuser froid
                  distinguer affaire rocher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t bg-gray-200 text-black   ">
        <div className="container px-6 py-12 mx-auto">
          <div className="flex flex-col items-center justify-between text-sm md:flex-row">
            <p className=" ">© 2024 Shayan Baloch </p>
            <ul className="flex gap-4">
              <li>
                <a href="https://next-drupal.org">Documentation</a>
              </li>
              <li>
                <a href="https://github.com/chapter-three/next-drupal">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
