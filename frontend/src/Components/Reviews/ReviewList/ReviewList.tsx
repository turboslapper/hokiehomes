import React from 'react'
import { ReviewGet } from '../../../Models/Review'
import CardGrid from '../../CardGrid/CardGrid'
import ReviewItem from './ReviewItem/ReviewItem'

type Props = {
  Reviews: ReviewGet[],
  userNameFirst: boolean
}

const ReviewList = ({ Reviews, userNameFirst }: Props) => {
  const ReviewListItems = Reviews.map((Review) => (
    <ReviewItem key={Review.name} Review={Review} userNameFirst={userNameFirst}/>
  ))

  return (
    <div className="review-list-container">
      <CardGrid>
        {ReviewListItems}
      </CardGrid>
    </div>
  )
}

export default ReviewList
