<template>
	<swiper class="swiper-home" :current="pageIndex" @change="change">
		<swiper-item class="swiper-item" v-for="item in tab" :key="item.id">
			<list-scroll class="list-scroll"></list-scroll>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		props: {
			tab: {
				type: Array,
				default () {
					return []
				}
			},
			pageIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {};
		},
		methods: {
			change(e) {
				console.log(e)
				this.selectIndex = e
				const {
					current
				} = e.detail
				this.$emit('change', current)
			}
		}
	}
</script>

<style lang="scss">
	.swiper-home {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;

			.list-scroll {
				height: 100%;
			}
		}
	}
</style>
