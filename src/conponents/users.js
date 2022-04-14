import React, { useState } from 'react';
function User() {
    const [data, setData] = useState([]);
    const dataShow= data.map(item =><div>item</div>)
    return (
      <div>
        {dataShow}
      </div>
    );
}

export default User;