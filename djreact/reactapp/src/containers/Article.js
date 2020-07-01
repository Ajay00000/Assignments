import React from 'react';
// import ReactDOM from 'react-dom';

import { List, Space ,Card} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';




const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


const Articles = (props) => {
  return(
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 3,
                }}
                dataSource={props.data}
                footer={
                  <div>
                    <b>ant design</b> footer part
                  </div>
                }
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      title={<a href={`/${item.id}`}>{item.firstname} &nbsp; {item.lastname}</a>}
                    /><Card title={item.id} style={{ width: 600 }} style={{textAlign:'center'}}>
                    <p>address : {item.address}</p>
                    <p>dob :{item.dob}</p>
                    <p>city :{item.city}</p>
                    <p>mobile : {item.mobile}</p>
                    </Card>
                  </List.Item>
                )}
              />
    )
}

export default Articles;