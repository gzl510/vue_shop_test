<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @close="goOrderListPage">
      购买成功
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @close="goOrderListPage">
      购买失败
    </this-dialog>
  </div>
</template>
<script>
import ThisDialog from '@/components/base/dialog'
export default {
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [Number, String]
    }
  },
  components: {
    ThisDialog
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http.get('/api/checkOrder', {
        orderId: this.orderId
      })
      .then((res) => {
        this.isShowSuccessDialog = true
        this.$emit('on-close-check-dialog')
      }, (err) => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    goOrderListPage () {
      this.$router.push('/orderList')
    }
  }
}
</script>
<style scoped>

</style>
