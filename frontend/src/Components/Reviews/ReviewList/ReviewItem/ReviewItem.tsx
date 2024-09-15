import React, { useEffect, useState } from 'react';
import { ReviewGet } from '../../../../Models/Review';
import { IKImage } from 'imagekitio-react';
import { DormData } from '../../../../Constants/DormData';
import { Dorm } from '../../../../Models/Dorm';
import { IoIosClose } from "react-icons/io";
import { reviewDeleteApi } from '../../../../Services/ReviewService';
import { useAuthInfo } from '@propelauth/react';

type Props = {
    Review: ReviewGet
    userNameFirst: boolean
};

const ReviewItem = ({ Review, userNameFirst }: Props) => {
  const [isDeleted, setIsDeleted] = useState(false); // New state to track if the review is deleted
  console.log("Review ID:", Review._id);
  
  var dorm: Dorm | undefined = DormData.find((d) => d.ShortName === Review.name);
  const { accessToken, user } = useAuthInfo();

  const deleteReview = async () => {
    if (Review._id) {
      try {
        await reviewDeleteApi(Review._id, accessToken!);  // Ensure that Review._id is correctly passed
        setIsDeleted(true); // Set state to trigger re-render or removal
      } catch (error) {
        console.error("Error deleting review:", error);
      }
    } else {
      console.error("Review ID is missing");
    }
  };

  useEffect(() => {
    if (accessToken) {
      console.log("Found access token.");
    } else {
      console.error("Access Token not available"); // Log if token is missing
    }
  }, [accessToken]);

  // If the review has been deleted, do not render it
  if (isDeleted) {
    return null; // Returning `null` removes the component from the DOM
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="w-3/4">
      {userNameFirst ? (<>
        <p className="mb-3"><strong>{dorm?.LongName}</strong></p>
      </>) : (<>
        <p className="mb-3"><strong>{Review.userName}</strong></p>
      </>)}
        <p>Room Number: {Review.room_number}</p>
        <p>Price: ${Review.price}</p>
        <p>Bathroom Cleanliness: {Review.bathroom_cleanliness}/5</p>
        <p>WiFi Strength: {Review.wifi_strength}/5</p>
        <p>Room Size: {Review.room_size} sq. ft.</p>
        <p>Safety: {Review.safety}/5</p>
        <p>Air Conditioning: {Review.air_conditioning ? 'Yes' : 'No'}</p>
        <p>Roommate: {Review.roommate ? 'Yes' : 'No'}</p>
        <p>Comment: {Review.comment}</p>
      </div>

      {user?.username === Review.userName ? (
        <button type="button" className="self-start justify-self-end" onClick={deleteReview}>
          <IoIosClose aria-hidden="true" className="h-10 w-10 p-1" />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewItem;
