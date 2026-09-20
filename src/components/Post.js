import "./Post.css";
import React from "react";
import { Image } from 'antd';
function Post(props) {
  return (
    
    <div className="post">
      <Image width={232} src={props.image} alt="post" className="photo" />
      <p>❤️: {props.likes} </p>
      <p> <h3>{props.username}</h3> {props.caption} </p>
      
    </div>
    
  );
}

export default Post;

