<template>
	<view>
		<NavHeader :slot-right="slotRight"></NavHeader>
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
				slotRight:{
					name:'',
					color:'yellow'
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
