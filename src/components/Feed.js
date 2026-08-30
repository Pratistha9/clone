import Post from "./Post"; // assuming you already made a Post component

const posts = [
  { id: 1, user: "Pratistha", image: require("../assests/myphoto.jpg") , caption: "My first post!", likes: 10 },
  { id: 2, user: "Alex",image:"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",caption: "Hello world!", likes: 5 }
];

function Feed() {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          user={post.user}
          image={post.image} 
          caption={post.caption}
          likes={post.likes}
        />
      ))}
    </div>
  );
}

export default Feed;

