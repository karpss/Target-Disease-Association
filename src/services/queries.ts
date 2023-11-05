import { gql } from '../__generated__/gql';

const FETCH_TARGETS_LIST = gql(`
  query lungCarcinomaAssociatedTargets {
    disease(efoId: "EFO_0001071") {
      associatedTargets(page: { index: 0, size: 10 }) {
        rows {
          target {
            id
            approvedSymbol
            approvedName
          }
          score
          datatypeScores {
            id
            score
          }
        }
      }
    }
  }
`);

export default FETCH_TARGETS_LIST;
