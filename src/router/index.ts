import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { useProfileStore } from '@/store';

const routes: RouteRecordRaw[] = [
	{
		path: '/main',
		component: () => import('../pages/MainPage.vue'),
	},
];

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach(to => {
	console.log(to);
});
