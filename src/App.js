import Feed from "./components/Feed";
import './App.css';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import React from 'react';

import {
   HomeOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  SearchOutlined,
  HeartOutlined,
  PlusOutlined,
  InstagramOutlined,
  UserOutlined,
 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {ConfigProvider, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



const items: MenuProps['items'] = [
  InstagramOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  SearchOutlined,
  HeartOutlined,
  PlusOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const currentYear = new Date().getFullYear();

  return (
    
    <div className="body">
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
            <Feed />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          © 2026 Instagram from Pratistha
        </Footer>
        </Layout>
       <Sider className="sider"></Sider>
        
      </Layout>
    </Layout>
     </div>
  );
};

export default App;




