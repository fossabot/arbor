import React from 'react';
import { Global } from '@emotion/react';
import {
  ToastContainer as ReactToastifyContainer,
  cssTransition
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.minimal.css';

import toastCSS from './toastCSS';

const transition = cssTransition({
  enter: 'toastSlideIn',
  exit: 'toastSlideOut',
  duration: 500
});

const ToastContainer = (props) => (
  <>
    <Global styles={toastCSS} />

    <ReactToastifyContainer
      className="arbor-toast-container"
      closeButton={false}
      hideProgressBar
      toastClassName="arbor-toast"
      transition={transition}
      {...props}
    />
  </>
);

export default ToastContainer;
