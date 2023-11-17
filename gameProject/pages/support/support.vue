<template>
	<view class="support">
		<view class="support-welcome">
			<image class="image" src="../../static/logo.png" mode=""></image>
			<view class="welcome-text">
				<view>
					Hello~
				</view>
				<view class="welcome">
					Welcome
				</view>
			</view>
		</view>
		<view class="support-content">
			<view class="content-top">
				<image class="image" src="../../static/images/support/service.png" mode=""></image>
				<view class="text">
					Contact us via under methods？
				</view>
			</view>
			<view class="app-list">
				<view class="list-item" v-for="item in appList">
					<image class="image" :src="item.icon" mode=""></image>
					<view class="list-name">
						{{item.key}}
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="service">
				Service attitude
			</view>
			<view class="support-bottom-btn">
				Like
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				appList:[{
					key:'Telegram',
					icon:'../../static/images/support/telegram.png'
				},{
					key:'WhatApp',
					icon:'../../static/images/support/whatsApp.png'
				},{
					key:'Mail',
					icon:'../../static/images/support/mail.png'
				}]
			}
		},
		methods: {
		
		}
	}
</script>

<style lang="scss">
	.support {
		font-size: 32rpx;
		.support-welcome {
			height: 262rpx;
			display: flex;
			align-items: center;
			width: 90%;
			margin: auto;
			.image {
				height: 262rpx;
				width: 262rpx;
			}
			.welcome-text {
				margin-left: 30px;
				font-size: 42rpx;
				color: #fff;
				.welcome {
					margin-top: 5px;
				}
			}
		}
		.support-content {
			width: 90%;
			height: 714rpx;
			background: #FFFFFF;
			border-radius: 10px 10px 10px 10px;
			opacity: 1;
			border: 1px solid #EDEDED;
			margin: 20px auto;
			padding-top: 10px;
			.content-top {
				display: flex;
				.image {
					width: 25px;
					height: 25px;
					margin-left: 20px;
				}
				.text {
					margin-left: 10px;
				}
			}
			.app-list {
				display: flex;
				justify-content: space-around;
				margin-top: 30px;
				.list-item {
					width: 182rpx;
					height: 166rpx;
					padding-bottom: 20rpx;
					background: #F4F4F4;
					border-radius: 5px 5px 5px 5px;
					opacity: 1;
					display: flex;
					flex-wrap: wrap;
					align-items: center;
					justify-content: center;
					.image {
						height: 130rpx;
						width: 130rpx;
					}
					.list-name{
						width: 100%;
						text-align: center;
					}
				}
			}
			.line {
				width: 90%;
				height: 0px;
				border-radius: 0px 0px 0px 0px;
				opacity: 1;
				border: 1px solid #EBEBEB;
				margin: 30px auto 15px;
			}
			.service {
				width: 90%;
				margin: auto;
			}
			.support-bottom-btn {
				width: 556rpx;
				height: 88rpx;
				background: #CA5C78;
				border-radius: 5px 5px 5px 5px;
				opacity: 1;
				color: #fff;
				margin: auto;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 50px;
			}
		}
	}
</style>
