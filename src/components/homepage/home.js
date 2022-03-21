import React,{useState} from 'react';
import Modal from "../common/modal"
import "./homepage.css";
import Post from '../posts/post';

function Home() {
    const [post, setPost] = useState([]);
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [noLikes, setNoLikes] = useState(0);
    const [image, setImage] = useState('');
    const [caption, setCaption] = useState('');
    const [ideas, setIdeas] = useState('');
    const [progress, setProgress] = useState(0);
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState('like2');
    const [show2, setShow2] = useState('textforlike');

    const handleOpen = (e) => {
      setOpen(true);
      console.log(e);
  }

  const handleClose = () => {
      setOpen(false)
  }
  const likeHandle =() =>{

  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0])
    }
}
 const handleUpload = (e)=>{
   e.preventDefault();
    if (!ideas) {
      alert("please Fill Data");
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: ideas,
      };
      setPost([...post, allInputData]);
      setIdeas("");
      setOpen(false)
    }
    console.log(post);
 }

 const uploadFileWithClick = ()=>{
  document.getElementsByClassName('imageFile')[0].click()
}
  return (
    <div className="posts">
       <Modal open={open} onClose={handleClose}>
       <div>
                    <form className="imageupload__commentAssign">
                        <div className="imageupload__firstSectionModal">
                            <h3>Create Post</h3>
                        </div>
                        <div className="imageupload__secondSectionModal">
                            <img
                                className="imageupload__avatar"
                                alt=""
                                src="https://image.flaticon.com/icons/svg/3233/3233027.svg"
                            />
                            <input type="text" value={ideas} onChange={(e) => setIdeas(e.target.value)} placeholder={`What's on your mind ?`} />
                        </div>
                        <hr />
                        <div className="imageupload__imageuploadModal" onClick={uploadFileWithClick}>
                        <img src="https://image.flaticon.com/icons/svg/3233/3233027.svg" className="imageupload__gallery" alt=""></img>
                            <input type="file" className="imageFile" onChange={handleChange} />
                            <h3>Photo</h3>
                        </div>
                        <br/>
                        <div className="imageupload__feedModal">
                            <label class="containerr">
                                <input type="checkbox" checked />
                                <span class="checkmark"></span>
                            </label>
                            <div class="imageupload__colorwrap1">
                                <img src="https://www.flaticon.com/premium-icon/icons/svg/1674/1674711.svg" className="imageupload__newsFeed" />
                            </div>
                            <h3>News Feed</h3>
                            <br />
                            <h2 className={`imageText ${image && 'show'}`}>Image is added and will be displayed after clicking the Post button</h2>
                            <button type="submit" onClick={handleUpload} className="imageupload__submitButton">Post</button>
                        </div>
                        </form>
    </div>
       </Modal>
       <div className="imageupload__container">
                <div className="imageupload__firstSection">
                    <h3>Create Post</h3>
                </div>

                <div className="imageupload__secondSection">
                    <img
                        className="imageupload__avatar"
                        src="https://image.flaticon.com/icons/svg/3233/3233027.svg"
                        alt=""
                    />
                    <input type="text" onClick={handleOpen} placeholder={`What's on your mind  ?`} />
                </div>
                <hr />
                <div className="uploadimage__options" onClick={setOpen}>
                    <div className="imageupload__imageupload">
                        <img src="https://image.flaticon.com/icons/svg/3233/3233027.svg" className="imageupload__gallery" alt=""></img>
                        <h3>Photo</h3>
                    </div>
                    <div className="imageupload__more">

                        <img src="https://image.flaticon.com/icons/svg/860/860760.svg" className="imageupload__dots" alt="" />
                    </div>
                </div>
                <progress value={progress} max="100" className={`progress ${progress && 'show'}`} />
            </div>
            <br/>

            {post.map((e) => (
               <Post username={e.name} />
            ))}
            
            {/* {post.map((e) =>( <div className="post">
            
            <div className="post__header">
                 <img
                     className="post__avatar"
                     alt=""
                     src="https://image.flaticon.com/icons/svg/860/860760.svg"
                 />
                 <h3>Nirvan</h3>
                 <i class="post__verified" />
             </div>
 
             <h4 className="post__text">{e.name}</h4>
 
             <img src="" className="post__image" />
 
             <div className="post__likeandlove">
                 <i className="post__like" />
                 <i className="post__heart" />
                 <p>{noLikes} Likes</p>
             </div>
 
             <hr />
 
             <div className="post__likeoptions">
                 <div className="like" onClick={likeHandle}>
                     <i className={show} />
                     <h3 className={show2}>Like</h3>
                 </div>
                 <div className="comment">
                     <i className="comment2" />
                     <h3 class="dope">Comment</h3>
                 </div>
                 <div className="share">
                     <i className="share2" />
                     <h3>Share</h3>
                 </div>
             </div>
             <form onSubmit={handleComment}>
                 <div className="commentBox">
                     <img
                         className="post__avatar2"
                         alt=""
                         src="https://image.flaticon.com/icons/svg/860/860760.svg"
                     />
                     <input className="commentInputBox" type="text" placeholder="Write a comment ... " onChange={(e) => setComment(e.target.value)} />
                     <input type="submit" disabled={!comment} className="transparent__submit" />
                 </div>
                 <p className="pressEnterToPost">Press Enter to post</p>
             </form>
 
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
           ))}  */}
    </div>
  )
}

export default Home