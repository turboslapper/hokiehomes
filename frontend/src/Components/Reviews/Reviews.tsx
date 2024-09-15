import React, { useEffect, useState } from 'react'
import { ReviewGet } from '../../Models/Review'
import Spinner from '../Spinner/Spinner'
import { reviewGetApi, reviewGetByUserApi } from '../../Services/ReviewService'
import ReviewList from './ReviewList/ReviewList'
import { useAuthInfo } from "@propelauth/react" // Import useAuthInfo to get the access token

type Props = {}

const ReviewView = (props: Props) => {
    console.log("ReviewView component is rendering") // Check if component renders

    const [Reviews, setReviews] = useState<ReviewGet[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    // Get the user's auth info, including the access token
    const { accessToken } = useAuthInfo()
    // console.log("useAuthInfo Hook Called. Access Token:", accessToken) // Check if hook is called

    useEffect(() => {
        // console.log("useEffect triggered. Access Token:", accessToken)
        if (accessToken) {
            getReviews(accessToken)
        } else {
            console.error("Access Token not available") // Log if token is missing
        }
    }, [accessToken])

    const getReviews = async (token: string) => {
        // console.log("getReviews function called with token:", token)
        setLoading(true)
        try {
            const res = await reviewGetByUserApi(token)
            console.log("API Response:", res)
            if (res) {
                setReviews(res)
            }
        } catch (error) {
            console.error("Error in getReviews:", error)
        }
        setLoading(false)
    }

    if (loading) {
        console.log("Loading...") // Log loading state
        return <Spinner/> 
    } else if (Reviews?.length != null && Reviews?.length != undefined && Reviews?.length >= 1) {
        console.log("Reviews:", Reviews) // Log the reviews data
        return (
            <div className="flex flex-col gap-16">
            <ReviewList Reviews={Reviews!} userNameFirst={true}/>
        </div>
        )
    }

    else {
        return (
            <div> 
                <i>No reviews found.</i>
            </div>
        )
    }
    
}

export default ReviewView
