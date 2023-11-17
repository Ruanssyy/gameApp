<template>
	<view class="nav">
		<image class="back" src="@/static/images/go-back.png" mode="" @click="goBack"></image>
		<view class="title">
			{{navSlot.title}}
		</view>
		<view class="slot-right" :style="{color:navSlot.color}" @click="rightEvent">
			{{navSlot.rightName}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			navSlot: {
				default: '',
				type: Object
			}
		},
		name: "nav",
		data() {
			return {

			};
		},
		methods: {
			rightEvent() {
				this.$emit('rightEvent')
			},
			goBack() {
				const pages = getCurrentPages()
				if (pages.length === 1) {
					if (typeof params === 'number') {
						history.go(-params)
					} else {
						history.back()
					}
				} else {
					uni.navigateBack()
				}
			}
		}
	}
</script>

<style lang="scss">
	.nav {
		display: flex;
		justify-content: space-between;
		height: 60px;
		align-items: center;
		padding: 0 10px;
		background-color: #e56e8b;

		.back {
			width: 26px;
			height: 26px;
		}

		.title {
			color: #fff;
		}
	}
</style>