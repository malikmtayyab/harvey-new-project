import React from 'react'
import { Helmet } from 'react-helmet-async'
import ViewFarm from 'src/sections/view-farm/view'



export default function ViewFarms() {
  return (
    <>
          <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ViewFarm/>
    </>
  )
}
