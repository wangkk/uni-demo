<template>
	<view class="navbar">
		<view class="navbar-root">
			<!-- 状态栏 动态style加:-->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- 导航栏 -->
			<view class="navbar-content" :style="{height:navbarHeight+'px'}">
				<view class="navbar-search">
					<view class="navbar-search-icon">
						<uni-icons type="search" color="#999999"></uni-icons>
					</view>
					<view class="navbar-search-text">搜索内容</view>
				</view>
			</view>
		</view>
		<view :style="{height:hideHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 0,
				navbarHeight: 45,
				hideHeight: 45
			};
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			console.log(info);
			this.statusBarHeight = info.statusBarHeight
			this.hideHeight = info.statusBarHeight + 45
			// #ifndef H5||APP-PLUS||MP-ALIPAY
			// 获取微信小程序胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// 胶囊底部高度减去状态栏高度+胶囊底部到导航栏的底部高度（这个高度和胶囊顶部减去状态栏的高度是相等的）
			this.navbarHeight = menuButtonInfo.bottom - info.statusBarHeight + (menuButtonInfo.top - info.statusBarHeight)
			// #endif
		}
	}
</script>

<style lang="scss">
	.navbar {
		.navbar-root {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: #007AFF;

			.navbar-content {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0 15px;
				background-color: #007AFF;
				box-sizing: border-box;

				.navbar-search {
					display: flex;
					align-items: center;
					background-color: #FFFFFF;
					height: 30px;
					width: 100%;
					border-radius: 30px;

					.navbar-search-icon {
						// width: 10px;
						margin-left: 15px;
						// height: 10px;
						// border: 1px red solid;
					}

					.navbar-search-text {
						font-size: 12px;
						margin-left: 10px;
						color: #999999;
					}
				}
			}

		}

	}
</style>
