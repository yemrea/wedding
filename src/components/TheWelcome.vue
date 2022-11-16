<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import IconCommunity from './icons/IconCommunity.vue'

defineProps<{
  counterValue: string
}>()
</script>



<template>
  <WelcomeItem>
    <template #icon>
      <IconCommunity />
    </template>
    <template #heading>Quiz</template>

  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Gallery</template>
  </WelcomeItem> 
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Wedding</template>
    February 18th, 2023. 

  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{counterValue}} days left</template>

  </WelcomeItem>
</template>
