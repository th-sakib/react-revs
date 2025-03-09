import { useState } from "react";

const useFilter = (dataList, cb) => {
  const [query, setQuery] = useState("");
  const filteredData = dataList.filter((dataItem) =>
    cb(dataItem).toLowerCase().includes(query)
  );

  return [filteredData, setQuery];
};

export default useFilter;
