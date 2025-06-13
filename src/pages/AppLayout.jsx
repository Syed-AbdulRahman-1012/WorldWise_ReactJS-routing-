import React from "react";
import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";
import ProtectedRoute from "./ProtectedRoute";

export default function AppLayout() {
  return (
    <>
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    </>
  );
}
