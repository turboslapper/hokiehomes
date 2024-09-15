import React from 'react'
import { Dorm } from '../../../../../Models/Dorm'
import { DormData } from '../../../../../Constants/DormData'
import { IKImage } from 'imagekitio-react'

type Props = {
    dorm: Dorm
}

const DormDetailCard = ({dorm}: Props) => {
    const urlEndpoint = 'https://ik.imagekit.io/abm/';

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
      <IKImage
        className="rounded mb-3"
        urlEndpoint={urlEndpoint}
        src={dorm.exteriorImageUrl}
        lqip={{ active:true }}
        loading='lazy'
        transformation={[
            {ar: "16-9"}
        ]}
      />
        <h3 className="text-base font-semibold leading-7 text-gray-900">{dorm?.LongName}</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details & Reviews</p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Street address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{dorm?.address}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">Year built</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{dorm?.yearBuilt}</dd>
          </div>
          
        </dl>
      </div>
    </div>
  )
}

export default DormDetailCard