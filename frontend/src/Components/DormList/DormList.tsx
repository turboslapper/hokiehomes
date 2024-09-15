import React from 'react'
import { Dorm } from '../../Models/Dorm'
import CardGrid from '../CardGrid/CardGrid'
import DormItem from './DormItem/DormItem'
import { Link } from 'react-router-dom'
import { DormData } from '../../Constants/DormData'

type Props = {}

const DormList = (props: Props) => {
    

    const DormItems = DormData.map((Dorm) => (
        <Link to={Dorm.ShortName} key={Dorm.ShortName}><DormItem Dorm={Dorm}/></Link>
      ))
    
  return (
    <CardGrid>
        {DormItems}
    </CardGrid>
  )
}

export default DormList