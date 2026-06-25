import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

type DataObj = {
  option: string;
};

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  data: DataObj[];
  className?: string;
  containerClass?: string;
};

const SelectWithLabel = <S,>({
  fieldTitle,
  nameInSchema,
  data,
  className,
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
          <FieldLabel htmlFor={nameInSchema} className="text-sm">
            {fieldTitle}
          </FieldLabel>
          <Select
            {...field}
            onValueChange={field.onChange}
          >
            <SelectTrigger
              id={nameInSchema}
              aria-invalid={fieldState.invalid}
              className={cn("w-full", className)}
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {data.map((item) => (
                <SelectItem
                  key={`${nameInSchema}_${item.option}`}
                  value={item.option}
                >
                  {item.option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default SelectWithLabel;
