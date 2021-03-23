// import { useEffect, useState } from 'react';
import BLogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw Error('Could not fetch this resource')
    //             }
    //             return res.json()
    //         })
    //         .then( data => {
    //             // console.log(data);
    //             setBlogs(data);
    //             setIsPending(false);
    //             setError(null);
    //         })
    //         .catch(err => {
    //             // console.log(err.message);
    //             setIsPending(false)
    //             setError(err.message)
    //         })
    // }, [])
    // const [name, setName] = useState('mario'); 
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(30);
    // }
    // const handleClick = (e) => {
    //     console.log('hello ninjas', e);
    // }
     
    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }
    return (  
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading... </div>}
            {blogs && <BLogList blogs={blogs} title="All Blogs!" />}
            {/* <BLogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!" handleDelete={handleDelete}/> */}
            {/* <h2>Homepage</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
    );
}
 
export default Home;