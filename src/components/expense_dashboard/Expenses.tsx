import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'

const PAYMENT_METHODS = [
  'cash',
  'credit card',
  'debit card',
  'credit',
  'loan'
] as const

const PAYMENT_STATUS = ['paid', 'pending'] as const

const expenseSchema = z.object({
  description: z.string().min(1, 'Description is required').max(100),
  amount: z.coerce.number({ required_error: 'Amount is required' }),
  category: z.string().optional(),
  payment_method: z.enum(PAYMENT_METHODS).optional(),
  location: z.string().optional(),
  tags: z.string().array().optional(),
  currency: z.string().optional(),
  payment_status: z.enum(PAYMENT_STATUS).optional(),
  notes: z.string().array().optional()
})

type Expense = z.infer<typeof expenseSchema>

function Expenses () {
  const [expense, setExpense] = useState<Expense>()

  const form = useForm<Expense>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      description: '',
      amount: 0
    }
  })

  const onSubmit: SubmitHandler<Expense> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h2>Expenses</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Expense</FormLabel>
                <FormControl>
                  <Input placeholder='expense description' {...field} />
                </FormControl>
                <FormDescription>
                  This is your expense description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='amount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder='expense amount' {...field} />
                </FormControl>
                <FormDescription>
                  This is your expense amount.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Add Expense</Button>
        </form>
      </Form>
    </div>
  )
}

export default Expenses
