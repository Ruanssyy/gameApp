<template>
	<view class="news">
		<view class="news-swiper-container">
			<swiper class="swiper" :autoplay="true" :interval="3000" :circular="true">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<image class="slide-image" :src="item.imageUrl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="news-container" v-for="item in newsList" @click="goDetail(item.key)" :key="item.key">
			<view class="container-left">
				<view class="text">
					{{item.content}}
				</view>
				<view class="time">
					{{item.time}}
				</view>
			</view>
			<view class="container-right">
				<image class="image" src="../../static/images/new-detail.png" mode=""></image>
			</view>
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
				newsList: [{
					key:1,
					content: 'Ensuring smooth flood discharge in the river channels, the six major cities in Huzhou Special',
					time: '2023.12.12 19:00:00'
				},{
					key:2,
					content: 'Ensuring smooth flood discharge in the river channels, the six major cities in Huzhou Special',
					time: '2023.12.12 19:00:00'
				},{
					key:3,
					content: 'Ensuring smooth flood discharge in the river channels, the six major cities in Huzhou Special',
					time: '2023.12.12 19:00:00'
				},{
					key:4,
					content: 'Ensuring smooth flood discharge in the river channels, the six major cities in Huzhou Special',
					time: '2023.12.12 19:00:00'
				},{
					key:5,
					content: 'Ensuring smooth flood discharge in the river channels, the six major cities in Huzhou Special',
					time: '2023.12.12 19:00:00'
				},{
					key:6,
					content: 'Ensuring smooth flood discharge in the river channels, the six major cities in Huzhou Special',
					time: '2023.12.12 19:00:00'
				},{
					key:7,
					content: 'Ensuring smooth flood discharge in the river channels, the six major cities in Huzhou Special',
					time: '2023.12.12 19:00:00'
				}]
			}
		},
		methods: {
			goDetail(id){
				uni.navigateTo({
					url:`/pages/news/new-detail/detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.news {
		.news-swiper-container {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 115px;

			.swiper {
				width: 90%;
				border-radius: 10px;
				margin-top: 10px;
				height: 115px;
				.slide-image {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
		}

		.news-container {
			width: 90%;
			margin: auto;
			display: flex;
			align-items: center;
			margin-top: 20px;
			justify-content: space-between;
			border-bottom: 1px solid #9B3A56;
			padding: 10px;
			.container-left {
				width: calc(100% - 135px);
				.text{
					color: #F8DBDE;
				}
				.time {
					margin-top: 15px;
					color: rgba(248,219,222,0.49);
				}
			}
			.container-right {
				.image {
					width: 125px;
					height: 86px;
					border-radius: 5px 5px 5px 5px;
				}
			}
		}
	}
</style>