

<template>
    <div class="card">
        <Menubar :model="items">
            <template #item="{ item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
                </a>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Acceuil',
        icon: 'pi pi-home',
        route:'/'
    },
    {
        label: 'Equipes',
        icon: 'pi pi-users',
        route:'/equipes'
    },
     {
        label: 'Joueurs',
        icon: 'pi pi-user',
        route:'/joueurs'
    },
    {
        label: 'Contact',
        icon: 'pi pi-info-circle',
        route:'/infos'
    }
]);
</script>
