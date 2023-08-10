import React from 'react'
import Carousel from '../../../components/Carousel/Carousel'
import useFetch from '../../../hooks/useFetch'



const Recommendation = ({mediaType,id}) => {
    const {data,loading,error}=useFetch(`/${mediaType}/${id}/recommendations`)

    const title=mediaType==='tv'? 'Recommended TV shows':'Recommended Movies'
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

export default Recommendation