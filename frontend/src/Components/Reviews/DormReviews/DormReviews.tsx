import React, { useEffect, useState } from 'react'
import { useAuthInfo } from "@propelauth/react" // Import useAuthInfo to get the access token
import { ReviewGet } from '../../../Models/Review'
import { reviewGetApi } from '../../../Services/ReviewService'
import Spinner from '../../Spinner/Spinner'
import ReviewList from '../ReviewList/ReviewList'
import { Dorm } from '../../../Models/Dorm'

type Props = {
    dorm: Dorm
}

const DormReviews = ({dorm}: Props) => {
    console.log("ReviewView component is rendering") // Check if component renders

    const [Reviews, setReviews] = useState<ReviewGet[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    // Get the user's auth info, including the access token
    const { accessToken } = useAuthInfo()

    useEffect(() => {
        if (accessToken) {
            getReviews(accessToken)
        } else {
            console.error("Access Token not available") // Log if token is missing
        }
    }, [accessToken])

    const getReviews = async (token: string) => {
        setLoading(true)
        if (dorm.ShortName != undefined && dorm.ShortName !== "") {
            try {
                const res = await reviewGetApi(token)
                console.log("API Response:", res)
                if (res) {
                    // Filter reviews by dorm name if provided
                    const filteredReviews = res.filter(
                        (review: ReviewGet) => review.name === dorm.ShortName
                    )
                    setReviews(filteredReviews)
                }
            } catch (error) {
                console.error("Error in getReviews:", error)
            }
        }
        setLoading(false)
    }

    if (loading) {
        console.log("Loading...") // Log loading state
        return <Spinner/> 
    } else if (Reviews?.length != null && Reviews?.length !== undefined && Reviews?.length > 0) {
        console.log("Reviews:", Reviews) // Log the reviews data
        return (
            <div className="flex flex-col gap-16">
                <ReviewList Reviews={Reviews!} userNameFirst={false}/>
            </div>
        )
    } else {
        return (
            <p>No reviews found for "{dorm.LongName}"</p> // Display message when no reviews match the dormName
        )
    }
}

export default DormReviews
