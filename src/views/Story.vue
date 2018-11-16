<template>
<div class="story">
    <div id="routeSelector">
        <h1>请选择路线</h1>
        <div class="routeBlock clickable" style="background:pink;">
            <div class="routeIcon"></div>
            <span class="routeTxt">推理社线</span>
        </div>
        <div class="routeBlock clickable" style="background:purple;">
            <div class="routeIcon"></div>
            <span class="routeTxt">苏梦忆</span>
        </div>
        <div class="routeBlock clickable" style="background:orange;">
            <div class="routeIcon"></div>
            <span class="routeTxt">西门吹</span>
        </div>
        <div class="routeBlock clickable" style="background:skyblue;">
            <div class="routeIcon"></div>
            <span class="routeTxt">欧阳晓芸</span>
        </div>
    </div>
    <div class="simpleIntroBox" id="storyContent">
        <h1>STORY</h1>
        <div id="chapterSelector" class="clearfixbox">
            <div @click="chapterNum=key" :class="['chapterBlock','clickable','clearfix',key==chapterNum?'current':'']" v-for="key in getChapter()" :key="key">{{ key }}</div>
        </div>
        <transition name="fade">
            <chapter-intro :rt="routeNum" :cp="chapterNum"/>
        </transition>
    </div>
</div>
</template>

<script>
import ChapterIntro from '@/components/ChapterIntro.vue';
export default {
    name: '',
    data(){
        return {
            routeNum: 0,
            chapterNum: 1,
        }
    },
    methods:{
        getChapter(){
            return 8;
        }
    },
    components:{
        ChapterIntro
    }
}
</script>

<style lang="scss">
.story {
    //margin: auto 0;
    color: black;
    width: 70%;

    #routeSelector {
        display: inline-block;
        width: 20%;
        vertical-align: top;

        .routeBlock {
            width: 200px;
            height: 60px;
            //background: pink;
            line-height: 40px;
            border: 1px solid white;
            margin-bottom: 10px;
           
            .routeIcon {
                display: inline-block;
                width: 40px;
                height: 40px;
                margin: 10px;
                background: black;
                
            }

            .routeTxt {
                vertical-align: top;
                display: inline-block;
                width: 100px;
                padding-top: 10px;
            }
        }
    }

    #storyContent {
        display: inline-block;
        // width: 980px;
        // background: rgba(255,255,255,0.8);
        // width: 60%;

        // h1 {
        //     text-align: right;
        //     padding-right: 20px;
        //     font-size: 32px;
        // }

        #chapterSelector {
            width: 740px;
            margin: 0 auto;
            border-bottom: 2px #333 solid;
            
            .chapterBlock {
                padding: 0 15px;
                font-size: 24px;
            }

            .current {
                color: #69F;
            }
        }

    }

}
</style>
