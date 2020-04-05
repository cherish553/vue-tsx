const meta = { auth: false }
const category = {
  path: '/category',
  // name: 'category',
  component: () => import('@/layout'),
  meta,
  children: (pre => [
    // 门店管理
    // { path: 'shopManage', name: `${pre}shop-manage`, component: () => import('@page/category/shopManage'), meta: { title: '门店管理' } },
    // 分类管理
    { path: '/', name: `${pre}`, component: () => import('@/page/category'), meta: { ...meta, title: '文章类别' } }
  ])('category-')
}
export default category
