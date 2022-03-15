<template>
  <info-table :columns="WorkOrderColumns"> </info-table>
</template>

<script>
import InfoTable from '../components/info-table/index.vue';
const WorkOrderColumns = [
  {
    title: '所属水厂',
    dataIndex: 'waterPlantName',
    ellipsis: true,
    width: 100
  },
  {
    title: '工单标题',
    dataIndex: 'title',
    ellipsis: true,
    width: 150
  },

  {
    title: '接单人',
    dataIndex: 'orderName',
    ellipsis: true,
    width: 150
  },
  {
    title: '当前处理人',
    dataIndex: 'stepInfoList',
    ellipsis: true,
    width: 150,
    customRender(text, row) {
      if (text) {
        return (
          text
            .map((i) => i.waitAcceptName)
            .join(',')
            .replace(/\\/g, ',') || '--'
        );
      }
      if (row?.ticketInfoVO?.stepInfoList) {
        return (
          row?.ticketInfoVO?.stepInfoList
            .map((i) => i.waitAcceptName)
            .join(',')
            .replace(/\\/g, ',') || '--'
        );
      }

      return row.stepOperator || '--';
    }
  },

  {
    title: '优先级',
    dataIndex: 'priority',
    ellipsis: true,
    width: 100
  },

  {
    title: '所属工单分类',
    dataIndex: 'categoryIds',
    ellipsis: true,
    width: 150
  },

  {
    title: '工单模版',
    dataIndex: 'templateName',
    ellipsis: true,
    width: 200,
    customRender(text, row) {
      return row?.ticketInfoVO?.templateName || text || '--';
    }
  },

  {
    title: '创建人',
    dataIndex: 'createUser',
    ellipsis: true,
    width: 150,
    customRender(text, row) {
      return row.createByName || text || '--';
    }
  },

  {
    title: '工单编号',
    dataIndex: 'ticketNo',
    ellipsis: true,
    width: 200
  },

  {
    title: '操作',
    dataIndex: 'action',
    type: 'action',
    showType: 'a',
    ellipsis: true,
    align: 'center',
    fixed: 'right',
    width: 100,
    events: [
      {
        name: '详情',
        key: 'info'
      }
    ]
  }
];
export default {
  name: 'ExampleIndex',
  components: {
    InfoTable
  },
  beforeCreate() {
    this.WorkOrderColumns = WorkOrderColumns;
  }
};
</script>
