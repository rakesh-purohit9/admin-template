import React from "react";
import SwitchProvider from "@dhiwise/react-switch";
export const Switch = ({
  onColor,
  offColor,
  onHandleColor,
  offHandleColor,
  checked,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
}) => {
  const [selected, setSelected] = React.useState(checked);
  return (
    <>
      <SwitchProvider
        className={className}
        checked={selected}
        onChange={setSelected}
        onColor={onColor}
        offColor={offColor}
        onHandleColor={onHandleColor}
        offHandleColor={offHandleColor}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </>
  );
};
