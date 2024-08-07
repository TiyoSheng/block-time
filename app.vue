<script setup>
import { ref, watch, onMounted } from 'vue'
import { useGlobalStore } from './hooks/useGlobalStore.js'
import { chainList } from './libs/chain.js';
import { getBlockTime, getGas } from './utils/index.js';

const { store } = useGlobalStore()

const toScan = (url) => {
  window.open(url, '_blank')
}

onMounted(() => {
  chainList.forEach(async (chain) => {
    getBlockTime(chain)
    getGas(chain)
  })
})
</script>

<template>
  <div style="padding: 24px;">
    <div class="grid">
      <div class="gi" v-for="(chain, i) in store.state.chainList" :key="chain.chainId" :span="1">
        <div class="card">
          <div class="chain-name flex-center-center" @click="toScan(chain.chainExplorer)">
            <img :src="chain.chainIcon" alt="chainIcon">
            <h1>{{ chain.chainName }}</h1>
          </div>
          <div class="info flex-center-center">
            <div class="info-item">
              <p class="info-title">Chain Id</p>
              <span class="info-value">{{ chain.chainId }}</span>
            </div>
            <div class="info-item">
              <p class="info-title">Currency</p>
              <span class="info-value">{{ chain.currency }}</span>
            </div>
          </div>
          <div class="info flex-center-center">
            <div class="info-item">
              <p class="info-title">Bolck Time</p>
              <span class="info-value">{{ chain.blockTime }} s</span>
            </div>
            <div class="info-item">
              <p class="info-title">Gas</p>
              <span class="info-value">{{ chain.gas }} gwei</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-content {
  padding: 16px !important;
  width: 100%;
  height: 100%;
}

.chain-name {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
}
.info {
  margin-top: 16px;
  width: 100%;
  line-height: 1.4;
  .info-item {
    text-align: center;
    width: 50%;
    flex: 1;
    .info-title {
      font-size: 14px;
      color: #666;
    }
    .info-value {
      font-size: 14px;
      font-weight: 500;
      color: #333;
    }
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  
  .card {
    border-radius: 8px;
    padding: 24px 0;
    background-color: #fff;
    transition: all 0.3s;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
