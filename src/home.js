
import { useState , useEffect} from "react";
import Post from "./post";
const Home = () => {

    const [blogs, setBlog]= useState([null]);
    const handelDelete= (id)=>{
        const newBlogs = blogs.filter((item)=>(
            item.id !==id 
               ))
               setBlog(newBlogs)
    };





    useEffect(()=>{
        fetch('http://localhost:8080/blogs').then(
            res=> {
                res.json()
            }
        ).then(data=>{
            console.log(data)
        })
    }, [])

    
    return (  
        <>
        <div className="home">
        </div>
        <br/>
        <Post blogs={blogs} title="All Blogs !" handelDelete={handelDelete} />
    {/*     <button onClick={()=>(setName('lugi'))}>Change Name</button>
        <p>{name}</p> */}
    {/*     <Post blogs={blogs.filter((item)=>(
            item.author ==='bara'
          ))} title="Bara Blogs !" /> */}
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

/*

/* 
    const [name, setName]= useState('bara')

   useEffect(()=>{
     console.log(name)
     console.log("use Effect in action !!!")
     /* localStorage.setItem('fuck', 'ffff')
     const localStorageVariables= localStorage.getItem('fuck');
     console.log(localStorageVariables) 
     console.log(name)
    }, [name]); */
