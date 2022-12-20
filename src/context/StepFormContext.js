import { createContext, useState } from "react";


const StepFormContext = createContext();


export const StepFormProvider = ({children}) => {
  
  const [formData, setFormData] = useState({
    title: '',
    desc:'',
    category: "",
    streetAddress: '',
    apartment: '',
    city: '',
    countryState: '',
    postalCode: '',
    country: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    cost: '',
    photos: '',
    videoLink: '',
    tags: [],
  });

  // const [desc, setDesc] = useState('');

  const handleChange = (e) => {

    const type = e.target.type;

    const name = e.target.name;

    const value = type === "file" ? e.target.files[0] : e.target.value;


    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  const { desc, apartment, videoLink, ...requiredInputs } = formData;
  
  const canSubmit = [...Object.values(requiredInputs)].every(Boolean); 


    
    return (
        <StepFormContext.Provider
            value={{
                formData,
                setFormData,
                handleChange,
                canSubmit,
            }}
        >
            {children}
        </StepFormContext.Provider>
    );

}

export default StepFormContext;
