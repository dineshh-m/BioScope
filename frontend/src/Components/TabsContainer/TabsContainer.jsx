import './tabscontainer.css';
import Tab from '../Tab/Tab';
import Result from '../Result/Result';
import { useState } from 'react';

function TabsContainer(props) {
    const [activeTab, setActiveTab] = useState(0);
    const { setSearchKind, searchResult } = props;

    const handleClick = (index) => {
        setActiveTab(index);
        switch(index) {
            case 0:
                setSearchKind("movie");
                break;
            case 1:
                setSearchKind("tv");
                break;
            case 2:
                setSearchKind("people");
                break;
        }
    }

    return (
        <>
            <div className="tab-container">
                <div className="tab-buttons">
                    <button className={activeTab === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
                        Movies
                    </button>
                    <button className={activeTab === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
                        TV
                    </button>
                    <button className={activeTab === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
                        People
                    </button>
                </div>
                {/* <div className="tab-content">
                    {activeTab === 0 && <Tab />}
                    {activeTab === 1 && <Tab />}
                    {activeTab === 2 && <Tab />}
                </div> */}
            </div>
            <Result results={searchResult} />
        </>
    );
}

export default TabsContainer;