const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col justify-center items-center min-h-screen   bg-cover bg-center">
      <h1 className="flex justify-center font-anton  text-[70px] mb-0 text-[#fff]">DARK BOYS CLUB</h1>
      {/* <h2 className="flex justify-center font-anton  text-[28px] mb-4 mt-0 text-[#fff]">DARK BOYS CLUB</h2> */}
      <a href="https://pump.fun/"><button className="mt-6 bg-[#2e1515] text-[#fff] rounded-full px-10 py-4 hover:bg-[#f0ff00] font-anton  text-[24px]">
        BUY $DBOYZ
      </button></a>
      <h1 className="flex justify-center font-anton text-[35px] mt-6 mb-96 text-center px-4 break-words text-[#fff]">CA: INCOMING...  </h1>

    </section>
  );
};

export default Hero;
