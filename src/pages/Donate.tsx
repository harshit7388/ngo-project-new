import React from 'react';
import styled from 'styled-components';
import { HandHeart, Heart } from 'lucide-react';
import donatenow from '../assets/donatenow.jpg';
import upiQrImage from '../assets/UPI.jpg'

// Styled components
const SectionWrapper = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  margin: 2rem auto;
  padding: 2rem;
  max-width: 800px;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  border-left: 6px solid #5b49ff;
  background: #f0f4f8;
  color: #1f2937;
  border-radius: 8px;
`;

const DetailsBox = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 1.2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
`;

const Highlight = styled.span`
  color: #14b8a6;
  font-weight: 600;
`;

const Donate: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${donatenow})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="container text-white">
          <h1 className="text-5xl font-bold mb-4">Make a Difference</h1>
          <p className="text-xl max-w-2xl">
            Your contribution helps us continue our mission of empowering communities and transforming lives.
          </p>
        </div>
      </section>

      {/* Styled Donation Sections */}
      <SectionWrapper>
        {/* <Heart className="w-16 h-16 mx-auto mb-4" /> */}
        <HandHeart className="w-16 h-16 mx-auto mb-4"/>
        {/* Internet Banking Section */}
        <Heading>Internet Banking</Heading>
        <DetailsBox>
          <p><Highlight>Bank Name:</Highlight> HDFC Bank</p>
          <p><Highlight>Bank Address:</Highlight>SECTOR-57, Gurugram, Haryana</p>
          <p><Highlight>Account Name:</Highlight> KALYAN KE KADAM FOUNDATION</p>
          <p><Highlight>Account Number:</Highlight> 50200087640786</p>
          <p><Highlight>IFSC Code:</Highlight> HDFC0001394</p>
          {/* <p><Highlight>MICR Code:</Highlight> 110002345</p> */}
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            For any issues, please contact us at <b>Kalyankekadamfoundation@gmail.com.</b>
          </p>
        </DetailsBox>

        {/* UPI Payment Section */}
        {/* <Heading style={{ marginTop: '2rem' }}>UPI Payment → UPI QR</Heading>
        <DetailsBox style={{ textAlign: 'center' }}>
          <p><Highlight>Merchant Name:</Highlight> NGO Charity Fund</p>
          <p><Highlight>UPI ID:</Highlight> charity@upi</p>
          <img
            src={upiQrImage}
            alt="UPI QR Code for donation"
            style={{ width: '200px', height: '200px', margin: '1rem 0' }}
          />
          <p>Scan this QR code using any UPI app to donate instantly.</p>
        </DetailsBox> */}
      </SectionWrapper>
    </div>
  );
};

export default Donate;
