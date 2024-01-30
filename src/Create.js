import { useState } from "react";

const Create = () => {

    const [title ,setTitle]= useState('');
    const [body ,setBody]= useState('');
    const [author ,setauthor]= useState('');
    const handelSubmit=(e)=>{
        e.preventDefault();
        const newPost ={title, body, author}
        console.log(newPost)
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
                <button>Add a post</button>
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>

        </div>
      );
}
 
export default Create;