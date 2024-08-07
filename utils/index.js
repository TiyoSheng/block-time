import { providers, utils } from 'ethers';
import { useGlobalStore } from '../hooks/useGlobalStore';

const { store, setChainList } = useGlobalStore();

export const getBlockTime = async (chain) => {
  const rpc_url = chain.rpcUrl;
  const provider = new providers.JsonRpcProvider(rpc_url);
  let blockCount = 0;
  let startTime = Date.now()
  let startBlockNumber = await provider.getBlockNumber();
  provider.on('block', (blockNumber) => {
    blockCount = blockNumber - startBlockNumber;
    if (blockCount == 0) return
    let endTime = Date.now()
    let diff = endTime - startTime
    let blockTimes = diff / blockCount
    blockTimes = (blockTimes / 1000).toFixed(1)
    chain.blockTime = blockTimes
    const newChainList = store.state.chainList.map((item) => {
      if (item.chainId === chain.chainId) {
        return chain
      }
      return item
    });
    setChainList(newChainList)
  });
}

export const getGas = async (chain) => {
  const rpc_url = chain.rpcUrl;
  const provider = new providers.JsonRpcProvider(rpc_url);
  const gasPrice = await provider.getGasPrice();
  chain.gas = (+utils.formatUnits(gasPrice.toString(), 'gwei')).toFixed(6)
  const newChainList = store.state.chainList.map((item) => {
    if (item.chainId === chain.chainId) {
      return chain
    }
    return item
  });
  setChainList(newChainList)
  setTimeout(() => {
    getGas(chain)
  }, 10000)
}