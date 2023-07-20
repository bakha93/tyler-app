import React from 'react'
import Layout from '../layouts/Layout'
import ScheduleContent from '../components/ScheduleContent'
import LessonAppInput from '../components/LessonAppInput'

export const HomePage = () => {
  return (
    <Layout>
      <div className="relative rounded-3xl bg-noble-black-500 w-full h-[1219px] overflow-hidden text-left text-base text-noble-black-0 font-body-l-semibold">
        <div className="top-[12px] left-[336px] w-[1092px] h-[849px] overflow-hidden text-sm">
          <ScheduleContent />
        </div>
        <div className="top-[12px] left-[336px] w-[1092px] h-[849px] overflow-hidden text-sm">
          <LessonAppInput />
        </div>
      </div>
    </Layout>
  )
}
