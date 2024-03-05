import React from "react";
import FilterComponent from "./FilterComponent";

function useSubHeaderComponentMemo() {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const handleClear = React.useCallback(() => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  }, [filterText, resetPaginationToggle]);

  const subHeaderComponentMemo = React.useMemo(
    () => (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    ),
    [filterText, handleClear]
  );

  return { subHeaderComponentMemo };
}

export default useSubHeaderComponentMemo;
