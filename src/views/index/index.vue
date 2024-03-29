<template>
    <frame-view class="index text-[28px]">
        <van-button type="primary" :to="{ path: '/dev' }">开发者中心</van-button>
    </frame-view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.index {
    :deep(.frame-view-content) {
        padding: 20px;
    }
}
</style>
