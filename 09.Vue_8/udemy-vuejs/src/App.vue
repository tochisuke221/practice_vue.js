<template>
  <div>
    <LikeHeader>      
        <h2>タイトル：はじめまして</h2>
    </LikeHeader>

    <LikeNumber :total-number="number" @my-click="incrementNumber($event)"></LikeNumber>

    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h2>最大人数</h2>
      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <pre>{{ eventData.maxNumber }}</pre>
    </div>

    <div>
      <h2>コンポーネント化したタイトル</h2>
      <EventTitle v-model="eventData.title"></EventTitle>
    </div>


  </div>

</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import EventTitle from "./components/EventTitle.vue"

export default {
  data(){
    return {
      number: 16,
      currentComponent: 'Home',
      locations:["東京", "大阪", "名古屋"],
      eventData: {
        title: "タイトル祭り",
        maxNumber: 5,
        detail: "",
        isPrivate: false,
        target:[],
        price: "無料",
        location: "東京"
      },
    }
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
  },
  methods: {
    incrementNumber(value) {
      console.log(value);
      this.number = value
    },
  }
}
</script>
