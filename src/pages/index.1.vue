<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <router-link :to="item.url" tag="li" v-for="item in product.list">
              <a >{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">hot</span>
            </router-link>
          </ul>
          <div class="hr" v-if="!product.last"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: "数据统计",
          url: "Detail"
        },
        {
          title: "数据预测",
          url: "A"
        },
        {
          title: "流量分析",
          url: "B",
          hot: true
        },
        {
          title : "广告发布",
          url: "http://hearstone.com"
        }
      ],
      productList: {
        pc: {
          title: "PC产品",
          list: [
            {
              name: "数据统计",
              url: "Detail"
            },
            {
              name: "数据预测",
              url: "A"
            },
            {
              name: "流量分析",
              url: "B",
              hot: true
            },
            {
              name: "广告发布",
              url: "http://hearstone.com"
            }
          ]
        },
        app: {
          title: "手机应用类",
          last: true,
          list: [
            {
              name: "91助手",
              url: "http://weixin.com"
            },
            {
              name: "产品助手",
              url: "http://twitter.com",
              hot: true
            },
            {
              name: "智能地图",
              url: "http://maps.com"
            },
            {
              name: "团队语音",
              url: "http://phone.com"
            }
          ]
        }
      }
    };
  },
  created () {
    // this.$http.get('getList')
    // .then(function (data) {
    //   console.log(data)
    // }, function (err) {
    //   console.log(err)
    // })
  }
};
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
  height: 100px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}

.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
