import React from 'react'
import { UpcomingCards } from '../Cards'

const UpcomingProjects = () => {
  return (
    <div className="w-full flex flex-col pt-10">
    <h1 className="font-bold text-3xl py-6 tracking-tight">
      Upcoming Projects.
    </h1>
    <div className="flex flex-wrap items-center justify-between flex-col gap-4">
      <UpcomingCards />
    </div>
  </div>
  )
}

export default UpcomingProjects
