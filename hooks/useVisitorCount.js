import { useEffect } from 'react'

export const useVisitorCount = (page, param) => {
  
  const trackVisitor = async () => {
    try {
      const res = await fetch(`/api/visitor-count?pageVisited=${page}`)
      const jsonData = await res.json()
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    if(!param || param !== "/?visitor=rabbi"){
      trackVisitor()
    }
  },[]);
}