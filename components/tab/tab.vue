<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll-box">
				<view class="scroll-item" v-for="(item,index) in list" :key="index" @click="itemClick(item,index)" :class="{active:selectIndex===index}">
					{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icon">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		// 监听值变化
		watch: {
			tabIndex(newVal, oldVal) {
				this.selectIndex = newVal
			}
		},
		data() {
			return {
				selectIndex: 0
			};
		},
		methods: {
			itemClick(item, index) {
				console.log(item, index)
				this.selectIndex = index
				this.$emit("tabChange", {
					data: item,
					index: index
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		width: 100%;
		border-bottom: 1px #f5f5f5 solid;
		background-color: #fff;
		box-sizing: border-box;

		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;

			.tab-scroll-box {
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				height: 45px;
				box-sizing: border-box;

				.scroll-item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
					font-weight: bold;

					&.active {
						color: $uni-color-primary;
					}
				}
			}

		}

		.tab-icon {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;

			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #999;
			}
		}
	}
</style>
