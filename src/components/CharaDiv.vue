<template>
<div class="charadiv" :style="{'left':chara.pos.x+'px','top':chara.pos.y+'px','transform':'rotate('+chara.rotate+'deg)'}">
    <div class="snap" :style="{'background': chara.color}"></div>
    <div class="photoframe">
        <div class="photo">
            <img :src="imgurl" />
        </div>
    </div>
    <div class="charaName" :style="{'color': chara.color}">{{ chara.name_CN }}</div>
</div>
</template>

<script>
export default {
    name: 'CharaDiv',
    props: ['chara'],
    data(){
        return {

        }
    },
    computed:{
        imgurl: function(){
            return 'url(../assets/' + this.chara.photoFile+')';
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
 .charadiv{
	position: absolute;
	width: 200px;
	text-align: center;

    &:hover {
        transform:rotate(2deg);
        .photoframe {
            box-shadow: 0 0 0.3em 0.3em rgba(0,0,0,.125);
        }
        .charaName {
            font-size: 33px;
        }
    }

	.snap {
		display: inline-block;
        position: relative;
        top: 15px;
		width: 20px;
		height: 30px;
        z-index: 1010;
	}
	.photoframe {
		display: inline-block;
		background: rgb(250,250,250);
        box-shadow: 0 0 0.15em 0.15em rgba(0,0,0,.125);
        z-index: 1009;

		.photo {
			width: 180px;
			height: 200px;
			overflow: hidden;
			background: gray;
			margin-left: 10px;
			margin-right: 10px;
			margin-top: 10px;
			margin-bottom: 30px;

			img {
				width: 100%;
			}
		}
	}
	.charaName {
		font-size: 32px;
	}
}
</style>
 
