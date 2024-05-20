import {React,useState} from "react";
import {Link } from "react-router-dom"; 

import userImg from "../../img/user.svg";

import "./style.css";

function QuestionCard({isLoggedin,_id,topics,desc,likes=[],likeMyQuestion,user,createdAt,updatedAt,isEditing,deleteQuestion}){
  
  const [isLiked,setIsLiked]=useState(user.isLiked)
  const[likes_count,setLikesCount]=useState(likes.length)

  const likeQuestion=()=>{
    if(isLoggedin){
      likeMyQuestion(_id)
      if(isLiked){
        setLikesCount((likes_count)=>likes_count-1);
      }else{
        setLikesCount((likes_count)=>likes_count+1);
      }
      setIsLiked((isLiked)=>!isLiked);
    }

  }

  return ( 
    <>
        <div className="questioncard_container" >
            {isEditing &&
              <div className="questioncard_edit-icon">
                <Link to={`/user/edit/question/${_id}`}>
                 <i className="fas fa-edit"></i>
                </Link>
              </div>
            }
            
            <div className="questioncard_user-data">
                <img src={userImg} alt="user" className="questioncard_img"/>
                <p className="questioncard_text">{user.name}</p>
            </div>
            
            <div className="questioncard_date">
               {createdAt &&
                  <p className="questioncard_text-small">
                    {new Date(createdAt).toDateString()}
                  </p>
               }
               {(updatedAt && createdAt && new Date(updatedAt).getTime()!==new Date(createdAt).getTime())?
                    <p className="questioncard_text-small">
                      (Edited)
                    </p>:null
               }
            </div>
      
            <div className="questioncard_text-wrapper">
                 {
                  desc.split("\n")
                      .map((text,index)=>{
                                return(<p key={index} className="questioncard_text">{text}</p>)
                      })
                  }
            </div>

            <div className="questioncard_topic">
               {topics && topics.length>0 && topics.map((topic,index)=>{
                  return(
                      <p key={index} className="questioncard_topic-text">
                        {topic}
                      </p>)
                  })
               }
            </div>
            {likeMyQuestion &&  <div>
               <button onClick={likeQuestion} className={isLiked?"questioncard_like-icon liked":"questioncard_like-icon"}>
                  <i className="fas fa-thumbs-up"></i>
                </button>
                 {" "}{likes_count}
              </div>
            }
            {isEditing &&
              <>
                <div className="questioncard_edit-icon ">
                  <i className="fas fa-trash-alt" onClick={()=>{deleteQuestion(_id)}}></i>
                </div>
                
              </>
            }
            {isEditing===1?
              <Link to={`/question/${_id}`} className="questioncard_link"> 
                      View Answer
              </Link>:null
            }
        </div>
    </>);

    }

export default QuestionCard;
