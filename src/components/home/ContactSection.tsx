
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Send, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  organization: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  interest: z.string().min(5, { message: "Please tell us a bit more about your interests" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      organization: '',
      email: '',
      phone: '',
      interest: '',
    }
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', values);
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch with you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-12 h-12 border-2 border-[#4D88C4]/30 rounded-full opacity-20"></div>
        <div className="absolute bottom-12 left-1/4 w-16 h-16 border border-[#E86642]/50 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-[#F4D365]/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-codec">
            Have a project in mind?
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto font-biome">
            We're here to assist! Drop us a message or schedule a call with us, and let's create something exceptional together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <Card className="bg-white border border-gray-100 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-codec font-bold mb-4">Get in touch</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#E86642] mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@buildlearning.co" className="text-[#4D88C4] hover:underline">
                          info@buildlearning.co
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#E86642] mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">US: <a href="tel:+16502487785" className="text-[#4D88C4] hover:underline">+1 650 248 7785</a></p>
                        <p className="text-gray-600">SG: <a href="tel:+6582232551" className="text-[#4D88C4] hover:underline">+65 8223 2551</a></p>
                      </div>
                    </div>
                    
                    <Separator className="my-5" />
                    
                    <p className="text-gray-600 text-sm">or</p>
                    
                    <Button variant="outline" className="w-full border-[#4D88C4] text-[#4D88C4] hover:bg-[#4D88C4]/10 gap-2">
                      Book an online call
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card className="bg-white border border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-codec font-bold mb-6">Register Interest</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-codec">Full name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="organization"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-codec">Organization (if applicable)</FormLabel>
                              <FormControl>
                                <Input placeholder="Your organization" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-codec">Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-codec">Phone number (optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 000-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="interest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-codec">What are you interested in?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us briefly about your project or interests..." 
                                className="min-h-[120px] resize-none"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 bg-[#E86642] hover:bg-[#E86642]/90 font-codec"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span>Submitting</span>
                            <Send className="h-4 w-4 animate-pulse" />
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <span>Submit</span>
                            <Send className="h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
