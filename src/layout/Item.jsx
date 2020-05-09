/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Item = ({ children, flex, align }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
      `}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(["centre", "left", "right", "justify"])
};

export default Item;
