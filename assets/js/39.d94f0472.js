(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1140:function(e,t,o){"use strict";o.r(t);var s=o(26),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"questdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#questdb"}},[e._v("#")]),e._v(" QuestDB")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://questdb.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QuestDB"),s("OutboundLink")],1),e._v(" is an open-source NewSQL relational database designed to process time-series data, faster. QuestDB’s stack is engineered from scratch, zero-GC Java and dependency-free. It supports a a Java API, SQL via HTTP and the PostgreSQL wire protocol.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/QuestDB/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("ul",[s("li",[e._v("Execute an SQL query")]),e._v(" "),s("li",[e._v("Insert rows in database")])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to create a table and insert data into it in QuestDB. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/592",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("QuestDB")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(741),alt:"A workflow with the QuestDB node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-questdb-node-execute-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-questdb-node-execute-query"}},[e._v("#")]),e._v(" 2. QuestDB node (Execute Query)")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the QuestDB node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/QuestDB/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Select 'Execute Query' from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter the following SQL query in the "),s("em",[s("strong",[e._v("Query")])]),e._v(" field: "),s("code",[e._v("CREATE TABLE test (id INT, name STRING);")]),e._v(".")]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Node")])]),e._v(" tab and toggle "),s("em",[s("strong",[e._v("Always Output Data")])]),e._v(" to true.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(742),alt:"Using the QuestDB node to create a table"}})]),e._v(" "),s("h3",{attrs:{id:"_3-set-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),s("ol",[s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("id")]),e._v(" in the "),s("em",[s("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("name")]),e._v(" in the "),s("em",[s("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the value for the name in the "),s("em",[s("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(743),alt:"Using the Set node to set data to be inserted by the QuestDB node"}})]),e._v(" "),s("h3",{attrs:{id:"_4-questdb1-node-insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-questdb1-node-insert"}},[e._v("#")]),e._v(" 4. QuestDB1 node (Insert)")]),e._v(" "),s("ol",[s("li",[e._v("Select the credentials that you entered in the previous QuestDB node.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("test")]),e._v(" in the "),s("em",[s("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("id, name")]),e._v(" in the "),s("em",[s("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(744),alt:"Using the QuestDB node to insert data into a table"}})])])}),[],!1,null,null,null);t.default=n.exports},741:function(e,t,o){e.exports=o.p+"assets/img/workflow.13eab506.png"},742:function(e,t,o){e.exports=o.p+"assets/img/QuestDB_node.ca3a9bbc.png"},743:function(e,t,o){e.exports=o.p+"assets/img/Set_node.435c2e1e.png"},744:function(e,t,o){e.exports=o.p+"assets/img/QuestDB1_node.0e864c5f.png"}}]);