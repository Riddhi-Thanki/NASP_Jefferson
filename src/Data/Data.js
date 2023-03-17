// *****************************
// * Importing Site Map Image
// *****************************
import siteMapFilePath from "./Jefferson_Exercise_Plot_Stand_Map_Close_Aerial.jpg";

// *****************************
// * Importing resources dropdown assets
// *****************************

import envReport from "./resources-assets/Jefferson_Exercise_Environmental_and_Soil_Report.pdf";
import aerialImage from "./resources-assets/Jefferson_Exercise_Plot_Stand_Map_Landscape_Aerial.jpg";
import topoImage from "./resources-assets/Jefferson_Exercise_Plot_Stand_Map_Landscape_Topo_Aerial.jpg";

// *****************************
// * Importing images for all plots and it's views
// *****************************

import plot1_centerURL from "./images/plot1/Jefferson_Plot1_Center_Photosphere_Final.jpg";
import plot1_southURL from "./images/plot1/Jefferson_Plot1_South_Final.jpg";
import plot1_eastURL from "./images/plot1/Jefferson_Plot1_East_Final.jpg";
import plot1_westURL from "./images/plot1/Jefferson_Plot1_West_Final.jpg";
import plot1_northURL from "./images/plot1/Jefferson_Plot1_North_Final.jpg";

import plot2_centerURL from "./images/plot2/Jefferson_Plot2_Center_Photosphere_Final.jpg";
import plot2_southURL from "./images/plot2/Jefferson_Plot2_South_Final.jpg";
import plot2_eastURL from "./images/plot2/Jefferson_Plot2_East_Final.jpg";
import plot2_westURL from "./images/plot2/Jefferson_Plot2_West_Final.jpg";
import plot2_northURL from "./images/plot2/Jefferson_Plot2_North_Final.jpg";

import plot3_centerURL from "./images/plot3/Jefferson_Plot3_Center_Photosphere_Final.jpg";
import plot3_southURL from "./images/plot3/Jefferson_Plot3_South_Final.jpg";
import plot3_eastURL from "./images/plot3/Jefferson_Plot3_East_Final.jpg";
import plot3_westURL from "./images/plot3/Jefferson_Plot3_West_Final.jpg";
import plot3_northURL from "./images/plot3/Jefferson_Plot3_North_Final.jpg";

import plot4_centerURL from "./images/plot4/Jefferson_Plot4_Center_Photosphere_Final.jpg";
import plot4_southURL from "./images/plot4/Jefferson_Plot4_South_Final.jpg";
import plot4_eastURL from "./images/plot4/Jefferson_Plot4_East_Final.jpg";
import plot4_westURL from "./images/plot4/Jefferson_Plot4_West_Final.jpg";
import plot4_northURL from "./images/plot4/Jefferson_Plot4_North_Final.jpg";

import plot5_centerURL from "./images/plot5/Jefferson_Plot5_Center_Photosphere_Final.jpg";
import plot5_southURL from "./images/plot5/Jefferson_Plot5_South_Final.jpg";
import plot5_eastURL from "./images/plot5/Jefferson_Plot5_East_Final.jpg";
import plot5_westURL from "./images/plot5/Jefferson_Plot5_West_Final.jpg";
import plot5_northURL from "./images/plot5/Jefferson_Plot5_North_Final.jpg";

import plot6_centerURL from "./images/plot6/Jefferson_Plot6_Center_Photosphere_Final.jpg";
import plot6_southURL from "./images/plot6/Jefferson_Plot6_South_Final.jpg";
import plot6_eastURL from "./images/plot6/Jefferson_Plot6_East_Final.jpg";
import plot6_westURL from "./images/plot6/Jefferson_Plot6_West_Final.jpg";
import plot6_northURL from "./images/plot6/Jefferson_Plot6_North_Final.jpg";

import plot7_centerURL from "./images/plot7/Jefferson_Plot7_Center_Photosphere_Final.jpg";
import plot7_southURL from "./images/plot7/Jefferson_Plot7_South_Final.jpg";
import plot7_eastURL from "./images/plot7/Jefferson_Plot7_East_Final.jpg";
import plot7_westURL from "./images/plot7/Jefferson_Plot7_West_Final.jpg";
import plot7_northURL from "./images/plot7/Jefferson_Plot7_North_Final.jpg";

import plot8_centerURL from "./images/plot8/Jefferson_Plot8_Center_Photosphere_Final.jpg";
import plot8_southURL from "./images/plot8/Jefferson_Plot8_South_Final.jpg";
import plot8_eastURL from "./images/plot8/Jefferson_Plot8_East_Final.jpg";
import plot8_westURL from "./images/plot8/Jefferson_Plot8_West_Final.jpg";
import plot8_northURL from "./images/plot8/Jefferson_Plot8_North_Final.jpg";

// *****************************
// * Table data for all plots
// *****************************
const plot1_data = [
  {
    treeNumber: "1",
    species: "Mockernut Hickory",
    class: "AGS",
    dbh: "18",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "2",
    species: "Red Maple",
    class: "AGS",
    dbh: "13.2",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "55",
  },
  {
    treeNumber: "3",
    species: "Mockernut Hickory",
    class: "AGS",
    dbh: "17.9",
    crownClass: "Codominant",
    logs: "2",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "4",
    species: "Red Maple",
    class: "AGS",
    dbh: "15",
    crownClass: "Intermediate",
    logs: "0.5",
    bolts: "0",
    height: "50",
  },
  {
    treeNumber: "5",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "32.9",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "6",
    species: "Mockernut Hickory",
    class: "AGS",
    dbh: "9.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "3",
    height: "45",
  },
  {
    treeNumber: "7",
    species: "Chestnut Oak",
    class: "AGS",
    dbh: "25.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "8",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "12.5",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "9",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "24",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "80",
  },
  {
    treeNumber: "10",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "23",
    crownClass: "Codominant",
    logs: "0.5",
    bolts: "0",
    height: "75",
  },
];

const plot2_data = [
  {
    treeNumber: "1",
    species: "Red Maple",
    class: "AGS",
    dbh: "18",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "55",
  },
  {
    treeNumber: "2",
    species: "Red Maple",
    class: "AGS",
    dbh: "17.6",
    crownClass: "Codominant",
    logs: "2",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "3",
    species: "Red Maple",
    class: "AGS",
    dbh: "8.1",
    crownClass: "Suppressed",
    logs: "0",
    bolts: "2",
    height: "50",
  },
  {
    treeNumber: "4",
    species: "Red Maple",
    class: "AGS",
    dbh: "16.9",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "80",
  },
  {
    treeNumber: "5",
    species: "Red Maple",
    class: "UGS",
    dbh: "13.6",
    crownClass: "Codominant",
    logs: "0",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "6",
    species: "Scarlet Oak",
    class: "UGS",
    dbh: "18.8",
    crownClass: "Codominant",
    logs: "0",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "7",
    species: "Red Maple",
    class: "UGS",
    dbh: "12.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "8",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "26.3",
    crownClass: "Codominant",
    logs: "2",
    bolts: "0",
    height: "85",
  },
];

const plot3_data = [
  {
    treeNumber: "1",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "19.1",
    crownClass: "Codominant",
    logs: "2",
    bolts: "0",
    height: "85",
  },
  {
    treeNumber: "2",
    species: "Red Maple",
    class: "UGS",
    dbh: "18.3",
    crownClass: "Codominant",
    logs: "0",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "3",
    species: "Black Gum",
    class: "AGS",
    dbh: "7.6",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "3",
    height: "50",
  },
  {
    treeNumber: "4",
    species: "Red Maple",
    class: "AGS",
    dbh: "12.5",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "5",
    species: "Red Maple",
    class: "AGS",
    dbh: "8.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "4",
    height: "45",
  },
  {
    treeNumber: "6",
    species: "Scarlet Oak",
    class: "UGS",
    dbh: "14.5",
    crownClass: "Codominant",
    logs: "0",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "7",
    species: "Scarlet Oak",
    class: "UGS",
    dbh: "15.5",
    crownClass: "Codominant",
    logs: "0",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "8",
    species: "Red Maple",
    class: "UGS",
    dbh: "11.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "9",
    species: "Sweetgum",
    class: "AGS",
    dbh: "11.5",
    crownClass: "Codominant",
    logs: "0",
    bolts: "5",
    height: "75",
  },
  {
    treeNumber: "10",
    species: "Red Maple",
    class: "AGS",
    dbh: "15",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "11",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "21.3",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "85",
  },
];

const plot4_data = [
  {
    treeNumber: "1",
    species: "Black Cherry",
    class: "AGS",
    dbh: "16.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "2",
    species: "Mockernut Hickory",
    class: "AGS",
    dbh: "14.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "3",
    species: "Red Maple",
    class: "AGS",
    dbh: "8",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "2",
    height: "45",
  },
  {
    treeNumber: "4",
    species: "Mockernut Hickory",
    class: "AGS",
    dbh: "15.5",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "60",
  },
  {
    treeNumber: "5",
    species: "Chestnut Oak",
    class: "AGS",
    dbh: "13",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "6",
    species: "Chestnut Oak",
    class: "AGS",
    dbh: "15",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "7",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "12",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "8",
    species: "Chestnut Oak",
    class: "AGS",
    dbh: "14",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "9",
    species: "Chestnut Oak",
    class: "AGS",
    dbh: "18.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "10",
    species: "Black Cherry",
    class: "AGS",
    dbh: "12",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "70",
  },
];

const plot5_data = [
  {
    treeNumber: "1",
    species: "Sweetgum",
    class: "AGS",
    dbh: "20",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "80",
  },
  {
    treeNumber: "2",
    species: "Red Maple",
    class: "AGS",
    dbh: "7.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "3",
    height: "50",
  },
  {
    treeNumber: "3",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "12.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "4",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "19",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "5",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "17.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "80",
  },
  {
    treeNumber: "6",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "12.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "7",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "14",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "8",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "18.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "65",
  },
];

const plot6_data = [
  {
    treeNumber: "1",
    species: "Red Maple",
    class: "AGS",
    dbh: "16.5",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "85",
  },
  {
    treeNumber: "2",
    species: "Red Maple",
    class: "AGS",
    dbh: "12.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "3",
    species: "Red Maple",
    class: "AGS",
    dbh: "12.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "4",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "20.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "5",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "11.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "5",
    height: "65",
  },
  {
    treeNumber: "6",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "22",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "80",
  },
  {
    treeNumber: "7",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "16.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "80",
  },
  {
    treeNumber: "8",
    species: "Red Maple",
    class: "AGS",
    dbh: "14",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "9",
    species: "Red Maple",
    class: "AGS",
    dbh: "7",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "3",
    height: "50",
  },
];

const plot7_data = [
  {
    treeNumber: "1",
    species: "Black Cherry",
    class: "AGS",
    dbh: "8.2",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "5",
    height: "45",
  },
  {
    treeNumber: "2",
    species: "Chestnut Oak",
    class: "AGS",
    dbh: "33",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "3",
    species: "Sweetgum",
    class: "AGS",
    dbh: "19",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "4",
    species: "Sweetgum",
    class: "AGS",
    dbh: "14.5",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "5",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "13",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "6",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "15.5",
    crownClass: "Codominant",
    logs: "0.5",
    bolts: "0",
    height: "80",
  },
  {
    treeNumber: "7",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "17.5",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "8",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "12.5",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "9",
    species: "Black Gum",
    class: "AGS",
    dbh: "7.5",
    crownClass: "Intermediate",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "10",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "10.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "2",
    height: "50",
  },
];

const plot8_data = [
  {
    treeNumber: "1",
    species: "Sweetgum",
    class: "AGS",
    dbh: "17.5",
    crownClass: "Codominant",
    logs: "2",
    bolts: "0",
    height: "75",
  },
  {
    treeNumber: "2",
    species: "Sweetgum",
    class: "AGS",
    dbh: "20.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "70",
  },
  {
    treeNumber: "3",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "10.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "3",
    height: "55",
  },
  {
    treeNumber: "4",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "23.5",
    crownClass: "Codominant",
    logs: "1.5",
    bolts: "0",
    height: "80",
  },
  {
    treeNumber: "5",
    species: "Yellow Poplar",
    class: "AGS",
    dbh: "7.5",
    crownClass: "Intermediate",
    logs: "0",
    bolts: "3",
    height: "50",
  },
  {
    treeNumber: "6",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "16.5",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "7",
    species: "Scarlet Oak",
    class: "UGS",
    dbh: "19",
    crownClass: "Codominant",
    logs: "0",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "8",
    species: "Scarlet Oak",
    class: "UGS",
    dbh: "15.5",
    crownClass: "Codominant",
    logs: "0",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "9",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "22",
    crownClass: "Codominant",
    logs: "0.5",
    bolts: "0",
    height: "65",
  },
  {
    treeNumber: "10",
    species: "Scarlet Oak",
    class: "AGS",
    dbh: "24",
    crownClass: "Codominant",
    logs: "1",
    bolts: "0",
    height: "75",
  },
];

// *****************************
// * Plot specific data
// *****************************
export const Data = {
  1: {
    youtubeVideoUrl: "https://www.youtube.com/embed/Yg3N-BmKvWM",
    tableData: plot1_data,
    center: plot1_centerURL,
    south: plot1_southURL,
    east: plot1_eastURL,
    west: plot1_westURL,
    north: plot1_northURL,
  },
  2: {
    youtubeVideoUrl: "https://www.youtube.com/embed/aEyo-6GJ24Q",
    tableData: plot2_data,
    center: plot2_centerURL,
    south: plot2_southURL,
    east: plot2_eastURL,
    west: plot2_westURL,
    north: plot2_northURL,
  },
  3: {
    youtubeVideoUrl: "https://www.youtube.com/embed/g8TzlM8YArA",
    tableData: plot3_data,
    center: plot3_centerURL,
    south: plot3_southURL,
    east: plot3_eastURL,
    west: plot3_westURL,
    north: plot3_northURL,
  },
  4: {
    youtubeVideoUrl: "https://www.youtube.com/embed/NvaTFEU6mxY",
    tableData: plot4_data,
    center: plot4_centerURL,
    south: plot4_southURL,
    east: plot4_eastURL,
    west: plot4_westURL,
    north: plot4_northURL,
  },
  5: {
    youtubeVideoUrl: "https://www.youtube.com/embed/KJtPKekeC8I",
    tableData: plot5_data,
    center: plot5_centerURL,
    south: plot5_southURL,
    east: plot5_eastURL,
    west: plot5_westURL,
    north: plot5_northURL,
  },
  6: {
    youtubeVideoUrl: "https://www.youtube.com/embed/iR1b_XQkfto",
    tableData: plot6_data,
    center: plot6_centerURL,
    south: plot6_southURL,
    east: plot6_eastURL,
    west: plot6_westURL,
    north: plot6_northURL,
  },
  7: {
    youtubeVideoUrl: "https://www.youtube.com/embed/FuOxoGVmJtQ",
    tableData: plot7_data,
    center: plot7_centerURL,
    south: plot7_southURL,
    east: plot7_eastURL,
    west: plot7_westURL,
    north: plot7_northURL,
  },
  8: {
    youtubeVideoUrl: "https://www.youtube.com/embed/BG-fFoocVcc",
    tableData: plot8_data,
    center: plot8_centerURL,
    south: plot8_southURL,
    east: plot8_eastURL,
    west: plot8_westURL,
    north: plot8_northURL,
  },
};

// *****************************
// * Plot rotation data
// *****************************
export const plotRotation = {
  center: "0 -1 0 0",
  east: "0 -1 0 3.1415",
  west: "0 -1 0 3.1415",
  north: "0 -1 0 3.1415",
  south: "0 -1 0 3.1415",
};

// *****************************
// * Header buttons data
// *****************************
export const navItems = [
  {
    id: 1,
    title: "View Plot",
  },
  {
    id: 2,
    title: "Resources",
  },
  {
    id: 3,
    title: "Mobile",
  },
];

// *****************************
// * View Plot dropdown data
// *****************************
export const directionDropdownItems = [
  {
    id: 0,
    title: "Center",
  },
  {
    id: 1,
    title: "East",
  },
  {
    id: 2,
    title: "West",
  },
  {
    id: 3,
    title: "North",
  },
  {
    id: 4,
    title: "South",
  },
];

// *****************************
// * Resources dropdown data
// *****************************
export const resourcesDropdownItems = [
  {
    id: 1,
    title: "Table",
  },
  {
    id: 2,
    title: "Env report",
    file: envReport,
  },
  {
    id: 3,
    title: "Aerial Image",
    file: aerialImage,
  },
  {
    id: 4,
    title: "Topo Image",
    file: topoImage,
  },
];

// *****************************
// * Exporting Site Map Image
// *****************************
export const siteMapImage = siteMapFilePath;
