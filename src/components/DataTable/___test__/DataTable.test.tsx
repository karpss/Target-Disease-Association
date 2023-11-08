import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import DataTable from '../DataTable';
import FETCH_TARGETS_LIST from '../../../services/queries';

const mocks = [
  {
    request: {
      query: FETCH_TARGETS_LIST,
    },
    result: {
      data: {
        disease: {
          associatedTargets: {
            rows: [
              {
                target: {
                  id: '1',
                  approvedSymbol: 'Symbol 1',
                  approvedName: 'Name 1',
                },
                score: 1,
                datatypeScores: 1,
              },
              {
                target: {
                  id: '2',
                  approvedSymbol: 'Symbol 2',
                  approvedName: 'Name 2',
                },
                score: 2,
                datatypeScores: 2,
              },
            ],
          },
        },
      },
    },
  },
];

describe('DataTable', () => {
  it('renders without error', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DataTable />
      </MockedProvider>
    );
  });

  it('should render loading state initially', () => {
    render(
      <MockedProvider mocks={[]}>
        <DataTable />
      </MockedProvider>
    );

    expect(screen.getByTestId('loading-data-table')).toBeInTheDocument();
  });
});
