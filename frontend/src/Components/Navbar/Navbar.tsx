import React from 'react'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { RedirectToLoginOptions, RedirectToSignupOptions, RedirectToAccountOptions } from '@propelauth/react'
import props from 'imagekitio-react/dist/types/components/IKContext/props'


type Props = {
  redirectToLoginPage: (options?: RedirectToLoginOptions | undefined) => void,
  redirectToSignupPage: (options?: RedirectToSignupOptions | undefined) => void,
  redirectToAccountPage: (options?: RedirectToAccountOptions | undefined) => void,
  useLogoutFunction: (redirectOnLogout: boolean) => Promise<void>,
  isLoggedIn: boolean,
  navigation: {
    name: string;
    href: string;
  }[]
}

const Navbar = ({navigation, redirectToAccountPage, redirectToLoginPage, redirectToSignupPage, isLoggedIn, useLogoutFunction}: Props) => {
    const logoutFunction = useLogoutFunction

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white z-50">
          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">HokieHomes.co</span>
                <img alt="" src="../../../vectorlogo.svg" className="h-8 w-auto" />
              </a>
              <p className="mt-1 ml-2">HokieHomes</p>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            {isLoggedIn ? (
                <div className="flex flex-1 items-center justify-end gap-x-6">
                <button onClick={() => redirectToAccountPage()} className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
                  Account
                </button>
                <button
                  onClick={() => logoutFunction(true)}
                  className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Logout
                </button>
                </div>
                
            ) : (
                <div className="flex flex-1 items-center justify-end gap-x-6">
                <button onClick={() => redirectToLoginPage()} className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
                  Login
                </button>
                <button
                  onClick={() => redirectToSignupPage()}
                  className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Sign up
                </button>
              </div>
            )}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center gap-x-6">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">HokieHomes.co</span>
                  <img
                    alt=""
                    src="../../../vectorlogo.svg"
                    className="h-8 w-auto"
                  />
                </a>
                {isLoggedIn ? (<></>) : (
                    <button
                    onClick={() => redirectToSignupPage()}
                    className="ml-auto rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Sign up
                  </button>
                )}
                
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                  {isLoggedIn ? (<></>) : (
                    <button
                      onClick={() => redirectToLoginPage()}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </button>
                  )}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
    )
}

export default Navbar