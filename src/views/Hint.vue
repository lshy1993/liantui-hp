<template>
<div class="simpleIntroBox">
    <h1>TIPS&amp;ENDING</h1>
    <ul class="mainSummary">
        <h2>游戏结局</h2>
        <li>游戏共36个结局，每章节结局类型不同。</li>
        <h3>名词解释</h3>
        <li>Clear：正常游戏通关，序章出现，即成功推理，剧情正常结束。</li>
        <li>GmaeOver：游戏结束，推理过程中多次失败才会出现，未完成剧情。</li>
        <li>DEAD END：死亡结局，行动选择失误时发生，未完成剧情。</li>
        <li>BAD END：坏结局，推理正确，普通选择，剧情结束，此结局无法解锁下一章节。</li>
        <li>NORMAL END：普通结局，最佳选择，一般剧情结束，可开启下一章节。</li>
        <li>GOOD END：好结局，普通章节出现，在行动选择中需要成功增长好感触发，真正游戏时间轴。</li>
        <li>TRUE END：真结局，特殊章节出现，除好感外需要发现隐藏要素，真正游戏时间轴。</li>
        <div id="endingList" class="clearfixbox">
            <ul class="endingBox">
                <h3>第一章：</h3>
                <li>Clear：1个</li>
                <li>GameOver：1个</li>
            </ul>
            <ul class="endingBox">
                <h3>第二章：</h3>
                <li>Clear：1个</li>
                <li>GameOver：1个</li>
            </ul>
            <ul class="endingBox">
                <h3>第三章：</h3>
                <li>GameOver：1个</li>
                <li>NORMAL END：1个</li>
                <li>GOOD END：1个</li>
            </ul>
            <ul class="endingBox">
                <h3>第四章：</h3>
                <li>GameOver：1个</li>
                <li>BAD END：2个</li>
                <li>NORMAL END：1个</li>
                <li>GOOD END：1个</li>
            </ul>
            <ul class="endingBox">
                <h3>第五章：</h3>
                <li>DEAD END：3个</li>
                <li>BAD END：2个</li>
                <li>NORMAL END：1个</li>
                <li>TRUEEND：1个</li>
            </ul>
            <ul class="endingBox">
                <h3>第六章：</h3>
                <li>GameOver：1个</li>
                <li>DEAD END：1个</li>
                <li>NORMAL END：1个</li>
                <li>GOODEND：1个</li>
            </ul>
            <ul class="endingBox">
                <h3>第七章：</h3>
                <li>GameOver：1个</li>
                <li>NORMAL END：1个</li>
                <li>GOOD END：1个</li>
            </ul>
            <ul class="endingBox">
                <h3>第八章：</h3>
                <li>DEAD END：5个</li>
                <li>BAD END：3个</li>
                <li>NORMAL END：1个</li>
                <li>TRUE END：1个</li>
            </ul>
        </div>
        <h2>攻略</h2>
        <div @click="showJutou=!showJutou" class="clickable"><li>你真的要看官方攻略吗？不再考虑一下？（点击显示隐藏）</li></div>
        <transition name="fade">
            <div v-if="!showJutou" id="jutouBox">
                <div class="clearfixbox">
                    <div @click="jutouNum=key" :class="['tipSelect','clickable','clearfix']" v-for="key in getChapter()" :key="key">
                        第{{ key }}章流程
                    </div>
                </div>
                <div>
                    <h3>第{{ jutouNum }}章</h3>
                    <ul v-html="jutou.html"></ul>
                </div>
            </div>
        </transition>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Hint',
    data(){
        return {
            showJutou: false,
            jutouNum: 1,
            jutou: Object,
            jutouDic:[
                {
                    html: '<li>尝试做了模仿法庭的一章后，就开始想自己的故事了，但是游戏形式依旧是模仿</li><li>重新设定的世界观和人物均为原创，只是游戏形式类似，推理要素也非常简单</li>'
                },
                {
                    html: '<li>第一次做这种类型的游戏，推理方面必定有不合理或者牵强之处，还请谅解</li><li>现在正在努力地填坑当中，敬请期待</li>'
                },
                {
                    html: '<li>第一次做这种类型的游戏，推理方面必定有不合理或者牵强之处，还请谅解</li><li>现在正在努力地填坑当中，敬请期待</li>'
                }
            ]
        }
    },
    created(){
        this.jutou = this.jutouDic[0];
    },
    watch:{
        jutouNum: function(){
            if(this.jutouNum<3){
                this.jutou = this.jutouDic[this.jutouNum-1];
            }
        }
    },
    methods:{
        getChapter(){
            return 8;
        }
    }
}
</script>

<style lang="scss">
#endingList{
    font-size: 14px;

    .endingBox {
        float: left;
        height: 180px;
        width: 180px;
        border: 1px #69F dashed;
        margin: 5px;
    }
}
#jutouBox{

    .tipSelect {
        float: left;
        border: 1px #69F dashed;
        padding: 5px 20px;
        margin: 5px;
    }
}
</style>
