const state = reactive({
  isDarkMode: false,
  isTextVisible: false,
  isMobile: false,
});

const getters = {
  getIsDarkMode: () => state.isDarkMode,
  getIsTextVisible: () => state.isTextVisible,
  getIsMobile: () => state.isMobile,
};

const mutations = {
  setIsDarkMode(isDark: boolean) {
    state.isDarkMode = isDark;
  },
  setIsTextVisible(isVisible: boolean) {
    state.isTextVisible = isVisible;
  },
  setIsMobile(isMobile: boolean) {
    state.isMobile = isMobile;
  },
};

export default {
  ...getters,
  ...mutations,
};
