import React from "react";

interface CommonProps {
  children: React.ReactNode;
}

interface TruncatedProps extends CommonProps {
  truncate?: "on";
  expanded?: boolean;
}

interface NoTruncatedProps extends CommonProps {
  truncate?: "off";
}

interface TextProps extends CommonProps {
  truncate?: "on" | "off";
  expanded?: boolean;
}

function Text(props: NoTruncatedProps): JSX.Element;
function Text(props: TruncatedProps): JSX.Element;

function Text(props: TextProps) {
  const { children, truncate, expanded } = props;
  const className = truncate ? "u-text-truncate" : "";

  return (
    <div className={className} aria-expanded={!!expanded}>
      {children}
    </div>
  );
}

export const Sample = () => {
  return <Text truncate="off">Hello there</Text>;
};
