<script>
	// import h5PagesAnimation from './components/h5-pages-animation/';
	export default {
		// mixins: [h5PagesAnimation],
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
		@import "uview-ui/index.scss";
	/*每个页面公共css */
	page {
		background-color: #b84863;
		height: 100%;
	}
	/* 解决H5 的问题 */
	/* #ifdef H5 */
	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
</style>