import { TypeAnimation } from "react-type-animation";
function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] items-center px-3 mt-15 lg:mt-20 "
    >
      <div className="w-full">
        <div className="flex justify-center">
          <img
            src="./src/image/img1.png"
            alt=""
            className="w-80 h-80 rounded-full bg-transparent shadow-xl object-cover border-4 border-white"
          />
        </div>
        <div className="block text-black font-bold text-[24px] text-center mt-4">
          𝓗𝓮𝓵𝓵𝓸
        </div>
        
        <div className="text-center font-bold text2xl text-red-500 h-25">
          <TypeAnimation
            sequence={[
              "I'm Ahmad Sholihin",
              1000,
              "I'm a Frontend Developer",
              1000,
              "Thankyou for visiting my portfolio",
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          ></TypeAnimation>
        </div>
        <div className="mt-8 text-center w-full max-w-[600px] mx-auto">
          <p className="text-black text-lg font-mono">
            Hello, my name is Ahmad Sholihin, and I am a fourth-semester student
            majoring in Informatics Engineering. I am passionate about web
            development and currently building my portfolio website using React
            and Tailwind CSS."
          </p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
