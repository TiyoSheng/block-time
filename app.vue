<script setup>
import { ref, watch, onMounted } from 'vue'
import { useGlobalStore } from './hooks/useGlobalStore.js'
import { chainList } from './libs/chain.js';
import { getBlockTime, getGas } from './utils/index.js';

const { store } = useGlobalStore()

onMounted(() => {
  chainList.forEach(async (chain) => {
    getBlockTime(chain)
    getGas(chain)
  })
})
</script>

<template>
  <div style="padding: 24px;">
    <n-grid x-gap="12" y-gap="12" :cols="4" class="grid">
      <n-gi v-for="(chain, i) in store.state.chainList" :key="chain.chainId" :span="1">
        <n-card content-class="card-content">
          <div class="chain-name flex-center-center">
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
        </n-card>
      </n-gi>
    </n-grid>
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

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
}
.info {
  margin-top: 16px;
  width: 100%;
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
</style>
