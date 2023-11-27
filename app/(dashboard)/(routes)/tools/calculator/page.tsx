"use client";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  initialAmount:  z.number(),
  monthlyAmount:  z.number(),
  monthlyInterest: z.number(),
  years: z.number(),  
});


const CalculatorPage = () => {
  const [result, setResult] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setResult(1);
  }


  return (
    <div className="m-8 md:mx-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Calculadora de juros compostos
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 mt-4"
        >
          <FormField
            control={form.control}
            name="initialAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor Incial</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0,00"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="monthlyAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor Mensal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0,00"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="monthlyInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Taxa de juros anual</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0,00"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="years"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Período em</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={!isValid || isSubmitting}
            type="submit"
          >
            Calcular
          </Button>
        </form>
      </Form>

      <h2 className="text-1xl text-slate-600 md:text-2xl font-bold text-center">
        Resultado: R$: {result}
      </h2>
    </div>
  );
}

export default CalculatorPage;