import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Casa Comigo App</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1eaf73ff',
    padding: '10px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    margin: 0,
    fontSize: '16px',
  },
};

export default Header;
