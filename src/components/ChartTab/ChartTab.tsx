import React, { useState } from 'react';
import '../../styles/ChartTabStyles.css';
import BarChart from '../../charts/BarChart';
import RadarChart from '../../charts/RadarChart';

interface ChartTabProps {
  index: number;
  datatypeScores: any;
  title: string;
}

function ChartTab({ index, datatypeScores, title }: ChartTabProps) {
  const [activeTab, setActiveTab] = useState('Bar');

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabWrapper">
      <div id={`tablinksWrapper${index}`} className="tab">
        <button
          id={`Bar${index}`}
          className={`tablinks ${activeTab === 'Bar' ? 'active' : ''}`}
          onClick={() => openTab('Bar')}
          type="button"
        >
          Bar chart
        </button>
        <button
          id={`Radar${index}`}
          className={`tablinks ${activeTab === 'Radar' ? 'active' : ''}`}
          onClick={() => openTab('Radar')}
          type="button"
        >
          Radar chart
        </button>
      </div>
      <div id={`tabContentWrapper${index}`}>
        <div
          id={`Bar${index}`}
          className={`tabcontent ${activeTab === 'Bar' ? 'tabVisibility' : ''}`}
        >
          <div className="graphStyles">
            <BarChart datatypeScores={datatypeScores} title={title} />
          </div>
        </div>

        <div
          id={`Radar${index}`}
          className={`tabcontent ${
            activeTab === 'Radar' ? 'tabVisibility' : ''
          }`}
        >
          <div className="graphStyles" style={{ width: '500px' }}>
            <RadarChart datatypeScores={datatypeScores} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartTab;
