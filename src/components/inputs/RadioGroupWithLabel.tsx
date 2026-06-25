import { Controller, useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Card } from "../ui/card";
import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";

type DataObj = {
  title: string;
  score: number;
};

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
  data: DataObj[];
  containerClass?: string;
};

const RadioGroupWithLabel = <S,>({
  fieldTitle,
  nameInSchema,
  data,
}: Props<S>) => {
  const form = useFormContext();

  return (
    <Controller
      control={form.control}
      name={nameInSchema}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="space-y-1">
          <FieldLabel>{fieldTitle}</FieldLabel>
          <RadioGroup
            onValueChange={(value: string) => field.onChange(parseInt(value))}
            defaultValue={field.value ? String(field.value) : ""}
            aria-invalid={fieldState.invalid}
            className="grid w-full grid-cols-3 gap-3 pt-2"
          >
            {data.map((value) => (
              // Plain div used here — nesting <Field> inside a <Field> would
              // break the aria/label association; each radio item is not an
              // independent field, they all belong to the same group above.
              <div key={value.title}>
                <FieldLabel className="[&:has([data-state=checked])>div]:border-blue-600">
                  <RadioGroupItem
                    value={value.score.toString()}
                    className="sr-only"
                  />
                  <Card className="flex items-center justify-center w-full h-16">
                    <p className="font-poppins font-light">{value.title}</p>
                  </Card>
                </FieldLabel>
              </div>
            ))}
          </RadioGroup>
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default RadioGroupWithLabel;
