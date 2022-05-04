import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './container/Login/index'
import LayoutBox from './container/Layout/index'
// import './styles/style.sass'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<LayoutBox />);
