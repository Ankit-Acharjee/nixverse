/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

import "./style.scss"

import { fetchDataFromApi } from '../../utils/api'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import MovieCard from '../../components/movieCard/MovieCard'
import Spinner from '../../components/spinner/Spinner'
import noResults from "../../assets/no-results.png"



const SearchResult = () => {
  const [data, setData]=useState(null)
  const [pageNo, setPageNo]=useState(1)
  const [loading, setLoading]=useState(false)
  const {query}=useParams()

  const fetchInitialData=()=>{
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNo}`).then((res)=>{
      setData(res)
      setPageNo((prev)=>prev + 1)
      setLoading(false)
    })
  }
  const fetchNextPageData=()=>{
    // setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNo}`).then((res)=>{
      console.log("Next page data fetched",res)
      if(data?.results){
        setData({// ...data is used for creating a shallow copy of the original data so that it can be used to modify and merge the results.
          ...data, results: [...data?.results, ...res.results] //the spread operator is used to add element to existing array into another array
          
        })
        
      }
      else{
        setData(res)
      }
      // setLoading(false)
      setPageNo((prev)=>prev+1)
    })
  }

  useEffect(()=>{
    setPageNo(1)
    fetchInitialData();
    
  }, [query])
  return (
    <div className='searchResultsPage'>
        {loading && <Spinner initial={true}/>}
        {!loading &&(
          <ContentWrapper>
            {data?.results?.length>0 ? (
                <>
                <div className="pageTitle">
                  {`Search ${data?.total_results>1 ? "results" : "result"} of '${query}'`}
                </div>
                <InfiniteScroll
                  className='content'
                  dataLength={data?.results?.length || 0}
                  next={fetchNextPageData}
                  hasMore={pageNo<=data?.total_pages}
                  loader={<Spinner/>}
                >
                  {data?.results?.map((item,index)=>{
                    if(item.media_type==="person") return;
                    return(
                      <MovieCard
                      key={index}
                      data={item}
                      fromSearch={true}/>

                    )
                  })}
                </InfiniteScroll>
                </>
            ): (
              <span className="resultNotFound">
                OOPS, No result found!
              </span>
            )}
            
          </ContentWrapper>
        )}
    </div>
  )
}

export default SearchResult