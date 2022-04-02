import React from 'react'
import ReactDOM from 'react-dom';
// import * as Br from '@steedos-builder/sdk'
// import Sr from '@steedos-builder/react'
// import Sd from '@steedos-widgets/design-system'
import  '@alilc/lowcode-designer'

(window as any ).React = React;
(window as any ).ReactDOM = ReactDOM;
(window as any ).PropTypes = PropTypes;

// (window as any ).BuilderSDK = Br ,
// (window as any ).BuilderReact = Sr,
// (window as any ).DesignSystem = Sd
// alert(window.Next)
// load("https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js")
// document.writeln(`<script href="https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js"></script>`)
// alert(window.Next)

import PropTypes from 'prop-types';
import ObjectForm from './pages/form-object'
import * as LowcodeEngine from '@alilc/lowcode-engine'
(window as any ).AliLowCodeEngine = LowcodeEngine;
(window as any ).ObjectForm = ObjectForm;

 function load(url: string) {
    const node: any = document.createElement('script');
  
    // node.setAttribute('crossorigin', 'anonymous');
  
    node.onload = onload;
    node.onerror = onload;
  
    const i = createDefer();
  
    function onload(e: any) {
      node.onload = null;
      node.onerror = null;
      if (e.type === 'load') {
        i.resolve();
        alert(window[0].Next)
      } else {
        i.reject();
      }
      // document.head.removeChild(node);
      // node = null;
    }
  
    // node.async = true;
    node.src = url;
  
    document.head.appendChild(node);
  
    return i.promise();
  }

   interface Defer<T = any> {
    resolve(value?: T | PromiseLike<T>): void;
    reject(reason?: any): void;
    promise(): Promise<T>;
  }
  
   function createDefer<T = any>(): Defer<T> {
    const r: any = {};
    const promise = new Promise<T>((resolve, reject) => {
      r.resolve = resolve;
      r.reject = reject;
    });
  
    r.promise = () => promise;
  
    return r;
  }