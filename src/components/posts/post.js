import React,{useState,createContext} from 'react';
import "./post.css";
import Giphy from "../common/Giphy";

export const  GlobalInfo = createContext();

function Post({username}) {


  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState('0');
  const [count, setCount] = useState(0);
  const [giffy, setGiffy] = useState([]);
  const [giffies, setGiffies] = useState([]);
  const [ all , setAll] = useState([]);


//   const likeHandle =(e) =>{
//     setShow('like2');
//   }

  const getGif = (item) =>{
    setGiffy(item);
    setGiffies(giffy, ...giffies);
    console.log(giffies);
    setAll([...giffies, ...item, ...giffy]);
    console.log("all", all);
    
  }


//   fruits.forEach(myFunction);
   
  const handleComment = (e)=>{
    e.preventDefault();
       const allInputData = {
         id: new Date().getTime().toString(),
         name: comment,
       };
       setComments([...comments, allInputData]);
       setComment("");
    
     console.log(comments);
  }
  return (
<GlobalInfo.Provider value={{getGif:getGif}}>
       <div className="post">
               
             <div className="post__header">
                 <img
                     className="post__avatar"
                     alt=""
                     src="https://image.flaticon.com/icons/svg/860/860760.svg"
                 />
                 <h3>Nirvan</h3>
                 <i class="post__verified" />
             </div>
 
             <h4 className="post__text">{username}</h4>
 
             <img src="" className="post__image" />
 
             <div className="post__likeandlove">
                 <i className="post__like" />
                 <i className="post__heart" />
                 <p> Likes</p>
             </div>
 
             <hr />
 
             <div className="post__likeoptions">
                 <div className="like" onClick={() => setCount(count + 1)}>
                     <i className={show} />
                     <h3 className={show}>{count}Like</h3>
                 </div>
                 <div className="comment">
                     <i className="comment2" />
                     <h3 class="dope">Comment</h3>
                     {/* <button style={{display:'none'}}onClick={handleComment}><h3 class="dope">Comment</h3></button> */}
                 </div>
                 <div className="share">
                     <i className="share2" />
                     <h3>Share</h3>
                 </div>
                 <div className="share">
                     <i className="share2" />
                     <h3>Gif</h3>
                 </div>
             </div>
             <div style={{display:"flex", flexDirection:"row"}}>
             <form onSubmit={handleComment}>
                 <div className="commentBox">
                     <img
                         className="post__avatar2"
                         alt=""
                         src="https://image.flaticon.com/icons/svg/860/860760.svg"
                     />
                    <input className="commentInputBox" type="text" placeholder="Write a comment ... " onChange={(e) => setComment(e.target.value)} />
                     {/* <input type="submit" disabled={!comment} className="transparent__submit" /> */}
                 </div>
                 <p className="pressEnterToPost">Press Enter to post</p>
             </form>
             <form>
                 <div className="commentBox">
                     <img
                         className="post__avatar2"
                         alt=""
                         src="https://image.flaticon.com/icons/svg/860/860760.svg"
                     />
                    <Giphy/>
                 </div>
                 <p className="pressEnterToPost">Press Enter to post</p>
             </form>
             </div>
        {all.map(el =>
       (
          <div className='gif' key={el.id}>
              <img src={el.images.fixed_height.url} />
          </div>
      )
  )}
             {
                 comments.map((e) => (
                     <div className={`comments__show myself`}>
                         <img
                             className="post__avatar2"
                             alt=""
                             src="https://image.flaticon.com/icons/svg/860/860760.svg"
                         />
                         <div class="container__comments">
                             <p><span>{e.name}</span><i class="post__verified"></i>&nbsp; {e.name}</p>
                         </div>
                     </div>
                 ))
             }
         </div>
         </GlobalInfo.Provider>
  )
}

export default Post