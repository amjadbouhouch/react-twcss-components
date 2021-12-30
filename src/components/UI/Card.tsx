/*
 *
 *
 * File Created: 08 August 2021 09:43
 * Author: Bouhouch Amjed (amjedbouhouch@gmail.com)
 * -----
 * Last Modified: 11 December 2021 23:52
 * -----
 * Copyright 2021
 */
import React, { forwardRef } from "react";
type fn = () => React.ReactNode;
export interface ICardProps {
  /**
   * Card title string or custom component
   */
  title?: string | fn;
  /**
   * Card Subtitle under the title with gray color
   */
  subTitle?: string | fn;
  /**
   * Right Card component
   */
  actions?: () => React.ReactNode;
  /**
   * Extra classNames
   */
  className?: string;
  /**
   * Provide a custom footer
   */
  footer?: () => React.ReactNode;
  /**
   * Boolean toggle between shadow or not
   */
  noShadow?: boolean;
  /**
   * Extra classNames for body
   */
  bodyClassName?: string;
}
const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const {
    title = "",
    actions = undefined,
    className,
    noShadow = false,
    ...rest
  } = props;
  const renderSub = () => {
    if (!props.subTitle) return null;
    if (typeof props.subTitle === "function") {
      return props.subTitle();
    }
    return (
      <div className="text-sm text-gray-500">
        {props?.subTitle?.charAt(0)?.toUpperCase() + props?.subTitle?.substr(1)}
      </div>
    );
  };
  const renderTitle = () => {
    if (typeof title === "function") {
      return title();
    }
    return <div className="font-medium line-clamp-2">{title}</div>;
  };
  return (
    <div
      ref={ref}
      className={`flex flex-col border border-gray-200 rounded-md ${
        !noShadow && "shadow-md"
      } ${className}`}
      {...rest}
    >
      <div
        className={`flex items-start justify-between p-2 ${
          !noShadow && "shadow-sm"
        }`}
      >
        <div className="flex-grow">
          {renderTitle()}
          {renderSub()}
        </div>
        {typeof actions === "function" && (
          <div className="flex-shrink-0">{actions()}</div>
        )}
      </div>
      <div className="border-t border-gray-200"></div>
      <div className={`flex-grow ${props.bodyClassName}`}>{props.children}</div>
      {typeof props.footer === "function" && props.footer()}
    </div>
  );
});
export default Card;
