import React, { MouseEvent } from 'react';
import '../styles/ChartTabStyles.css';
import BarChart from '../charts/BarChart';
import RadarChart from '../charts/RadarChart';

interface ChartTabProps {
  index: number;
  datatypeScores: any;
  title: string;
}

function ChartTab({ index, datatypeScores, title }: ChartTabProps) {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const openTab = (event: MouseEvent, tabName: string, index: number) => {
    const tabContentElements = document.getElementById(
      `tabContentWrapper${index}`
    )?.children;
    const tabLinkElements = document.getElementById(
      `tablinksWrapper${index}`
    )?.children;
    for (let i = 0; i < (tabLinkElements?.length || 0); i += 1) {
      if (
        tabLinkElements &&
        tabLinkElements[i].getAttribute('id') === tabName + index
      ) {
        tabLinkElements[i].classList.add('active');
      } else if (tabLinkElements) {
        tabLinkElements[i].classList.remove('active');
      }
    }
    for (let i = 0; i < (tabContentElements?.length || 0); i += 1) {
      if (
        tabContentElements &&
        tabContentElements[i].getAttribute('id') === tabName + index
      ) {
        tabContentElements[i].classList.add('tabVisibility');
      } else if (tabContentElements) {
        tabContentElements[i].classList.remove('tabVisibility');
      }
    }
  };
  return (
    <div className="tabWrapper">
      <div id={`tablinksWrapper${index}`} className="tab">
        <button
          id={`Bar${index}`}
          className="tablinks active"
          onClick={(e) => openTab(e, 'Bar', index)}
          type="button"
        >
          Bar chart
        </button>
        <button
          id={`Radar${index}`}
          className="tablinks"
          onClick={(e) => openTab(e, 'Radar', index)}
          type="button"
        >
          Radar chart
        </button>
      </div>
      <div id={`tabContentWrapper${index}`}>
        <div id={`Bar${index}`} className="tabcontent tabVisibility">
          <div className="graphStyles">
            <BarChart datatypeScores={datatypeScores} title={title} />
          </div>
        </div>

        <div id={`Radar${index}`} className="tabcontent">
          <div className="graphStyles" style={{ width: '500px' }}>
            <RadarChart datatypeScores={datatypeScores} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartTab;
