
import React from "react";
import { CreditCard, FileText, DollarSign, Download, Plus, Trash2 } from "lucide-react";

// Reusable billing card
const BillingCard = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6">
    <h3 className="text-slate-800 font-extrabold mb-4">{title}</h3>
    {children}
  </div>
);

// Payment Methods Card
const PaymentMethods = () => (
  <BillingCard title="Payment Methods">
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-14 bg-slate-800 text-white grid place-items-center rounded-lg font-bold">
            VISA
          </div>
          <p className="text-sm font-semibold text-slate-700">•••• •••• •••• 4242</p>
        </div>
        <button className="text-rose-500 hover:text-rose-600">
          <Trash2 size={18} />
        </button>
      </div>
      <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-14 bg-blue-600 text-white grid place-items-center rounded-lg font-bold">
            MC
          </div>
          <p className="text-sm font-semibold text-slate-700">•••• •••• •••• 7777</p>
        </div>
        <button className="text-rose-500 hover:text-rose-600">
          <Trash2 size={18} />
        </button>
      </div>
      <button className="mt-2 flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700">
        <Plus size={16} /> Add New Card
      </button>
    </div>
  </BillingCard>
);

// Invoices Card
const Invoices = () => (
  <BillingCard title="Invoices">
    <div className="space-y-3">
      {[
        { id: "INV-1001", date: "12 Jul 2023", amount: "$120.00" },
        { id: "INV-1002", date: "05 Aug 2023", amount: "$80.00" },
        { id: "INV-1003", date: "20 Aug 2023", amount: "$210.00" },
      ].map((inv) => (
        <div
          key={inv.id}
          className="flex items-center justify-between bg-slate-50 rounded-xl p-3 text-sm"
        >
          <div>
            <p className="font-semibold text-slate-700">{inv.id}</p>
            <p className="text-xs text-slate-500">{inv.date}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-slate-800">{inv.amount}</p>
            <button className="text-sky-600 hover:text-sky-700">
              <Download size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </BillingCard>
);

// Billing Information Card
const BillingInfo = () => (
  <BillingCard title="Billing Information">
    <div className="space-y-3 text-sm">
      <div className="flex justify-between border-b pb-2">
        <span className="text-slate-500">Company Name</span>
        <span className="font-semibold text-slate-800">Creative Tim</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <span className="text-slate-500">Email Address</span>
        <span className="font-semibold text-slate-800">billing@creativetim.com</span>
      </div>
      <div className="flex justify-between border-b pb-2">
        <span className="text-slate-500">VAT Number</span>
        <span className="font-semibold text-slate-800">FRB1235476</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-500">Country</span>
        <span className="font-semibold text-slate-800">India</span>
      </div>
    </div>
  </BillingCard>
);

// Transactions Card
const Transactions = () => (
  <BillingCard title="Recent Transactions">
    <div className="space-y-3 text-sm">
      {[
        { label: "Payment to Netflix", date: "14 Aug", amount: "-$12.99", negative: true },
        { label: "Salary Received", date: "01 Aug", amount: "+$4,500", negative: false },
        { label: "AWS Billing", date: "28 Jul", amount: "-$220.00", negative: true },
      ].map((tx, i) => (
        <div key={i} className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-slate-700">{tx.label}</p>
            <p className="text-xs text-slate-500">{tx.date}</p>
          </div>
          <p
            className={`font-bold ${
              tx.negative ? "text-rose-600" : "text-emerald-600"
            }`}
          >
            {tx.amount}
          </p>
        </div>
      ))}
    </div>
  </BillingCard>
);

export default function Billing() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Invoices />
        <BillingInfo />
      </div>
      <div className="space-y-6">
        <PaymentMethods />
        <Transactions />
      </div>
    </div>
  );
}
