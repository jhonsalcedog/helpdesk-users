import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavHelpdesk from './components/NavHelpdesk';
import SearchTargetTranscript from './components/SearchTargetTranscript';
import TargetTranscriptView from './components/TargetTranscriptView';

import SearchTargetProvider from './context/SearchTargetContext';

import 'emerald-ui/lib/styles.css';

function MainApp() {
  return (
    <SearchTargetProvider>
      <NavHelpdesk />
      <Routes>
        <Route path="/" element={<SearchTargetTranscript />} />
        <Route path="transcriptview" element={<TargetTranscriptView />} />
      </Routes>
    </SearchTargetProvider>
  );
}

export default MainApp;
