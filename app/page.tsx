const Home = () => {
  return (
    <div>
      {/* could do some kind of layout typing or transition with motion */}
      {/* also could do my name in a different color*/}
      <h1 className="text-[50px]">Hi! I'm <span className="text-orange-400">Tyler Fann</span></h1>
      {/* I could do react in the color and and have the logo */}
      <h2 className="text-[40px]">I'm Front End Engineer specialing in <span className="text-blue-600">React</span></h2>
      {/* same thing for here highlight the 6 years of experiecne with cvs and rapid7 logo's */}
      <h3 className="text-[30px]">6+ years of professional experience</h3>
    </div>
  );
};

export default Home;
