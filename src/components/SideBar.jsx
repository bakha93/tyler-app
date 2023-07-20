import React from 'react'

const SideBar = () => {
  return (
    <div className="sticky mr-[22px] top-[12px] left-[12px] rounded-xl bg-noble-black-600 w-[312px] h-[1118px] text-center text-sm text-noble-black-100">
      <div className="absolute top-[904px] left-[0px] w-[312px]" />
      <div className="absolute top-[8px] left-[8px] rounded-2xl [background:linear-gradient(117.58deg,_rgba(215,_237,_237,_0.16),_rgba(204,_235,_235,_0))] box-border w-[296px] flex flex-row p-4 items-center justify-between text-base text-noble-black-0 border-t-[1px] border-solid border-glass-stroke">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img className="relative rounded-xl w-[62px] h-12" alt="" src="/avatar.svg" />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative tracking-[0.15px] leading-[24px] font-semibold">Tyler Durden</div>
            <div className="relative text-xs tracking-[0.15px] leading-[18px] font-medium text-stem-green-500">Premium Member</div>
          </div>
        </div>
        <img className="relative w-6 h-6" alt="" src="/cog.svg" />
      </div>
      <div className="absolute top-[132px] left-[2px] box-border w-[312px] flex flex-col py-6 px-2 items-start justify-start text-left text-xs text-noble-black-400 border-b-[1px] border-solid border-noble-black-700">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch flex flex-row py-0 px-4 items-start justify-start">
            <div className="relative tracking-[0.15px] leading-[18px] font-semibold">GENERAL</div>
          </div>
          <div className="rounded-lg w-[296px] h-12 flex flex-row py-3.5 px-4 box-border items-center justify-start gap-[16px] text-center text-sm text-noble-black-100">
            <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
              <img className="relative w-[38.83px] h-[39.42px] mt-[18px]" alt="" src="/search.svg" />
              <div className="relative tracking-[0.15px] leading-[20px] font-semibold">Search</div>
            </div>
            <div className="rounded [background:linear-gradient(117.58deg,_rgba(215,_237,_237,_0.16),_rgba(204,_235,_235,_0))] shadow-[0px_1px_2px_-1px_rgba(0,_0,_0,_0.05),_0px_1px_3px_rgba(0,_0,_0,_0.05)] flex flex-row py-1 px-2 items-center justify-end text-xs text-noble-black-300 font-inter border-[1px] border-solid border-glass-stroke">
              <div className="relative tracking-[0.15px] leading-[18px]">
                <span className="font-semibold">⌘</span>
                <span className="font-semibold font-body-l-semibold"> S</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[479px] left-[10px] w-[296px] flex flex-row py-0 px-4 box-border items-start justify-start text-left text-xs text-noble-black-400">
        <div className="relative tracking-[0.15px] leading-[18px] font-semibold">LEARNING SPACES</div>
      </div>
      <div className="absolute top-[583px] left-[17.75px] w-[264px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative  w-[39.7px] h-[40.25px]" alt="" src="/triangle.svg" />
        <div className="relative mb-[18px] ml-[-12px]  tracking-[0.15px] leading-[20px] font-semibold">GPT-Hub</div>
      </div>
      <div className="absolute top-[625px] left-[10px] rounded-lg w-[296px] h-12 flex flex-row py-3.5 px-4 box-border items-center justify-start">
        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
          <div className="relative shadow-[0px_10px_15px_-3px_rgba(226,_111,_32,_0.16),_0px_4px_6px_-4px_rgba(226,_111,_32,_0.16)] w-5 h-5">
            <div className="absolute h-[82.5%] w-[82.5%] top-[8.75%] right-[8.75%] bottom-[8.75%] left-[8.75%] rounded-10xs box-border border-[1.5px] border-solid border-happy-orange-600" />
          </div>
          <div className="relative tracking-[0.15px] leading-[20px] font-semibold">Personal AI-GPT</div>
        </div>
      </div>
      <div className="absolute top-[675px] left-[0] rounded-lg w-[296px] h-12 flex flex-row py-3.5 px-4 box-border items-center justify-start">
        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
          <img className="relative w-[40.5px] h-[40.5px]" alt="" src="/octagon.svg" />
          <div className="relative mb-[18px] ml-[-12px] tracking-[0.15px] leading-[20px] font-semibold">Exam Booking App</div>
        </div>
      </div>
      <div className="absolute top-[287px] left-[12px] w-[296px] flex flex-row py-0 px-4 box-border items-start justify-start text-left text-xs text-noble-black-400">
        <div className="relative tracking-[0.15px] leading-[18px] font-semibold">ACHIEVEMENT SPACES</div>
      </div>
      <div className="absolute top-[382px] left-[17.75px] w-[264px] flex flex-row items-center justify-start gap-[16px]">
        <img className="relative w-[35.5px] h-[40.5px]" alt="" src="/bulb.svg" />
        <div className="relative mb-[18px] tracking-[0.15px] leading-[20px] font-semibold">Test Lab</div>
      </div>
      <div className="absolute top-[511px] left-[17.75px] rounded-lg [background:linear-gradient(117.58deg,_rgba(215,_237,_237,_0.16),_rgba(204,_235,_235,_0))] box-border w-[296px] h-12 flex flex-row py-3.5 px-4 items-center justify-start border-t-[1px] border-solid border-glass-stroke">
        <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
          <div className="relative shadow-[0px_10px_15px_-3px_rgba(182,_240,_156,_0.16),_0px_4px_6px_-4px_rgba(182,_240,_156,_0.16)] w-5 h-5">
            <div className="absolute h-[82.5%] w-[82.5%] top-[8.75%] right-[8.75%] bottom-[8.75%] left-[8.75%] rounded-10xs box-border border-[1.5px] border-solid border-stem-green-500" />
          </div>
          <div className="relative tracking-[0.15px] leading-[20px] font-semibold">Lesson App</div>
        </div>
      </div>
      <img className="absolute top-[332.75px] left-[15.75px] w-[40.5px] h-[40.5px]" alt="" src="/dashbaord.svg" />
      <div className="absolute top-[333px] left-[62px] tracking-[0.15px] leading-[20px] font-semibold">Analytics & Performance</div>
    </div>
  )
}

export default SideBar
