
<template>
<div id="intro">
    <div class="pageBg">
        
    </div>
    <div class="introduction">
        <h1>This is a introduction page</h1>
        <span>##########################</span>

        <button @click="click">click</button>
        <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return{ 
            show: false
        }
    },

    methods: {
        click(){
            console.log('click');
            this.show = !this.show;
            console.log(this.show);
        }
    }
}

</script>

<style scoped>
.introduction {
    /* margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    width: 1000px;
    height: 600px; */
}
.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0
}
.slide-fade-enter-to, .slide-fade-leave {
    opacity: 1
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>

