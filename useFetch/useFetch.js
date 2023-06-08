
import React, { useEffect, useState } from 'react'

const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    try{
      setState({
        ...state,
        isLoading: true
      });
  
      const resp = await fetch( url );
      const data = await resp.json();
  
      setState({
        data,
        isLoading: false,
        hasError: null
      });

    } catch (err){
      console.log(err)
      setState({
        data: null,
        isLoading: true,
        hasError: err
      });
    }
  }

  useEffect(() => {
    getFetch();
  }, [url])
  
  return { 
    data:      state.data,
    isLoading: state.isLoading,
    hasError:  state.hasError 
  };

}

export default useFetch