import React from "react";
import { Flex, FlexProps } from "rebass";
import { Grid as GridStyled, GridStyledProps } from "./styles";

export const Grid: React.FC<{ containerProps?: Omit<FlexProps, "css"> } & GridStyledProps> = ({
  containerProps,
  ...props
}) => {
  return (
    <Flex {...containerProps}>
      <GridStyled {...props}>{props.children}</GridStyled>
    </Flex>
  );
};
