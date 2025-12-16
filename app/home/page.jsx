"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import SpreadsheetTable from "../components/SpreadsheetTable";
import SummaryReport from "../components/SummaryReport";

export default function DashboardPage() {
  const [transactionData, setTransactionData] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    console.log("📌 Isi currentUser dari localStorage:", storedUser);

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.username) {
          setUserName(parsedUser.username);
        }
      } catch (err) {
        console.error("❌ Gagal parse currentUser:", err);
      }
    }

    const savedReportData = localStorage.getItem("reportData");
    if (savedReportData) {
      try {
        setReportData(JSON.parse(savedReportData));
      } catch (err) {
        console.error("❌ Gagal parse reportData:", err);
      }
    }
  }, []);

  useEffect(() => {
    if (reportData.length > 0) {
      localStorage.setItem("reportData", JSON.stringify(reportData));
    }
  }, [reportData]);

  const addToReport = (data) => {
    if (data && data.tanggal && data.terapis && data.nominal) {
      setReportData((prev) => {
        const newData = [...prev, data];
        localStorage.setItem("reportData", JSON.stringify(newData));
        return newData;
      });
    }
  };

  const updateTransactionData = (newData) => {
    setTransactionData(newData);
  };

  const clearTransactionData = () => {
    setTransactionData([]);
  };

  // 🔴 LOGOUT HANDLER
  const handleLogout = async () => {
    localStorage.removeItem("currentUser");
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center uppercase tracking-wide">
          LAPORAN PENDAPATAN TERAPIS{" "}
          {userName && (
            <span className="text-blue-600 normal-case capitalize">
              ({userName})
            </span>
          )}
        </h1>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <span>🚪</span>
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SummaryReport data={reportData} />
      </div>

      <SpreadsheetTable
        data={transactionData}
        onSave={updateTransactionData}
        onClear={clearTransactionData}
        onAddToReport={addToReport}
      />
    </div>
  );
}
