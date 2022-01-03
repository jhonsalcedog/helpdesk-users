import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HelpdeskProvider from './context/helpdeskContext';

import Container from 'emerald-ui/lib/Container';

import NavHelpdesk from './components/NavHelpdesk';
import SearchTargetTranscript from './components/SearchTargetTranscript';
import TargetTranscriptView from './components/TargetTranscriptView';

import 'emerald-ui/lib/styles.css';

function MainApp() {
  return (
    <HelpdeskProvider>
      <NavHelpdesk />
      <Routes>
        <Route path="/" element={<SearchTargetTranscript />} />
        <Route path="transcriptview" element={<TargetTranscriptView />} />
      </Routes>
    </HelpdeskProvider>
  );
}

export default MainApp;
