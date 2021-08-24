import { observer } from "mobx-react-lite";
import { Layout, Menu, Button } from "antd";
import React from "react";
import CaoshiStore from "../store/Store";

function CaoshiList({ store = new CaoshiStore() }) {
  const { Content, Sider } = Layout;

  type Caoshi = {
    id: number;
    title: string;
    paragraphs: Array<string>;
  };

  const deleteCaoshi = (id: number) => {
    store.deleteCaoshi(id);
  };
  return (
		<Layout>
			<Sider
				breakpoint='lg'
				collapsedWidth='0'
				onBreakpoint={broken => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
					<Menu.Item key='1'>nav 1</Menu.Item>
					<Menu.Item key='2'>nav 2</Menu.Item>
					<Menu.Item key='3'>nav 3</Menu.Item>
					<Menu.Item key='4'>nav 4</Menu.Item>
				</Menu>
			</Sider>
			<Content style={{margin: '2rem'}}>
				<h2>余{store.totalCaoshis}篇</h2>
				{store.caoshis.map((caoshi: Caoshi) => {
					return (
						<div key={caoshi.id}>
							<h2>{caoshi.title}</h2>
							<p>{caoshi.paragraphs}</p>
							<Button type='link' onClick={() => deleteCaoshi(caoshi.id)}>
								已读
							</Button>
						</div>
					);
				})}
			</Content>
		</Layout>
	);
}

export default observer(CaoshiList);
