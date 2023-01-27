import { useState } from "react";
import { storiesOf } from "@storybook/react";
import "../assets/css/main-theme.css";
import { TableElement } from "../components/TableElement";

const stories = storiesOf("TableElement", module);

stories.add("TableElement", () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <TableElement 
        type={'pagination'}
        currentPage={currentPage}
        totalCount={20}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
});
