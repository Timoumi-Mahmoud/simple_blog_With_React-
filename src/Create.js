import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title ,setTitle]= useState('');
    const [body ,setBody]= useState('');
    const [author ,setauthor]= useState('');
    const [isPending, setIsPending] = useState(false);

    const history= useHistory();

    const handelSubmit=(e)=>{
        e.preventDefault();
        const newPost ={title, body, author} 
   
setIsPending(true);

    fetch('http://localhost:8080/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        }).then(()=>{
            console.log("new Blog added")
            setIsPending(false);
           // history.go(-1);
           history.push('/')
        })
       
    }

    return (
        <div className="create">
            <h2>Hello there</h2>
            <form onSubmit={handelSubmit} >
                <label>Post Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                ></input>

                <label>Post Body:</label>
                <textarea
                value={body}
                onChange={(e)=>setBody(e.target.value)}

                required
                ></textarea>
                
                <label>Post Other:</label>
                <select
                 value={author}
                 onChange={(e)=>setauthor(e.target.value)}
                >
                <option value="mario">Mario </option>
                <option value="ali">Ali</option>
                <option value="bara">bara</option>
                <option value="salim">salim</option>

                
                </select>
                {!isPending && <button>Add a post</button>}
                {isPending && <button disabled>Adding a post...</button>}

            </form>
        

        </div>
      );
}
 
export default Create;