<template>
  <Row style="background:#eee;padding:20px">
    <Card :bordered="false">
      <div>
        <h2 class="left">Mockup</h2>
      </div>
      <div>
        <h4 class="left">首页</h4>
      </div>
      <div>
        <h3 class="left">菜鸟驿站</h3>
        <div class="right">
          <Button type="default" ghost>All</Button>
          <Button type="default" ghost>已预约</Button>
          <Button type="default" ghost>已取件</Button>
          <Button type="default" ghost>未预约</Button>
          <Icon type="md-add" @click="add" />
        </div>
      </div>
      <div>
        <Table stripe :columns="columns1" :data="data1"></Table>
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
    methods:{
      add(){
        this.headerItems.push(columns1);
        this.listItems.push(data1);
      }

    }
    data () {
      return {
        columns1: [
          {
            title: '运单号',
            key: 'id'
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
            key: 'staus'
          },
          {
            title: '预约时间',
            key: 'startTime'
          }
        ],
        data1: [
          {
            id: '',
            pickup: '',
            phone: '',
            satus: '',
            startTime:''
          },
        ],
        listItems: [],
        headerItem:[]

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
