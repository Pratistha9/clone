import "./Post.css";
;
function Post(props) {
  return (
    <div className="post">
      <h3>{props.user}</h3>
       <img src={props.image} alt="post" className="photo" />
      <p>{props.caption}</p>
      <p>❤️ Likes: {props.likes}</p>
    </div>
  );
}

export default Post;

