import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useLogoutFunction, useRedirectFunctions, withAuthInfo } from '@propelauth/react'

type Props = {}

const AboutPage = withAuthInfo((props) => {
  const logoutFunction = useLogoutFunction()
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

  const navigation = [
    { name: 'Dashboard', href: 'dashboard/dorms'},
    { name: 'About', href: 'about' },
    { name: 'GitHub', href: 'https://github.com/turboslapper/hokiehomes' }
  ]
    return (
      <>
        <Navbar
          navigation={navigation}
          redirectToLoginPage={() => redirectToLoginPage()}
          redirectToSignupPage={() => redirectToSignupPage()}
          redirectToAccountPage={() => redirectToAccountPage()}
          useLogoutFunction={() => logoutFunction(true)}
          isLoggedIn={props.isLoggedIn}
        />
        
        {/* Put content here */}
        <div className="w-full">
          <div className="max-w-lg space-y-4 mx-auto py-24 text-xl">
            <h1 className="text-center text-4xl font-bold">About</h1>
            
            <p>
              Welcome to HokieHomes, an app designed by passionate students for Virginia Tech's community! HokieHomes was created during VTHacks 12—Virginia Tech's annual hackathon—to provide a platform where students can share honest reviews and experiences of dorm life on campus. Whether you're a new Hokie looking for your first dorm or a current student seeking a change, HokieHomes offers you the insights you need to make informed housing decisions.
            </p>
            
            <p>
              We believe that where you live has a major impact on your college experience, and finding the right dorm is key to a successful and enjoyable time at Virginia Tech. HokieHomes allows you to:
            </p>
            
            <ul>
              <li>Browse reviews from fellow students</li>
              <li>View ratings on aspects like cleanliness, community, and proximity to key campus locations</li>
              <li>Share your own experiences and feedback to help future residents</li>
            </ul>
            
            <p>
              Our goal is to foster a more transparent and connected housing experience for all Hokies. We’re committed to promoting diversity, equity, and inclusion, ensuring every student feels welcome and supported in their on-campus home.
            </p>
            
            <p>
              Thanks for visiting HokieHomes—your dorm, your story! 🧡🦃
            </p>
    
            {/* Giphy embed code */}
            <div style={{ width: "100%", height: "0", paddingBottom: "100%", position: "relative" }}>
              <iframe
                src="https://giphy.com/embed/8JZbyfg84WL44uurWe"
                width="100%"
                height="100%"
                style={{ position: "absolute" }}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>

            <p>
              Contact us at aidanmartin@vt.edu, jairen@vt.edu, azrafn@vt.edu, and troyfitz@vt.edu.
            </p>
          </div>
        </div>
    
        <Footer navigation={navigation} />
      </>
)})
  
export default AboutPage