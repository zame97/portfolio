import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2 border-2 border-dashed rounded-md">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-3xl font-bold font-firacode">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold font-firacode">
              Computer Scientist
            </h5>
            <a href="https://www.uniupo.it" className="font-semibold font-firacode focus:underline">
              <u>Università Del Piemonte Orientale (2018-Today)</u>
            </a>
            <p className="my-3">
              I am currently studying Computer Science in Università Del Piemonte Orientale, Alessandria, Italy.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-3xl font-bold font-firacode">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold font-firacode">Freelance Frontend Developer</h5>
            <p className="font-firacode">covid19alessandria.help (2020-Today)</p>
            <p className="font-firacode">ilpaneelerosecoop.org (2021-Today)</p>
            <p className="font-firacode">maldaria2021.org (2021-Today)</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold font-firacode">Volunteer</h5>
            <p className="font-firacode">Aula Studio Porto Idee (2020-Today)</p>
            <p className="font-firacode">Comunità San Benedetto Al Porto (2020-Today)</p>
            <p className="font-firacode">Il Chiostro Alessandria (2021-Today)</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-3xl font-bold font-firacode">Languages, Frameworks & Skills</h5>
          <div className="my-2 font-semibold font-firacode">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-3xl font-bold font-firacode">Soft Skills</h5>
          <div className="my-2 font-semibold font-firacode">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
