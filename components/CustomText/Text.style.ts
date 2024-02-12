import styled,{css} from "styled-components";
import { responsive } from "@/theme/responsive";

export const Primary =styled.p<{
    variant:string
    weight:string
}>`
    font-weight: ${({ weight }) =>
      weight === "normal"
        ? "500"
        : weight === "normal"
        ? "600"
        : weight === "bold"
        ? "700"
        : "300"};
        
    ${({ variant }) =>
      variant === "h1"
        ? css`
            font-size: 50px;
            line-height: 61.5px;
            ${responsive("$small")`
            font-size: 40px;`}
          `
        :variant === "h2"
        ? css`
            font-size: 40px;
            line-height: 41.2px;
            ${responsive("$small")`
            font-size: 24px;`}
          `
        : variant === "h3"
        ? css`
            font-size: 29px;
            line-height: 35.67%;
            ${responsive("$small")`
            font-size: 16px;`}
          `
        : variant === "h4"
        ? css`
            font-size: 20px;
            line-height: 35.67px;
            ${responsive("$small")`
            font-size: 14px;
            line-height:15.23px`}
          `
        : variant === "h5"
        ? css`
            font-size: 16px;
            line-height: 24px;
            ${responsive("$small")`
            font-size: 14px;`}
          `
        : variant === "p"
        ? css`
          font-size: 40px;
            ${responsive("$small")`
            font-size: 24px;`}
          `
        : css`
            font-size: 1600px;
            line-height: 150%;
          `};
    
  `;

