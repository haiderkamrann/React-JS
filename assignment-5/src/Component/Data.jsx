const Data = ({ name, age, email, update, id }) => {
  return (
    <>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>{name}</th>
              <th>{age}</th>
              <th>{email}</th>
              <th><button onClick={() => { update(id) }}> Update </button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Data;
