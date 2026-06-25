"use client";

import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import RichTextEditor from "@/components/ui/rich-text-editor";
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
};

const RichTextEditorInput = <S,>({
  fieldTitle,
  nameInSchema,
  containerClass,
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
          <RichTextEditor
            content={field.value}
            onChangeAction={(content: string) => field.onChange(content)}
          />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default RichTextEditorInput;
