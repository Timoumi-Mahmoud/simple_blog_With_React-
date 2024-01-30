import { useState } from "react"


const Post = ({blogs, title }) => {

    return (  

        <>
        <h3>{title} </h3>
         {/*    <h2 >Home Page</h2> */}
         
            {blogs.map((item)=>(
                <div className="body-preview" key={item.id}>
                <h2>{item.title}</h2>
                <p> Written by {item.author}</p>
         {/*        <button onClick={(id)=>handelDelete( item.id)}> Delete</button> */}
                </div>     
        ))}
      
        </>
    );
}
 
export default Post;