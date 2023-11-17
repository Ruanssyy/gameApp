<template>
	<view class="main">
		<view class="list-item">
			<view class="main-pink">
				<view class="">
					Serial Number
				</view>
				<view class="">
					User id
				</view>
				<view class="">
					Superior id
				</view>
			</view>
			<view class="main-pur">
				<view class="" style="color: #FFFFFF;">
					Level 1 Statistics
				</view>
				<view class="">
					222
				</view>
				<view class="">
					333
				</view>
			</view>
			
			<view class="main-pink">
				<view class="">
					User name
				</view>
				<view class="">
					Recharge Amount
				</view>
				<view class="">
					Total Bet
				</view>
			</view>
			<view class="main-pur">
				<view class="" >
					111
				</view>
				<view class="">
					222
				</view>
				<view class="">
					333
				</view>
			</view>

		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.main {

		.list-item {
			width: 548rpx;
			height: 266rpx;
			background: #9F3752;
			border-radius: 10rpx;
			opacity: 1;
			border: 2rpx solid rgba(255, 255, 255, 0.19);

			.main-pink {
				width: 100%;
				height: 60rpx;
				background: #E06480;
				opacity: 1;
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				color: #FFFFFF;
				font-size: 16rpx;

				view {
					width: calc(100%/3);
					text-align: center;
					line-height: 24rpx;
				}
			}

			.main-pur {
				width: 100%;
				height: 80rpx;
				background: #9F3752;
				opacity: 1;
				display: flex;
				align-items: center;
				justify-content: space-evenly;

				font-size: 16rpx;

				view {
					width: calc(100%/3);
					text-align: center;
					line-height: 24rpx;
					color: #EFED6C;
				}
			}
		}

	}
</style>