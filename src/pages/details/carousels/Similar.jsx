/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

import Carousel from '../../../components/Carousel/Carousel'
import useFetch from '../../../hooks/useFetch'



const Similar = ({mediaType,id}) => {
    const{data,loading,error}=useFetch(`/${mediaType}/${id}/similar`);

    const title= mediaType==='tv'? "Similar TV shows" : "Similar Movies"
  return data?.results?.length>0 && (
    <Carousel
    title={title}
    data={data?.results}
    loading={loading}
    error={error}
    endpoint={mediaType}
    />
  )
}

export default Similar