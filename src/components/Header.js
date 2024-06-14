import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="sistemaSolar">
          Sistema Solar
          <br />
          <span className="sistemaSolar">Planetas</span>
        </h1>
      </header>
    );
  }
}

export default Header;
