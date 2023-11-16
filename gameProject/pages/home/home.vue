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
					Ksolts.com
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
				<view class="" v-for="item in gameTypeList">
					{{item.key}}
				</view>
			</view>
		</scroll-view>
	</view>
	</view>
</template>

<script>
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
				gameTypeList:[{
					key:'Popular',
					icon:''
				},{
					key:'Slots',
					icon:''
				},{
					key:'Pescaria',
					icon:''
				},{
					key:'Jogos',
					icon:''
				},{
					key:'Recentes',
					icon:''
				},{
					key:'Favorite',
					icon:''
				}]
			}
		},
		onLoad() {

		},
		methods: {

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
		}
	}
</style>