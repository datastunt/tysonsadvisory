"use client";

import { TextareaHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
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
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaWithLabel = <S,>({
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
          <Textarea
            {...field}
            {...props}
            id={field.name}
            aria-invalid={fieldState.invalid}
            className={cn("resize-none", className)}
          />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default TextareaWithLabel;
