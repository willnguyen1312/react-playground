import React from "react";

interface TruncatedProps {
  textMode?: "on";
  text: string;
}

interface NoTruncatedProps {
  textMode?: "off";
}

interface TextProps {
  textMode?: "on" | "off";
  text?: string;
}

function Text(props: NoTruncatedProps): JSX.Element;
function Text(props: TruncatedProps): JSX.Element;

function Text({ text, textMode }: TextProps): JSX.Element {
  if (textMode === "on") {
    return <div>ON with {text}</div>;
  }

  return <div>OFF</div>;
}

export const Sample = () => {
  return (
    <>
      <Text textMode="off" />
      <Text textMode="on" text="Aha" />
    </>
  );
};
