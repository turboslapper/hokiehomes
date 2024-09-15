import React from 'react'
import Reviews from '../../../Components/Reviews/Reviews'
import DormList from '../../../Components/DormList/DormList'
import PageHeader from '../../../Components/PageHeader/PageHeader'


type Props = {}

const Dorms = (props: Props) => {
  return (
    <div>
      <PageHeader title={"Dorms"}/>
        <DormList/>
    </div>
  )
}

export default Dorms