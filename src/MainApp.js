import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SearchTargetProvider from './context/SearchTargetContext';

import NavHelpdesk from './components/NavHelpdesk';
import SearchTargetTranscript from './components/SearchTargetTranscript';
import TargetTranscriptView from './components/TargetTranscriptView';
import ScrollToTop from './components/ScrollToTop';

import 'emerald-ui/lib/styles.css';

function MainApp() {
  return (
    <SearchTargetProvider>
      <NavHelpdesk />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<SearchTargetTranscript />} />
          <Route path="transcriptview" element={<TargetTranscriptView />} />
        </Routes>
      </ScrollToTop>
    </SearchTargetProvider>
  );
}

export default MainApp;
