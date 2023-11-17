<template>
	<view class="flowing-water">
		 <u-sticky class="u-stickt">
		    <u-tabs :list="list1"  lineColor="#EFED6C" lineWidth="65rpx" lineHeight="4rpx" :itemStyle="itemStyle" :inactiveStyle="inactiveStyle" :activeStyle="activeStyle"></u-tabs>
		  </u-sticky>
	</view>
	
</template>

<script>
	  export default {
	        data() {
	            return {
	                list1: [{
	                    name: 'Subordinate rebate flow',
	                }, {
	                    name: 'Personal betting turnover',
	                }],
					activeStyle:{
						color:"#EFED6C"
					},
					inactiveStyle:{
						color:"#F6A9BA"
					},
					itemStyle:{
						width:"calc(100%/2)"
					}
	            }
	        }
	    }
	
</script>

<style lang="scss" scoped>
	.flowing-water{
		width: 564rpx;
		height: 2rpx;
		border-radius: 0rpx 0rpx 0rpx 0rpx;
		opacity: 1;
		text-align: center;
	}
	.u-stickt{
		border-bottom: 2rpx solid #C55774;
	}
</style>