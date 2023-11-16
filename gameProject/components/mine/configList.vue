<template>
    <view>
        <u-grid
                :border="false"
                col="4"
        >
            <u-grid-item
                    v-for="(listItem,listIndex) in list"
                    :key="listIndex"
            >
                <u-icon
                        :customStyle="{paddingTop:20+'rpx'}"
                        :name="listItem.name"
                        :size="22"
                ></u-icon>
                <text class="grid-text">{{listItem.title}}</text>
            </u-grid-item>
        </u-grid>
        <u-toast ref="uToast" />
    </view>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                    name: 'photo',
                    title: '图片'
                    },
                    {
                        name: 'lock',
                        title: '锁头'
                    },
                    {
                        name: 'star',
                        title: '星星'
                    },
                    {
                        name: 'hourglass',
                        title: '沙漏'
                    },
                    {
                        name: 'home',
                        title: '首页'
                    },
                    {
                        name: 'star',
                        title: '音量'
                    },
                ],
            }
        },
        methods: {
            click(name) {
                this.$refs.uToast.success(`点击了第${name}个`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .grid-text {
        font-size: 14px;
        color: #909399;
        padding: 10rpx 0 20rpx 0rpx;
        /* #ifndef APP-PLUS */
        box-sizing: border-box;
        /* #endif */
    }
</style>
