<template>
	<view>
		<NavHeader :nav-slot="navSlot"></NavHeader>
		{{id}}
	</view>
</template>

<script>
	import NavHeader from '../../../components/navHeader.vue'
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

<style>

</style>
