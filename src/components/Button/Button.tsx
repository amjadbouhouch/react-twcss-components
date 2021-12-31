import React, { forwardRef, useMemo } from "react";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * is Loading
   */
  loading?: boolean;
  /**
   * Take full space of the parent
   */
  full?: boolean;
  /**
   * is disabled
   */
  disabled?: boolean;
  /**
   * Should be rounded corner
   */
  rounded?: boolean;
  /**
   * mode variant: default to primary
   */
  mode?:
    | "danger"
    | "success"
    | "tertiary"
    | "secondary"
    | "primary"
    | undefined;
  /**
   * Size of the button
   */
  size?: "small" | "medium";
  /**
   * extra classNames
   */
  className?: string;
  /**
   * React.Node
   */
  children?: React.ReactNode;
  /**
   * icon as React.ReactNode
   */
  icon?: React.ReactNode;
  /**
   * Background will be white and the border well be colored.
   */
  outline?: boolean;
}
/**
 * @type React.FC<ButtonPropTypes>
 * Custom button component
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  let {
    disabled = false,
    full = false,
    mode = "primary",
    children,
    size = "medium",
    loading = false,
    className = "",
    icon = undefined,
    rounded = false,
    outline = false,
    ...others
  } = props;
  if (loading && !disabled) disabled = true;

  const classSizes = useMemo(() => {
    if (!props.children) return "px-2 py-1";
    return size === "medium" ? "px-4 py-2" : "px-3 py-1 rounded-md text-sm";
  }, [size, props.children]);
  const modeClasses = useMemo(() => {
    if (mode === "danger") {
      if (loading || disabled)
        return `bg-red-100 border text-red-500 cursor-not-allowed`;
      if (outline) {
        return `text-red-500 border border-red-500 focus:ring-red-600 hover:bg-red-100`;
      }
      return `text-white bg-red-500 border focus:ring-red-600 hover:bg-red-600`;
    }
    if (mode === "success") {
      if (loading || disabled)
        return `bg-green-100 text-green-500 cursor-not-allowed`;
      return `text-white bg-green-500 focus:ring-green-600 hover:bg-green-600`;
    }
    if (mode === "tertiary") {
      if (loading || disabled)
        return `bg-gray-100 text-gray-500 cursor-not-allowed`;
      return `font-medium border border-gray-300 focus:ring-gray-600 hover:bg-gray-200 hover:text-gray-800 text-gray-600`;
    }
    if (mode === "secondary") {
      if (loading || disabled)
        return `bg-violet-100 text-violet-400 text-gray-800 cursor-not-allowed`;
      return `font-medium focus:ring-violet-600 hover:bg-violet-100 text-violet-400 text-violet-600 border border-violet-200`;
    }
    if (loading || disabled) {
      return `text-white bg-blue-500 cursor-not-allowed opacity-70`;
    }
    return `text-white bg-blue-500 border focus:ring-blue-600 hover:bg-blue-600`;
  }, [mode, loading, disabled]);
  const defaultClasses = `inline-block font-base text-sm ${
    rounded ? "rounded-full" : "rounded-md"
  } shadow-sm focus:ring-opacity-50 focus:ring-offset-2 
    border-transparent focus:outline-none focus:ring-2 focus:border-transparent`;
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={`${defaultClasses}
      ${classSizes} ${modeClasses}
       ${className} ${full && "w-full"}`}
      {...others}
    >
      {icon || loading ? (
        <span className="flex items-center">
          {loading ? (
            <span className="w-5 h-5 mr-2 ease-linear border-2 border-t-2 border-gray-300 rounded-full -ms-1 loader" />
          ) : (
            icon
          )}
          {props.children && (
            <span className={`${loading ? "ps-2" : `-me-1 ms-2`} flex-1`}>
              {props.children}
            </span>
          )}
        </span>
      ) : (
        props.children
      )}
    </button>
  );
});
export default Button;
