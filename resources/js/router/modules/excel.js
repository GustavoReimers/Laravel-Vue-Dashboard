/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/views/layout/Layout'

const excelRouter = {
  path: '/excel',
  component: Layout,
  redirect: '/excel/export-excel',
  name: 'Excel',
  meta: {
    title: 'excel',
    icon: 'excel'
  },
  children: [
    {
      path: 'export-excel',
      component: () => import('@/views/excel/ExportExcel'),
      name: 'ExportExcel',
      meta: { title: 'exportExcel' }
    },
    {
      path: 'export-selected-excel',
      component: () => import('@/views/excel/SelectExcel'),
      name: 'SelectExcel',
      meta: { title: 'selectExcel' }
    },
    {
      path: 'upload-excel',
      component: () => import('@/views/excel/UploadExcel'),
      name: 'UploadExcel',
      meta: { title: 'uploadExcel' }
    }
  ]
}

export default excelRouter
