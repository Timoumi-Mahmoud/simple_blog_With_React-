import { useState } from "react"


const Post = ({blogs, title , handelDelete}) => {



/*     const blogs=props.blogs;
    const title=props.title; */
   /*  const [blog, setBlog]= useState([
        {title:'My new page', body:'lorem ipsum .....', author:'bara' , id:'1' },
        {title:'Welcom to the party', body:'lorem ipsum .....', author:'Salim', id:'2'  },
        {title:'Web dev top Tips ', body:'lorem ipsum .....', author:'mahmoud', id:'3'  }
    ]) */
    return (  

        <>
        <h3>{title} </h3>
         {/*    <h2 >Home Page</h2> */}
         
            {blogs.map((item)=>(
                <div className="body-preview" key={item.id}>
                <h2>{item.title}</h2>
                <p> Written by {item.author}</p>
                <button onClick={(id)=>handelDelete( item.id)}> Delete</button>
                </div>     
        ))}
      
        </>
    );
}
 
export default Post;