
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface Student {
  name: string;
  age: string;
  school: string;
}

interface RegistrationFormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  students: Student[];
  preferredCamp: string;
  preferredStartDate: string;
  additionalNotes: string;
}

const CampRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistrationFormData>({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    students: [{ name: "", age: "", school: "" }],
    preferredCamp: "",
    preferredStartDate: "",
    additionalNotes: "",
  });

  const handleStudentChange = (index: number, field: keyof Student, value: string) => {
    const newStudents = [...formData.students];
    newStudents[index] = { ...newStudents[index], [field]: value };
    setFormData({ ...formData, students: newStudents });
  };

  const addStudent = () => {
    setFormData({
      ...formData,
      students: [...formData.students, { name: "", age: "", school: "" }],
    });
  };

  const removeStudent = (index: number) => {
    const newStudents = formData.students.filter((_, i) => i !== index);
    setFormData({ ...formData, students: newStudents });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate price based on number of students
    const pricePerStudent = 999;
    const totalPrice = pricePerStudent * formData.students.length;
    
    // Navigate to payment page with form data
    navigate('/payment', { 
      state: { 
        formData,
        campId: formData.preferredCamp,
        startDate: formData.preferredStartDate,
        totalPrice,
        campName: getCampName(formData.preferredCamp),
      } 
    });
  };

  const getCampName = (campId: string) => {
    const camps: Record<string, string> = {
      "health": "Building for Health & Wellbeing",
      "sustainability": "Building for Sustainability",
      "education": "Building for Youth & Education",
      "culture": "Building for Culture & Entertainment"
    };
    return camps[campId] || "";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Parent Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Parent/Guardian Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Parent/Guardian Name*
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Email Address*
            </label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded-md"
              value={formData.parentEmail}
              onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Contact Number*
            </label>
            <input
              type="tel"
              required
              className="w-full p-2 border rounded-md"
              value={formData.parentPhone}
              onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Student Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Student Information</h3>
        {formData.students.map((student, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-medium">Student {index + 1}</h4>
              {formData.students.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeStudent(index)}
                  className="text-sm"
                >
                  Remove
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Student Name*
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={student.name}
                  onChange={(e) => handleStudentChange(index, "name", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Age*
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={student.age}
                  onChange={(e) => handleStudentChange(index, "age", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  School*
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={student.school}
                  onChange={(e) => handleStudentChange(index, "school", e.target.value)}
                />
              </div>
            </div>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={addStudent}
          className="w-full md:w-auto"
        >
          Add Another Student
        </Button>
      </div>

      {/* Camp Selection */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Camp Selection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Preferred Camp*
            </label>
            <select
              required
              className="w-full p-2 border rounded-md"
              value={formData.preferredCamp}
              onChange={(e) => setFormData({ ...formData, preferredCamp: e.target.value })}
            >
              <option value="">Select a camp</option>
              <option value="health">Building for Health & Wellbeing</option>
              <option value="sustainability">Building for Sustainability</option>
              <option value="education">Building for Youth & Education</option>
              <option value="culture">Building for Culture & Entertainment</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Preferred Start Date*
            </label>
            <input
              type="date"
              required
              className="w-full p-2 border rounded-md"
              value={formData.preferredStartDate}
              onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1">
          Additional Notes (Optional)
        </label>
        <textarea
          className="w-full p-2 border rounded-md h-24"
          value={formData.additionalNotes}
          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
        />
      </div>

      <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white">
        Proceed to Payment
      </Button>
    </form>
  );
};

export default CampRegistrationForm;
