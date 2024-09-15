import React from 'react'
import Reviews from '../../../Components/Reviews/Reviews'
import PageHeader from '../../../Components/PageHeader/PageHeader'

type Props = {}

const MyReviews = (props: Props) => {
  return (
    <>
    <PageHeader title="My Reviews"/>
    <Reviews/>
    </>
  )
}

export default MyReviews