import PageSignin from '@/modules/auth/pages/page-signin.vue'
import PageSignup from '@/modules/auth/pages/page-signup.vue'
import PageForgotPassword from '@/modules/auth/pages/page-forgot-password.vue'

const routes = [
  {
    path: '/auth/signin',
    name: 'PageSignin',
    component: PageSignin,
    meta: { layout: 'app-layout-auth' },
  },
  {
    path: '/auth/signup',
    name: 'PageSignup',
    component: PageSignup,
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
