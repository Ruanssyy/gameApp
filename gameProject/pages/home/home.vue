<template>
	<view class="home">
		<view class="nav">
			<view class="nav-left">
				<image class="unfolding" src="../../static/images/home/unfolding.png" mode=""></image>
				<view class="right-com">
					Ksolts.com
				</view>
			</view>
			<view class="nav-right">
				<view class="right-com">
					Ksolts.com1ssssss
				</view>
			</view>
		</view>
		<view class="swiper-container">
			<swiper class="swiper" :autoplay="true" :interval="3000" :circular="true">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<image class="slide-image" :src="item.imageUrl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<scroll-view scroll-x="true" >
			<view class="game-type">
				<view class="game-type-item" v-for="item in gameTypeList" :key="item.code">
					<view>
						<image class="game-type-image" :src="item.image" mode=""></image>
					</view>
					<view class="">
						{{item.cate_name}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
	</view>
</template>

<script>
	import { getCateGames,getCategoryList,getBanner } from "@/api/home/index.js"
	export default {
		data() {
			return {
				swiperList: [{
						imageUrl: '/static/logo.png'
					},
					{
						imageUrl: '/static/logo.png'
					},
					{
						imageUrl: '/static/logo.png'
					}
				],
				gameTypeList:[]
			}
		},
		onLoad() {

		},
		created() {
			this.init()
		},
		methods: {
			init(){
				this.getBannerFun()
				this.getCategoryListFun()
				this.getCateGamesFun()
			},
			getCategoryListFun(){
				getCategoryList().then(res=>{
					this.gameTypeList = res
				})
			},
			getCateGamesFun(){
				getCateGames().then(res=>{
					console.log(res);
				})
			},
			getBannerFun(){
				getBanner().then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.home {
		.nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 88rpx;
			width: 90%;
			margin: auto;

			.nav-left {
				display: flex;
				align-items: center;

				.unfolding {
					width: 36rpx;
					height: 24rpx;
				}

				.right-com {
					font-size: 30rpx;
					font-family: Work Sans-Bold, Work Sans;
					font-weight: bold;
					color: #FFF939;
					-webkit-text-stroke: 1px #FF7141;
					text-stroke: 1px #FF7141;
					-webkit-background-clip: text;
					margin-left: 30rpx;
				}
			}
		}

		.swiper-container {
			display: flex;
			justify-content: center;
			align-items: center;

			.swiper {
				width: 90%;
				border-radius: 10px;

				.slide-image {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
		}
		.game-type {
			display: flex;
			margin-top: 20rpx;
			flex-wrap: nowrap;
			.game-type-item {
				width: 150rpx;
				text-align: center;
				flex-shrink: 0;
			}
			.game-type-image {
				width: 80rpx;
				height: 60rpx;
			}
		}
	}
</style>