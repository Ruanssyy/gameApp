<template>
	<view class="invite">
		<view class="left-table-car">
			<view class="table-card-item" v-for="item in tableCar" :key="item.id" @click="active">
				<view class="">
					11111
				</view>
				<view class="">
					2222222
				</view>
			</view>
			
		</view>
		<!-- <RightMain></RightMain> -->
		<!-- <TeamMenber></TeamMenber> -->
		<FlowingWater></FlowingWater>
	</view>
</template>

<script>
	import RightMain from "../../components/invite/rightMain.vue"
	import TeamMenber from "../../components/invite/TeamMenber.vue"
	import FlowingWater from "../../components/invite/FlowingWater.vue"
	export default {
		components: {
			RightMain,
			TeamMenber,
			FlowingWater
		},
		data() {
			return {
				tableCar:[
					{
						id:1,
						icon:"",
						text:"11",
					},
					{
						id:2,
						icon:"",
						text:"222",
					},
					{
						id:3,
						icon:"",
						text:"333",
					},
					{
						id:4,
						icon:"",
						text:"444",
					},
				]
			}
		},
		methods: {
			active(e){
				console.log(e.target)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.invite{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-left: 10rpx;
		padding-right: 10rpx;
		display:flex;
		.left-table-car{
				width: 156rpx;
				margin-right: 16rpx;
			.table-card-item{
				height: 116rpx;
				background: #FFEEB7;
				border-radius: 10rpx 10rpx 10rpx 10rpx;
				opacity: 1;
				margin-bottom:24rpx;
				background-color: #CE5272;
				display:flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				
			}
		
		}
	}
	

</style>
