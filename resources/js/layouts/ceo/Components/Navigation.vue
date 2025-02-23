<script setup>
import DesktopSidebar from './DesktopSidebar.vue';
import MobileSidebar from './MobileSidebar.vue';
import { Cog6ToothIcon, FolderIcon, HomeIcon, UsersIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Dashboard', to: {name: 'ceo.dashboard'}, icon: HomeIcon, current: true },
    { name: 'Organizations', to: {name: 'ceo.organizations.index'}, icon: UsersIcon, current: false },
    { name: 'Plans', to: {name: 'ceo.plans.index'}, icon: FolderIcon, current: false },
    { name: 'Settings', to: {name: 'ceo.settings'}, icon: Cog6ToothIcon, current: false },

]
</script>
<template>
    <MobileSidebar :navigation></MobileSidebar>
    <DesktopSidebar :navigation></DesktopSidebar>
</template>