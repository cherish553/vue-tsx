const meta = { auth: false }
const article = {
  path: '/article',
  // name: 'article',
  component: () => import('@/layout'),
  meta,
  children: (pre => [
    { path: '/', name: `${pre}`, component: () => import('@/page/article/'), meta: { title: '文章' } }
  ])('article-')
}
export default article
