import React, { useState, Fragment } from 'react';
import { useQuery } from '@apollo/client';
import FETCH_TARGETS_LIST from '../../services/queries';
import '../../styles/DataTableStyles.css';
import ChartTab from '../ChartTab/ChartTab';

interface DataType {
  disease: {
    associatedTargets: {
      rows: Array<{
        target: {
          id: string;
          approvedSymbol: string;
          approvedName: string;
        };
        score: number;
        datatypeScores: number;
      }>;
    };
  };
}

function DataTable() {
  const { data, loading, error } = useQuery<DataType>(FETCH_TARGETS_LIST);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  const handleExpandRow = (id: string) => {
    setExpandedRows((prevState) =>
      prevState.includes(id)
        ? prevState.filter((rowId) => rowId !== id)
        : [...prevState, id]
    );
  };

  if (loading) {
    return <div data-testid="loading-data-table" />;
  }

  if (error) {
    return <div>{`Error: ${error.message}`}</div>;
  }

  return (
    <div id="wrapper">
      <h3>Genes Associated with Lung Carcinoma</h3>
      <table>
        <thead>
          <tr>
            <th style={{ width: '3%' }} aria-label="Expand/Collapse" />
            <th style={{ width: '15%' }}>Approved Symbol</th>
            <th style={{ width: '32%' }}>Gene Name</th>
            <th style={{ width: '35%' }}>Overall Association Score</th>
          </tr>
        </thead>
        <tbody>
          {data?.disease.associatedTargets.rows.map(
            ({ target, score, datatypeScores }, index) => {
              const isRowExpanded = expandedRows.includes(target.id + index);
              return (
                <Fragment key={target.id}>
                  <tr className={target.id}>
                    <td
                      className="cell"
                      onClick={() => handleExpandRow(target.id + index)}
                      aria-label={isRowExpanded ? 'Collapse row' : 'Expand row'}
                    >
                      {isRowExpanded ? '-' : '+'}
                    </td>
                    <td>
                      <a
                        href={`https://platform.opentargets.org/target/${target.id}`}
                      >
                        {target.approvedSymbol}
                      </a>
                    </td>
                    <td>{target.approvedName}</td>
                    <td>{score.toFixed(3)}</td>
                  </tr>
                  {isRowExpanded && (
                    <tr id={target.id + index}>
                      <td colSpan={4} aria-label="Expanded content">
                        <ChartTab
                          index={index}
                          datatypeScores={datatypeScores}
                          title={target.approvedSymbol}
                        />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
