import Navbar from "./Navbar";
import Team from "./Team";
import Welcome from "./Welcome";
import curve1 from "./assets/Icon (1).png";
import curve2 from "./assets/Icon.png";

function App() {
  return (
    <div className="App [font-family:'Inter-Bold',Helvetica]">
      <div
        className="hero shadow-sm min-h-screen relative md:pt-3"
        style={{
          background:
            "linear-gradient(90deg, rgb(254, 254, 254) 0%, rgb(64, 123, 255) 100%)",
        }}
      >
        <img
          className="absolute object-cover md:hidden block  top-17"
          src={curve1}
          alt="curves"
        />
        
        <img
          className="absolute hidden md:block object-cover md:top-0 md:right-0 w-[70%] h-full sm:w-[70%]"
          src={curve1}
          alt="curves"
        />
        <img
          className="absolute object-cover bottom-0 left-0 w-96"
          src={curve2}
          alt="curves"
        />
        <div className="relative z-999">
          <Navbar />
          <Welcome />
        </div>
      </div>
      <Team />
    </div>
  );
}

export default App;
