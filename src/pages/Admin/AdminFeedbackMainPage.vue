<script setup lang="ts">
import { ref } from 'vue';
//import { useRouter } from 'vue-router';
import { router } from '@/router';
//const router = useRouter();

// Пример данных для карточек опросов
const surveys = ref([
    {
        id: 1,
        type: 'Ежегодный опрос',
        title: 'Оценка удовлетворенности 2024',
        description: 'Общий опрос для всех сотрудников компании',
        tags: ['front', 'back', 'data'],
        deadline: 14,
        regularity: 'не повторяется'
    },
    {
        id: 2,
        type: 'Экспресс-опрос',
        title: 'Оценка тренинга',
        description: 'Опрос по итогам прохождения обучения',
        tags: ['hr', 'education'],
        deadline: 7,
        regularity: 'ежеквартально'
    }
]);

const goBack = () => {
    router.push('/');
};

const createNewPoll = () => {
    router.push('/poll/creation');
};
</script>

<template>
    <v-container class="pa-6">
        <!-- Верхний блок -->
        <div class="mb-8">
            <!-- Строка с кнопкой назад и заголовком -->
            <v-row class="mb-4" align="center" no-gutters>
                <v-col cols="auto">
                    <v-btn icon @click="goBack" class="mr-4">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </v-col>
                <v-col>
                    <h1 class="text-h4 font-weight-bold">Назначение опросов</h1>
                </v-col>
            </v-row>

            <!-- Кнопка создания опроса -->
            <v-row class="mb-6" no-gutters>
                <v-col>
                    <v-btn color="primary" prepend-icon="mdi-plus" @click="createNewPoll">
                        Создать опрос
                    </v-btn>
                </v-col>
            </v-row>

            <!-- Строка с заголовком и кнопками -->
            <v-row class="mb-4" align="center" no-gutters>
                <v-col>
                    <h2 class="text-h5">Существующие опросы</h2>
                </v-col>
                <v-col cols="auto">
                    <v-btn variant="text" icon class="mr-2">
                        <v-icon>mdi-cog</v-icon>
                    </v-btn>
                    <v-btn variant="text" icon>
                        <v-icon>mdi-sort</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </div>

        <!-- Блок с карточками опросов -->
        <v-row>
            <v-col cols="12" v-for="survey in surveys" :key="survey.id">
                <v-card class="pa-4 position-relative">
                    <!-- Кнопка редактирования -->
                    <v-btn icon variant="text" class="position-absolute" style="right: 12px; top: 12px">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>

                    <!-- Основное содержимое карточки -->
                    <div class="mb-4">
                        <div class="text-subtitle-1 font-weight-bold text-grey-darken-2 mb-2">
                            {{ survey.type }}
                        </div>
                        <div class="text-h6 font-weight-bold mb-2">{{ survey.title }}</div>
                        <div class="text-body-1 text-grey-darken-1">{{ survey.description }}</div>
                    </div>

                    <v-row>
                        <!-- Левая колонка (70%) -->
                        <v-col cols="8">
                            <div class="text-caption font-weight-bold text-grey-darken-1 mb-2">Теги</div>
                            <v-chip-group>
                                <v-chip v-for="(tag, index) in survey.tags" :key="index" variant="outlined"
                                    size="small">
                                    {{ tag }}
                                </v-chip>
                            </v-chip-group>
                        </v-col>

                        <!-- Правая колонка (30%) -->
                        <v-col cols="4">
                            <div class="text-caption font-weight-bold text-grey-darken-1">Дэдлайн</div>
                            <div class="text-body-1 mb-2">{{ survey.deadline }} дней</div>

                            <div class="text-caption font-weight-bold text-grey-darken-1">Регулярность</div>
                            <div class="text-body-1">{{ survey.regularity }}</div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.v-card {
    transition: box-shadow 0.3s;
    border-radius: 8px;

    &:hover {
        box-shadow: 0 4px 8px rgba(0 0 0 / 10%);
    }
}
</style>