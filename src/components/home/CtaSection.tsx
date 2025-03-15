
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { SendIcon, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(1, { message: "Please enter your name" }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to receive updates"
  })
});

type FormValues = z.infer<typeof formSchema>;

const CtaSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      consent: false
    }
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', values);
      toast({
        title: "Thank you for signing up!",
        description: "We'll keep you updated on our latest bootcamps and events.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-codec mb-4">
            Build Something Today
          </h2>
          
          <p className="text-lg text-muted-foreground font-inter mb-8">
            Join our newsletter to stay updated on upcoming bootcamps, innovation resources, and learning opportunities.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-codec">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel className="font-codec">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="info@buildlearning.co" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-inter text-sm">
                        I agree to receive updates about bootcamps and innovation resources
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 bg-brand-orange hover:bg-brand-orange/90 font-codec"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span>Signing up</span>
                    <SendIcon className="h-4 w-4 animate-pulse" />
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>Sign Up</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
