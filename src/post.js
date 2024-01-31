import { Link } from "react-router-dom/cjs/react-router-dom.min";



const Post = ({blogs, title }) => {

    return (  

        <div className="blog-list">
        <h3>{title} </h3>
         {/*    <h2 >Home Page</h2> */}
         
            {blogs.map((item)=>(
                <div className="body-preview" key={item.id}>
                    <Link to={`/post/${item.id}`}> 
                    <h2>{item.title}</h2>
                    <p> Written by {item.author}</p>
                    </Link>
         {/*        <button onClick={(id)=>handelDelete( item.id)}> Delete</button> */}
                </div>     
        ))}
      
        </div>
    );
}
 
export default Post;