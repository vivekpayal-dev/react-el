import PartnershipButton from "../components/PartnershipButton"

const PartnershipProgram = () => {
  return (
    <div className="flex justify-center mt-12 md:-mt-16 flex-grow px-3">
      <div className="text-white flex items-center md:justify-center flex-col text-center">
        <h2 className="text-lg md:text-3xl leading-7 md:leading-[45px]">
          <div className="flex items-center flex-wrap justify-center">
            This isn’t freelance — it’s a curated crew.<PartnershipButton label="Make the cut" className="border-1 text-white border py-1 md:py-0 border-white px-8 rounded-[40px] text-[14px] md:text-[17px] ms-2" />
          </div>
          <div className="flex flex-wrap items-center justify-center mt-3 md:mt-1 gap-2">
            <PartnershipButton label="Apply Now" className="border-1 text-[14px] text-white border border-white px-8 rounded-[40px] md:text-[17px] py-1 md:py-0 " />
            Limited slots. Premium-level talent only.</div>
          <div>
          </div>
        </h2>
        <p className="mt-5 text-[16px]">44+ editors hired</p>
      </div>
    </div>
  )
}

export default PartnershipProgram