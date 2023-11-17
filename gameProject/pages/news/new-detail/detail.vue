<template>
	<view class="news-detail">
		<NavHeader :nav-slot="navSlot"></NavHeader>
		<view class="detail-top">
			<view class="title">Ac Network is a decentralized fixed income securities network that enables</view>
			<view class="essay-info">
				<view class="">
					Baidu 1 weel ago
				</view>
				<view class="">
					269 Collection
				</view>
			</view>
		</view>
		<view class="detail-content">
			<image class="image" src="../../../static/images/essay-detail.png" mode=""></image>
			 Ac Network is a decentralized fixed income securities network that enables the listing, exchange, and securitization of fixed income financial instruments. The platform is defined by an asset-agnostic, multi-currency distributed ledger and is designed to cultivate adoption by financial institutions. At a high level, FIC Network's mission is to enable participants to source, buy and sell financial products in a simple, inexpensive, transparent and secure way. Should the platform develop as envisioned, it could
			 ultimately broadly impact markets' financial stability and resiliency.
			 After concluding an oversubscribed private sale that raised more than 3,500 ETH, FIC Network is now in
			 the midst of its presale, with a public sale targeted for April 16. Employing a reasonable and conservative
			 approach to questions of regulation, the FIC Network plans to file its raise with the SEC under a Regulation D exemption. Prospective investors may find it refreshing to discover a project that’s taken
			 the effort to cross their t’s and dot their i’s from the beginning, especially a project operating at the intersection of the blockchain space's regulatory uncertainty and opacity, and an industry known for its
			 Obmpley weh of federal and state law
			 C
		</view>
	</view>
</template>

<script>
	import NavHeader from '@/components/navHeader.vue'
	export default {
		components:{
			NavHeader
		},
		data() {
			return {
				id:'',
				navSlot:{
					title:'News',
					color:'yellow',
					rightName:''
				}
			}
		},
		methods: {
			
		},
		created() {
			console.log(this.$route.query.id);
			this.id = this.$route.query.id
		}
	}
</script>

<style lang="scss">
	.news-detail {
		.detail-top {
			width: 90%;
			margin: 20rpx auto 0;
			.title {
				font-size: 32rpx;
				font-family: Work Sans, Work Sans;
				font-weight: bold;
				color: #fff;
				line-height: 44rpx;
			}
			.essay-info {
				display: flex;
				justify-content: space-between;
				margin-top: 15rpx;
				color: #D18B99;
			}
		}
		.detail-content {
			width: 90%;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC;
			font-weight: 400;
			color: #F8DBDE;
			line-height: 28rpx;
			margin: 20rpx auto 0;
			.image {
				width: 100%;
				text-align: center;
				margin: auto;
				margin-bottom: 10rpx;
			}
		}
		
	}
</style>
