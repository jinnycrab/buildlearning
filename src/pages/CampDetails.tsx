
import { useParams, useNavigate } from "react-router-dom";
import { Calendar as CalendarIcon, Minus, Plus } from "lucide-react";
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

interface StudentInfo {
  name: string;
  age: string;
}

interface SignupFormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  numberOfStudents: number;
  students: StudentInfo[];
  additionalComments: string;
}

const campDates = {
  1: ["2024-04-15", "2024-04-29"],
  2: ["2024-04-20", "2024-04-27"],
  3: ["2024-04-25", "2024-04-28"],
};

const CampDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [numberOfStudents, setNumberOfStudents] = useState(1);
  const form = useForm<SignupFormData>({
    defaultValues: {
      numberOfStudents: 1,
      students: [{ name: "", age: "" }],
    },
  });

  const camp = camps.find((c) => c.id === Number(id));
  
  if (!camp) {
    return <div className="container py-16">Camp not found</div>;
  }

  const basePrice = parseInt(camp.price.replace("$", ""));
  const totalPrice = basePrice * numberOfStudents;

  const handleStudentCountChange = (increment: boolean) => {
    const newCount = increment ? numberOfStudents + 1 : Math.max(1, numberOfStudents - 1);
    setNumberOfStudents(newCount);
    
    const currentStudents = form.getValues("students");
    if (increment) {
      form.setValue("students", [...currentStudents, { name: "", age: "" }]);
    } else if (currentStudents.length > 1) {
      form.setValue("students", currentStudents.slice(0, -1));
    }
  };

  const handleSubmit = (data: SignupFormData) => {
    if (!selectedDate) {
      toast({
        title: "Please select a date",
        description: "You must select a start date for the camp",
        variant: "destructive",
      });
      return;
    }

    // Navigate to payment page with form data
    navigate("/payment", {
      state: {
        formData: data,
        campId: id,
        startDate: selectedDate,
        totalPrice,
        campName: camp.title
      }
    });
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
                  <span className="text-muted-foreground">Price per student:</span>
                  <span className="font-medium">{camp.price}</span>
                </li>
                <li className="flex justify-between border-t pt-3">
                  <span className="text-primary font-semibold">Total Price:</span>
                  <span className="font-bold text-primary">${totalPrice}</span>
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
                  name="parentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter parent's full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parentEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter parent's email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parentPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Parent's Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter parent's phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <FormLabel>Number of Students</FormLabel>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => handleStudentCountChange(false)}
                        className="p-1 rounded-full hover:bg-accent/10"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium">{numberOfStudents}</span>
                      <button
                        type="button"
                        onClick={() => handleStudentCountChange(true)}
                        className="p-1 rounded-full hover:bg-accent/10"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {Array.from({ length: numberOfStudents }).map((_, index) => (
                    <div key={index} className="space-y-4 pt-4 border-t">
                      <h4 className="font-medium">Student {index + 1}</h4>
                      <FormField
                        control={form.control}
                        name={`students.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Student's Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter student's name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`students.${index}.age`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Student's Age</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="Enter student's age" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>

                <FormField
                  control={form.control}
                  name="additionalComments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Comments</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any additional information you'd like to share?"
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
                  Continue to Payment - ${totalPrice}
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
