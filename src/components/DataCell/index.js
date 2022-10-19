const DataCell = ({value, className}) =>
  <p
    className={className}
    dangerouslySetInnerHTML={{
      __html: value
    }}
  />;

export default DataCell;