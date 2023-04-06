// components
import { Switches } from "../Switches";

// svg
import { ArrowLeft, ArrowRight } from "../../assets/svgs";

// styles
import "./ExtensionCard.css";

export const ExtensionCard = ({
  type,
  item,
  active,
  customStyles,
  onClick,
  isActive,
  setIsActive,
}) => {
  return (
    <div
      className={`extension-card ${type} ${active === true ? "animation" : ""}`}
      style={{ ...customStyles }}
    >
      {type === "other-extensions-card" && (
        <div className='other-extensions-card' onClick={onClick}>
          <div className='other-extensions-card-header active'>
            {item.icon}
            <h1>{item.title}</h1>
          </div>
          <div className='extension-card-body active'>
            <ArrowRight className={"arrowSvg"} />
          </div>
        </div>
      )}

      {type === "default-card" && (
        <>
          <div
            className='card-header active'
            style={{
              opacity: item.disabled ? ".4" : "1",
              pointerEvents: item.disabled ? "none" : "all",
            }}
          >
            {item.icon}
            <Switches
              type={"lg-switches"}
              size={"size"}
              onChange={setIsActive}
              value={isActive}
            />
          </div>
          <div
            className='extension-card-body active'
            style={{
              opacity: item.disabled ? ".4" : "1",
            }}
          >
            <div className='extension-card-body-header' onClick={onClick}>
              <h1>{item.title}</h1>
              <ArrowRight className={"arrowSvg"} />
            </div>
            <p className='font-16'>{item.description}</p>
          </div>
        </>
      )}

      {type === "full-info-card" && (
        <div className='full-info-card-wrapp'>
          <div
            style={{
              padding: "35px",
              backgroundColor: "rgba(39, 44, 87, 0.5)",
              borderRadius: "16px",
              border: "1px solid rgba(39, 44, 87, 0.5)",
              height: "100%",
            }}
            className='card-header active'
          >
            {item.icon}
          </div>
          <div className='full-info-card-content'>
            <div className='full-info-card-header extension-card-body active'>
              <h1>{item.title}</h1>
              <div className='hushCode'>
                <p>{item.hash}</p>
                <ArrowLeft className={"arrowSvg2"} />
              </div>
            </div>
            <div className='full-info-card-body extension-card-footer active'>
              <div className='component-body-section'>
                <h4>Developer</h4>
                <div className='component-body-section-body'>
                  <p>Compound Labs</p>
                  <ArrowRight className={"arrowSvg"} />
                </div>
              </div>
              <div className='line'></div>
              <div className='component-body-section component-body-section'>
                <h4>Supported Markets</h4>
                <div className='component-body-section-body'>
                  <p>USDC</p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='4'
                    height='4'
                    viewBox='0 0 4 4'
                    fill='none'
                    className='dotSvg'
                  >
                    <circle cx='2' cy='2' r='2' fill='#D9D9D9' />
                  </svg>
                  <p>ETH</p>
                </div>
              </div>
              <div className='line'></div>
              <div className='component-body-section'>
                <h4>Links</h4>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                >
                  <path
                    d='M9.00004 0.872559C7.02123 0.872514 5.10698 1.57663 3.59985 2.8589C2.09271 4.14117 1.09105 5.9179 0.774106 7.87117C0.457166 9.82443 0.845634 11.8267 1.86999 13.5198C2.89435 15.2128 4.48775 16.4861 6.36504 17.1117C6.78171 17.1851 6.93754 16.9351 6.93754 16.7159C6.93754 16.5184 6.92754 15.8617 6.92754 15.1642C4.83337 15.5492 4.29171 14.6534 4.12504 14.1851C3.94016 13.729 3.64699 13.3249 3.27088 13.0076C2.97921 12.8517 2.56254 12.4659 3.26004 12.4559C3.52661 12.4847 3.78229 12.5774 4.0054 12.7261C4.22852 12.8748 4.41249 13.0751 4.54171 13.3101C4.65565 13.5148 4.80887 13.695 4.9926 13.8404C5.17632 13.9858 5.38693 14.0936 5.61236 14.1574C5.83779 14.2213 6.07361 14.2401 6.3063 14.2126C6.53899 14.1852 6.76398 14.1121 6.96838 13.9976C7.00447 13.5737 7.19343 13.1774 7.50004 12.8826C5.64587 12.6742 3.70838 11.9559 3.70838 8.76839C3.69657 7.94004 4.00219 7.13857 4.56254 6.52839C4.3078 5.80857 4.33761 5.01863 4.64588 4.32006C4.64588 4.32006 5.34338 4.10173 6.93754 5.17423C8.30111 4.79918 9.74064 4.79918 11.1042 5.17423C12.6975 4.09089 13.3959 4.32006 13.3959 4.32006C13.7042 5.01861 13.734 5.80859 13.4792 6.52839C14.0413 7.13752 14.3471 7.93969 14.3334 8.76839C14.3334 11.9659 12.385 12.6742 10.5309 12.8826C10.7298 13.0841 10.8829 13.3261 10.98 13.5921C11.077 13.8582 11.1157 14.1419 11.0934 14.4242C11.0934 15.5392 11.0834 16.4351 11.0834 16.7159C11.0834 16.9351 11.2392 17.1951 11.6559 17.1117C13.5297 16.4808 15.1184 15.2045 16.1382 13.5107C17.1581 11.8168 17.5428 9.81565 17.2237 7.86438C16.9046 5.91311 15.9024 4.13875 14.396 2.85804C12.8897 1.57733 10.9772 0.873634 9.00004 0.872559Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
