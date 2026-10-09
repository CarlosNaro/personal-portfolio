const state = reactive({
  isMobile: false,
});

const getters = {
  getIsMobile: () => state.isMobile,
};

const mutations = {
  setIsMobile(isMobile: boolean) {
    state.isMobile = isMobile;
  },
};

export default {
  ...getters,
  ...mutations,
};
