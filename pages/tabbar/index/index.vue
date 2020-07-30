<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" @tabChange="tabChange" :tabIndex="tabIndex"></tab>
		<!-- <list-scroll></list-scroll> -->
		<tab-swiper class="tab-swiper" :tab="tabList" :pageIndex="pageIndex" @change="pageChange"></tab-swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				tabList: [],
				tabIndex: 0,
				pageIndex: 0
			}
		},
		onLoad() {
			this.getTabs()
		},
		methods: {
			getTabs() {
				uniCloud.callFunction({
					name: "getTabs",
				}).then((res) => {
					console.log(res)
					const {
						result
					} = res
					this.tabList = result.data
				})
			},
			tabChange({
				data,
				index
			}) {
				console.log(index)
				this.pageIndex = index
			},
			pageChange(e) {
				console.log("当前页面：", e)
				this.tabIndex = e
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex: 1;
		// 溢出隐藏
		overflow: hidden;
		flex-direction: column;

		.tab-swiper {
			flex: 1;
			box-sizing: border-box;
		}
	}
</style>
