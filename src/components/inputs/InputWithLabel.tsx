"use client";

import { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
  containerClass?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputWithLabel = <S,>({
  fieldTitle,
  nameInSchema,
  containerClass,
  className,
  ...props
}: Props<S>) => {
  const form = useFormContext();

  return (
    <Controller
      control={form.control}
      name={nameInSchema}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          className={cn("", containerClass)}
        >
          <FieldLabel htmlFor={field.name} className="font-poppins">
            {fieldTitle}
          </FieldLabel>
          <Input
            {...field}
            {...props}
            id={field.name}
            aria-invalid={fieldState.invalid}
            className={cn(className)}
          />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default InputWithLabel;
