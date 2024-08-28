import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    const [posts, setPosts] = useState([]);

    const handleSubmit =() =>{
        addpost();
    }

//get the user data
    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((res) => setPosts(res.data))
            .catch((err) => console.log("something went wrong"));

    }, [])

    //post the user data
    const addpost=()=>{
        console.log("im a post");
        
    }

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-success px-5'>
                <a href="#" className='navbar-brand'>
                    <h2 className='text-white'>CRUD post manager</h2>

                </a>
            </nav>
            <div className='container my-4'>

                <div className="mb-4">
                    <input type="text" className='form-control mb-2' placeholder='Title' />


                    <input type="text" className='form-control mb-2' placeholder='Content' />

                    <button className='btn btn-success my-2' onClick={handleSubmit}>Add Post</button>
                </div>

                <ul className='list-group mb-5'>

                    {posts.map((post) => (

                        <li key={post.id} className='list group-item mb-5'>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>

                            <div className='d-flex gap-4'>
                                <button className='btn btn-warning'>
                                    Update
                                </button>

                                <button className='btn btn-danger'>
                                    Delete
                                </button>

                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}
export default App