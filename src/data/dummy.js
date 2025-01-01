import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { GrHostMaintenance } from "react-icons/gr";
import { AiFillGoogleSquare } from "react-icons/ai";
import { CiWarning } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa6";
import { FiShoppingBag, FiPieChart, FiCreditCard } from "react-icons/fi";
import { BsKanban, BsBarChart, BsShield } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiContactsLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";
import product5 from "./product5.jpg";
import product6 from "./product6.jpg";
import product7 from "./product7.jpg";

export const kanbanGrid = [
  { headerText: "To Do", keyField: "Open", allowToggle: true },

  { headerText: "In Progress", keyField: "InProgress", allowToggle: true },

  {
    headerText: "Testing",
    keyField: "Testing",
    allowToggle: true,
    isExpanded: false,
  },

  { headerText: "Done", keyField: "Close", allowToggle: true },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.StopStatus}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  majorGridLines: { width: 0 },
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  labelStyle: { color: "gray" },
};

export const areaPrimaryYAxis = {
  labelFormat: "{value}%",
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: "gray" },
};
export const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: "transparent" },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: "x",
    yName: "y",
    name: "PM",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData[1],
    xName: "x",
    yName: "y",
    name: "EM",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
  {
    dataSource: areaChartData[2],
    xName: "x",
    yName: "y",
    name: "CM",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

export const barChartData = [
  [
    { x: "PM", y: 46 },
    { x: "EM", y: 27 },
    { x: "CM", y: 26 },
  ],
  [
    { x: "PM", y: 37 },
    { x: "EM", y: 23 },
    { x: "CM", y: 18 },
  ],
  [
    { x: "PM", y: 38 },
    { x: "EM", y: 17 },
    { x: "CM", y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "Press",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: "x",
    yName: "y",
    name: "Refiner",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: "x",
    yName: "y",
    name: "Sanding",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: "Jan", y: 6.96 },
    { x: "Feb", y: 8.9 },
    { x: "Mar", y: 12 },
    { x: "Apr", y: 17.5 },
    { x: "May", y: 22.1 },
    { x: "June", y: 25 },
    { x: "July", y: 29.4 },
    { x: "Aug", y: 29.6 },
    { x: "Sep", y: 25.8 },
    { x: "Oct", y: 21.1 },
    { x: "Nov", y: 15.5 },
    { x: "Dec", y: 9.9 },
  ],
  ["#FFFF99"],
  ["#FFA500"],
  ["#FF4040"],
];

export const rangeColorMapping = [
  { label: "1 to 10", start: "1", end: "10", colors: colorMappingData[1] },

  {
    label: "11 to 20",
    start: "11",
    end: "20",
    colors: colorMappingData[2],
  },

  {
    label: "21 to 30",
    start: "21",
    end: "30",
    colors: colorMappingData[3],
  },
];

export const ColorMappingPrimaryXAxis = {
  valueType: "Category",
  majorGridLines: { width: 0 },
  title: "Months",
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}",
  title: "Number of Forms",
};

export const FinancialPrimaryXAxis = {
  valueType: "DateTime",
  minimum: new Date("2016, 12, 31"),
  maximum: new Date("2017, 9, 30"),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: "Price",
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: "checkbox", width: "50" },
  {
    field: "FormCode",
    headerText: "Form Code",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "Section",
    headerText: "Section Name",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "MachineName",
    headerText: "Machine Name",
    width: "130",
    format: "yMd",
    textAlign: "Center",
  },
  {
    field: "Shift",
    headerText: "Shift",
    width: "100",
    format: "C2",
    textAlign: "Center",
  },
  {
    field: "OperatorName",
    headerText: "Operator Name",
    width: "100",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "FormDate",
    headerText: "Form Date",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "ProblemType",
    headerText: "Problem Type",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "StopStatus",
    headerText: "Stop Status",
    StatusBg: "#FEC90F",
    width: "150",
    format: "yMd",
    textAlign: "Center",
    template: customerGridStatus,
  },
  {
    field: "StopDate",
    headerText: "Stop Date",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "StartDate",
    headerText: "Start Date",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "ProblemDescription",
    headerText: "Problem Description",
    width: "150",
    textAlign: "Center",
  },
];

export const employeesGrid = [
  {
    headerText: "Employee",
    width: "150",
    template: gridEmployeeProfile,
    textAlign: "Center",
  },
  { field: "Name", headerText: "", width: "0", textAlign: "Center" },
  {
    field: "Title",
    headerText: "Designation",
    width: "170",
    textAlign: "Center",
  },
  {
    headerText: "Country",
    width: "120",
    textAlign: "Center",
    template: gridEmployeeCountry,
  },

  {
    field: "HireDate",
    headerText: "Hire Date",
    width: "135",
    format: "yMd",
    textAlign: "Center",
  },

  {
    field: "ReportsTo",
    headerText: "Reports To",
    width: "120",
    textAlign: "Center",
  },
  {
    field: "EmployeeID",
    headerText: "Employee ID",
    width: "125",
    textAlign: "Center",
  },
];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "forms",
        icon: <RiContactsLine />,
      },
      {
        name: "operatorSubmit",
        icon: <FaWpforms />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const cartData = [
  {
    image: product5,
    name: "butterscotch ice-cream",
    category: "Milk product",
    price: "$250",
  },
  {
    image: product6,
    name: "Supreme fresh tomato",
    category: "Vegetable Item",
    price: "$450",
  },
  {
    image: product7,
    name: "Red color candy",
    category: "Food Item",
    price: "$190",
  },
];

export const chatData = [
  {
    image: avatar,
    message: "Pooya Added A New task",
    desc: "Sanding Push Feeder Problem",
    time: "1:12 AM",
  },
];

export const earningData = [
  {
    icon: <CgDanger />,
    amount: "395",
    percentage: "-4%",
    title: "EM",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <CiWarning />,
    amount: "250",
    percentage: "+23%",
    title: "CM",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <GrHostMaintenance />,
    amount: "220",
    percentage: "+38%",
    title: "PM",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <AiFillGoogleSquare />,
    amount: "395",
    percentage: "-12%",
    title: "GM",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <CgProfile />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
export const customersData = [
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "PushFeeder",
    Shift: "A",
    OperatorName: "PooyaPayvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "Yes",
    StatusBg: "#FEC90F",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "Yes",
    StatusBg: "#FEC90F",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "Yes",
    StatusBg: "#FEC90F",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "No",
    StatusBg: "#00A693",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "Yes",
    StatusBg: "#FEC90F",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "No",
    StatusBg: "#00A693",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "Yes",
    StatusBg: "#FEC90F",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "No",
    StatusBg: "#00A693",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Mechanic",
    StopStatus: "Yes",
    StatusBg: "#FEC90F",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
  {
    FormID: 1001,
    FormCode: "02091030",
    Section: "Sanding",
    MachineName: "Push Feeder",
    Shift: "A",
    OperatorName: "Pooya Pyvar",
    FormDate: "1403/10/08",
    ProblemType: "Electric",
    StopStatus: "No",
    StatusBg: "#00A693",
    StopDate: "1403/10/08",
    StartDate: "1403/10/08",
    ProblemDescription: "Push Feeder Has Problem",
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: "Cooling Wheel Shaft Repair",
    Location: "Cooling Wheel",
    StartTime: "2021-01-10T04:00:00.000Z",
    EndTime: "2021-01-10T05:30:00.000Z",
    CategoryColor: "#1aaa55",
  },
  {
    Id: 2,
    Subject: "Press Need To Lubricant",
    Location: "Press Damping",
    StartTime: "2021-01-11T06:30:00.000Z",
    EndTime: "2021-01-11T08:30:00.000Z",
    CategoryColor: "#357cd2",
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: "1",
    Time: "March 2021",
  },
  {
    Id: "2",
    Time: "April 2021",
  },
  {
    Id: "3",
    Time: "May 2021",
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[0],
    xName: "x",
    yName: "y",
    name: "PM",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "EM",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },

  {
    dataSource: lineChartData[2],
    xName: "x",
    yName: "y",
    name: "GM",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const pieChartData = [
  { x: "PM", y: 18, text: "18%" },
  { x: "EM", y: 8, text: "8%" },
  { x: "GM", y: 15, text: "15%" },
  { x: "CM", y: 11, text: "11%" },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const ecomPieChartData = [
  { x: "مهر", y: 24, text: "35%" },
  { x: "آبان", y: 24, text: "15%" },
  { x: "آذر", y: 24, text: "25%" },
  { x: "دی", y: 24, text: "25%" },
  { x: "بهمن", y: 24, text: "25%" },
  { x: "اسفند", y: 24, text: "25%" },
];

export const stackedChartData = [
  [
    { x: "مهر", y: 111.1 },
    { x: "آبان", y: 127.3 },
    { x: "آذر", y: 143.4 },
    { x: "دی", y: 159.9 },
    { x: "بهمن", y: 159.9 },
    { x: "اسفند", y: 159.9 },
  ],
  [
    { x: "مهر", y: 111.1 },
    { x: "آبان", y: 127.3 },
    { x: "آذر", y: 143.4 },
    { x: "دی", y: 159.9 },
    { x: "بهمن", y: 159.9 },
    { x: "اسفند", y: 159.9 },
  ],
];

export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: "x",
    yName: "y",
    name: "PM",
    type: "StackingColumn",
    background: "blue",
  },

  {
    dataSource: stackedChartData[1],
    xName: "x",
    yName: "y",
    name: "EM",
    type: "StackingColumn",
    background: "red",
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: "Rotate45",
  valueType: "Category",
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}",
};

export const kanbanData = [
  {
    Id: "Sanding Maintenance",
    Title: "Task - 29001",
    Status: "Open",
    Summary: "Push Feeder Have Some Issues in Pusher Need to mechanic check it",
    Priority: "critical",
    Tags: "Analyze,Customer",
    Estimate: 3.5,
    Assignee: "Nancy Davloio",
    RankId: 1,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-nancy-davloio",
  },
  {
    Id: "Task 2",
    Title: "Task - 29002",
    Status: "InProgress",
    Summary: "Improve application performance",
    Type: "Improvement",
    Priority: "Normal",
    Tags: "Improvement",
    Estimate: 6,
    Assignee: "Andrew Fuller",
    RankId: 1,
    Color: "#673AB8",
    ClassName: "e-improvement, e-normal, e-andrew-fuller",
  },
  {
    Id: "Task 5",
    Title: "Task - 29005",
    Status: "Review",
    Summary: "Fix the issues reported by the customer.",
    Type: "Bug",
    Priority: "Low",
    Tags: "Customer",
    Estimate: "3.5",
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#E64A19",
    ClassName: "e-bug, e-low, e-steven-walker",
  },

  {
    Id: "Task 8",
    Title: "Task - 29010",
    Status: "Close",
    Summary: "Test the application in the IE browser.",
    Type: "Story",
    Priority: "Low",
    Tags: "Review,IE",
    Estimate: 5.5,
    Assignee: "Margaret hamilt",
    RankId: 3,
    Color: "#02897B",
    ClassName: "e-story, e-low, e-margaret-hamilt",
  },

  {
    Id: "Task 12",
    Title: "Task - 29017",
    Status: "Review",
    Summary: "Fix the issues reported in data binding.",
    Type: "Story",
    Priority: "Normal",
    Tags: "Databinding",
    Estimate: "3.5",
    Assignee: "Janet Leverling",
    RankId: 4,
    Color: "#02897B",
    ClassName: "e-story, e-normal, e-janet-leverling",
  },
  {
    Id: "Task 22",
    Title: "Task - 29027",
    Status: "Open",
    Summary: "Arrange web meeting with the customer to show editing demo.",
    Type: "Others",
    Priority: "High",
    Tags: "Meeting,Editing",
    Estimate: 5.5,
    Assignee: "Steven walker",
    RankId: 6,
    Color: "#1F88E5",
    ClassName: "e-others, e-high, e-steven-walker",
  },
  {
    Id: "Task 24",
    Title: "Task - 29030",
    Status: "Testing",
    Summary: "Fix the issues reported by the customer.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Customer",
    Estimate: "3.5",
    Assignee: "Steven walker",
    RankId: 1,
    Color: "#E64A19",
    ClassName: "e-bug, e-critical, e-steven-walker",
  },
  {
    Id: "Task 25",
    Title: "Task - 29031",
    Status: "Testing",
    Summary: "Fix the issues reported in Safari browser.",
    Type: "Bug",
    Priority: "Critical",
    Tags: "Fix,Safari",
    Estimate: 1.5,
    Assignee: "Nancy Davloio",
    RankId: 2,
    Color: "#E64A19",
    ClassName: "e-bug, e-release, e-nancy-davloio",
  },
];
