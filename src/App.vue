<template>
<div id="app">
    <header id="navTop">
        <div id="navBtnList" class="clearfixbox">
            <span class="clearfix">图标</span>
            <router-link class="navBtn clearfix" to="/">
                <span>回到主页</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/introduction">
                <span>游戏介绍</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/character">
                <span>角色图鉴</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/story">
                <span>故事概要</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/hint">
                <span>玩法提示</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/team">
                <span>主创团队</span>
                <div class="underline"></div>
            </router-link>
        </div>
        <div id="optionBox">
            <span>语言/言語/Language</span>
            <select>
                <option value="zh">简体中文</option>
                <option value="jp">日本語</option>
                <option value="en">English</option>
            </select>
        </div>
    </header>
    <transition enter-active-class="animated fadeIn" >
        <router-view class="content"></router-view>
    </transition>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import '../node_modules/animate.css/animate.min.css';

</style>
