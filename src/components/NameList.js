import React from 'react';

function NameList(props) {
    const names = props.names;
    const upperCaseQuery = props.query.toUpperCase()
    const listItems = names.map((name, id) => {
      const condition = name.toUpperCase().includes(upperCaseQuery) || upperCaseQuery === ''
  
      if (condition) {
        return <li key={id}>{name}</li>
      }
  
    }
    );
  
    return (<ul>{listItems}</ul>)
  }

  export default NameList