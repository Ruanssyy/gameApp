<template>
	<view class="grid-box">
		<view class="grid-item" v-for="item in list" :key="item.src">
			<image :src="item.src" mode="" class="grid-img"></image>
			<text class="grid-text">
				{{item.title}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						src: '../../static/images/mine/bonus.png',
						title: 'Bonus'
					},
					{
						src: '../../static/images/mine/record.png',
						title: 'Record'
					},
					{
						src: '../../static/images/mine/download.png',
						title: 'Download'
					},
					{
						src: '../../static/images/mine/setup.png',
						title: 'Set up'
					},
					{
						src: '../../static/images/mine/mail.png',
						title: 'Mail'
					},
					{
						src: '../../static/images/mine/betting-record.png',
						title: 'Betting record'
					},
					{
						src: '../../static/images/mine/exit.png',
						title: 'Exit'
					}
				],
			}
		},
		methods: {
		
		}
	}
</script>

<style lang="scss" scoped>
	.grid-box{
		width: 100%;
		margin-top: 18rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.grid-item{
			width:222rpx;
			height: 194rpx;
			background: #BD4A68;
			border-radius: 18rpx;
			margin-bottom: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.grid-img{
				width: 88rpx;
				height: 88rpx;
			}
			.grid-text{
				font-size: 28rpx;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #FBF8F9;
				line-height: 24rpx;
				margin-top: 10rpx;
			}
		}
		
	}
	// .grid-box{
	// 	width: 100%;
	// 	margin-top: 18rpx;
	// 	.grid-text {
	// 		font-size: 14rpx;
	// 		color: #909399;
	// 		padding: 10rpx 0 20rpx 0rpx;
	// 		/* #ifndef APP-PLUS */
	// 		box-sizing: border-box;
	// 		/* #endif */
	// 		// background: #909399;
	// 	}
		
	// 	.grid-item {
	// 		height: 194rpx;
	// 		border-radius: 18rpx;
	// 		// background-color: #BD4A68 !important;
	// 	}
	// }

</style>