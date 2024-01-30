import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const PostDetails = () => {
    const {id} =useParams()
    const {data: singlePost, isPending, error} = useFetch(`http://localhost:8080/blogs/`+id)
console.log(singlePost)
    return ( 

        
        <div className="post-details">
                        <h1>Post Details - {id} </h1>
            <br></br><br></br><br></br>
            {isPending &&  <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {singlePost && <div>
                <article>
                    <h2>{singlePost.title}</h2>
                    <p>Written by : {singlePost.author}</p>
                    <div>{singlePost.body}</div>


                </article>
                </div>}

        </div>
     );
}
 
export default PostDetails;