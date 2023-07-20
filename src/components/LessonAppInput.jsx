import React from 'react'

const LessonAppInput = () => {
  return (
    <>
      <b className="absolute top-[871px] left-[0] text-xl leading-[32px] flex text-center items-center justify-center w-[182px]">
        Lesson App
      </b>
      <div className="absolute top-[917px] left-[0] w-[896px] flex flex-row items-start justify-start">
        <div className="self-stretch w-[948px] flex flex-row items-start justify-start gap-[12px]">
          <div className="rounded-xl [background:linear-gradient(225deg,_#3045c9,_#65beda_45.31%,_#9ad37f)] box-border w-[262px] h-12 overflow-hidden shrink-0 flex flex-col p-6 items-start justify-center relative gap-[24px] text-noble-black-900 border-t-[1px] border-solid border-glass-stroke">
            <div className="absolute my-0 mx-[!important] top-[88px] left-[12px] rounded-[50%] bg-day-blue-300 [filter:blur(72px)] w-28 h-28 opacity-[0.08] z-[0]" />
            <div className="self-stretch relative tracking-[0.15px] leading-[24px] font-semibold z-[1]">Planned</div>
          </div>
          <div className="rounded-xl [background:linear-gradient(117.58deg,_rgba(215,_237,_237,_0.16),_rgba(204,_235,_235,_0))] box-border w-[262px] h-12 overflow-hidden shrink-0 flex flex-col p-6 items-start justify-center relative gap-[24px] border-t-[1px] border-solid border-glass-stroke">
            <div className="self-stretch relative tracking-[0.15px] leading-[24px] font-semibold z-[0]">Start</div>
            <div className="absolute my-0 mx-[!important] top-[88px] left-[12px] rounded-[50%] bg-heisenberg-blue-500 [filter:blur(72px)] w-28 h-28 opacity-[0.08] z-[1]" />
          </div>
          <div className="rounded-xl [background:linear-gradient(117.58deg,_rgba(215,_237,_237,_0.16),_rgba(204,_235,_235,_0))] box-border w-[262px] h-12 overflow-hidden shrink-0 flex flex-col p-6 items-start justify-center relative gap-[24px] border-t-[1px] border-solid border-glass-stroke">
            <div className="self-stretch relative tracking-[0.15px] leading-[24px] font-semibold z-[0]">Continue</div>
            <div className="absolute my-0 mx-[!important] top-[88px] left-[12px] rounded-[50%] bg-purple-blue-300 [filter:blur(72px)] w-28 h-28 opacity-[0.08] z-[1]" />
          </div>
          <div className="rounded-xl [background:linear-gradient(117.58deg,_rgba(215,_237,_237,_0.16),_rgba(204,_235,_235,_0))] box-border w-[201px] h-12 overflow-hidden shrink-0 flex flex-col p-6 items-start justify-center relative gap-[24px] border-t-[1px] border-solid border-glass-stroke">
            <div className="self-stretch relative tracking-[0.15px] leading-[24px] font-semibold z-[0]">Test</div>
            <div className="absolute my-0 mx-[!important] top-[88px] left-[12px] rounded-[50%] bg-sunglow-500 [filter:blur(72px)] w-28 h-28 opacity-[0.08] z-[1]" />
          </div>
        </div>
      </div>
      <div className="absolute top-[1014px] left-[0] rounded-xl bg-noble-black-700 w-[1032px] h-[68px] flex flex-row p-6 box-border items-center justify-start gap-[24px] text-noble-black-300">
        <div className="rounded-xl w-12 h-12 flex flex-row py-2 px-6 box-border items-center justify-center">
          <img className="relative w-6 h-6" alt="" src="/microphone.svg" />
        </div>
        <div className="flex-1 flex flex-row py-3 px-0 items-start justify-start">
          <div className="relative tracking-[0.15px] leading-[24px] font-medium">I want to learn about python</div>
        </div>
        <div className="rounded-xl bg-noble-black-600 w-12 h-12 flex flex-row py-2 px-6 box-border items-center justify-center">
          <img className="relative w-6 h-6" alt="" src="/paperplane.svg" />
        </div>
      </div>
      <div className="absolute top-[792px] left-[844px] w-[182px] h-12 text-day-blue-900">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-stem-green-500 h-12 flex flex-row py-2 px-6 box-border items-center justify-center gap-[12px]">
          <div className="relative tracking-[0.15px] leading-[24px] font-semibold">Start Lesson</div>
          <div className="relative w-6 h-6" />
        </div>
        <img
          className="absolute h-[20.92%] w-[7.42%] top-[39.84%] right-[11.13%] bottom-[39.24%] left-[81.46%] rounded-sm max-w-full overflow-hidden max-h-full"
          alt=""
          src="/icon.svg"
        />
      </div>
    </>
  )
}

export default LessonAppInput
