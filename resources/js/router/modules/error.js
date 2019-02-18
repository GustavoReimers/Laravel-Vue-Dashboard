/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/views/layout/Layout'

const errorRouter = {
  path: '/error',
  component: Layout,
    redirect: 'noredirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
  children: [
    {
      path: '401',
      component: () => import('@/views/ErrorPage/401'),
      name: 'Page401',
      meta: { title: 'page401', noCache: true }
    },
    {
      path: '404',
      component: () => import('@/views/ErrorPage/404'),
      name: 'Page404',
      meta: { title: 'page404', noCache: true }
    }
  ]
}

export default errorRouter
