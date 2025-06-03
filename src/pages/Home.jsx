import { Slider } from "@/components/ui/slider"
import { useState } from "react";
import { Link } from "react-router-dom";
import whatappIcon from '/src/assets/images/whatapp-icon.svg'
const Home = () => {
  // const [imageCount, setImageCount] = useState(1);

  // const getPrice = (count) => {
  //   if (count <= 5) return { usd: 45, inr: 3200 };
  //   if (count <= 9) return { usd: 40, inr: 2900 };
  //   return { usd: 35, inr: 2600 };
  // };

  // const getRangeLabel = (count) => {
  //   if (count <= 5) return "1 - 5 images";
  //   if (count <= 9) return "6 - 9 images";
  //   return "10+ images";
  // };

  // Payment 
  // function handlePay() {
  //   const price = getPrice(imageCount);
  //   console.log("Proceeding to pay:", price);
  // }
  // const displayPrice = getPrice(imageCount);




  return (
    <>

      <div className=" max-w-7xl px-3 md:px-12  mx-auto mt-3 relative flex flex-col items-center justify-evenly flex-grow pointer-events-none">
        <h1 className=" text-white font-bold text-5xl text-center" >Edit Better. Not Harder</h1>
        {/* <div className="flex gap-2 items-end bg-white-300 rounded-[40px] overflow-hidden px-6 bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 p-4 text-white text-md md:text-2xl">
        ${displayPrice.usd} / {displayPrice.inr} INR
        <span className="text-sm">For {getRangeLabel(imageCount)}</span>
      </div> */}
        {/* <div className="max-w-[280px] md:max-w-[400px] w-full mx-auto flex flex-col items-center gap-4">
        <Slider
          value={[imageCount]}
          min={1}
          max={10}
          step={1}
          onValueChange={([val]) => setImageCount(val)}
          className="w-full"
        />
        <div className="mt-5">
          <button
            onClick={handlePay}
            className="border-1 text-white border border-white px-8 py-[5px] rounded-[40px] text-[17px]"
          >
            Pay
          </button>
        </div>
      </div> */}
        <div className="ps-12 absolute bottom-1 left-0 flex items-end gap-3`">
          <span className="text-md text-white overflow-hidden  z-10 h-full w-full bg-white-300 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 cursor-pointer hover:border-white transition-border duration-300 ease-in-out py-1 px-4 "> We edit really cool videos in 48hrs</span>
        </div>
        <div className="pe-11 absolute bottom-1 right-0 flex items-end gap-3">
          <Link to='/' className="flex gap-4 items-center">
            <img
              src={whatappIcon}
              alt="WhatsApp Icon"
              className="w-10 rotate- animate-bouncey transition-all"
            />
          </Link>
        </div>
      </div>

    </>
  )
}

export default Home