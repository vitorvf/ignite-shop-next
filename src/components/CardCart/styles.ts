import styled from "styled-components";

// import { styled } from "../../styles";

// export const CardCartContainer = styled("div", {
//   display: "flex",
//   gap: "1.25rem",
// });

// export const ImageCardCartContainer = styled("div", {
//   background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
//   borderRadius: 8,
//   maxWidth: 101,
//   height: 93,

//   img: {
//     objectFit: "cover",
//   },
// });

// export const CardCartContente = styled("div", {
//   p: {
//     fontSize: "$md",
//     lineHeight: 1.6,
//     fontWeight: "400",
//   },

//   span: {
//     fontSize: "$md",
//     lineHeight: 1.6,
//     fontWeight: "bold",
//   },

//   button: {
//     display: "block",
//     marginTop: 6,

//     background: "transparent",
//     border: 0,

//     color: "$green500",
//     fontSize: "$md",
//     fontWeight: "bold",
//     transition: "0.2s",

//     cursor: "pointer",

//     "&:hover": {
//       color: "$green300",
//     },
//   },
// });

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.colors["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
`;
