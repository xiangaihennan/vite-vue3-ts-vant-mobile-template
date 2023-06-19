export const useCollectStore = defineStore('collectInfo', {
  state: () => {
    return {
      count: 12,
    };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
