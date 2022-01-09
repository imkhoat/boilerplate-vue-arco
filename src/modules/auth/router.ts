import PageLogin from '@/modules/auth/pages/page-login.vue'
import PageRegister from '@/modules/auth/pages/page-register.vue'
import PageForgotPassword from '@/modules/auth/pages/page-forgot-password.vue'

const routes = [
  {
    path: '/auth/login',
    name: 'PageLogin',
    component: PageLogin,
    meta: { layout: 'app-layout-auth' },
  },
  {
    path: '/auth/register',
    name: 'PageRegister',
    component: PageRegister,
    meta: { layout: 'app-layout-auth' },
  },
  {
    path: '/auth/forgot-password',
    name: 'PageForgotPassword',
    component: PageForgotPassword,
    meta: { layout: 'app-layout-auth' },
  },
]

export default routes
