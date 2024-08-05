import { useEffect, useState } from "react";
import SectionHeading from "../shared/SectionHeading/SectionHeading";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("fakeportfoliodata.json")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);
  return (
    <div className="bg-white py-10">
      <section className="w-[75%] mx-auto max-md:w-[95%]">
        {/* Section Heading */}
        <SectionHeading
          heading={"Portfolio"}
          subHeading={
            "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
          }
        ></SectionHeading>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 text-center my-10">
          {portfolio.map((item) => (
            <div key={item.id} className=" my-5 max-md:my-3 card bg-base-100 object-fill shadow-lg shadow-slate-500">
              <figure>
                <img
                  className="rounded-2xl"
                  src={item.img}
                  alt="Shoes"
                />
              </figure>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
