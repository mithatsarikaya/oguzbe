const ProfanitiesList = () => {
  return (
    <div className="profanitiesListDiv">
      <h1>Profanities List</h1>
      <button className="profanitiesListDiv--button">Add Profanity</button>
      <div className="profanitiesListDiv--table">
        <div>
          <th>Profanity Reason</th>
          <th>Profanity Value</th>
          <th>Profanity Lang</th>
          <th>Actions</th>
        </div>
        <div>
          <td>isim flaan</td>
          <td>5454</td>
          <td>hi tdere</td>
          <td>
            <div className="updateDeleteDiv">
              <button className="updateDeleteDiv--updateBtn">Update</button>
              <button className="updateDeleteDiv--deleteBtn">Delete</button>
            </div>
          </td>
        </div>
        <div>
          <td>isim flaan</td>
          <td>5454</td>
          <td>hi tdere</td>
          <td>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </div>
        <div>
          <td>isim flaan</td>
          <td>5454</td>
          <td>hi tdere</td>
          <td>
            <button>Update</button>
            <button>Delete</button>
          </td>
        </div>
      </div>
    </div>
  );
};

export default ProfanitiesList;
