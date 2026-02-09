import React from 'react'

const Box = ({ heading, paragraph }) => {
  return (
    <div className="p-8 shadow-sm shadow-gray-300 w-fit mb-5 rounded-lg">
      <h4 className="text-xl font-semibold ">
        {heading}
      </h4>
      <p className="max-w-115 text-base mt-2">
        {paragraph}
      </p>
    </div>
  )
}

export default Box
