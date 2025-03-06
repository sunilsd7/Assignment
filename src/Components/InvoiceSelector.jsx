import { useState } from "react";
import { FaFilePdf, FaFileAlt, FaFileImage } from "react-icons/fa";

const invoices = [
  { name: "Invoice_001.pdf", date: "2024-03-01", type: "pdf" },
  { name: "Invoice_002.docx", date: "2024-03-02", type: "doc" },
  { name: "Invoice_003.png", date: "2024-03-03", type: "image" },
];

const getFileIcon = (type) => {
  switch (type) {
    case "pdf":
      return <FaFilePdf className="text-red-500 text-xl" />;
    case "doc":
      return <FaFileAlt className="text-blue-500 text-xl" />;
    case "image":
      return <FaFileImage className="text-green-500 text-xl" />;
    default:
      return <FaFileAlt className="text-gray-500 text-xl" />;
  }
};

const InvoiceSelector = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null)

  return (
    <div className=" p-4 rounded-lg flex gap-2 border-1">
      {invoices.map((invoice) => (
        <div
          key={invoice.name}
          onClick={() => setSelectedInvoice(invoice.name)}
          className={`flex items-center gap-3  rounded-md cursor-pointer transition-all py-6  px-2 ${
            selectedInvoice === invoice.name ? "  border-2" : "border-2 border-amber-100"
          }`}
        >
          {getFileIcon(invoice.type)}
          <div>
            <p className="font-medium">{invoice.name}</p>
            <p className="text-sm opacity-70">{invoice.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvoiceSelector;
