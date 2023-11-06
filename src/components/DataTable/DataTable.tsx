import React, { Fragment } from 'react';
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

  const handleExpandRow = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('trVisibility');
    }
  };

  if (loading) {
    return <div data-testid="loading-animation" />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div id="wrapper">
      <h3>Genes Associated with Lung Carcinoma</h3>
      <table>
        <thead>
          <tr>
            <th style={{ width: '3%' }} aria-label="Empty header" />
            <th style={{ width: '15%' }}>Approved Symbol</th>
            <th style={{ width: '32%' }}>Gene Name</th>
            <th style={{ width: '35%' }}>Overall Association Score</th>
          </tr>
        </thead>
        <tbody>
          {data?.disease.associatedTargets.rows.map(
            ({ target, score, datatypeScores }, index) => {
              return (
                <Fragment key={target.id}>
                  <tr className={target.id}>
                    <td
                      className="cell"
                      onClick={() => handleExpandRow(target.id + index)}
                    >
                      +
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
                  <tr id={target.id + index} className="trVisibility">
                    <td colSpan={4} aria-label="Expanded content">
                      <ChartTab
                        index={index}
                        datatypeScores={datatypeScores}
                        title={target.approvedSymbol}
                      />
                    </td>
                  </tr>
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
