
import { useState } from "react";
import Post from "./post";
const Home = () => {

     const [blogs, setBlog]= useState([
        {title:'My new page', body:'lorem ipsum .....', author:'bara' , id:'1' },
        {title:'Welcom to the party', body:'lorem ipsum .....', author:'Salim', id:'2'  },
        {title:'Web dev top Tips ', body:'lorem ipsum .....', author:'mahmoud', id:'3'  }

    ]) 
  
    return (  
        <>
        <div className="home">
        
        </div>
        <br/>
        <Post blogs={blogs} title="All Blogs !" />
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