import React from "react";
import { Image } from 'antd';
import { Row, Col } from "antd";
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Post from "./Post"; // assuming you already made a Post component
import "./Feed.css";
import { Button, Flex } from 'antd';
 
function Feed() {
  const user = 
  { pfp: require("../assests/myphoto.jpg"),
    username: "pra.tisthaa",   
    user: "Pratistha",
    posts:[
      {id: 1,username: "pra.tisthaa",  image: require("../assests/pi.jpg") , caption: "My first post!", likes: 10 },
      {id: 2,username: "pra.tisthaa",  image: require("../assests/mi.jpg") ,caption: "Hello world!", likes: 5 }
    ],
  };
   const items = [
    { label: <a href="#">App and Website</a>, key: "0" },
    { label: <a href="#">Notifications</a>, key: "1" },
    { label: <a href="#">Setting and Privacy</a>, key: "2" },
    { type: "divider" },
    { label: "Logout", key: "4" },
  ];
  return (
      <div className="feed">
      <div className="upp">
        <div className="profile">
          <Image width={200}  src={user.pfp} alt="pfp" className="photopfp" />
        </div>
        <div>
        <h1 className="profileHeader"> {user.username}
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <SettingOutlined />
            </Space>
          </a>
        </Dropdown></h1>
        <p>{user.user}</p>
        </div>
      </div>
       <div className="btn">
       <Flex gap="small" wrap>
         <Button block style={{ flex: 1 }} color="default" variant="filled">
            Edit Profile
          </Button>
           <Button block style={{ flex: 1 }} color="default" variant="filled">
            View Archive
          </Button>
        </Flex>
       </div>
   
    <div className="down">
    <Row gutter={[0, 0]}>
      {user.posts.map((post) => (
        <Col key={post.id} span={5}>
          <Post
             username={post.username}
             image={post.image} 
             caption={post.caption} 
             likes={post.likes}
          />
        </Col>
      ))}
    </Row>
    </div>
    </div>
  );
}


export default Feed;

