'use client';

import { Field } from 'formik';
import React from 'react';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: 'input' | 'select' | 'textarea';
  name: string;
  children?: React.ReactNode;
}

export default function InputField({
  label,
  id,
  as = 'input',
  children,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        as={as}
        {...rest}
        id={id}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      >
        {children}
      </Field>
    </div>
  );
}
