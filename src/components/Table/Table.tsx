import React from 'react';
import classNames from 'classnames/bind';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

import styles from './Table.module.scss';

const cx = classNames.bind(styles);

export interface Column<T> {
  title: string;
  dataIndex: keyof T | string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
}

interface PaginationProps {
  currentPage: number;
  totalPage: number;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  pagination: PaginationProps;
  onPageChange: (page: number) => void;
}

export default function Table<T>({
  columns,
  data,
  pagination,
  onPageChange,
}: TableProps<T>) {
  const { currentPage, totalPage } = pagination;

  return (
    <div className={cx('table-container')}>
      <table className={cx('table')}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((record, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => {
                const value = (record as any)[col.dataIndex];
                return (
                  <td key={colIndex}>
                    {col.render ? col.render(value, record, rowIndex) : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={cx('pagination')}>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <FaAngleLeft />
        </button>
        <span>
          {currentPage} / {totalPage}
        </span>
        <button
          disabled={currentPage === totalPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
