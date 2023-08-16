import React from "react";
import Image from "next/image";
import { Certificate } from "@/models/certificate.model";

export default function CertificateLayout({
  certificate,
}: {
  certificate: Certificate;
}) {
  const certificateContent = (
    <div className="certificate-item clearfix">
      <div className="certi-logo">
        <Image
          src={certificate.imgSrc}
          alt="logo"
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
        />
      </div>

      <div className="certi-content">
        <div className="certi-title">
          <h4>{certificate.title}</h4>
        </div>

        <div className="certi-id">
          <span>Membership ID: {certificate.membershipId}</span>
        </div>
        <div className="certi-date">
          <span>{certificate.date}</span>
        </div>

        <div className="certi-company">
          <span></span>
        </div>
      </div>
    </div>
  );

  if (certificate.urlCertificate) {
    return (
      <a href={certificate.urlCertificate} className="lightbox">
        {certificateContent}
      </a>
    );
  }

  return certificateContent;
}
