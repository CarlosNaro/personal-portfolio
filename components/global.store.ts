const state = reactive({
  isDarkMode: false,
});

const getters = {
  getIsDarkMode: () => state.isDarkMode,
};

const mutations = {
  setIsDarkMode(isDark: boolean) {
    state.isDarkMode = isDark;
  },
};

export default {
  ...getters,
  ...mutations,
};
