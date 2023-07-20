import React from 'react'

const ActionButton = ({ type, title, iconUrl, statusIcon }) => {
  return (
    <div className="cursor-pointer relative rounded-3xs h-10 flex flex-row py-2 px-4 box-border items-center justify-center gap-[10px]">
      <img className="relative h-16px w-20px max-w-full max-h-full" alt="" src={iconUrl} />
      <div className="relative tracking-[0.15px] leading-[20px] font-semibold">{title}</div>
      {statusIcon && (
        <div className="absolute top-[-7px] left-[17px] flex flex-row items-center justify-start gap-[16px] text-center text-base text-noble-black-0">
          <img className="relative rounded-3xs w-[34px] h-[34px]" alt="" src={statusIcon} />
        </div>
      )}
    </div>
  )
}

export default ActionButton
