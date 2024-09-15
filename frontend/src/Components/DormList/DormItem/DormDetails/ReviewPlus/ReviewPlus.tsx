import { PlusIcon } from '@heroicons/react/20/solid'

import React from 'react'

type Props = {
    openForm: () => void
}

const ReviewPlus = ({openForm}: Props) => {

  return (
    <div className="text-center">
    <div className="m-6">
      <button
        onClick={openForm}
        type="button"
        className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
      >
        <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
        New Review
      </button>
    </div>
  </div>
  )
}

export default ReviewPlus