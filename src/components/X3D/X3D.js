import React from "react";
import { useEffect, useRef } from "react";
import Plot from "./Plot";
import Table from "../Table/Table";
import plot1_centerURL from "./asset/Jefferson_Plot1_Center_Photosphere_Final.jpg";
import plot1_southURL from "./asset/Jefferson_Plot1_South_Final.jpg";
import plot1_eastURL from "./asset/Jefferson_Plot1_East_Final.jpg";
import plot1_westURL from "./asset/Jefferson_Plot1_West_Final.jpg";
import plot1_northURL from "./asset/Jefferson_Plot1_North_Final.jpg";
import "./X3D.css";

const X3D = ({ mobileView, plotState, tableState, setTableState }) => {
  const switchRef = useRef();
  useEffect(() => {
    window.x3dom.reload();
    bindMe();
  }, []);

  useEffect(() => {
    shapeSwitch(plotState);
  }, [plotState]);

  var runtime = null;

  function bindMe() {
    var V = document.getElementById("vp");
    V.setAttribute("position", "0 0 10");
    V.setAttribute("bind", true);
    runtime = document.getElementById("x3dElement").runtime;

    runtime.resetView();
  }

  function shapeSwitch(id) {
    var sw = switchRef.current;
    sw.setAttribute("whichChoice", id);
    bindMe();
  }

  /* function added by sheeban for reference */
  function handleOrientation(event) {
    console.log(event);
    console.log("Inside handleOrientation");

    var V = document.getElementById("vp");
    var degtorad = Math.PI / 180; // Degree-to-Radian conversion

    // if the alpha beta gamma in degrees give them radians

    var a = event.alpha * degtorad;
    var b = event.beta * degtorad;
    var c = event.gamma * degtorad;

    console.log(a, b, c);
    console.log("This is x3dom", window.x3dom);

    var q1 = window.x3dom.fields.Quaternion.prototype.setFromEuler(c, b, a);
    console.log("q1", q1);

    var vector = new window.x3dom.fields.SFVec3f(1, 0, 0);
    var newmat = window.x3dom.fields.Quaternion.axisAngle(vector, -1.578);
    var m = newmat.toMatrix();
    newmat.setValue(m);
    var q2 = newmat.multiply(q1);
    var r = q2.toAxisAngle();

    V.setAttribute(
      "orientation",
      r[0].x + " " + r[0].y + " " + r[0].z + " " + r[1]
    );
  }

  let is_running = false;

  const demo_button = function () {
    console.log("It worked");

    //Request permission for iOS 13+ devices
    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission();
    }

    if (is_running) {
      window.removeEventListener("deviceorientation", handleOrientation);

      is_running = false;
    } else {
      window.addEventListener("deviceorientation", handleOrientation);

      is_running = true;
    }
  };

  if (mobileView === "on") {
    is_running = true;
    demo_button();
  } else {
    is_running = false;
    demo_button();
  }

  return (
    <div className="x3dom-table-div">
      <x3d is="x3d" id="x3dElement" showStat="false" showLog="false">
        <scene is="scene">
          <environment
            is="environment"
            id="gamma"
            gammaCorrectionDefault="linear"
          ></environment>

          <viewpoint
            id="vp"
            is="viewpoint"
            centerOfRotation="0,0,0"
            description='"Plot S"'
            fieldOfView="0.95398"
            orientation="0,0,1,0"
            position="0,1.65,10"
          ></viewpoint>
          <navigationInfo
            is="navigationInfo"
            DEF="NavigationInfo1"
            avatarSize=".25 1.6 .75"
            visibilityLimit="100"
            speed="0.2"
            headlight="false"
            type='"TURNTABLE" "ANY"'
          ></navigationInfo>

          {/* <viewpoint
          id="vp"
          is="viewpoint"
          centerOfRotation="0,0,0"
          description='"Plot Center 1"'
          fieldOfView="0.95"
          position="0,1.65,10"
        ></viewpoint> */}

          {/* <viewpoint
          centerOfRotation="0,0,0"
          description='"Plot W"'
          fieldOfView="0.95398"
          orientation="0,1,1,-1.57"
          position="-10,0,0"
        ></viewpoint>

        <viewpoint
          centerOfRotation="0,0,0"
          description='"Plot N"'
          fieldOfView="0.95398"
          orientation="0,1,0,-3.14"
          position="0,1.65,-10"
        ></viewpoint>

        <viewpoint
          centerOfRotation="0,0,0"
          description='"Plot E"'
          fieldOfView="0.95398"
          orientation="0,1,0,1.57"
          position="10,1.65,0"
        ></viewpoint> */}

          <worldInfo
            is="worldInfo"
            info='"Forestry Training with Professor Munsell" "www.vt.edu" "Nicholas Polys" "Photosphere"'
            title="Extension Forester Training"
          ></worldInfo>

          <switch is="switch" id="sphereSwitch" whichChoice="0" ref={switchRef}>
            <Plot url={plot1_centerURL} rotation={"0 -1 0 0"}></Plot>
            <Plot url={plot1_eastURL} rotation={"0 -1 0 3.1415"}></Plot>
            <Plot url={plot1_westURL} rotation={"0 -1 0 3.1415"}></Plot>
            <Plot url={plot1_northURL} rotation={"0 -1 0 3.1415"}></Plot>
            <Plot url={plot1_southURL} rotation={"0 -1 0 3.1415"}></Plot>
          </switch>
        </scene>
      </x3d>
      <Table tableState={tableState} setTableState={setTableState}></Table>
    </div>
  );
};

export default X3D;
