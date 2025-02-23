<script setup>
import DesktopSidebar from './DesktopSidebar.vue';
import MobileSidebar from './MobileSidebar.vue';
import { Cog6ToothIcon, FolderIcon, HomeIcon, UsersIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Dashboard', to: '/ceo/dashboard', icon: HomeIcon, current: true },
    { name: 'Organizations', to: '/ceo/organizations/index', icon: UsersIcon, current: false },
    { name: 'Plans', to: '/ceo/plans/index', icon: FolderIcon, current: false },
    { name: 'Settings', to: '/ceo/settings', icon: Cog6ToothIcon, current: false },

]
</script>
<template>
    <MobileSidebar :navigation></MobileSidebar>
    <DesktopSidebar :navigation></DesktopSidebar>
</template>