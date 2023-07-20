import React from 'react'
import ActionButton from '../shared/ActionButton'

const Header = () => {
  return (
    <div className="relative top-[0px] rounded-xl bg-noble-black-600 w-[100%] h-[184px] max-w-[1118px] text-center text-xl">
      <div className="w-[1092px] flex flex-row p-6 box-border items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <b className="relative leading-[32px]">Edu-Tech Platform</b>
          <div className="relative text-sm tracking-[0.15px] leading-[20px] font-medium text-noble-black-300">
            A lesson app that will blow your mind
          </div>
        </div>

        <div className="flex flex-row items-center justify-start text-left text-sm text-noble-black-400">
          <div className="flex flex-row items-start justify-start">
            <ActionButton title="Alerts" iconUrl="/group-904.svg" statusIcon="/status1.svg" />
            <ActionButton title="Schedule" iconUrl="/group-903.svg" statusIcon="/status.svg" />
            <ActionButton title="Share" iconUrl="/share.svg" />
          </div>
        </div>
      </div>
      <div className="w-[1092px] h-20 flex flex-row p-6 box-border items-center justify-start text-sm text-noble-black-100">
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <div className="flex flex-row py-0 px-2 items-start justify-start gap-[12px]">
            <img className="relative w-[40.5px] h-[40.5px]" alt="" src="/artificium.svg" />
            <div className="relative tracking-[0.15px] leading-[20px]">
              <span>
                <span className="font-semibold">{`    `}</span>
              </span>
              <span className="text-base text-stem-green-500">
                <span>
                  <span>{`:      `}</span>
                </span>
                <span>
                  <span>{` Middle School / Verbal / Textbook / Informative / Introductive    `}</span>
                  <span className="text-sm">{`              `}</span>
                </span>
              </span>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}

export default Header
