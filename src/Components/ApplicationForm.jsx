import React, { useState } from "react";
import axios from "axios";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase"

const db = getDatabase(app); //FIREBASE DATABASE

const ApplicationForm = () => {
  const [formValid, setFormValid] = useState(true);
  const [submitting, setSubmitting] = useState(false); // Track submission status
  const [success, setSuccess] = useState(false); // Track success status
  const [payment_buttonPressed, setButtonPressed] = useState(false); //payment button pressed

  const handleButtonPress = () => { //payment button pressed
    setButtonPressed(true);
  };


  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    registrationNumber: "",
    branch: "",
  });

  // FORM VALIDATION
  const validateForm = () => {
    const { firstName, lastName, phone, email, registrationNumber, branch } = userdata;

    const phonePattern = /^\d{10}$/;
    const emailPattern = /[a-zA-Z0-9._%+-]+@srmist\.edu\.in$/;
    const regNumberPattern = /^RA\d{13}$/;

    const isFirstNameValid = !!firstName.trim();
    const isLastNameValid = !!lastName.trim();
    const isPhoneValid = phonePattern.test(phone);
    const isEmailValid = emailPattern.test(email);
    const isRegNumberValid = regNumberPattern.test(registrationNumber);
    const isBranchValid = !!branch.trim();

    const isFormValid =
      isFirstNameValid &&
      isLastNameValid &&
      isPhoneValid &&
      isEmailValid &&
      isRegNumberValid &&
      isBranchValid;

    setFormValid(isFormValid);

    setErrors({
      firstName: isFirstNameValid ? "" : "Oopsie-doodle! Missing first name, human friend.",
      lastName: isLastNameValid ? "" : "Greetings, incomplete human! A last name is missing.",
      phone: isPhoneValid ? "" : "10 digits, please! Phone number, not gibberish.",
      email: isEmailValid ? "" : "Use your SRM email to keep the owls flying!",
      registrationNumber: isRegNumberValid ? "" : "Error! It must start with 'RA' & have 15 characters.",
      branch: isBranchValid ? "" : "Boop! Specify your department, it's important. ",
    });

    return isFormValid;
  };


  const [userdata, setuserdata] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    registrationNumber: "",
    branch: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setuserdata({ ...userdata, [name]: value });
  };

  //submitData FUNTION IS NOT USED ANYWHERE
  const submitData = async (event) => {
    event.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid) {
      alert("Please fill all fields correctly.");
      return;
    }

    try {
      const response = await axios.post(
        'https://robo-altium-default-rtdb.firebaseio.com/userDataRecords.json',
        {
          firstName: userdata.firstName,
          lastName: userdata.lastName,
          phone: userdata.phone,
          email: userdata.email,
          registrationNumber: userdata.registrationNumber,
          branch: userdata.branch,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setuserdata({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          registrationNumber: "",
          branch: "",
        })
        alert("Data Stored Successfully");
      } else {
        alert("Failed to store data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while storing data");
    }
  };

  // CONNECT WITH FIREBASE DATABASE
  const dbRefPath = `Registrations/${userdata.registrationNumber}`; //FIREBASE DATABASE REFERENCE PATH FOR EACH USER
  //UNCOMMENT WHEN USING
  const putData = (event) => {
    event.preventDefault(); // Prevent page reload

    const isFormValid = validateForm();

    if (!isFormValid) {
      alert("Please fill all fields correctly.");
      return;
    }

    // Update button and reset success message
    setSubmitting(true);
    setSuccess(false);

    set(ref(db, dbRefPath), {
      FirstName: userdata.firstName,
      LastName: userdata.lastName,
      Phone: userdata.phone,
      Email: userdata.email,
      Registration_Number: userdata.registrationNumber,
      Branch: userdata.branch,
    })
      .then(() => {
        // The data was successfully set
        setSubmitting(false); // Reset button state
        setSuccess(true); // Show success message

        setuserdata({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          registrationNumber: "",
          branch: "",
        })
        alert("Data Stored Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while storing data");
        setSubmitting(false); // Reset button state on error
      });
  };


  return (
    <>
      <hr id="apply" className="m-8" />
      <p className="text-3xl font-Orbitron font-bold text-white text-center pb-4 pt-4 underline" >APPLY NOW</p>
      <form className="p-4 dark:bg-gray-900 dark:text-white m-2 rounded-xl">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userdata.firstName}
              onChange={postUserData}
              required
              title="We know you have a name"
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First Name
            </label>
            <div className="text-red-500 text-sm">{errors.firstName}</div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userdata.lastName}
              onChange={postUserData}
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name
            </label>
            <div className="text-red-500 text-sm">{errors.lastName}</div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userdata.phone}
              onChange={postUserData}
              required
              pattern="^\d{10}$"
              title="Please enter a 10-digit phone number."
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone Number (Whatsapp)
            </label>
            <div className="text-red-500 text-sm">{errors.phone}</div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userdata.email}
              onChange={postUserData}
              required
              pattern="[a-zA-Z0-9._%+-]+@srmist\.edu\.in$"
              title="Without '@srmist.edu.in' Our owl won't fly."
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              SRM Email Address
            </label>
            <div className="text-red-500 text-sm">{errors.email}</div>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="registrationNumber"
            id="floating_repeat_ranumber"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={userdata.registrationNumber}
            onChange={postUserData}
            required
            pattern="^RA\d{13}$"
            title="Registration Number must start with 'RA' and be 15 characters in length."
          />
          <label
            htmlFor="floating_repeat_ranumber"
            className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Registration Number
          </label>
          <div className="text-red-500 text-sm">{errors.registrationNumber}</div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="branch"
            id="floating_branch"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={userdata.branch}
            onChange={postUserData}
            required
          />
          <label
            htmlFor="floating_branch"
            className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Department
          </label>
          <div className="text-red-500 text-sm">{errors.branch}</div>
        </div>
        <button
          type="submit"
          className={`text-white ${success ? "bg-green-500 dark:bg-green-500" : submitting ? "bg-green-900 pointer-events-none" : "bg-blue-700 hover:bg-blue-800"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
          onClick={putData}
          disabled={submitting || success} // Disable the button when submitting or after success
        >
          {submitting ? "Registering..." : success ? "Registered!" : "Register"}
        </button>

      </form>

      {/* PAYMENT */}
      <div className="flex justify-center" id="payment">
        <a href="PAYMENT_LINK" target="_blank" rel="noopener noreferrer">
          <button
            className={`w-[150px] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md ${payment_buttonPressed ? 'bg-green-500' : 'bg-blue-700'
              } hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]`}
            onClick={handleButtonPress}
          >
            Pay Now
          </button>
        </a>
      </div>
    </>
  );
};

export default ApplicationForm;
