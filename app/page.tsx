import Button from "@/components/Button";
import { homeButtons } from "@/utils/homeButtons";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-[50px]">
          <span className="text-blue-800">Tyler Fann</span>
          <span className="text-gray-500"> | </span>
          <span className="text-blue-500">Front End Engineer</span>
        </h1>
        <h2 className="text-[35px] text-gray-500">
          6+ years of professional experience
        </h2>
        <h3 className="text-[20px] mt-2 px-3 py-1 bg-gray-900 rounded-lg">
          <span className="text-[#e34c26] pr-1">
            HTML <i className="fa-brands fa-html5"></i>
          </span>{" "}
          <span className="text-[#264de4]  pr-1">
            CSS <i className="fa-brands fa-css3-alt"></i>
          </span>
          <span className="text-[#f0db4f]  pr-1">
            JavaScript <i className="fa-brands fa-js"></i>
          </span>
          <span className="text-[#61DBFB]  pr-1">
            React <i className="fa-brands fa-react"></i>
          </span>
          <span className="text-white">and more</span>
        </h3>
      </div>
      <div className="flex justify-center m-10">
        {homeButtons.map((item) => (
          <Button {...item} key={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Home;
