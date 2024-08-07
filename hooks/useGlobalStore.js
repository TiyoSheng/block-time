import { reactive } from "vue";
import { chainList } from '../libs/chain.js'

const store = reactive({
  state: {
    chainList
  },
});

const setChainList = async (chainList) => {
  store.state.chainList = chainList;
}

export const useGlobalStore = () => ({
  store,
  setChainList
});
