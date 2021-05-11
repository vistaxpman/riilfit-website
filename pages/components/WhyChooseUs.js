import React from "react";
import styled from "styled-components";
import StarIcon from "mdi-react/StarIcon";
import CheckIcon from "mdi-react/CheckIcon";

export default function WhyChooseUs() {
  return (
    <Wrapper className="py-16 px-20">
      <img src="/assets/homepage/row2-banner.svg" className="lg:invisible"/>
      <div>
        <div>
          <span></span>
          <span>Why Choose Us</span>
        </div>
        <span>
          Here is some reason why you <br /> should choose us
        </span>
        <div>
          <div>
            <div>
              <StarIcon />
            </div>
            <span>EXCLUSIVE</span>
            <span>
              Our rigs are used by serious gyms for serious fitness. We take
              training to the next level with bespoke cooperative service,
              design and fit out to ensure your gym is filled with the best
              possible.
            </span>
          </div>
          <div>
            <div>
              <CheckIcon />
            </div>
            <span>Trusted</span>
            <span>
              Our rigs are used by serious gyms for serious fitness. We take
              training to the next level with bespoke cooperative service,
              design and fit out to ensure your gym is filled with the best
              possible.
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  // background: #f4f4f4;
  // border-top-right-radius: 80px;
  // display: flex;
  // justify-content: center;

  // > img:nth-child(1) {
  //   border-radius: 10px 7px 7px 70px;
  //   margin-right: 10%;
  //   height: 370px;
  //   width: 25%;
  // }

  // > div:nth-child(2) {
  //   display: flex;
  //   flex-direction: column;
  //   width: 45%;

  //   > div:nth-child(1) {
  //     display: flex;
  //     align-items: center;
  //     margin-bottom: 10px;

  //     > span:nth-child(1) {
  //       width: 60px;
  //       border-top: 2px solid #434343;
  //       margin-right: 15px;
  //     }

  //     > span:nth-child(2) {
  //       color: #434343;
  //       font-style: italic;
  //       font-size: 13px;
  //       font-weight: bold;
  //     }
  //   }

  //   > span:nth-child(2) {
  //     color: #434343;
  //     font-family: Arial;
  //     font-style: normal;
  //     font-weight: 600;
  //     font-size: 20px;
  //     line-height: 25px;
  //     margin-bottom: 40px;
  //   }

  //   > div:nth-child(3) {
  //     display: flex;

  //     > div {
  //       display: flex;
  //       flex-direction: column;
  //       width: 42%;
  //       background: #ffffff;
  //       box-shadow: 0px 26px 40px rgba(0, 0, 0, 0.12);
  //       border-radius: 16px;
  //       padding: 20px 20px 0;
  //       // height: 280px;

  //       > div:nth-child(1) {
  //         background: rgba(228, 173, 43, 0.12);
  //         height: 35px;
  //         width: 35px;
  //         border-radius: 50%;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //         margin-bottom: 20px;

  //         > svg {
  //           color: #e4ad2b;
  //           height: 20px;
  //           width: 20px;
  //         }
  //       }

  //       > span:nth-child(2) {
  //         text-transform: uppercase;
  //         font-weight: bold;
  //         margin-bottom: 5px;
  //       }

  //       > span:nth-child(3) {
  //         font-size: 14px;
  //       }
  //     }

  //     > div:nth-child(2) {
  //       margin: 10% 0 0 10%;
  //     }
  //   }
  // }
`;
