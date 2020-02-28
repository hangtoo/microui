import React, { PureComponent } from 'react';
import { Link } from 'dva/router';
import { Divider, Dropdown, Icon, Menu, Spin } from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import CMIcon from '@/components/CMIcon'

const { SubMenu } = Menu;
const getIcon = (icon, component) => {
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return <img src={icon} alt="icon" className={`${styles.icon} sider-menu-item-img`} />;
  }
  if (typeof icon === 'string') {
    switch (icon) {
      case 'search':
        return <i className="iconfont icon-xinxichaxun iconAction" style={{ marginRight: 10 }} />;
      case 'retweet':
        return <i className="iconfont icon-shujuguanli iconAction" style={{ marginRight: 10 }} />;
      case 'tags':
        return <i className="iconfont icon-tiaoduguanli1 iconAction" style={{ marginRight: 10 }} />;
      case 'pie-chart':
        return <i className="iconfont icon-tongjifenxi iconAction" style={{ marginRight: 10 }} />;
      case 'laptop':
        return <i className="iconfont icon-xitongguanli iconAction" style={{ marginRight: 10 }} />;
      case 'gift':
        return <i className="iconfont icon-moxingpeizhi iconAction" style={{ marginRight: 10 }} />;
      case 'table':
        return <i className="iconfont icon-mingdanguanli iconAction" style={{ marginRight: 10 }} />;
      case 'apisend':
        return <CMIcon type="icon-shangsongguanli" style={{ marginRight: 10 }} />;
      case 'fraud':
        return <Icon type="usergroup-add" style={{ marginRight: 10, fontSize: 16 }} />;
      default:
        return <Icon type={icon} />;
    }
  }
  switch (component) {
    case 'Home': {
      return <CMIcon type="icon-shouye" style={{ marginRight: 10 }} />;
    }
    case 'Information': {
      return <CMIcon type="icon-chaxun" style={{ marginRight: 10 }} />;
    }
    case 'SearchList': {
      return <CMIcon type="icon-chaxunliebiao" style={{ marginRight: 10 }} />;
    }
    case 'ApiList': {
      return <CMIcon type="icon-jiekouguanli" style={{ marginRight: 10 }} />;
    }
    case 'KeyList': {
      return <CMIcon type="icon-ziduanguanli" style={{ marginRight: 10 }} />;
    }
    case 'BlackList': {
      return <CMIcon type="icon-heimingdanguanli" style={{ marginRight: 10 }} />;
    }
    case 'WhiteList': {
      return <CMIcon type="icon-baimingdanguanli" style={{ marginRight: 10 }} />;
    }
    case 'ListConfig': {
      return <CMIcon type="icon-mingdanpeizhi" style={{ marginRight: 10 }} />;
    }
    case 'ModleUsing': {
      return <CMIcon type="icon-moxingshiyongbaobiao" style={{ marginRight: 10 }} />;
    }
    case 'ApiUsing': {
      return <CMIcon type="icon-jiekoutiaoyongbaobiao" style={{ marginRight: 10 }} />;
    }
    case 'Decision': {
      return <CMIcon type="icon-juecexiangtongguoshuai" style={{ marginRight: 10 }} />;
    }
    case 'ScoreCardCompare': {
      return <CMIcon type="icon-pingfenkafenxi" style={{ marginRight: 10 }} />;
    }
    case 'DecisionListCompare': {
      return <CMIcon type="icon-mingdanguanli" style={{ marginRight: 10 }} />;
    }
    case 'DecisionTreeCompare': {
      return <CMIcon type="icon-juecexiangtongguoshuai" style={{ marginRight: 10 }} />;
    }
    case 'DecisionTableCompare': {
      return <CMIcon type="icon-juecebiaofenxi" style={{ marginRight: 10 }} />;
    }
    case 'ModelComparison': {
      return <CMIcon type="icon-moxingduibifenxi" style={{ marginRight: 10 }} />;
    }
    case 'NodeComparison': {
      return <CMIcon type="icon-jiedianduibifenxi" style={{ marginRight: 10 }} />;
    }
    case 'Display': {
      return <CMIcon type="icon-dapingzhanshi" />;
    }
    case 'AddLabel': {
      return <CMIcon type="icon-biaoqian" />;
    }
    case 'RunLabel': {
      return <CMIcon type="icon-paopi" />;
    }
    case 'UserManagement': {
      return <CMIcon type="icon-zhanghuguanli" style={{ marginRight: 10 }} />;
    }
    case 'RoleManagement': {
      return <CMIcon type="icon-jiaoseguanli" style={{ marginRight: 10 }} />;
    }
    case 'Authority': {
      return <CMIcon type="icon-quanxianguanli" style={{ marginRight: 10 }} />;
    }
    case 'Log': {
      return <CMIcon type="icon-rizhiguanli" style={{ marginRight: 10 }} />;
    }
    case 'CompanyManagement': {
      return <CMIcon type="icon-rizhiguanli" style={{ marginRight: 10 }} />;
    }
    case 'ModalList': {
      return <CMIcon type="icon-moxingliebiao" style={{ marginRight: 10 }} />;
    }
    case 'MyModal': {
      return <CMIcon type="icon-canshupeizhi" style={{ marginRight: 10 }} />;
    }
    case 'KeysStatis': {
      return <CMIcon type="icon-pingfencanshufenxi" style={{ marginRight: 10 }} />;
    }
    case 'Task': {
      return <CMIcon type="icon-tiaodurenwu" style={{ marginRight: 10 }} />;
    }
    case 'Watch': {
      return <CMIcon type="icon-tiaodujiankong" style={{ marginRight: 10 }} />;
    }
    case 'MethodList': {
      return <CMIcon type="icon-fanfaguanli" style={{ marginRight: 10 }} />;
    }
    case 'ApiSendManagement': {
      return <CMIcon type="icon-shangsongjiekouguanli" style={{ marginRight: 10 }} />;
    }
    case 'RuleDictionaryManagement': {
      return <CMIcon type="icon-guizeziduanguanli" style={{ marginRight: 10 }} />;
    }
    case 'ruleClassMethods': {
      return <CMIcon type="icon-zidingyifangfa" style={{ marginRight: 10 }} />;
    }
    case 'BlackManagement': {
      return <Icon type="user-delete" style={{ marginRight: 10, fontSize: 16 }} />;
    }
    default:
      return icon;
  }
};

export default class GlobalHeader extends PureComponent {
  state = {
    current: 'changePwd',
  }

  componentWillUnmount() {
    //this.triggerResizeEvent&&this.triggerResizeEvent.cancel();
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
  
  /* eslint-disable*/
  triggerResizeEvent() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }

  // conversion Path
  // 转化路径
  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    } else {
      return `/${path || ''}`.replace(/\/+/g, '/');
    }
  };

  getMenuItemPath = item => {
    const itemPath = this.conversionPath(item.path?item.path:item.base);
    const icon = getIcon(item.icon, item.component);
    const { target, name } = item;
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {icon}
          <span>{name}</span>
        </a>
      );
    }
    return (
      <Link
        to={itemPath}
        target={target}
        replace={itemPath === this.props.location.pathname}
        onClick={
          this.props.isMobile
            ? () => {
              this.props.onCollapse(true);
            }
            : undefined
        }
      >
        {icon}
        <span>{name}</span>
      </Link>
    );
  };

  render() {
    const { currentUser, collapsed, isMobile, logo, onMenuClick, companyName,menuData,location,selectedKeys } = this.props;
    const menu = (
      <Menu className={styles.portal_menu}
        onClick={onMenuClick}
        style={{ lineHeight: '64px' }}
        selectedKeys={selectedKeys}
      >
        <Menu.Item key="changePwd">
          <Icon type="setting" />修改密码
        </Menu.Item>
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );

    let mainmenu = menuData.map((item, index) => {
        //console.log(item);
        //console.log(JSON.stringify(item));

        let menuitems=item.children?item.children.map((item,index)=>{

          //console.log(item.path);

          return (
            <Menu.Item key={item.path?item.path:item.base} icon={item.icon}>
              {this.getMenuItemPath(item)}
            </Menu.Item>
          );
        }):[
          <Menu.Item key={item.path?item.path:item.base} icon={item.icon}>
            {this.getMenuItemPath(item)}
          </Menu.Item>
        ];

        let menus=(<SubMenu className={styles.portal_menu} selectedKeys={[]} key={item.path?item.path:item.base} onClick={onMenuClick}
            title={
              <span className="submenu-title-wrapper" >
                <Icon type={item.icon?item.icon:'search'} />
                {item.name}
              </span>
            }>
          {menuitems}
        </SubMenu>);

        return (

          menus
        );

      });

    return (
      
      <div className={styles.portal_header}>

        <div className={styles.portal_left}>
          <img src={logo} key="img" alt="logo" width="32" />
          <Divider type="vertical" key="line" />
          {!isMobile ? 'QianKun应用实践' : (
            <Icon
              className={styles.portal_trigger}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />)
          }
        </div>

        <div className={styles.portal_right}>
          {currentUser ? (
            <Dropdown overlay={menu}>
              <span>
                <span>欢迎</span>
                <span> {companyName} </span>
                <span className={`${styles.portal_action} ${styles.portal_account}`}>
                  <img
                    src={require('@/assets/profile.png')}
                    alt={currentUser}
                    style={{ width: 32 }}
                  />
                  <span className={styles.portal_name}> {currentUser} </span>
                </span>
                {/*<span>登录</span>*/}
              </span>
            </Dropdown>
          ) : (
            <Spin size="small" style={{ marginLeft: 8 }} />
          )}
        </div>

        <div className={styles.portal_mainmenu}>

          {!isMobile?(<Menu mode="horizontal" style={{lineHeight:4.55}}>
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            {mainmenu}
          </Menu>):''}
        </div>

      </div>
    );
  }
}
