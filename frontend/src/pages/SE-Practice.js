import React from "react";
import Table from "../components/EvidenceTable";
import articles from "../dummydata/articles";
import tablecolumns from "../components/tablecolumns";
import Dropdown from "../components/Dropdown";
import Styles from "../components/tablestyle";

const SEPractice = () => {
    return (
        <div>
            <h2>Select SE Practice to get evidence for the claimed benefits</h2>
            <Dropdown/>
            <Styles>
                <Table
                data={articles}
                columns={tablecolumns}/>
            </Styles>
        </div>
    );
}

export default SEPractice;
