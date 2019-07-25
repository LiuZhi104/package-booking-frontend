<template>
<!--  <Row>-->
<!--    <Col span="8">-->
<!--      <Menu :theme="dark">-->
<!--        <Submenu name="1">-->
<!--          <template slot="title">-->
<!--            <Icon type="ios-paper" />-->

<!--          </template>-->
<!--          <MenuItem name="1-1"></MenuItem>-->
<!--        </Submenu>-->
<!--      </Menu>-->
<!--    </Col>-->
<!--  </Row>-->
  <Row style="background:#eee;padding:20px">
    <Card :bordered="false">
      <div>
        <h2 class="left">Mockup</h2>
      </div>
      <br>
      <br>
      <div>
        <h4 class="left">首页</h4>
      </div>
      <br>
      <br>
      <div>
        <h3 class="left">菜鸟驿站</h3>
        <br>
        <br>
        <div class="right">
          <Button type="default" @click="all">All</Button>
          <Button type="default" @click="complete" >已预约</Button>
          <Button type="default" @click="pickup" >已取件</Button>
          <Button type="default" @click="active" >未预约</Button>
          <Icon type="md-add" @click="add" />
        </div>
      </div>
      <div>
        <Table border :columns="columns7" :data="data6"></Table>
      </div>
    </Card>
  </Row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    add () {
      this.$store.dispatch('addItems')
    },
    complete () {
      this.$store.dispatch('complete')
    },
    pickup () {
      this.$store.dispatch('getPickup')
    },
    active () {
      this.$store.dispatch('active')
    }
  },
  data () {
    return {
      columns7: [
        {
          title: '运单号',
          key: 'id',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.id)
            ])
          }
        },
        {
          title: '收件人',
          key: 'pickup'
        },
        {
          title: '电话',
          key: 'phone'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '预约时间',
          key: 'startTime'
        },
        {
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '确认收货')
            ])
          }
        }
      ],
      data6: [
        {
          id: '',
          pickup: '',
          phone: '',
          status: '',
          startTime: ''
        }
      ]
    }
  }
}

</script>
<style>
  .left{
    float: left;
  }
  .right{
    float: right;
  }
</style>
