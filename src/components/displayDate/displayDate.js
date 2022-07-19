import React, { useEffect, setState } from "react";

function DisplayDate() {
  var today = new Date();
  var dd = String(today.getDate());
  var mm = String(today.getMonth() + 1);
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  return <div>{today}</div>;
}

export default DisplayDate;
