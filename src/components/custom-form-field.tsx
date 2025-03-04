import { ReactNode } from "react";
import { Control, ControllerRenderProps, FieldPath, FieldValues, Path } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props<T extends FieldValues> {
    name: FieldPath<T>;
    label: string;
    placeholder?: string;
    options?: any[];
    description?: string;
    control: Control<T>;
  }
  
  interface ChildrenProps<T extends FieldValues> extends Props<T> {
    children: (field: ControllerRenderProps<T, Path<T>>) => ReactNode;
  }
  
  export function CustomFormField<T extends FieldValues>(
    props: Readonly<ChildrenProps<T>>
  ) {
    const { name, label, description, control, children } = props;
  
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">{label}</FormLabel>
            <FormControl>{children(field)}</FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  export function CustomFormSelect<T extends FieldValues>(
    props: Readonly<Props<T>>
  ) {
    const { name, label, placeholder, description, control, options } = props;
  
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger >
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{label}</SelectLabel>
                  {options?.map((option) => (
                    <SelectItem value={option} key={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }