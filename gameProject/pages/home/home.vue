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
		<view class="home-suona">
			<view style="width: 80%;">
				<u-notice-bar :text="text1" direction="row" color="#fff" bgColor="#b84863"></u-notice-bar>
			</view>
			<image class="mail" src="../../static/images/home/mail.png" mode=""></image>
		</view>
		<scroll-view scroll-x="true">
			<view class="game-type">
				<view :class="['game-type-item',gameCode == item.code ? 'game-type-item-active' :'']"
					v-for="item in gameTypeList" :key="item.code" @click="gameType(item)">
					<view>
						<image class="game-type-image" :src="item.image" mode=""></image>
					</view>
					<view>
						{{item.cate_name}}
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="game-list">
			<view class="game-list-item" v-for="game in gameList">
				<image :src="game.image" mode=""></image>
				<view class="text">
					{{game.game_name}}
				</view>
			</view>
			<i v-for="(item,index) in gameList"></i>
		</view>
	</view>
</template>

<script>
	import {
		getCateGames,
		getCategoryList,
		getBanner
	} from "@/api/home/index.js"
	export default {
		data() {
			return {
				gameCode: 'pg', //当前游戏类型
				text1: 'para enviar R$15 Entre no canal oficial de Telegn',
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
				gameTypeList: [], //游戏类型
				gameList: [], //游戏列表
			}
		},
		onLoad() {

		},
		created() {
			this.init()
		},
		methods: {
			init() {
				this.getBannerFun()
				this.getCategoryListFun()
				this.getCateGamesFun(1)
			},
			getCategoryListFun() {
				getCategoryList().then(res => {
					this.gameTypeList = res
				})
			},
			getCateGamesFun(id) {
				uni.showLoading({
					title: 'Loading'
				});
				let url = `category_id=${id}&page=1&limit=1000`
				getCateGames(url).then(res => {
					this.gameList = res
					uni.hideLoading();
				})
			},
			getBannerFun() {
				getBanner().then(res => {

				})
			},
			gameType(game) {
				this.gameCode = game.code
				this.getCateGamesFun(game.id)
			},
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
			height: 115px;

			.swiper {
				width: 90%;
				border-radius: 10px;
				height: 115px;

				.slide-image {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
		}

		.home-suona {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.mail {
				width: 22px;
				height: 22px;
				margin-right: 30px;
			}
		}

		.game-type {
			display: flex;
			margin-top: 20rpx;
			flex-wrap: nowrap;

			.game-type-item {
				text-align: center;
				flex-shrink: 0;
				margin: 0 20rpx;
				color: #fff;
			}

			.game-type-item-active {
				border-bottom: 3px solid #EFED6C;
			}

			.game-type-image {
				width: 80rpx;
				height: 60rpx;
			}
		}

		.game-list::after {
			// content: '';
			// flex: 1;    /* 或者flex: 1 */
		}

		.game-list {
			display: flex;
			flex-wrap: wrap;
			margin-top: 30rpx;
			justify-content: space-between;
			padding: 0 10px;
			font-weight: bold;

			.game-list-item {
				width: 112px;
				height: 172px;
				border-radius: 7px 7px 7px 7px;
				opacity: 1;
				text-align: center;
				margin-bottom: 10px;
				box-sizing: border-box;

				uni-image {
					width: 112px;
					height: 112px;
				}

				.text {
					border-radius: 0 0 7px 7px;
					font-size: 14px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					position: relative;
					z-index: 9;
					color: #FFFFFF;
					height: 50px;
					opacity: 1;
					margin-top: -10px;
					box-shadow: -1px -10px 13px 3px #FCAA2C;
					background-color: #FCAA2C;
				}
			}
		}

		.game-list>i {
			width: 112px;
		}
	}
</style>