<script setup lang="ts">
//import { useRouter } from 'vue-router';
import { router } from '@/router';
//const router = useRouter();
</script>

<template>
    <v-container class="pa-6">
        <!-- Шапка -->
        <v-row class="mb-4" align="center" no-gutters>
            <v-col cols="auto">
                <v-btn icon @click="router.push('/admin/main')">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
            <v-col class="pl-4">
                <h1 class="text-h4">Создание опроса</h1>
            </v-col>
        </v-row>

        <!-- Группы -->
        <v-row class="mb-2" no-gutters>
            <v-col>
                <h2 class="text-h6">Группы</h2>
                <p class="text-caption text-grey">Выбрать группы и пользователей</p>
            </v-col>
        </v-row>

        <!-- Вкладки -->
        <v-row class="mb-6" no-gutters>
            <v-col>
                <v-tabs>
                    <v-tab value="group">Добавить группу</v-tab>
                    <v-tab value="user">Добавить человека</v-tab>
                </v-tabs>
            </v-col>
        </v-row>

        <!-- Название опроса -->
        <v-row class="mb-6" no-gutters>
            <v-col>
                <h3 class="text-h6 mb-2">Название опроса</h3>
                <v-text-field variant="outlined" placeholder="Название опроса" hide-details></v-text-field>
            </v-col>
        </v-row>

        <!-- Описание -->
        <v-row class="mb-6" no-gutters>
            <v-col>
                <h3 class="text-h6 mb-2">Описание</h3>
                <p class="text-caption text-grey mb-2">Описание, видимое для других администраторов</p>
                <v-text-field variant="outlined" placeholder="Введите описание" rows="2" hide-details></v-text-field>
            </v-col>
        </v-row>

        <!-- Форма -->
        <v-row class="mb-6" no-gutters>
            <v-col>
                <h3 class="text-h6 mb-4">Форма</h3> <!-- Увеличенный отступ снизу -->
                <p class="text-caption text-grey mb-2">Ссылка на форму Yandex Forms</p>
                <v-text-field variant="outlined" placeholder="Ссылка на форму" hide-details></v-text-field>
            </v-col>
        </v-row>

        <!-- Сообщение -->
        <v-row class="mb-6" no-gutters>
            <v-col>
                <h3 class="text-h6 mb-2">Сообщение</h3>
                <p class="text-caption text-grey mb-2">Сообщение, которое пользователи получат в телеграмм боте</p>
                <v-text-field variant="outlined" placeholder="Введите сообщение" rows="2" hide-details></v-text-field>
            </v-col>
        </v-row>

        <v-row class="mb-6" no-gutters>
            <v-col>
                <h3 class="text-h6 mb-4">Дата</h3>
                <v-row>
                    <v-col cols="2">
                        <p class="text-caption text-grey">Регулярность</p>
                        <v-btn variant="outlined">
                            <v-icon left>mdi-calendar</v-icon>
                            Настроить
                        </v-btn>
                    </v-col>

                    <v-col cols="6">
                        <p class="text-caption text-grey">Дедлайн: дней</p>
                        <div class="d-flex align-right">
                            <v-text-field variant="outlined" class="mr-2" style="max-width: 100px"
                                hide-details></v-text-field>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <!-- Кнопка создания -->
        <v-row no-gutters>
            <v-col>
                <v-btn color="primary" block size="large">
                    Создать
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.v-tab {
    text-transform: none;
    letter-spacing: normal;
}

.v-text-field,
.v-textarea {
    font-size: 0.9rem;
}
</style>