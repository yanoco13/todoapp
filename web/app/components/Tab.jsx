// components/Tab.jsx
'use client';
import React from 'react';

export default function Tab({ tab, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                display: 'block',
                width: '100%',
                padding: '8px 12px',
                marginBottom: 8,
                textAlign: 'left',
                background: isActive ? '#e0f7fa' : 'transparent',
                border: 'none',
                cursor: 'pointer'
            }}
        >
            {tab.name}
        </button>
    );
}
