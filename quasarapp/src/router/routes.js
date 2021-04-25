
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Projetos.vue') },
      { path: 'informacoes/:id', component: () => import('src/pages/ProjetosInformacoes.vue'), props: true }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
