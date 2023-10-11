import React from 'react';
import '../../App.css';
import Banner from '../Banner';
import LinhaServicos from '../LinhaServicos';
import LinhaSobra from '../LinhaSobra';
import BannerSobran from '../BannerSobran';
import LinhaMassagem from '../LinhaMassa';
import BannerMasagem from '../BannerMassa';
import LinhaCabelo from '../LinhaCabelo';
import BannerCabelo from '../BannerCabelo';
import BannerCabelo2 from '../BannerCabelo2';
import LinhaUnha from '../LinhaUnha';
import BannerUnha from '../BannerUnha';

function Home() {
  return (
    <>
      <Banner />
      <LinhaServicos/>
      <LinhaSobra/>
      <BannerSobran/>
      <LinhaMassagem/>
      <BannerMasagem/>
      <LinhaCabelo/>
      <BannerCabelo/>
      <BannerCabelo2/>
      <LinhaUnha/>
      <BannerUnha/>
    </>
  );
}

export default Home;
