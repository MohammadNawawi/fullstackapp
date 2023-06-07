import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Temukan dan Bagikan petunjuk
        <br className="max-md:hidden" />{" "}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Nyareh adalah alat promosi open-source AI untuk menemukan, membuat, dan
        berbagi hal kreatif
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
};

export default Home;
