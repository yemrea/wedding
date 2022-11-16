<script lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import IconCommunity from './icons/IconCommunity.vue'
import { defineComponent, handleError } from 'vue'
import Vue from 'vue';
const timerDuration=1000;
const weddingDate=Number(Date.UTC(2023,1,18,17,0));
const msInDay = 24 * 60 * 60 * 1000;

export default defineComponent({
  data(){
    return {  remainingTime:"0" }
  },
  methods:{
    countDownTimer(){
      setTimeout(()=>{
        
        const diff = weddingDate- Number(new Date());
        var d=Math.round(diff / msInDay);
        var h = new Date(diff).getHours();
        var m = new Date(diff).getMinutes();
        var s = new Date(diff).getSeconds();
        this.remainingTime= String(d)+" days "+String(h)+" hours "+String(m)+" minutes "+String(s)+" seconds";
        this.countDownTimer();
      },timerDuration); 
    },
  },
  created(){this.countDownTimer();}
});

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
    <template #heading>{{remainingTime}} left</template>

  </WelcomeItem>
</template>
