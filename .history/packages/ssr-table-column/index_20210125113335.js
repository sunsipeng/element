import ElSSRTableColumn from '../ssr-table/src/table-column';

/* istanbul ignore next */
ElSSRTableColumn.install = function(Vue) {
  Vue.component(ElSSRTableColumn.name, ElSSRTableColumn);
};

export default ElSSRTableColumn;
