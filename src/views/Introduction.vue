
<template>
<div class="simpleIntroBox">
    <h1>INTRODUCTION</h1>
    <ul class="mainSummary">
        <h2>我的高中生活不可能这么简单</h2>
        <li>游戏类型：法庭AVG、推理AVG</li>
        <li>游戏平台：PC，未来有可能移植iOS、android</li>
        <li>编写语言：krkr</li>
        <li>制作时间：3年（含弃坑时间）2012.6~2015.6</li>
        <li>剧本：幸运的路奇</li>
        <li>人设：幸运的路奇</li>
        <li>程序：幸运的路奇、死鱼眼的喵星人</li>
        <li>游戏音乐：部分游戏原声以及音乐素材网站</li>
        <li>游戏图片：来自素材网站</li>
        <li>游戏语音：有，非专业配音</li>
        <li>年龄限制：全年龄</li>
        <li>续作情况：暂定两作，第一作（前四章）、第二作（后四章），有可能继续出下一作</li>
        <li>备注：最初只是想做《逆转裁判》系列、《逆转检事》系列的同人游戏</li>
        <li>尝试做了模仿法庭的一章后，就开始想自己的故事了，但是游戏形式依旧是模仿</li> 
        <li>重新设定的世界观和人物均为原创，只是游戏形式类似，推理要素也非常简单</li>
        <li>然后，一不小心，脑洞大开地想下去了，就有了自己的故事情节</li>
        <li>第一次做这种类型的游戏，推理方面必定有不合理或者牵强之处，还请谅解</li>
        <li>现在正在努力地填坑当中，敬请期待</li>
    </ul>
</div>

<!--div>
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
</div-->
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

<style lang="scss">

</style>

