import { IConfig } from 'umi-types';
const config: IConfig = {
  plugins: [
    ['umi-plugin-block-dev', {}],
    [
      'umi-plugin-react',
      {
        antd: true, // 重点在这里。。。我没有发现到antd是false
        dva: false,
        dynamicImport: false,
        title: 'simple-umi',
        dll: false,
 
        routes: {
          exclude: [/components\//],
        },
      },
    ],


  ],
  routes: [
    {
      name: '查询表格',
      path: '/listtablelist',
      component: './ListTableList',
    },
  ],

  
};
export default config;
