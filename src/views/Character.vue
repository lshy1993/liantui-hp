<template>
<div class="character">
	<div id="charaSelectPanel">
		<chara-div v-for="(ele,key) in charaDic" :key="key" :chara="ele" />
	</div>
	<div id="charaInfoBox" class="simpleIntroBox">
		<h1>CHARACTER</h1>
		<div id="groupSelect" class="clearfix">
			<div id="selectTip">
				<h2>请</h2>
				<h2>选</h2>
				<h2>择</h2>
				<h2>角</h2>
				<h2>色</h2>
				<h2>组</h2>
				<h2>别</h2>
			</div>
			<div id="selectMap">
				<div class="groupMap clearfix">
					<a href="#hero">推理社</a>
					<a href="#school">德言高中</a>
				</div>
				<div class="groupMap clearfix">
					<a href="#police">警方</a>
					<a href="#family">家人</a>
				</div>
				<div class="groupMap clearfix">
					<a href="#other">其他</a>
				</div>
			</div>
		</div>
		<div id="hero" class="groupInfo clearfix">
			<div id="charaSelect">
				<div id="returnBox">
					<a href="#groupSelect">重新选择</a>
				</div>
				<div id="charaList">
					<ul>
						<li><a href="#liyunxiao">李云萧</a></li>
						<li><a href="#ximenchui">西门吹</a></li>
						<li><a href="#miaoxingren">苗星任</a></li>
						<li><a href="#suyimeng">苏忆梦</a></li>
					</ul>
				</div>
			</div>
			<div id="liyunxiao" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>李云萧</h2>
					<li>成绩中上的高中生，却拥有异常好的洞察力、推理力。</li>
					<li>情商较低，不善于处理感情问题，在学校里常常解决事件。</li>
					<li>之前并未发现自己的推理能力，在进入了社后慢慢成长。</li>
					<li>一直想要找到童年遇上的那个女孩而不断锻炼自己。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：17岁</li>
					<li>身高：182cm</li>
					<li>班级：高二（3）班</li>
					<li>特殊能力：观察、推理</li>
					<li>生日：</li>
					<li>所属社团：</li>
					<li>兴趣：</li>
					<li>喜欢的类型：</li>
				</ul>
			</div>
			<div id="ximenchui" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>西门吹</h2>
					<li>李云萧的同学，班中公认的美女，人缘非常的好。</li>
					<li>认识很多人，但也因此会为李云萧他们带来巨大的麻烦。</li>
					<li>童年曾被李云萧所救，是事件的中心，因此对李云萧心存感激。</li>
					<li>因为年龄和长相的变化，李云萧本人对此并不知情。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：16岁</li>
					<li>身高：165cm</li>
					<li>班级：高二（3）班</li>
					<li>特殊能力：</li>
					<li>生日：</li>
					<li>所属社团：</li>
					<li>兴趣：</li>
					<li>喜欢的类型：</li>
				</ul>
			</div>
			<div id="miaoxingren" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>苗星刃</h2>
					<li>李云萧的同学兼室友，理科男，吐槽役，腹黑男。</li>
					<li>杂学知识丰富，热衷于参加校内活动，也是半个宅男。</li>
					<li>吐槽功力深厚，同时有一定推理能力，偶尔会替李云萧出场。</li>
					<li>幼年时期陷入了真正的绑架事件，被当年的李云萧父亲解救。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：17岁</li>
					<li>身高：169cm</li>
					<li>班级：高二（3）班</li>
					<li>特殊能力：</li>
					<li>生日：</li>
					<li>所属社团：</li>
					<li>兴趣：</li>
					<li>喜欢的类型：</li>
				</ul>
			</div>
			<div id="suyimeng" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>苏忆梦</h2>
					<li>李云萧他们的后辈，年级优等生，受到老师们的喜爱，与西门吹认识。</li>
					<li>是家中的二女，分别有个姐姐和妹妹，父亲早年失踪，家住在山中别墅。</li>
					<li>身上似乎拥有着奇特的力量，但是这股力量同时也带来了不幸。</li>
					<li>因为书法社的事件而和李云萧一行人相遇，后来卷入事件后被李云萧帮助。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：15岁</li>
					<li>身高：155cm</li>
					<li>班级：高二（3）班</li>
					<li>特殊能力：</li>
					<li>生日：</li>
					<li>所属社团：</li>
					<li>兴趣：</li>
					<li>喜欢的类型：</li>
				</ul>
			</div>
		</div>
		<div id="police" class="groupInfo">
			<div id="charaSelect">
				<div id="returnBox">
					<a href="#groupSelect">重新选择</a>
				</div>
				<div id="charaList">
					<ul>
						<li><a href="#liangjingguan">梁警官</a></li>
						<li><a href="#xiaowang">小王</a></li>
						<li><a href="#yangdui">杨队长</a></li>
					</ul>
				</div>
			</div>
			<div id="liangjingguan" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>梁警官</h2>
					<li>警察局刑侦科的实力派干警，第一时间会出现的现场，侦查能力良好。</li>
					<li>因为学校的事件和李云萧结识，并多次允许李云萧进入现场侦查。</li>
					<li>刚成为警察的时候办的案件差点失败，却因此并与李云萧父母认识。</li>
					<li>偶尔会信任李云萧，在警局能命令不少下级警官，李云萧有时候会去找他。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：32岁</li>
					<li>身高：176cm</li>
					<li>职业：警察</li>
					<li>所属部门：刑侦科</li>
					<li>上司：杨队长</li>
					<li>兴趣：智力游戏</li>
				</ul>
			</div>
			<div id="xiaowang" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>小王</h2>
					<li>大学刚刚毕业的实习生，在法医部门工作，是梁警官的下属。</li>
					<li>如果出现尸体，那么检验的工作就由他负责，医学成绩优异。</li>
					<li>年龄上与李云萧接近，和李云萧他们十分谈的开。</li>
					<li>休假的时候会跟随梁警官一起去各地旅游。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：24岁</li>
					<li>身高：172cm</li>
					<li>职业：实习法医</li>
					<li>所属部门：法医科</li>
					<li>上司：梁警官</li>
					<li>兴趣：电脑游戏</li>
				</ul>
			</div>
			<div id="yangdui" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>杨队长</h2>
					<li>警察局的副局长，实力雄厚的重案组组长，有什么重大案件均由他负责。</li>
					<li>外表严肃认真，让人难以接近，虽然没有到半百，鬓发已经变白。</li>
					<li>下属有梁警官和其他有实力的警察，因为梁警官而得之李云萧。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：45岁</li>
					<li>身高：178cm</li>
					<li>职业：副局长</li>
					<li>所属部门：重案组</li>
					<li>上司：公安局直属</li>
					<li>兴趣：话剧</li>
				</ul>
			</div>
		</div>
		<div id="school" class="groupInfo">
			<div id="charaSelect">
				<div id="returnBox">
					<a href="#groupSelect">重新选择</a>
				</div>
				<div id="charaList">
					<ul>
						<li><a href="#yinxiaoyu">隐小雨</a></li>
						<li><a href="#shangguan">上官珉瑶</a></li>
						<li><a href="#dugu">独孤向明</a></li>
						<li><a href="#daosheng">盗圣</a></li>
					</ul>
				</div>
			</div>
			<div id="yinxiaoyu" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>隐小雨</h2>
					<li>德言高中学生会会长，成绩年级第一，全面发展的好学生。</li>
					<li>因为学校中发生的盗窃事件而头疼，非常讨厌假扮盗圣的学生。</li>
					<li>深受学生们的爱戴，但工作上离不开副会长的帮助，似乎对他有好感。</li>
					<li>是西门吹的初中同学，校交流会的时候认识李云萧一行人。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：16岁</li>
					<li>身高：158cm</li>
					<li>班级：高二（12）班</li>
					<li>生日：</li>
					<li>所属社团：学生会</li>
					<li>兴趣：组织活动</li>
					<li>喜欢的类型：独孤向明</li>
				</ul>
			</div>
			<div id="shangguan" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>上官珉瑶</h2>
					<li>上锦话剧团副团长，上官团长的女儿，多才多艺的女生。</li>
					<li>是苏忆梦的好友，同时是学校话剧社的社长，因话剧团的事件和李云萧结识。</li>
					<li>其实是苗星刃的青梅竹马，但是苗星刃好像没有认识此人的记忆。</li>
					<li>似乎对当年搬走的苗星刃有着好感，但却因苗星刃不记得而没有坦白。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：16岁</li>
					<li>身高：160cm</li>
					<li>班级：高二（7）班</li>
					<li>生日：</li>
					<li>所属社团：话剧社</li>
					<li>兴趣：演话剧</li>
					<li>喜欢的类型：苗星刃</li>
				</ul>
			</div>
			<div id="dugu" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>独孤向明</h2>
					<li>德言高中学生会的副会长，成绩却一半半，对学校的事务了如指掌。</li>
					<li>人长得帅，受女生欢迎，因为复姓的关系，经常被学妹们称作“独孤前辈”。</li>
					<li>对于学校中出现的怪盗事件持无所谓的态度，平时非常喜欢研究魔术。</li>
					<li>尽管受到女生的欢迎，但似乎并不感冒，时常在关键时刻帮助会长。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：17岁</li>
					<li>身高：180cm</li>
					<li>班级：高二（12）班</li>
					<li>生日：</li>
					<li>所属社团：学生会</li>
					<li>兴趣：变魔术</li>
					<li>喜欢的类型：隐小雨</li>
				</ul>
			</div>
			<div id="daosheng" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>盗圣</h2>
					<li>德言高中出现的怪盗，自成盗圣，只偷取有钱人的东西。</li>
					<li>神出鬼没，没有人知道他的真实身份，校内保安对其束手无策。</li>
					<li>偷窃前会发出警告，并且在得手后第二天会将物品归还。</li>
					<li>校内很多人希望盗圣的到来，学校领导却颇为头疼。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：？？？</li>
					<li>身高：？？？</li>
					<li>班级：？？？</li>
					<li>生日：？？？</li>
					<li>所属社团：？？？</li>
					<li>兴趣：？？？</li>
					<li>喜欢的类型：劫富</li>
				</ul>
			</div>
		</div>
		<div id="family" class="groupInfo">
			<div id="charaSelect">
				<div id="returnBox">
					<a href="#groupSelect">重新选择</a>
				</div>
				<div id="charaList">
					<ul>
						<li><a href="#liyujian">李雨剑</a></li>
						<li><a href="#liwencheng">李文成</a></li>
						<li><a href="#nangong">南宫颐然</a></li>
						<li><a href="#suxinyue">苏昕月</a></li>
						<li><a href="#suyiman">苏忆曼</a></li>
						<li><a href="#suyiqiu">苏忆秋</a></li>
					</ul>
				</div>
			</div>
			<div id="liyujian" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>李雨剑</h2>
					<li>李云萧的双胞胎哥哥，早年被富有人家收养，外貌上和李云萧相似。</li>
					<li>早早退学在家，经营着家族企业，担任五行重工的副总裁。</li>
					<li>认识很多社会上层人士，和政府官员也有很多联系，有很高威望。</li>
					<li>和李云萧关系很高，经常给李云萧经济上的帮助。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：17岁</li>
					<li>身高：180cm</li>
					<li>生日：？？？</li>
					<li>职业：？？？</li>
					<li>兴趣：？？？</li>
					<li>喜欢的类型：？？？</li>
				</ul>
			</div>
			<div id="liwencheng" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>李文成</h2>
					<li>李云萧的父亲，少年时期曾当过侦探，因此认识南宫颐然。</li>
					<li>经营着游戏公司，经常抛开李云萧不管，和南宫颐然一起去海外旅行。</li>
					<li>早年在警察局工作，认识了杨队长和梁警官，并帮助他们解决的事件。</li>
					<li>优秀的推理能力没有遗传给李云萧，对此一直十分挂念。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：43岁</li>
					<li>身高：178cm</li>
					<li>生日：</li>
					<li>职业：董事长</li>
					<li>兴趣：动画</li>
					<li>喜欢的类型：南宫颐然</li>
				</ul>
			</div>
			<div id="nangong" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>南宫颐然</h2>
					<li>李云萧的母亲，年轻时是个美人，从高中起就认识李文成。</li>
					<li>学生时代开始就喜欢画画，也从事过画漫画，结婚后基本在家。</li>
					<li>一只眼睛的眸色是淡蓝，有着很好的动态视力，观察力非常惊人。</li>
					<li>受到李文成的影响，也有所推理能力，对于李云萧的心事非常了解。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：40岁</li>
					<li>身高：163cm</li>
					<li>生日：</li>
					<li>职业：无</li>
					<li>兴趣：电视剧</li>
					<li>喜欢的类型：李文成</li>
				</ul>
			</div>
			<div id="suxinyue" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>苏昕月</h2>
					<li>苏忆梦的母亲，同样是个美人，但却从来不谈起孩子们的父亲。</li>
					<li>同时也是德高望重的教授，</li>
					<li>自己和家中的管家仆人们将三姐妹带大，似乎苏家所有人都有着特殊能力。</li>
					<li>非常希望三个女儿能找到好人家，经常会给予女儿们的对象考验。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：39岁</li>
					<li>身高：157cm</li>
					<li>生日：</li>
					<li>职业：教授</li>
					<li>兴趣：？？？</li>
					<li>喜欢的类型：？？？</li>
				</ul>
			</div>
			<div id="suyiman" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>苏忆曼</h2>
					<li>苏忆梦的姐姐，目前是个大学生，据说有着不少的追求者。</li>
					<li>至今都没有找到合适的对象，找过的男友基本都把自己甩了。</li>
					<li>似乎是唯一一个没有拥有能力的苏家人。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：21岁</li>
					<li>身高：157cm</li>
					<li>生日：</li>
					<li>职业：大学生</li>
					<li>兴趣：社交活动</li>
					<li>喜欢的类型：？？？</li>
				</ul>
			</div>
			<div id="suyiqiu" class="charaInfo clearfix">
				<img src="" width="200" height="400">
				<ul>
					<h2>苏忆秋</h2>
					<li>苏忆梦的妹妹，非常讨人喜欢，从小就接受非常良好的家教。</li>
					<li>非常喜欢自己的两个姐姐，心地非常善良，比较怕生。</li>
					<li>似乎自己的特殊能力力量非常强大，只是不能稳定地使用。</li>
					<li>对李云萧一行人的事情非常在意，特别喜欢八卦消息。</li>
				</ul>
				<ul>
					<h3>DATA</h3>
					<li>年龄：12岁</li>
					<li>身高：147cm</li>
					<li>生日：</li>
					<li>职业：小学生</li>
					<li>兴趣：初中生</li>
					<li>喜欢的类型：李云萧</li>
				</ul>
			</div>
		</div>
		<div id="other" class="groupInfo">
			<div id="charaSelect">
				<div id="returnBox">
					<a href="#groupSelect">重新选择</a>
				</div>
				<div id="charaList">
					<ul>
						<li><a href="#gaoersan">高二（3）班</a></li>
						<li><a href="#shufashe">书法社</a></li>
						<li><a href="#sujia">苏家</a></li>
						<li><a href="#huajutuan">话剧团</a></li>
						<li><a href="#gaoershier">高二（12）班</a></li>
					</ul>
				</div>
			</div>
			<div id="gaoersan" class="charaInfo clearfix">
				<ul>
					<h2>高二（3）班</h2>
					<h3>人物一</h3>
					<li>介绍。</li>
					<h3>人物二</h3>
					<li>介绍。</li>
				</ul>
			</div>
			<div id="gaoershier" class="charaInfo clearfix">
				<ul>
					<h2>高二（12）班</h2>
					<h3>人物一</h3>
					<li>介绍。</li>
					<h3>人物二</h3>
					<li>介绍。</li>
				</ul>
			</div>
			<div id="shufashe" class="charaInfo clearfix">
				<ul>
					<h2>书法社</h2>
					<h3>人物一</h3>
					<li>介绍。</li>
					<h3>人物二</h3>
					<li>介绍。</li>
				</ul>
			</div>
			<div id="sujia" class="charaInfo clearfix">
				<ul>
					<h2>苏家</h2>
					<h3>人物一</h3>
					<li>介绍。</li>
					<h3>人物二</h3>
					<li>介绍。</li>
				</ul>
			</div>
			<div id="huajutuan" class="charaInfo clearfix">
				<ul>
					<h2>话剧团</h2>
					<h3>人物一</h3>
					<li>介绍。</li>
					<h3>人物二</h3>
					<li>介绍。</li>
				</ul>
			</div>
		</div>
	</div>
	<input type="textbox" >
	<input type="submit">
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
#charaSelectPanel {
	display: block;
	position: relative;
	float: left;
	width: 50%;
	height: 700px;
	overflow: hidden;
	// background: white;
}
#charaInfoBox {
	//float: left;
	position: relative;
	display: inline-block;
	width: 50%;
	height: 100%;
}

</style>
