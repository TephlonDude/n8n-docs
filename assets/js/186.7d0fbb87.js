(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1049:function(e,t,a){"use strict";a.r(t);var s=a(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"spreadsheet-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spreadsheet-file"}},[e._v("#")]),e._v(" Spreadsheet File")]),e._v(" "),s("p",[e._v("The Spreadsheet File node is used to access data from spreadsheet files.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),s("p",[e._v("You will need to use an additional node such as the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node or the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node to pass the image file as a data property to the Spreadsheet File node.")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("ul",[s("li",[e._v("Read from file")]),e._v(" "),s("li",[e._v("Write to file")])]),e._v(" "),s("h2",{attrs:{id:"node-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),s("p",[e._v("When writing to a spreadsheet file, the "),s("em",[e._v("File Format")]),e._v(" field can be used to specify the format of the file to save the data as.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("File Format")]),e._v(" "),s("ul",[s("li",[e._v("CSV (Comma-separated values)")]),e._v(" "),s("li",[e._v("HTML (HTML Table)")]),e._v(" "),s("li",[e._v("ODS (OpenDocument Spreadsheet)")]),e._v(" "),s("li",[e._v("RTF (Rich Text Format)")]),e._v(" "),s("li",[e._v("XLS (Excel)")]),e._v(" "),s("li",[e._v("XLSX (Excel)")])])]),e._v(" "),s("li",[s("p",[s("em",[s("strong",[e._v("Binary Property")])]),e._v(" field: Name of the binary property in which to save the binary data of the spreadsheet file.")])]),e._v(" "),s("li",[s("p",[e._v("Options")]),e._v(" "),s("ul",[s("li",[s("em",[s("strong",[e._v("Sheet Name")])]),e._v(" field: This field specifies the name of the sheet from which the data should be read or written to.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Read As String")])]),e._v(" field: This toggle enables you to parse all input data as strings.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("RAW Data")])]),e._v(" field: This toggle enables you to skip the parsing of data.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("File Name")])]),e._v(" field: This field can be used to specify a custom file name when writing a spreadsheet file to disk.")])])])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to read a spreadsheet file using the Spreadsheet File node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/586",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following three nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Spreadsheet File")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(551),alt:"A workflow with the Spreadsheet File node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-read-binary-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-read-binary-file"}},[e._v("#")]),e._v(" 2. Read Binary File")]),e._v(" "),s("ol",[s("li",[e._v("Enter the path to the spreadsheet file you want to read in the "),s("em",[e._v("File Path")]),e._v(" field.")])]),e._v(" "),s("h3",{attrs:{id:"_3-spreadsheet-file-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-spreadsheet-file-node"}},[e._v("#")]),e._v(" 3. Spreadsheet File node")]),e._v(" "),s("ol",[s("li",[e._v("Enter the "),s("em",[e._v("Property Name")]),e._v(" you used in the previous node in the "),s("em",[e._v("Binary Property")]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[e._v("Execute Node")]),e._v(" to run the workflow.")])])])}),[],!1,null,null,null);t.default=r.exports},551:function(e,t,a){e.exports=a.p+"assets/img/workflow.e59a40c5.png"}}]);