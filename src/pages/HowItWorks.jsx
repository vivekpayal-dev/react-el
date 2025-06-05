import Check from "@/components/ui/Check"

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center px-3 md:px-12 pb-5 md:pb-5 max-w-7xl mx-auto gap-5">
      <div className="flex justify-center z-10">
        <div className="hidden md:block md:w-[100px]"></div>
        <h2 className="leading-[42px] text-3xl text-center text-white mb-[12px] mt-[10px]">In the world of editing,
          it couldn’t  get simpler <br /> than this.</h2>
      </div>
      <div >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-0 sm:pb-6">
          {/* Card 1 */}
          <div className="overflow-hidden text-white md:h-[393px] w-full bg-white-300 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 cursor-pointer hover:border-white transition-border duration-300 ease-in-out">
            <div className="border-white/30 border-b px-6 py-5">
              <span className="mb-1 inline-block font-medium backdrop-filter backdrop-blur-lg rounded-full bg-white/30 px-3 py-1 text-sm">1</span>
              <h4 className="font-bold text-[28px]">Choose Your Plan</h4>
            </div>
            <div className="px-6 py-6">
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3"><Check /> Basic – One expertly edited video</li>
                <li className="flex items-start gap-3"><Check className="mt-1" /> Lobby Pass – Monthly plan with consistent edit</li>
                <li className="flex items-start gap-3"><Check className="mt-1" /> Premium – High-impact storytelling by world-class editors</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden text-white md:scale-[1.1] z-10 md:h-[393px] w-full bg-white-300 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 cursor-pointer hover:border-white transition-border duration-300 ease-in-out">
            <div className="border-white/30 border-b px-6 py-5">
              <span className="mb-1 inline-block font-medium backdrop-filter backdrop-blur-lg rounded-full bg-white/30 px-3 py-1 text-sm">2</span>
              <h4 className="font-bold text-[28px]">Upload Your Vision</h4>
            </div>
            <div className="px-6 py-6">
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3"><Check className="mt-1" /> Send us your footage and creative brief through our check-in form.</li>
                <li className="flex items-start gap-3"><Check className="mt-1" /> Add references, goals, and any must-haves — the more context, the better the result.</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden text-white md:h-[393px] w-full bg-white-300 rounded-[20px] bg-clip-padding backdrop-filter backdrop-blur-lg border border-white/40 cursor-pointer hover:border-white transition-border duration-300 ease-in-out">
            <div className="md:ps-9 border-white/30 border-b px-6 py-5">
              <span className="mb-1 inline-block font-medium backdrop-filter backdrop-blur-lg rounded-full bg-white/30 px-3 py-1 text-sm">3</span>
              <h4 className="font-bold text-[28px]">Receive Your Edit</h4>
            </div>
            <div className="md:ps-9 px-6 py-6">
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3"><Check /> Our editors bring your story to life.</li>
                <li className="flex items-start gap-3"><Check className="mt-1" /> Basic/Lobby Pass – Delivered within 48 hours</li>
                <li className="flex items-start gap-3"><Check /> Premium – Delivered within 5–7 days</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}

export default HowItWorks