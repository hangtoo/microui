import { Breadcrumb, Layout, Menu } from 'antd';
import { connect } from 'dva';
import React from 'react';
import { Link } from 'umi';
import GlobalHeader from '@/components/GlobalHeader';
import logo from '@/assets/logo_01.svg';
import style from './style.less';
const { Header, Content, Footer } = Layout;

@connect(({ base }) => ({ base }))
export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch({
      type: 'base/getApps',
    });
  }

  render() {
    const { location, children, base } = this.props;
    const { name, apps } = base;

    console.log(apps);

    const selectKey = '/' + location.pathname.split('/')[1];
    return (
      <Layout style={{ height: '100%'}}>
        <Header style={{ padding: 0 }}>

        <GlobalHeader
              logo={logo}
              currentUser={'heh'}
              companyName={'com'}
              collapsed={true}
              isMobile={false}
              selectedKeys={[selectKey]}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
              menuData={apps}
              location={location}
            />

        </Header>
        <Content className={style.portalcontent}>
          
          {// 加载master pages，此处判断较为简单，实际需排除所有子应用base打头的路径
          selectKey === '/' ? children : null}
          {apps.length ? <div id="root-slave"/> : null}

        </Content>
      </Layout>
    );
  }
}
