import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";

const About: NextPage = () => {
  // console.log(services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 dark:bg-dark-500 border-2 border-dashed rounded-md">
      <h6 className="my-3 text-base text-3xl font-medium font-firacode dark:bg-dark-500">
      Hello, I'm <span className="text-yellow">Amedeo</span>, 23, Italian, taller than a tall fridge, but shorter than a really tall fridge. I like programming, volunteering and theatre. 
      Concerning this website, the design and the contents will change over time 🙂
      </h6>
      <div
        className="flex-grow p-4 mt-5 dark:bg-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold font-firacode tracking-wide">
          What I am doing:
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default About;
