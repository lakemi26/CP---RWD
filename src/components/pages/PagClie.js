import React from 'react';
import './PagClie.css';
import ClimaBanner from '../Clima-banner';
import LinhaBoleto from '../linhaBoleto';
import BoletoBanner from '../BoletoBanner';

function PagClie() {
    return (
      <>
        <ClimaBanner/>
        <LinhaBoleto/>
        <BoletoBanner/>
      </>
    );
  }

  export default PagClie;
