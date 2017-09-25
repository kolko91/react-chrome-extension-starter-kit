import React from 'react';
import ReactDOM from 'react-dom';

import Popup from './popup/Popup';

chrome.tabs.query({ currentWindow: true, active: true }, () => {
  ReactDOM.render(
    <Popup />,
    document.getElementById('app')
  );
});
