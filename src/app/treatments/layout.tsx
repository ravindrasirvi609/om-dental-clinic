import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Om Dental Clinic Treatments",
    default: "Dental Treatments | Om Dental Clinic",
  },
};

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">{children}</div>
    </div>
  );
}
