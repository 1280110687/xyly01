<template>
  <div>
    <!-- 1 乘机人 -->
    <div class="fly_people">
      <!-- 这里要使用隐藏域调用计算属性，不然 vue 不会帮我们执行计算的代码 -->
      <input type="hidden" :value="price">
      <div class="fly_people_title">乘机人</div>
      <div class="fly_people_content">
        <el-form label-position="top" label-width="80px">
          <div class="user_item" v-for="(item,index) in users" :key="index">
            <el-form-item label="乘机人类型">
              <el-row>
                <el-col :span="6">
                  <el-select value="成人" placeholder>
                    <el-option label="成人" value="成人"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="18">
                  <el-input v-model="item.username"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <div class="decrement" @click="handleDecrement(index)" v-if="index!==0">X</div>
            <el-form-item label="证件类型">
              <el-row>
                <el-col :span="6">
                  <el-select value="身份证" placeholder>
                    <el-option label="身份证" value="身份证"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="18">
                  <el-input v-model="item.id"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button @click="addUsers" type="primary">添加乘机人</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 1 乘机人 -->
    <!-- 2 保险 -->
    <div class="insurance">
      <div class="insurance_title">保险</div>
      <div class="insurance_content">
        <div class="insurance_row" v-for="(item, index) in airTicket.insurances" :key="index">
          <el-checkbox
            label="备选项1"
            border
            @change="handleInsurancesChange(item.id)"
          >{{item.price}}/份×1最高赔付{{item.compensation}}</el-checkbox>
        </div>
      </div>
    </div>
    <!-- 2 保险 -->
    <!-- 3 联系人 -->
    <div class="contact">
      <div class="contact_title">联系人</div>
      <div class="contact_content">
        <el-form label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="contactName"></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <el-input v-model="contactPhone">
              <template slot="append">
                <div @click="handleCaptchaChange">发送验证码</div>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="验证码">
            <el-input v-model="captcha"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">提交订单</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 3 联系人 -->
  </div>
</template>

<script>
export default {
  props: {
    airTicket: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      // 乘机人
      users: [{ username: "", id: "" }],
      // 保险id
      insurances: [],
      // 联系人姓名
      contactName: '',
      // 联系人电话
      contactPhone: '14715871345',
      // 验证码
      captcha: "000000",
      // 开发票
      invoice: false,
      // 座位
      seat_xid: this.$route.query.seat_xid,
      // 航班
      air: this.$route.query.id
    }
  },
  methods: {
    // 添加乘机人    因为需要存储两个参数，所以以数组对象方式存储
    addUsers () {
      this.users.push({ username: "", id: "" })
    },
    // 删除乘机人
    handleDecrement (index) {
      this.users.splice(index, 1)
    },
    // 发送验证码
    handleCaptchaChange () {
      // 获取手机号判断合法性
      let reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (reg.test(this.contactPhone)) {
        this.$axios
          .post('/captchas', { tel: this.contactPhone })
          .then(res => {
            // this.$message.warning('123')
            this.$confirm('验证码是：' + res.data.code)
          })
      } else {
        this.$message.warning('手机号不合法 ￣へ￣')
      }
    },
    // 获取当前选中的保险
    handleInsurancesChange (id) {
      const index = this.insurances.findIndex(v => v === id)
      if (index === -1) {
        // 如果 findIndex返回 -1， 表示没有添加  执行添加
        this.insurances.push(id)
      } else {
        this.insurances.splice(index, 1)
      }
    }
  },
  computed: {
    // 使用计算属性计算订单总额
    price () {
      // 1 先声明
      let price = 0;
      // 机票费用
      price += this.airTicket.base_price;
      // 机建、燃油费
      price += this.airTicket.airport_tax_audlet;
      // 保险费  因为是复选框且是数组形式 So 要拿到 数组 id 去 ticket.insurances 找到 这个id 的价格
      // !!!! 遍历的是data中的数字对象
      this.insurances.forEach(v => {
        // 遍历这个数组，再找到该索引对应的数据     vv =  {id: 1, type: "航空意外险", price: 30, compensation: "260万", created_at: 1555487082133,…}
        const index = this.airTicket.insurances.findIndex(vv => vv.id === v);
        const item = this.airTicket.insurances[index];

        price += item.price;
      })
      price *= this.users.length;

      // 给父组件传值
      let usersLength = this.users.length
      this.$emit('countPrice', price,usersLength)

      return price
    }
  }
};
</script>

<style lang="less" scoped>
.fly_people_title,
.insurance_title,
.contact_title {
  padding: 20px 0;
  font-size: 30px;
}
.insurance_row {
  margin: 10px 0;
}

.user_item {
  position: relative;
  .decrement {
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: #ccc;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 116px;
    right: -40px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>