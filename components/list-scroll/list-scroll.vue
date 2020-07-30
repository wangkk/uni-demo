<template>
	<view class="content">
		<scroll-view class="content-scroll" scroll-y>
			<view class="scroll-content">
				<card-item v-for="item in subList" :key="item.value" :item="item"></card-item>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				subList: []
			};
		},
		created() {
			this.getList()
		},
		methods: {
			getList() {
				uni.request({
					url: "http://test_scsl_api.ihibuilding.cn/api/v1/common/code/getCodeBoxList",
					data: {
						'code_type': 'workModule'
					},
					header: {
						'token': '5cb4ac76556ae1d221c6c90f5ceb2070',
						'sid': 'rnols4kasgolq0136h5gcr4m3gvgh7qr'
					},
					method: 'GET',
					success: (res) => {
						console.log(res.data.data);
						var dataList = []
						dataList = res.data.data
						console.log(dataList)
						this.subList = dataList[0].sub_data
						console.log("subList", this.subList)
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;

		.content-scroll {
			height: 100%;
			display: flex;
			box-sizing: border-box;
			flex-direction: column;
		}
	}
</style>
