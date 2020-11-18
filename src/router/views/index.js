import Layout from '@/page/index/';

export default [{
    path: '/wel',
    component: Layout,
    redirect: '/wel/index',
    children: [{
        path: 'index',
        name: '首页',
        meta: {
            i18n: 'dashboard',
            keepAlive: true
        },
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/wel/index')
    }, {
        path: 'dashboard',
        name: '控制台',
        meta: {
            i18n: 'dashboard',
            menu: false,
            keepAlive: true
        },
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/wel/dashboard')
    }]
}, {
    path: '/test',
    component: Layout,
    redirect: '/test/index',
    children: [{
        path: 'index',
        name: '测试页',
        meta: {
            i18n: 'test',
            keepAlive: true
        },
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/util/test')
    }]
}, {
    path: '/info',
    component: Layout,
    redirect: '/info/index',
    children: [{
        path: 'index',
        name: '个人信息',
        meta: {
            i18n: 'info',
            keepAlive: true
        },
        component: () =>
            import( /* webpackChunkName: "views" */ '@/views/user/info')
    }]
}];
