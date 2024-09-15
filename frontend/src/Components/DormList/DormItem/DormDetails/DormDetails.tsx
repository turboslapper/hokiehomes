import React, { useState } from 'react'
import DormDetailCard from './DormDetailCard/DormDetailCard'
import DormReviews from '../../../Reviews/DormReviews/DormReviews'
import ReviewPlus from './ReviewPlus/ReviewPlus'
import { boolean } from 'yup'
import CreateReviewForm from './CreateReviewForm/CreateReviewForm'
import { Dorm } from '../../../../Models/Dorm'
import { DormData } from '../../../../Constants/DormData'
import { ReviewCreate } from '../../../../Models/Review'
import { reviewCreateApi } from '../../../../Services/ReviewService'
import { useAuthInfo } from '@propelauth/react'
import { toast } from 'react-toastify'

type Props = {
    dormName: string | undefined
}

const DormDetails = ({dormName}: Props) => {
    var dorm: Dorm | undefined = DormData.find((d) => {
        return d.ShortName === dormName
    })
    
    const [formOpen, setFormOpen] = useState<boolean>(false)
    
    const openForm = () => {
        setFormOpen(true)
    }

    const closeForm = () => {
        setFormOpen(false)
    }

    const { accessToken } = useAuthInfo()

    const { user } = useAuthInfo()

    const submitForm = (e: ReviewCreate) => {
        reviewCreateApi(e, accessToken!)
        .then((res) => {
            if (res) {
                setFormOpen(false)
            }
        }).catch((e) => {
            toast.warning(e)
        })
    }
    
  return (
    <div>
        {formOpen ? (<>
            <CreateReviewForm dorm={dorm!} submitForm={submitForm} closeForm={closeForm} userName={user?.username!}/>
        </>) : (<>
            <DormDetailCard dorm={dorm!}/>
                <ReviewPlus openForm={openForm}/>
            <DormReviews dorm={dorm!}/>
        </>)}
    </div>
    
  )
}

export default DormDetails