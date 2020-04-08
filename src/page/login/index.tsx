import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
import style from './index.module.scss'
// import {add} from '@/api/article'

@Component
export default class About extends tsc<Vue> {
  names = 'login.names'
  tableData = [
    {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1517 弄',
      zip: 200333,
    },
  ]
  handleClick(row) {
    console.log(row)
    // console.log(this)
  }
  render() {
    return (
      <div class={style.container}>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2 class="center white">李可凡个人博客管理后台</h2>
          </div>
          {[1, 2, 3].map(item => (
            <div key={item}>{item}</div>
          ))}
          <el-table data={this.tableData} border style="width: 100%">
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300"
            ></el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              width="120"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              {/* <template slot-scope="scope"> */}
              {({ row }) => [
                <el-button
                  onClick={() => this.handleClick(row)}
                  type="text"
                  size="small"
                >
                  查看
                </el-button>,
                <el-button type="text" size="small">
                  编辑
                </el-button>,
              ]}
            </el-table-column>
          </el-table>
          {/* <el-form class="whiteLabel" :rules="rules" :model="form" ref="form" label-width="70px">
        <el-form-item label="用户名" prop="userName">
          <el-input @keyup.enter.native="submit('form')" v-model.trim="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input @keyup.enter.native="submit('form')" type="password" v-model="form.passWord"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit('form')">确认登录</el-button>
          <el-button @click="reset('form')">重置</el-button>
        </el-form-item>
      </el-form> */}
        </el-card>
      </div>
    )
  }
  chifan = () => {
    console.log(this.names)
    // console.log(await add());
    // this.naes=123
    // console.log()
    // const data=await http.get(`${process.env.VUE_APP_BASE_URL}/tag/all`)
    // console.log(data)
  }
}
// </script>
