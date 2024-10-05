import CompareAtuoplay from '@/components/ui/CompareAtuoplay/CompareAtuoplay'
import CoverSpeed from '@/components/ui/CoverSpeed/CoverSpeed'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full py-5">
        <CompareAtuoplay></CompareAtuoplay>

        <CoverSpeed />
      </div>
    </div>
  )
}

export default page
