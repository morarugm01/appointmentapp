<script setup>
import { useDarkMode } from '../../../composables/useDarkMode';

const { isDark, toggleDarkMode } = useDarkMode();


const props = defineProps({
    navigation: Array
})


</script>


<template>
<!-- Static sidebar for desktop -->
<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-zinc-100 dark:bg-slate-900">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-900 px-6">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in props.navigation" :key="item.name">
                  <router-link :to="item.to"
                    :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                    <component :is="item.icon"
                      :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'size-6 shrink-0']"
                      aria-hidden="true" />
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
              <!-- Dark Mode Toggle Button -->
          <button 
            @click="toggleDarkMode"
            class="p-2 fixed top-4 right-4 rounded bg-slate-200">
            <span v-if="isDark">🌙 Dark Mode</span>
            <span v-else>☀️ Light Mode</span>
          </button>
        </nav>
      </div>
    </div></template>