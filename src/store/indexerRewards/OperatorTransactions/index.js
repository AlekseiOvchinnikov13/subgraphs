import useOperator from '../../../hooks/useOperators';
import {Skeleton, Table, Tooltip, Typography} from 'antd';

const {Text} = Typography;
import {useEffect, useMemo, useState} from 'react';
import {format, subDays} from 'date-fns';

const columns = [
  {
    key: 'to',
    title: 'Beneficiary',
    dataIndex: 'to',
    ellipsis: {
      showTitle: false
    },
    render: (to) => (
      <Tooltip placement="topLeft" title={to}>
        {to}
      </Tooltip>
    )
  },
  {
    key: 'time',
    title: 'Time',
    dataIndex: 'time',
    width: 200
  },
  {
    key: 'value',
    title: 'Value',
    dataIndex: 'value',
    width: 150
  },
  {
    key: 'hash',
    title: 'Hash',
    dataIndex: 'hash',
    ellipsis: {
      showTitle: false,
    },
    render: (hash) => <a href={`https://etherscan.io/tx/${hash}`} target={'_blank'} rel="noreferrer">{hash}</a>
  }
];

const OperatorTransactions = ({data: {beneficiary, operator, name}}) => {
  const notExpiredDate = subDays(new Date(), 27);
  const [data, isLoading] = useOperator(beneficiary);
  const [transactionsData, setTransactionsData] = useState([]);

  const getFormatDataTransactions = useMemo(() => {
    if (data) {
      const array = data.result.map(item => {
        return {
          hash: item.hash,
          to: item.to,
          value: Math.floor((item.value * Math.pow(10, item.tokenDecimal * (-1))) * 100) / 100,
          time: new Date(item.timeStamp * 1000)
        };
      });
      return array.filter(item => item.time >= notExpiredDate);
    }
    return [];
  }, [data]);

  useEffect(() => {
    setTransactionsData(getFormatDataTransactions.map(item => {
      return {...item, time: format(item.time, 'dd-MM-yyyy HH:mm')};
    }));
  }, [data]);

  if (isLoading) return <Skeleton/>;

  return (
    <Table
      columns={columns}
      dataSource={transactionsData}
      scroll={{y: 500}}
      pagination={false}
      size={'middle'}
      title={() => `${name} operator: ${operator}`}
      summary={(pageData) => {
        let totalValue = 0;
        pageData.forEach(({value}) => {
          totalValue += value;
        });
        return (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
            <Table.Summary.Cell index={1}/>
            <Table.Summary.Cell index={2} colSpan={2}>
              <Text strong>{totalValue * 100 / 100}</Text>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        );
      }}
    />
  );
};

export default OperatorTransactions;
