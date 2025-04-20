<script setup lang="ts">
import { ref } from 'vue';
//import { useRouter } from 'vue-router';
//const router = useRouter();
import { router } from '@/router';

interface MenuItem {
	title: string;
	hasSettings: boolean;
	selected: boolean;
}


const menuItems = ref<MenuItem[]>([
	{ title: 'Обратная связь', hasSettings: true, selected: false },
	{ title: 'Встречи 1х1', hasSettings: true, selected: true },
	{ title: 'Ревью и оценка', hasSettings: true, selected: true },
	{ title: 'Наставничество и адаптация', hasSettings: false, selected: true },
	{ title: 'Аналитика', hasSettings: false, selected: true },
	{ title: 'Настройки', hasSettings: false, selected: true }
]);

const handleSettingsClick = (index: number) => {
	if (index === 0) {
		router.push('/admin/main');
	}
};
</script>

<template>
	<v-container class="pa-6">
		<!-- Заголовки -->
		<v-row class="mb-6" no-gutters>
			<v-col>
				<h1 class="text-h5 font-weight-bold mb-2">Добро пожаловать!</h1>
				<p class="text-subtitle-1 text-grey-darken-1">Выберите раздел:</p>
			</v-col>
		</v-row>

		<!-- Первые три ряда с кнопками -->
		<v-row v-for="(item, index) in menuItems.slice(0, 3)" :key="index" class="mb-4 align-center" no-gutters>
			<v-col class="pr-2">
				<v-btn block height="64" :color="item.selected ? 'grey lighten-1' : 'grey lighten-2'" class="text-none"
					@click="item.selected = !item.selected">
					{{ item.title }}
				</v-btn>
			</v-col>

			<v-col cols="auto" v-if="item.hasSettings">
				<v-btn height="64" width="64" color="grey lighten-2" class="text-none"
					@click="handleSettingsClick(index)">
					⚙
				</v-btn>
			</v-col>
		</v-row>

		<!-- Последние три ряда -->
		<v-row v-for="(item, index) in menuItems.slice(3)" :key="index + 3" class="mb-4" no-gutters>
			<v-col>
				<v-btn block height="64" :color="item.selected ? 'grey lighten-1' : 'grey lighten-2'" class="text-none"
					@click="item.selected = !item.selected">
					{{ item.title }}
				</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex&display=swap');

.v-btn {
	font-family: 'Roboto Flex', sans-serif;
	font-size: 1.1rem;
	letter-spacing: normal;
	transition: all 0.3s ease;
}
</style>