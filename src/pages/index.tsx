import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <title></title>
      <main>
        <Header />

        {/* {Hero} */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* {About} */}

        {/* {Experience} */}

        {/* {Skills} */}

        {/* {Projects} */}
      </main>
    </div>
  );
};

export default Home;
