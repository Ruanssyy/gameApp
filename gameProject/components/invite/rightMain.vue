<template>
	<view class="right-main">
		<view class="main-banner">
			广告图
		</view>
		<view class="main-money">
			<view class="main-money-top">
				<view class="">
					<view class="item-num">
						$ 623.02
					</view>
					<view class="item-text">
						Betting bonus
					</view>
				</view>
				<view class="">
					<view class="item-num">
						$ 623.02
					</view>
					<view class="item-text">
						Betting bonus
					</view>
				</view>
			</view>
			<view class="main-money-bottom">
				<button class="recharge">Recharge</button>
				<button class="withdraw">Withdraw</button>
			</view>
		</view>
		<view class="main-url-total">
			<view class="main-url">
				<view class="url-left">
					Url do convite
				</view>
				<view class="url-input">
					<u--input placeholder="www.safsgda.com" class="u-input" v-model="value" @change="change">
						<template slot="suffix">
							<view class="suffix-bg">

							</view>
						</template>
					</u--input>
				</view>
			</view>
			<view class="main-total">
				<view class="total-item">
					<text>Total number of invitations:</text><text class="total-item-num">2</text>
				</view>
				<view class="total-item">
					<text>Total number of invitations:</text><text class="total-item-num">2</text>
				</view>
			</view>
		</view>
		<view class="main-people">
			<view class="people-item">
				<view class="item-left">
				</view>
				<view class="item-right">
					<view class="item-right-text">
						<text>Invite 5 people</text>
						<text style="color:#EFED6C ;">$ 10.00</text>
					</view>
					<button>
						Receive
					</button>
				</view>
			</view>
			<view class="people-item">
				<view class="item-left">
				</view>
				<view class="item-right">
					<view class="item-right-text">
						<text>Invite 5 people</text>
						<text style="color:#EFED6C ;">$ 10.00</text>
					</view>
					<button>
						Receive
					</button>
				</view>
			</view>
			<view class="people-item">
				<view class="item-left">
				</view>
				<view class="item-right">
					<view class="item-right-text">
						<text>Invite 5 people</text>
						<text style="color:#EFED6C ;">$ 10.00</text>
					</view>
					<button>
						Receive
					</button>
				</view>
			</view>
			<view class="people-item">
				<view class="item-left">
				</view>
				<view class="item-right">
					<view class="item-right-text">
						<text>Invite 5 people</text>
						<text style="color:#EFED6C ;">$ 10.00</text>
					</view>
					<button>
						Receive
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		},
		methods: {
			change(e) {
				console.log('change', e);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.right-main {
		width: 100%;
		margin: 0 auto;

		//广告图
		.main-banner {
			width: 548rpx;
			height: 262rpx;
			border-radius: 18rpx 18rpx 18rpx 18rpx;
			opacity: 1;
			border: 6rpx solid #CB4D6E;
			background: pink;
		}

		//右侧充值提现面板
		.main-money {
			width: 548rpx;
			height: 382rpx;
			box-sizing: border-box;
			padding: 40rpx;
			background: #9F3752;
			border-radius: 18rpx 18rpx 18rpx 18rpx;
			opacity: 1;

			.main-money-top {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 48rpx;

				.item-num {

					font-size: 41rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 500;
					color: #EFED6C;

				}

				.item-text {
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #F8DBDE;
					text-align: center;
				}

			}

			.main-money-bottom {
				button {
					width: 476.96rpx;
					height: 74rpx;
				}

				.button:active {
					color: #CE5272;
					background: #FFEEB7;
				}

				.recharge {
					margin-bottom: 16rpx;
					color: #CE5272;
					background: #FFEEB7;
					font-size: 26rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 600;
					color: #BD4A68;
				}

				.withdraw {
					margin-bottom: 16rpx;
					color: #F8DBDE;
					background: #CE5272;
					font-size: 26rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 600;
				}
			}
		}

		.main-url-total {

			.main-url {

				box-sizing: border-box;
				padding-top: 28rpx;
				padding-bottom: 34rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 8rpx;
				width: 548rpx;
				height: 126rpx;
				background: #9F3752;
				border-radius: 18rpx 18rpx 18rpx 18rpx;
				opacity: 1;
				padding-left: 30rpx;
				padding-right: 34rpx;
				.url-left {
					width: 84rpx;
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #F8DBDE;
					

				}

				.url-input {
					flex: 1;

					.u-input {
						width: 344rpx;
						height: 40rpx;
						background: #9F3752;
						border-radius: 12rpx 12rpx 12rpx 12rpx;
						opacity: 1;
						border: 2rpx solid rgba(255, 255, 255, 0.23);
						margin-left: 16rpx;
					}

					.suffix-bg {
						width: 38rpx;
						height: 36rpx;
						background: url("../../static/images/invite/changeText.png") no-repeat 100%;
						opacity: 1;
					}
				}
			}
		}

		.main-total {
			width: 548rpx;
			height: 192rpx;
			background: #9F3752;
			border-radius: 18rpx 18rpx 18rpx 18rpx;
			opacity: 1;
			margin-top: 8rpx;
			box-sizing: border-box;
			padding-left: 28rpx;
			padding-right: 50rpx;
			padding-top: 30rpx;

			.total-item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 24rpx;

				text {
					width: 340rpx;
					height: 28rpx;
					font-size: 26rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #F8DBDE;
					line-height: 28rpx;

				}

				.total-item-num {
					width: 20rpx;
					height: 48rpx;
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 500;
					color: #EFED6C;
					line-height: 48rpx;

				}
			}
		}

		.main-people {
			width: 548rpx;
			height: 460rpx;
			background: #9F3752;
			border-radius: 18rpx 18rpx 18rpx 18rpx;
			opacity: 1;
			margin-top: 8rpx;
			// padding-top: 30rpx;
			// box-sizing: border-box;
			.people-item{
				width: 100%;
				justify-content: space-between;
				display: flex;
				align-items: center;
				padding-top: 20rpx;
			}
			.item-left {
				width: 34rpx;
				height: 34rpx;
				background: url("../../static/images/invite/people.png") no-repeat 100%;
				margin: 22rpx;
			}

			.item-right {
			flex: 1;
				display: flex;
				align-items: center;
				border-bottom:2rpx solid #AE4765  ;
				padding-bottom:8rpx;
				.item-right-text {
					display: flex;
					flex-direction: column;
					color: #F8DBDE;

				}

				button {
					height: 36rpx;
					font-size: 20rpx;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #EFED6C;
					line-height: 28rpx;
					border: 2rpx solid #EFED6C;
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					// background: url("../../static/images/invite/button-bg.png") no-repeat 100%;
					transform: translateX(30rpx);
				}
			}
		}

	}
</style>