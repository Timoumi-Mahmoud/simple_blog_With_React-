
import { useState } from "react";
import Post from "./post";
const Home = () => {

     const [blogs, setBlog]= useState([
        {title:'My new page', body:'lorem ipsum .....', author:'bara' , id:'1' },
        {title:'Welcom to the party', body:'lorem ipsum .....', author:'bara', id:'2'  },
        {title:'Web dev top Tips ', body:'lorem ipsum .....', author:'mahmoud', id:'3'  },
        {title:'Yaeh yeah Salim in the House !!', body:'lorem ipsum .....', author:'Salim', id:'4'  },
    ]) 
  
    const handelDelete= (id)=>{
        const newBlogs = blogs.filter((item)=>(
            item.id !==id 
               ))
               setBlog(newBlogs)
        
    }
    return (  
        <>
        <div className="home">
        
        </div>
        <br/>
        <Post blogs={blogs} title="All Blogs !" handelDelete={handelDelete} />
        <Post blogs={blogs.filter((item)=>(
            item.author ==='bara'
          ))} title="Bara Blogs !" />
        </>

        
    );
}
 
export default Home;


/*
  const handelClick= (e)=>{
        console.log("hello fucking word !!!",e)
    }
    const handelClickAgain= (name)=>{
        console.log("hello fucking word !!!"+ name)
    }
      <button type="submit" onClick={handelClick}> fire </button>
            <button type="submit" onClick={()=> handelClickAgain('mario') }> fire Me again </button>
*/