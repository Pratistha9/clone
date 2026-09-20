import Profile from "./components/Profile";
import './App.css';
import 'antd/dist/reset.css';
import { Button, Avatar } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import myphoto from "./assests/myphoto.jpg";


import {
   HomeOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  SearchOutlined,
  HeartOutlined,
  PlusOutlined,
  InstagramOutlined,
 
  MenuOutlined,
 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {ConfigProvider, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] =[
  { icon: InstagramOutlined, label: "Instagram" },
  { icon: HomeOutlined, label: "Home" },
  { icon: VideoCameraOutlined, label: "Reels" },
  { icon: MessageOutlined, label: "Messages" },
  { icon: SearchOutlined, label: "Search" },
  { icon: HeartOutlined, label: "Notifications" },
  { icon: PlusOutlined, label: "Create" },
  { icon: Avatar, label: "Profile", props: { src: myphoto } },
  { icon: MenuOutlined, label: "More" },
].map((item, index) => ({
  key: String(index + 1),
   icon: item.icon === Avatar
    ? React.createElement(item.icon, { src: myphoto, style: { fontSize: "25px" } })
    : React.createElement(item.icon, { style: { fontSize: "25px" } }),
  
  label: item.label,
}));




const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const currentYear = new Date().getFullYear();

  return (
    
    <div className="body">
    <Router>
    <Layout hasSider>
      <Sider className="sider">
       <div className="demo-logo-vertical" />
       <Menu  mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>

      <Layout>
       <Layout> 
        <Content style={{ margin: 0, overflow: 'initial' }}>
          <div  className="content-box"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <Routes>
                <Route path="/profile/pratistha" element={<Profile />} />
                
              </Routes>
           
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          © 2026 Instagram from Pratistha
        </Footer>
        </Layout>
       <Sider className="sider"></Sider>
        
      </Layout>
      
    </Layout>
    </Router>
     </div>
  );
};

export default App;




