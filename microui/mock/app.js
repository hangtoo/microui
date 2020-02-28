export default {
  'GET /api/apps': [
    {
      name: 'app1-umi', // hack
      entry: 'http://localhost:8011',
      base: '/app1',
      icon: 'search',
      mountElementId: 'root-slave'
    },
    {
      name: 'buser', // hack
      entry: 'http://localhost:8001',
      base: '/buser',
      icon: 'retweet',
      mountElementId: 'root-slave'
    },
    {
      name: '系统管理', // hack
      entry: 'http://localhost:8001',
      base: '/listtablelist',
      icon: 'retweet',
      mountElementId: 'root-slave',
      children: [
        {
          name: '用户管理', // hack
          entry: 'http://localhost:8001',
          base: '/listtablelist',
          icon: 'gift',
          mountElementId: 'root-slave',
        }, {
          name: '角色管理', // hack
          entry: 'http://localhost:8001',
          base: '/buser/listtablelist',
          icon: 'tags',
          mountElementId: 'root-slave',
        }
      ]
    },


    // {
    //   name: 'app2',
    //   entry: 'http://localhost:8002/app2',
    //   base: '/app2',
    //   mountElementId: 'root-slave',
    //   props: {
    //     testProp: 'test'
    //   }
    // }
  ]
}
