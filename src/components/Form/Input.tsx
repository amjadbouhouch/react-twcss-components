/*
 *
 *
 * File Created: 07 August 2021 12:02
 * Author: Bouhouch Amjed (amjedbouhouch@gmail.com)
 * -----
 * Last Modified: 29 September 2021 10:59
 * -----
 * Copyright 2021
 */
import React, { forwardRef } from "react";
export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  /**
   * IF invalid
   */
  hasError?: boolean;
  /**
   * Error message
   */
  error?: string;
  /**
   * Label
   */
  label?: string;
  /**
   *  a red * after label
   */
  required?: boolean;
  /**
   * Extra class Names
   */
  className?: string;
  /**
   *
   */
  helper?: string;
  /**
   * Custom icon
   */
  icon?: React.ReactNode;
  /**
   * Like http:// | +13 | www.
   */
  rightText?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      hasError = false,
      error = undefined,
      label,
      className,
      helper,
      icon = undefined,
      ...others
    }: InputProps,
    ref
  ) => {
    const defaultClassNames = `block px-3 py-2 text-gray-900 shadow-sm placeholder-gray-400 border border-gray-300 appearance-none rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;
    const hasErrorClassNames = `border-red-600`;
    return (
      <div className={`flex flex-col w-full relative`}>
        {label && (
          <label
            htmlFor={others?.id}
            className="block mb-1 text-sm font-semibold text-gray-700"
          >
            {label} {others.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <div className={`${(icon || others.rightText) && "relative"}`}>
          {others.rightText && (
            <span className="absolute inline-flex items-center h-full px-3 text-sm text-gray-500 border border-gray-300 border-r-1 rounded-l-md bg-gray-50">
              {others.rightText}
            </span>
          )}
          <input
            ref={ref}
            className={`${defaultClassNames} form-input ${
              others.rightText ? "pl-20" : icon ? "ps-8" : ""
            } w-full ${hasError && hasErrorClassNames} ${className} ${
              others?.disabled && "bg-gray-200 opacity-70 cursor-not-allowed"
            }`}
            {...others}
          />
          {icon && icon}
        </div>
        <span className={`text-sm text-gray-500 ${hasError && "text-red-600"}`}>
          {error && error}
        </span>
        {helper && (
          <span className={`text-sm text-right text-gray-500`}>{helper}</span>
        )}
      </div>
    );
  }
);
export default Input;
