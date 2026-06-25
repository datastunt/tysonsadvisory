import { Controller, useFormContext } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { format, isPast, isSameDay, startOfDay } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "../ui/calendar";
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

const DateInputWithLabel = <S,>({
  fieldTitle,
  nameInSchema,
  containerClass,
  className,
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
          <FieldLabel className="font-poppins">{fieldTitle}</FieldLabel>
          <Popover modal>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                aria-invalid={fieldState.invalid}
                className={cn(
                  "w-full pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground",
                  className
                )}
              >
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => {
                  const today = startOfDay(new Date());
                  const currentDate = startOfDay(date);
                  return isPast(currentDate) && !isSameDay(currentDate, today);
                }}
              />
            </PopoverContent>
          </Popover>
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default DateInputWithLabel;
