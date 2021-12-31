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
import React, { forwardRef, useCallback } from "react";
export interface InputProps extends React.ComponentPropsWithoutRef<"textarea"> {
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
}
const defaultClassNames = `block w-full h-auto max-w-2xl px-3 py-2 overflow-hidden text-gray-900 placeholder-gray-400 border border-gray-300 rounded-md shadow-md appearance-none form-textarea focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;
const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  (
    {
      hasError = false,
      error = undefined,
      label,
      className,
      ...others
    }: InputProps,
    ref
  ) => {
    const onInput = useCallback((e) => {
      //@ts-ignore
      e.target.style.height = "inherit";
      //@ts-ignore
      e.target.style.height = `${e.target.scrollHeight}px`;
    }, []);
    const hasErrorClassNames = `border-red-600`;
    return (
      <div className={`flex flex-col w-full`}>
        {label && (
          <label
            htmlFor={others?.id}
            className="block mb-1 text-sm font-semibold text-gray-700"
          >
            {label} {others.required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          onInput={onInput}
          className={`${defaultClassNames} w-full ${
            hasError && hasErrorClassNames
          } ${className} ${
            others?.disabled && "bg-gray-200 opacity-70 cursor-not-allowed"
          }`}
          {...others}
        />
      </div>
    );
  }
);
export default TextArea;
