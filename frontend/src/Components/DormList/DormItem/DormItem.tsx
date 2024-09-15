import React from 'react'
import { Dorm } from '../../../Models/Dorm'
import { IKImage } from 'imagekitio-react'

type Props = {
    Dorm: Dorm
}
const urlEndpoint = 'https://ik.imagekit.io/abm/';
const DormItem = ({Dorm}: Props) => {
  return (
    <div className="flex flex-col self-center">
        <IKImage
        className="rounded mb-3"
        urlEndpoint={urlEndpoint}
        src={Dorm.exteriorImageUrl}
        lqip={{ active:true }}
        loading='lazy'
        transformation={[
            {ar: "16-9"}
        ]}
      />
            <strong className="self-start">{Dorm.LongName}</strong>
            <i className="self-start">{Dorm.address}</i>
    </div>
  )
}

export default DormItem