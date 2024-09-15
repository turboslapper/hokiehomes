import React from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Dorm } from '../../../../../Models/Dorm'
import { ReviewCreate } from '../../../../../Models/Review'

type Props = {
    dorm: Dorm
    submitForm: (e: ReviewCreate) => void
    closeForm: () => void
    userName: string
}

const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required."),
    name: Yup.string().required("Dorm name is required."),
    room_number: Yup.number().required("Room number is required"),
    price: Yup.number().required("Price is required"),
    bathroom_cleanliness: Yup.number().required("Bathroom cleanliness rating is required."),
    wifi_strength: Yup.number().required("WiFi speed rating is required."),
    room_size: Yup.number().required("Room size is required"),
    safety: Yup.number().required("Safety rating is required."),
    air_conditioning: Yup.boolean(),
    roommate: Yup.boolean(),
    comment: Yup.string().required("Comment is required."),
  })

const CreateReviewForm = ({dorm, submitForm, closeForm, userName}: Props) => {  

    const { 
        register, 
        handleSubmit, 
        setValue,
        formState: { errors }
      } = useForm<ReviewCreate>({ resolver: yupResolver(validation)})
    
    return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Write a Review</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {dorm.LongName}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4 mt-6">
            <div>
                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                    User Name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm text-gray-400">
                    <input
                    id="userName"
                    type="string"
                    value={userName}
                    readOnly={true}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    {...register("userName")}
                    />
                </div>
            </div>
        </div>
        <div className="sm:col-span-4 mt-6">
            <div>
                <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                    Selected Dorm
                </label>
                <div className="relative mt-2 rounded-md shadow-sm text-gray-400">
                    <input
                    id="name"
                    type="string"
                    value={dorm.ShortName}
                    readOnly={true}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    {...register("name")}
                    />
                </div>
            </div>
        </div>
          <div className="sm:col-span-4 mt-6">
            <div>
                <label htmlFor="roomnum" className="block text-sm font-medium leading-6 text-gray-900">
                    Room Number
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                    id="roomnum"
                    type="number"
                    placeholder="100"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    {...register("room_number")}
                    />
                </div>
            </div>
    
        <div className="sm:col-span-4 mt-6">
            <div>
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                Price / Month ($)
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
            <input
            id="price"
            type="number"
            placeholder="0.00"
            aria-describedby="price-currency"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            {...register("price")}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span id="price-currency" className="text-gray-500 sm:text-sm">
                    USD
                </span>
            </div>
            </div>
        </div>
    
        </div>
        <div className="sm:col-span-4 mt-6">
            <div>
      <label htmlFor="clean" className="block text-sm font-medium leading-6 text-gray-900">
        Bathroom Cleanliness (Rate 1 to 5)
      </label>
      <select
        id="clean"
        defaultValue="3"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
        {...register("bathroom_cleanliness")}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    </div>
    <div className="sm:col-span-4">
            <div>
      <label htmlFor="wiif" className="block text-sm font-medium leading-6 text-gray-900">
        WiFi Speed (Rate 1 to 5)
      </label>
      <select
        id="wifi"
        defaultValue="3"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
        {...register("wifi_strength")}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    </div>
    <div className="sm:col-span-4 mt-6">
            <div>
                <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">
                    Room Size (sq. ft)
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                    id="size"
                    type="number"
                    placeholder="100"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    {...register("room_size")}
                    />
                </div>
            </div>
            </div>
            <div className="sm:col-span-4 mt-6">
            <div>
      <label htmlFor="safe" className="block text-sm font-medium leading-6 text-gray-900">
        Safety (Rate 1 to 5)
      </label>
      <select
        id="safe"
        defaultValue="3"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-600 sm:text-sm sm:leading-6"
        {...register("safety")}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    </div>
    <fieldset>
      <div className="space-y-5 mt-6">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="ac"
              type="checkbox"
              aria-describedby="ac-description"
              className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
              {...register("air_conditioning")}
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="ac" className="font-medium text-gray-900">
              Air Conditioning
            </label>
            <p id="ac-description" className="text-gray-500">
              Was your dorm air conditioned?
            </p>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="roommates"
              type="checkbox"
              aria-describedby="roomates-description"
              className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
              {...register("roommate")}
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="roommates" className="font-medium text-gray-900">
              Roomates
            </label>
            <p id="roommates-description" className="text-gray-500">
              Did you have roommates?
            </p>
          </div>
        </div>
      </div>
    </fieldset>
    <div className="col-span-full mt-6">
              <label htmlFor="comments" className="block text-sm font-medium leading-6 text-gray-900">
                Comments
              </label>
              <div className="mt-2">
                <textarea
                  id="comments"
                  placeholder="Please keep your response within 500 characters."
                  maxLength={500}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  {...register("comment")}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your experience.</p>
            </div>
            
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={closeForm}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default CreateReviewForm