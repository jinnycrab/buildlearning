
import { useParams } from "react-router-dom";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const camps = [
  {
    id: 1,
    title: "Winter Wonderland Coding Camp",
    description: "Learn to code while celebrating the winter season!",
    duration: "2 weeks",
    capacity: "15 students",
    price: "$299",
    category: "coding",
  },
  {
    id: 2,
    title: "Holiday Arts & Crafts",
    description: "Create beautiful holiday decorations and gifts",
    duration: "1 week",
    capacity: "12 students",
    price: "$199",
    category: "arts",
  },
  {
    id: 3,
    title: "Festive Cooking Adventure",
    description: "Master holiday recipes and baking techniques",
    duration: "3 days",
    capacity: "10 students",
    price: "$149",
    category: "cooking",
  },
];

interface SignupFormData {
  name: string;
  email: string;
  phone: string;
  specialRequirements: string;
}

const campDates = {
  1: ["2024-04-15", "2024-04-29"],
  2: ["2024-04-20", "2024-04-27"],
  3: ["2024-04-25", "2024-04-28"],
};

const CampDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const form = useForm<SignupFormData>();

  const camp = camps.find((c) => c.id === Number(id));
  
  if (!camp) {
    return <div className="container py-16">Camp not found</div>;
  }

  const handleSubmit = (data: SignupFormData) => {
    if (!selectedDate) {
      toast({
        title: "Please select a date",
        description: "You must select a start date for the camp",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration Successful!",
      description: "We'll contact you soon with further details.",
    });
    
    console.log("Form submitted:", { ...data, startDate: selectedDate });
  };

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6 font-general-sans">{camp.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{camp.description}</p>
            
            <div className="bg-white rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <CalendarIcon className="w-6 h-6 text-accent" />
                <h2 className="text-xl font-semibold font-general-sans">Available Dates</h2>
              </div>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                disabled={(date) => {
                  const dateStr = date.toISOString().split('T')[0];
                  return !campDates[camp.id as keyof typeof campDates].includes(dateStr);
                }}
              />
            </div>

            <div className="bg-accent/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 font-general-sans">Camp Details</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{camp.duration}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Capacity:</span>
                  <span className="font-medium">{camp.capacity}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="font-medium">{camp.price}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 font-general-sans">Sign Up Form</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
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
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specialRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any dietary requirements or other special needs?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors font-medium"
                >
                  Register for Camp
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
