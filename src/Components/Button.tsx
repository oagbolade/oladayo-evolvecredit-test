import React from "react";

type Props = {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  color?: string;
  textSize?: string;
  shape?: string;
  animation?: string;
};
export default function Button(props: Props) {
  const {
    color = "primary",
    textSize = "text-lg",
    shape = "rounded",
    animation = "animate-bounce ",
  } = props;

    const colorPicker = {
      primary: "bg-blue-500 hover:bg-blue-400",
      secondary: "bg-grey-500 hover:bg-grey-400",
      danger: "bg-red-500 hover:bg-red-400",
      success: "bg-green-500 hover:bg-green-400",
      warning: "bg-yellow-500 hover:bg-yellow-400",
    } as any;

    return (
      <div className="grid place-items-center h-screen">
        <button
          data-testid="button"
          className={`text-white font-bold py-2 px-4 rounded ${animation} ${colorPicker[color]} ${shape} ${textSize}`}
        >
          {props.children}
        </button>
      </div>
    );
}
