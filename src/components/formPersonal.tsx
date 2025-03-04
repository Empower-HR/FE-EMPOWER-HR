import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { PersonalSchema } from "@/utils/apis/employee/type";
import { UseFormReturn } from "react-hook-form";
import {
  CustomFormField,
  CustomFormSelect,
} from "@/components/custom-form-field";
import { Form } from "@/components/ui/form";
import {
  categoriesGender,
  categoriesReligion,
  categoriesStatus,
} from "@/utils/constant";

type PersonalDataProps = {
  form: UseFormReturn<PersonalSchema, any, undefined>;
  onSubmit: () => void;
};

export function FormPersonal({ form, onSubmit }: PersonalDataProps) {
  return (
    <>
      <h5 className="text-md font-semibold">Personal data</h5>
      <p className="text-gray-500">
        Fill all employee personal basic information data
      </p>
      <Form {...form}>
        <form
          id="forms"
          className="space-y-3 my-4 lg:w-3/4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CustomFormField
            control={form.control}
            data-testid="name"
            name="name"
            label="Fullname"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="John doe"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            data-testid="email"
            name="email"
            label="Email"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="employee@company.com"
                type="email"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="phone"
            data-testid="phone"
            label="Phone number"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="+628xxxxxxxx"
                type="tel"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="place_birth"
            data-testid="place_birth"
            label="Place of birth"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="Jakarta"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="birth_date"
            data-testid="birth_date"
            label="Date of birth"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="01-01-2010"
                type="date"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
          <CustomFormSelect
            control={form.control}
            name="gender"
            data-testid="gender"
            label="Gender"
            placeholder="Select a Category"
            options={categoriesGender}
          />
          <CustomFormSelect
            control={form.control}
            name="status"
            data-testid="status"
            label="Status"
            placeholder="Select a Category"
            options={categoriesStatus}
          />
          <CustomFormSelect
            control={form.control}
            name="religion"
            label="Religion"
            data-testid="religion"
            placeholder="Select a Category"
            options={categoriesReligion}
          />
          <CustomFormField
            control={form.control}
            data-testid="nik"
            name="nik"
            label="Nik"
          >
            {(field) => (
              <Input
                {...field}
                placeholder="3510101212990008"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
          <CustomFormField
            control={form.control}
            name="address"
            data-testid="address"
            label="Address"
          >
            {(field) => (
              <Textarea
                {...field}
                placeholder="Jalan Gunung Antena 1 No 11A, Denpasar Barat, Bali."
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
                value={field.value as string}
              />
            )}
          </CustomFormField>
        </form>
      </Form>
    </>
  );
}
