import "./App.css";
import Footer from "./components/Footer";
import Map from "./components/Map";
import SakuraFalling from "./components/Sakura";
import CountdownTimer from "./components/Timer";

function App() {
  return (
    <div className="h-screen p-2 px-2 ">
      <SakuraFalling />
      <img
        src="https://i.imgur.com/dGOOfnA.png"
        alt="image-top-right"
        className="top-right-decoration z-30"
      />
      <img
        src="https://i.imgur.com/t6ffnbn.png"
        alt="image-top-left z-30"
        className="top-left-decoration"
      />
        <div className=" absolute hidden md:block md:left-10 lg:left-48 md:top-96 lg:top-80 ">
          <img className="h-40 rounded-lg" src="/assets/ganesh-ji.png" />
        </div>

      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <img className="h-40 rounded-lg" src="/assets/om.jpg" />
          <div className=" title mt-2">
            <div className="-ml-32">
              <h1 className="text-6xl -ml-4 font-medium text-yel">Aditya</h1>
            </div>
            <h2 className="text-xl font-medium text-gray-300">and</h2>
            <div className="ml-32">
              <h1 className="text-6xl font-medium text-yel">Shalini</h1>
            </div>
            <h3 className="text-gray-300 mt-2">Are getting married</h3>
          </div>
          <div className="mb-6">
            <img className="h-64 w-60 rounded-lg" src="/assets/ggg.gif" />
          </div>
        </div>
      </div>
      <CountdownTimer />

      <Map />
      <Footer />
    </div>
  );
}

export default App;
