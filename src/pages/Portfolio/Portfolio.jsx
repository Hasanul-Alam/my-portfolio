import { useEffect, useState } from "react";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";
// Sliding Library.
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-server-ah8e.onrender.com/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);
  return (
    <div className="bg-white py-10" id="portfolio">
      <section className="w-[75%] mx-auto max-md:w-[95%]">
        {/* Section Heading */}
        <SectionHeading
          heading={"Portfolio"}
          subHeading={
            "Take a look of my work and see how I bring ideas to life"
          }
        ></SectionHeading>
        <div
          className="grid grid-cols-3 max-md:grid-cols-1 gap-4 text-center my-10"
        >
          {portfolio.map((item) => (
            <Link key={item._id} to={`/portfolio-detail/${item._id}`}>
              <div className=" my-5 max-md:my-3 card bg-base-100 object-fill shadow-lg shadow-slate-500 duration-300 mt-3 hover:mt-0 hover:mb-3 bg-white">
                <figure>
                  <img className="rounded-2xl" src={item.img} alt="Shoes" />
                </figure>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
