import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import { ArrowRightOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { DEVELOPMENT_API } from '../api/constants';
import './Nav.scss';

type NavLinksProps = {
  closeMenu: () => void;
};

const Nav = () => {


  const navigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();
    // closeMenu();
    window.location.href = link;
  };

  return (
    <nav className="Nav flex justify-between items-center py-4 px-6 mx-6 md:mx-auto">
      <a href="/" onClick={(e) => navigate(e, '/')}>
        <div className="flex items-center">
          <h2 className="ml-4 mb-0 ">SITE</h2>
        </div>
      </a>

    </nav>
  );
};

export default Nav;

