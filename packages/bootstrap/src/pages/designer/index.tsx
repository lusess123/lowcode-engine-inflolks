import  '../index.less';
import React, { useEffect } from 'react';
import baseInit from '../../demo/src/scenarios/basic-fusion'
window.React = React || {};

export default function IndexPage() {
  useEffect(() => {
    baseInit();
  }, []);
  return <div id="lce-container" />;
}