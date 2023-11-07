import React from "react";
import Image from "next/image";
import styles from "./HoverScrollImage.module.css"; // Import your CSS module
import tablet from "../public/tablet.png";
import tablet_svg from "../public/tablet.png";
import img_1 from "../public/images/01.svg";
import img_2 from "../public/images/2.svg";
import img_3 from "../public/images/3.svg";
import img_4 from "../public/images/4.svg";

const HoverScrollImage = () => {
  return (
    <>
       
      <div src={tablet} alt="img" style={{ marginLeft: "10px",float:"left" }}>
      <Image
        src={tablet}
        alt="img"
        className={styles.container}
        style={{ width: "313px", height: "420px" }}
      />
        <div className={styles.imageContainer}>
          <Image
            src={img_1} 
            alt="My Image"
            style={{ marginTop: "-21px" }}
            className={styles.image}
          />
        </div>
      </div>
      
      <div src={tablet} alt="img" style={{ marginLeft: "10px",float:"left"   }}>
      <Image
        src={tablet}
        alt="img"
        className={styles.container}
        style={{ width: "313px", height: "420px"  }}
      />
        <div className={styles.imageContainer}>
          <Image
            src={img_2} 
            alt="My Image"
            style={{ marginTop: "-21px" }}
            className={styles.image}
          />
        </div>
      </div>
      <div src={tablet} alt="img" style={{ marginLeft: "10px",float:"left"   }}>
      <Image
        src={tablet}
        alt="img"
        className={styles.container}
        style={{ width: "313px", height: "420px"  }}
      />
        <div className={styles.imageContainer}>
          <Image
            src={img_3} 
            alt="My Image"
            style={{ marginTop: "-21px" }}
            className={styles.image}
          />
        </div>
      </div>
      <div src={tablet} alt="img" style={{ marginLeft: "10px",float:"left"   }}>
      <Image
        src={tablet}
        alt="img"
        className={styles.container}
        style={{ width: "313px", height: "420px"  }}
      />
        <div className={styles.imageContainer}>
          <Image
            src={img_4} 
            alt="My Image"
            style={{ marginTop: "-21px" }}
            className={styles.image}
          />
        </div>
      </div>

      
     
      {/* <div
          className={styles.container}
          style={{ float: "left", marginLeft: "10px" }}
        >
          <div className={styles.imageContainer}>
            <Image
              src={img_2} // Path to the image in the public directory
              alt="My Image"
              style={{ marginTop: "10px", marginLeft: "35px" }}
              className={styles.image}
            />
          </div>
        </div> */}
      {/* <div
          className={styles.container}
          style={{ float: "left", marginLeft: "10px" }}
        >
          <div className={styles.imageContainer}>
            <Image
              src={img_3} // Path to the image in the public directory
              alt="My Image"
              style={{ marginTop: "-5px", marginLeft: "35px" }}
              className={styles.image}
            />
          </div>
        </div> */}
      {/* <div
          className={styles.container}
          style={{ float: "left", marginLeft: "10px" }}
        >
          <div className={styles.imageContainer}>
            <Image
              src={img_4} // Path to the image in the public directory
              alt="My Image"
              style={{ marginTop: "-5px", marginLeft: "35px" }}
              className={styles.image}
            />
          </div>
        </div> */}
        
    </>
  );
};

export default HoverScrollImage;
