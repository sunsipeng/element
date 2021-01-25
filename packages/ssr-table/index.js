import ElSSRTable from './src/table';

/* istanbul ignore next */
ElSSRTable.install = function(Vue) {
  Vue.component(ElSSRTable.name, ElSSRTable);
};

export default ElSSRTable;
