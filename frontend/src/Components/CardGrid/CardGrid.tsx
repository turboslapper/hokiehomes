import React from 'react'
import Card from '../Card/Card'

type Props = {
  children: React.ReactNode[]
}

const CardGrid = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {children.length > 0 ? (
        children.map((result, index) => {
          return <Card key={index} children={result}/>
        })
      ) : (
        <p>Error fetching data.</p>
      )}
      
    </div>
  )
}

export default CardGrid