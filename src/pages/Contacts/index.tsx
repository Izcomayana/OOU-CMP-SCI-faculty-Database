"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const Contacts = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    toast("We've received your message. We'll get back to you shortly.", {
      // action: {
      //   label: "",
      //   onClick: () => console.log("Undo"),
      // },
    })

    form.reset()
    setIsSubmitting(false)
    console.log(values)
  }

  return (
    <section>
      <div className="container mx-auto py-20">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-[#21234F]">Contact Us</h1>
          <p className="mt-5">
            Contact us using the information below, we will respond promptly to <br />
            your inquiries and feedback
          </p>
        </div>

        <div className="flex justify-between my-16">
          <div className="flex flex-col justify-between gap-5 w-[47.5%]">
            <h2 className="text-2xl font-bold mb-5">Direct Your Message</h2>

            {["ICT Centre", "Faculty Office", "ICT Centre", "Faculty Office"].map((label, idx) => (
              <div
                key={idx}
                className="bg-white border p-3 text-[#21234F] shadow-xl rounded-sm w-full"
              >
                <p>{label}</p>
                <p className="pt-2 text-sm">portal@oouagoiwoye.edu.ng</p>
              </div>
            ))}
          </div>

          <div className="w-[47.5%] border border-gray-400 p-4 rounded-sm">
            <h2 className="font-bold text-xl text-[#21234F]">Send a message</h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full mt-5"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="rounded-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} className="rounded-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea rows={6} placeholder="Type your message..." {...field} className="rounded-sm h-36" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting} className="bg-[#21234F] w-full cursor-pointer">
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts