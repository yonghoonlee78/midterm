import React from 'react';
import './Navbar.css'; // Navbar 전용 CSS 파일

import DeepstateLogo from '../assets/deepstate-logo.png'; 

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {

  const navItems = [
    { id: 'home', name: 'Home' },  
    { id: 'about', name: 'Intro' }, 
    { id: 'tokenomics', name: 'Tokenomics' },
    { id: 'roadmap', name: 'Roadmap' },
    { id: 'team', name: 'Team' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <header className="navbar-header">
      {/*
        **핵심 수정 부분:**
        내비게이션 바의 실제 콘텐츠(로고와 메뉴)를
        `navbar-content-wrapper` div로 감싸서 최대 너비를 제어하고 중앙 정렬합니다.
      */}
      <div className="navbar-content-wrapper">
        {/* 로고 영역 */}
        <a href="#home" className="navbar-logo-area">
          <h1 className="navbar-logo-text">Deepstate</h1> 
          <img src={DeepstateLogo} alt="Deepstate Coin Logo" className="navbar-logo-icon" />
        </a>

        <nav className="navbar-main-nav">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                {/* href는 id로, 텍스트는 name으로 매핑 */}
                <a href={`#${item.id}`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;