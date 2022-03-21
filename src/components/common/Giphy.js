import React ,{useState, useEffect,useContext}from 'react'
import axios from "axios";
import "./Giphy.css";
import {GlobalInfo} from '../posts/post';

const Giphy = () => {
    const [gif, setGif] = useState([]);
    const [isError , setIsError] = useState(false);
    const [search , setSearch] = useState("");
    const [want, setWant] = useState([]);

    const {getGif}= useContext(GlobalInfo);

    useEffect(() => {
     const fetchData = async() =>{
        setIsError(false);
        try {
            const result =  await axios("https://api.giphy.com/v1/gifs/trending",{
                 params: {
                     api_key: "rA1H4Mrai7Og9wASF7Z9XdVbJHOjhH3y",
                     limit: 0
                 }
             });
 
             setGif(result.data.data);
        
    } catch(err) {
        setIsError(true);
        console.log(err);
    } 
     };
     fetchData(); 
    }, [])


    const renderGifs = () => {
        return gif.map(el => {
            return (
                <div className='gif' key={el.id}>
                    <img src={el.images.fixed_height.url} />
                </div>
            )
        })

    }

    const renderError = () =>{
        if(isError){
            return(
                <div className="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
            );
    
        }
    }

    const handleSearchChange = (e) => {
           setSearch(e.target.value);
           console.log(search);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        setIsError(false);
        
            const result =  await axios("https://api.giphy.com/v1/gifs/search",{
                 params: {
                     api_key: "rA1H4Mrai7Og9wASF7Z9XdVbJHOjhH3y",
                     q: search,
                     limit: 1
                 }
             });
             setGif(result.data.data);
             getGif(result.data.data);
    }

  return (
      <div style={{}}>
          {renderError()}
          <form className='form-inline justify-content-center m-2'>
              <input 
              type="text" 
              value={search} 
              onChange={handleSearchChange} 
              placeholder='Search GIF' 
              className='commentboxNew' 
              />
              <button type="submit" onClick={handleSubmit} className='btn btn-primary mx-2'>Go</button>
          </form>
    <div className='container gifs'>
{renderGifs()}
 
    </div>
    </div>
  )
}

export default Giphy;