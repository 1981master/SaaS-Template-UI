import { useState } from 'react'
import './Tabs.css'

export default function Tabs({
    tabs = [], // [{ label: 'Tab 1', color: '--primary' }]
    defaultActive = 0,
    onTabChange = () => {},
    className = '',
    rounded = true, // whether tabs have rounded edges
}) {
    const [activeIndex, setActiveIndex] = useState(defaultActive)

    const handleTabClick = (index) => {
        setActiveIndex(index)
        onTabChange(index)
    }

    return (
        <div
            className={`tabs-wrapper ${className} ${rounded ? 'rounded-tabs' : ''}`}
        >
            <div className="tabs-header">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-item ${activeIndex === index ? 'active-tab' : ''}`}
                        style={{
                            '--tab-color': tab.color || 'var(--primary)',
                        }}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tabs-content">
                {tabs[activeIndex] && tabs[activeIndex].content}
            </div>
        </div>
    )
}
