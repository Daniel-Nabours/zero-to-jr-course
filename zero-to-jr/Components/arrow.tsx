import {memo} from "react";

const arrow = { width: "200px", display: "flex" };

const line = {
  marginTop: "14px",
  width: "100%",
  background: "white",
  height: "10px",
};

const point = {
  width: "0",
  height: "0",
  borderTop: "20px solid transparent",
  borderBottom: "20px solid transparent",
  borderLeft: "30px solid white",
};

interface xType {
  [key: string]: any;
}

const Arrow: React.FC<{ dir: "left" | "right" | "up" | "down" }> = ({
  ...props
}): JSX.Element => {
  const getDir = () => {
    switch (props.dir) {
      case "left": {
        return "rotate(180deg)";
      }
      case "right": {
        return "rotate(0deg)";
      }
      case "up": {
        return "rotate(270deg)";
      }
      case "down": {
        return "rotate(90deg)";
      }
    }
  };

  return (
    <div style={{ ...arrow, transform: getDir() }}>
      <div style={line} />
      <div style={point} />
    </div>
  );
};

export default memo(Arrow);
