<template>
  <Row class="row-home">
    <div class="row-home-header">
      <div class="div-back"><h1>菜鸟驿站</h1></div>
    </div>
    <Layout class="row-col">
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="tableContent" theme="dark" width="auto" @on-select="selectMenuItem">
          <MenuItem name="tableContent" class="menu-item-list">首页</MenuItem>
          <MenuItem name="parcelStorage" class="menu-item-mine">包裹入库</MenuItem>
          <MenuItem name="appointment" class="menu-item-mine">预约取件</MenuItem>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout class="layout-content">
        <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </Row>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      itemName: '',
      tableStatus: 1,
      confirmModel: false,
      isCollapsed: false,
      confirm: true
    }
  },
  methods: {
    selectMenuItem (itemName) {
      this.$router.push({ name: itemName })
    },
    back () {
      this.$router.push({ name: 'main' })
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$Modal.confirm({
      content: 'Do you want to go back to the previous component?',
      onOk: () => {
        next(true)
      },
      onCancel: () => {
        next(false)
      }
    })
  }
}
</script>

<style scoped>
</style>