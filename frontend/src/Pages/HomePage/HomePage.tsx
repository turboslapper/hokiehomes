import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { withAuthInfo, useRedirectFunctions, useLogoutFunction, RedirectToAccountOptions, RedirectToLoginOptions, RedirectToSignupOptions } from '@propelauth/react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Features from '../../Components/Features/Features'



type Props = {}


const HomePage = withAuthInfo((props) => {
    const logoutFunction = useLogoutFunction()
    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

    const navigation = [
        { name: 'Dashboard', href: 'dashboard/dorms'},
        { name: 'About', href: 'about' },
        { name: 'GitHub', href: 'https://github.com/turboslapper/hokiehomes' }
      ]
    return (
        <>
            <Navbar navigation={navigation} redirectToLoginPage={() => redirectToLoginPage()} redirectToSignupPage={() => redirectToSignupPage()} redirectToAccountPage={() => redirectToAccountPage()} useLogoutFunction={() => logoutFunction(true)} isLoggedIn={props.isLoggedIn}/>
            <HeroSection/>
            <Features/>
            <Footer navigation={navigation}/>
        </>
    )
})

export default HomePage