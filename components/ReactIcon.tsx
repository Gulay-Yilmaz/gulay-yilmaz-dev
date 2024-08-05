import React, { ReactElement } from "react";
import * as ReactIcons from "react-icons/fa6";

import { IconType } from "react-icons/lib";

interface ReactIconProps {
  iconName: keyof typeof ReactIcons;
  color?: string;
}

const ReactIcon: React.FC<ReactIconProps> = ({
  iconName,
  color = "white",
}): ReactElement => {
  const IconComponent: IconType =
    ReactIcons[iconName as keyof typeof ReactIcons];
  return (
    <IconComponent
      width={22}
      height={22}
      color={color}
      className="w-[22px] h-[22px]"
    />
  );
};

export default ReactIcon;
