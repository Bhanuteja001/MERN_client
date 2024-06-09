import React from "react";

const AboutUs = () => {
  return (
    <>


      <div className=" container mb-5 " style={{ fontSize: "22px",fontWeight:"500",letterSpacing:"1px" }}>
        <p style={{ lineHeight: "55.0px",textAlign:"justify" }} className="mb-5">
          SURGYLIFE provides Patients access to various treatment options and
          expert surgeons for their Medical and surgical requirements at an
          affordable cost within Hyderabad,We offer services related to
          admission requirements surgeies day care procedures,organ transplants
          among other value added services.
        </p>

        <p style={{ lineHeight: "55.0px",textAlign:"justify",letterSpacing:"1px" }}>
          SurgyLife assists patients streer the entire surgical and magnetic
          process including connection with surgeons finding the right cars of
          treatment performing cost estimates and insurance coverage checks.we
          at surgylife belive in value based Care Advanced technology and
          superior patient experience to deliver better health outcomes while
          limiting costs.
        </p>
      </div>

      <hr className="container bg-warning mb-5" />

      <div className="container mb-5" style={{fontSize:'22px',lineHeight:'56.5px',fontWeight:"500"}}>
        <p className="text-justify mb-5" style={{textAlign:"justify"}}>
          <h3 className="text-primary-emphasis">What are we ?</h3>
          SURGYLIFE is a group of doctors from various specialist and hospitals
          across Hyderabad,ranging from International medicine general surgery
          orthopedics, pediatrics, obstetrics, gynaecology cardiology cardiac
          surgery ,neurology ,neurosurgery, nephrology, urology, plastic surgery
          ,Critical Care, vascular surgery, International radiology dentistry and
          organ transplants
        </p>
        <p className="text-justify"  style={{textAlign:"justify"}}>
          <h3 className="text-primary-emphasis">How we work ?</h3>
          We are a group of doctors who admit patients under our care we are not
          a referral company like other companies you come across we provide the
          patient with consultation Options for admission to surgery (if
          necessary) and post op care is taken care completely by our team.This
          removes any doubt of the standard of doctors care provided in the
          hospitals and post discharge follow up as the patient continues with
          the same Doctor Who Has Seen the patient from the first consultation
          till post discharge follow up.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
