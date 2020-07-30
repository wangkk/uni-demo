<template>
	<view>
		<view class="card-root">
			<view class="card-image">
				<!-- mode填充模式 aspectFill完全填充-->
				<image :src="'http://dev-scsl.oss-cn-hangzhou.aliyuncs.com/'+item.content1" mode="aspectFill"></image>
			</view>
			<view class="card-content">
				<view class="card-title">
					<text>{{item.name}}</text>
				</view>
				<view class="card-desc">内容描述</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			},
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.card-root {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		// 阴影
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);

		.card-image {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.card-content {
			display: flex;
			flex-direction: column;
			padding-left: 10px;
			width: 100%;

			.card-title {
				font-size: 14px;
				color: #333;
				margin-top: 5px;
				font-weight: bold;
				line-height: 1.2;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					// 超出2行...
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical
				}
			}

			.card-desc {
				margin-top: 5px;
				font-size: 12px;
				color: #666;
			}
		}
	}
</style>
