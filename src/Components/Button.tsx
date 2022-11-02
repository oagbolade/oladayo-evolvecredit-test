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
};
export default function Button(props: Props) {
  const {
    color = "bg-blue-500 hover:bg-blue-400",
    textSize = "text-lg",
    shape = "rounded",
  } = props;

    const colorPicker = {
      primary: "bg-blue-500 hover:bg-blue-400",
      secondary: "",
      danger: "bg-red-500 hover:bg-red-400",
      success: "",
      warning: "",
    } as any;

    return (
      <div className="grid place-items-center h-screen">
        {/* <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"> */}
        <button
          className={`text-white font-bold py-2 px-4 rounded ${colorPicker[color]} ${shape} ${textSize}`}
        >
          {props.children}
        </button>
      </div>
    );
}
