
import { useState , useEffect} from "react";
import Post from "./post";
const Home = () => {

    const [blogs, setBlog]= useState(null);
    const [error, setError] = useState(null);
  /*   const handelDelete= (id)=>{
        const newBlogs = blogs.filter((item)=>(
            item.id !==id 
               ))
               setBlog(newBlogs)
    }; */

    const [isPending, setIsPending]=useState(true);
    useEffect(()=>{

        setTimeout(() => {
            fetch('http://localhost:8080/blogs').
            then(res=> {
                if(!res.ok){
                    throw Error ('Could not fetch the data for that ressources ..');
                }
                console.log(res)
                 return   res.json();
                }
            ).then(data=>{
                setBlog(data)
                setIsPending(false)
                setError(null)
            }).catch((err)=>{
                console.log(err.message)
                setIsPending(false)
                setError(err.message)
   
            });
        }, 2000);
    
    }, [])

    
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

