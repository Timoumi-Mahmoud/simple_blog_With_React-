
import { useState , useEffect} from "react";
import Post from "./post";
import useFetch from "./useFetch";

const Home = () => {
const {data: blogs, isPending, error} = useFetch('http://localhost:8080/blogs')
   
  /*   const handelDelete= (id)=>{
        const newBlogs = blogs.filter((item)=>(
            item.id !==id 
               ))
               setBlog(newBlogs)
    }; */

   
    
    return (  
        <>
        <div className="home">
        </div>
        <br/>
{/*         { blogs &&  <Post blogs={blogs} title="All Blogs !" handelDelete={handelDelete} />}
 */}        
 
 {isPending && <div>Loading ...</div>}
 { blogs &&  <Post blogs={blogs} title="All Blogs !"  />}
{error && <div>{error}</div>  }
        </>

        
    );
}
 
export default Home;

