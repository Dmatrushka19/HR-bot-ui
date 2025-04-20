import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { useProfileStore } from '@/store';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('../pages/MainPage.vue'),
	},
	{
		path: '/admin/main',
		component: () => import('../pages/Admin/AdminFeedbackMainPage.vue'),
	},
	{
		path: '/poll/creation',
		component: () => import('../pages/PollCreationPage.vue'), 
	},
];

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to: RouteLocationNormalized) => {
	console.log(to);
});
