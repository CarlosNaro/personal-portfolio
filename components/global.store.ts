const state = reactive({
  isDarkMode: false,
  isTextVisible: false,
});

const getters = {
  getIsDarkMode: () => state.isDarkMode,
  getIsTextVisible: () => state.isTextVisible,
};

const mutations = {
  setIsDarkMode(isDark: boolean) {
    state.isDarkMode = isDark;
  },
  setIsTextVisible(isVisible: boolean) {
    state.isTextVisible = isVisible;
  },
};

export default {
  ...getters,
  ...mutations,
};
