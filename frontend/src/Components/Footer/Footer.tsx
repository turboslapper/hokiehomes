import React from "react"


   
type Props = {
    navigation: {
        name: string;
        href: string;
    }[]
}
  
const Footer = ({navigation}: Props) => {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav aria-label="Footer" className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="pb-6">
                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </footer>
    )
  }

  export default Footer
 