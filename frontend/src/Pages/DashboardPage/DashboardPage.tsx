'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Outlet } from 'react-router-dom'
import { withAuthInfo, useRedirectFunctions, useLogoutFunction, WithAuthInfoProps } from '@propelauth/react'
import { FaBuilding, FaStar } from "react-icons/fa6";

const navigation = [
  { name: 'Dorms', href: '/dashboard/dorms', icon: FaBuilding, current: false },
  { name: 'My Reviews', href: '/dashboard/my-reviews', icon: FaStar, current: false },
]

const blankUser = "https://ik.imagekit.io/abm/blank-profile-picture-973460_1280_6hjf3RsyA.png"
const logoPath = "https://ik.imagekit.io/abm/hokie-in-the-trap_cALIOY6zG.svg"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const DashboardPage = withAuthInfo((props: WithAuthInfoProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

  if (props.isLoggedIn) {
    return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <a href="/" className="flex h-16 shrink-0 items-center">
                  <img
                    alt="HokieHomes"
                    src={logoPath}
                    className="h-8 w-auto"
                  />
                </a>
                <nav className="flex flex-1 flex-col">
                  <ul  className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul  className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-50 text-orange-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-orange-600' : 'text-gray-400 group-hover:text-orange-600',
                                  'h-6 w-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <a href="/" className="flex h-16 shrink-0 items-center">
              <img
                alt="HokieHomes"
                src={logoPath}
                className="h-8 w-auto"
              />
              <p className="mt-1 ml-2">HokieHomes</p>
            </a>
            <nav className="flex flex-1 flex-col">
              <ul  className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul  className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-orange-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-orange-600' : 'text-gray-400 group-hover:text-orange-600',
                              'h-6 w-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                
                <li className="-mx-6 mt-auto">
                  <button
                    onClick={() => redirectToAccountPage()}
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      alt=""
                      src={blankUser}
                      className="h-8 w-8 rounded-full bg-gray-50"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">{props.user?.firstName + " " + props.user?.lastName}</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">Dashboard</div>
          <button onClick={() => redirectToAccountPage()}>
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src={blankUser}
              className="h-8 w-8 rounded-full bg-gray-50"
            />
          </button>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{<Outlet/>}</div>
        </main>
      </div>
    </>
  )
} else {
  return (
    <a href="https://auth.hokiehomes.co/login">
      Click here to login.
    </a>
  )
}
})
export default DashboardPage
