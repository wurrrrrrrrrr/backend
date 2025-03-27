const Navbar = () => {
  return (
    <nav style={{
      background: 'hsl(352, 25.00%, 93.70%)',
      borderBottom: '1px solid #ccc',
      padding: '5px 50px',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 10,
    }}>
      <div>
        <h1>青光眼偵測</h1>
      </div>
    </nav>
  );
};

export default Navbar;
