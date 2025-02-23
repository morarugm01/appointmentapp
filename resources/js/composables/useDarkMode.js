import { ref, watch, watchEffect } from 'vue';


export function useDarkMode() {
    const isDark = ref(localStorage.getItem('theme') === 'dark');

    watchEffect(() => {
        if(isDark.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

    return {isDark, toggleDarkMode: () => (isDark.value = !isDark.value)}
}