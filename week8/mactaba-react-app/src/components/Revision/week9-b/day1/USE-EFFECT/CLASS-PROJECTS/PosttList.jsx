import { useState,useEffect } from "react";

export default function PosttList(){
    const[data,setData]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const[error,setError]=useState(null)
    
       useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
        setData(data)
        setIsLoading(false)
        })
        .catch(err => {
        setError(err.message)
        setIsLoading(false)
        })
        }, []) // ← empty array — fetch once on mount
    
        if (isLoading) return <p>Loading posts...</p>
        if (error) return <p>Error: {error}</p>
        if (data.length === 0) return <p>No posts found.</p>;

return (
  <ul>
    {data.map((post) => (
      <li key={post.id}>{post.title}</li>
      
    ))}
  </ul>
)
        
    
}