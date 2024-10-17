const BannedList = ({ banned, remove }) => {
    return (
      <div className="banned-list">
        <h2>Banned List</h2>
        <ul>
          {banned.map((item, index) => (
            <li key={index}>
              <button onClick={() => remove(item)} className="banned">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BannedList;
  