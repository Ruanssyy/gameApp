<template>
	<view class="mine-body">
		<view class="mine-header">
			<view class="header-top">
				<view class="header-top-left">
					111
				</view>
				<view class="header-top-middle">
					<view class="icon-change">

					</view>
					<view class="text-uid">
						UID:123123
					</view>
				</view>
				<view class="header-top-right">
					<view class="icon-record">

					</view>
				</view>
			</view>
			<view class="header-list">
				<view class="list-item">
					<view class="item-top">
						123123
					</view>
					<view class="item-bottom">
						123
					</view>
				</view>
				<view class="list-item">
					2
				</view>
				<view class="list-item">
					3
				</view>
				<view class="list-item">
					4
				</view>
			</view>
		</view>
		<view class="mine-main">
			<view class="main-top">
				<view class="top-vip">
					<image src="../../static/images/mine/icon-vip-1.png" mode=""
						style="width: 100rpx;height: 108rpx;margin-right: 20rpx;">
					</image>
					<view class="vip-right">
						<view class="right-top">
							<text>To the next level</text><text class="vip-text">VIP1</text>
						</view>
						<view class="right-middle">
							Bet another 100.00</view>
						<view class="right-bottom">
							<view class="right-bottom-bg">
								<view class="bet-bg">

								</view>
							</view>
							<text class="bet-text">57%</text>
						</view>
					</view>
				</view>
				<view class="vip-border">

				</view>
				<view class="top-vip">
					22222
				</view>
			</view>
			<view class="main-list">
				<list></list>
			</view>
		</view>
	</view>
</template>

<script>
	import list from "../../components/mine/configList.vue"
	export default {
		components: {list:list},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.mine-body {

		.mine-main {
			box-sizing: border-box;
			width: 100%;
			// background: #F8DBDE;
			padding-left: 10rpx;
			padding-right: 10rpx;
			padding-top: 10rpx;

			.main-list {
				
			}

			.main-top {
				width: 100%;
				height: 288rpx;
				box-sizing: border-box;
				background: #BD4A68;
				border-radius: 18rpx;
				opacity: 1;
				color: #F8DBDE;
				font-size: 22rpx;
				padding: 10rpx;

				.vip-border {
					border-bottom: 2rpx solid #AB3F5B;
					margin-top: 20rpx;
					margin-bottom: 20rpx;
				}

				.top-vip {
					display: flex;
					align-items: center;

					.bet-text {

						font-size: 22rpx;
						font-family: PingFang SC-Semibold, PingFang SC;
						font-weight: 600;
						color: #FEDB5B;
						line-height: 28rpx;
						margin-left: 10rpx;
					}

					.vip-text {
						font-size: 22rpx;
						color: #FEDB5B;
						font-family: PingFang SC-Semibold;
						line-height: 28rpx;
					}

					.right-bottom {
						display: flex;
						align-items: center;

						.right-bottom-bg {
							width: 440rpx;
							height: 8rpx;
							background: #AB3F5B;

							.bet-bg {
								width: 330rpx;
								height: 8rpx;
								background: #BFC2FF;
								border-radius: 80rpx 80rpx 80rpx 80rpx;
								opacity: 1;
							}

						}
					}

				}
			}


		}

		.mine-header {
			width: 100%;
			height: 470rpx;
			box-sizing: border-box;
			background-image: url('../../static/images/mine/mine-bg.png');
			background-size: 100%;
			padding-top: 146rpx;
			padding-left: 24rpx;
			padding-right: 45rpx;
			color: #FFFFFF;

			.header-top {
				height: 164rpx;
				width: 100%;
				// background: skyblue;
				display: flex;
				justify-content: space-between;

				.header-top-left {
					width: 164rpx;
					height: 164rpx;
					background: pink;
					border-radius: 10rpx;
				}

				.header-top-middle {
					width: 164rpx;
					height: 100%;
					margin-left: 20px;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					justify-content: center;

					.icon-change {
						width: 24rpx;
						height: 24rpx;
						background-image: url("../../static/images/mine/icon-change.png");
						margin-bottom: 10rpx;
					}

					.text-uid {
						font-size: 28rpx;
					}

				}

				.header-top-right {
					flex: 1;
					position: relative;

					.icon-record {
						width: 38rpx;
						height: 36rpx;
						background-image: url("../../static/images/mine/icon-1.png");
						background-size: 100%;
						position: absolute;
						right: 0;
						top: 0;
					}
				}
			}

			.header-list {
				display: flex;
				justify-content: space-between;
				margin-top: 40rpx;

				.list-item {
					width: 110rpx;
					display: flex;
					flex-direction: column;
					align-items: flex-end;

					.item-top {
						font-size: 26rpx;
						line-height: 48rpx;
						font-family: PingFang SC-Medium, PingFang SC;
						text-align: right;
					}

					.item-bottom {
						width: 76rpx;
						height: 44rpx;
						font-size: 20rpx;
						font-family: PingFang SC-Regular, PingFang SC;
						font-weight: 400;
						color: #F8DBDE;
						line-height: 22rpx;
						text-align: right;
					}

				}

			}
		}
	}
</style>