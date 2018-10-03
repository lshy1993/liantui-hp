<template>
<div class="character">
	<div id="select">
		<chara-div v-for="(ele,key) in charaDic" :key="key" :chara="ele" />
	</div>
	<div id="info">
		<h1>This is a character page</h1>
	</div>
</div>
</template>

<script>
import CharaDiv from '../components/CharaDiv.vue';
export default {
	name: 'Chara',
	data(){
		return {
			charaDic: [
				{
					name_CN: "苏梦忆",
					photoFile: require("../assets/img/su00_1.png"),
					color: 'pink',
					pos: {
						x: 10,
						y: 20
					},
					rotate: 0,
				},
				{
					name_CN: "西门吹",
					photoFile: require("../assets/img/su00_1.png"),
					color: 'orange',
					pos: {
						x:400,
						y:20
					},
					rotate: 30,
				},
				{
					name_CN: "喵星人",
					photoFile: require("../assets/img/su00_1.png"),
					color: 'green',
					pos: {
						x:200,
						y:300
					},
					rotate: -30,
				}
			]
		}
	},
	components: {
		CharaDiv
	}
}
</script>

<style lang="scss">
#select {
	display: block;
	position: relative;
	float: left;
	width: 60%;
	height: 700px;
	overflow: hidden;
	// background: white;
}
#info {
	float: left;
	display: block;
	position: relative;
	width: 40%;
	height: 100%;
}

</style>
