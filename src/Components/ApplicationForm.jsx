import React, { useState } from "react";
import axios from "axios";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase"

const db = getDatabase(app); //FIREBASE DATABASE

const ApplicationForm = () => {
  const [formValid, setFormValid] = useState(true);

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
      registrationNumber: isRegNumberValid ? "" : "Robot says: Error! Your RA number must start with 'RA'.",
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
  const dbRefPath = `Registrations/${userdata.registrationNumber}`; //FIREBASE DATABASE REFERENCE PATH

  const putData = (event) => {
    event.preventDefault(); // Prevent page reload

    const isFormValid = validateForm();

    if (!isFormValid) {
      alert("Please fill all fields correctly.");
      return;
    }

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
      });
  };


  return (
    <>
      <hr id="apply" className="m-8" />
      <p className="text-3xl font-Orbitron font-bold dark:text-white text-center pb-4 pt-4 underline" >APPLY NOW</p>
      <form className="p-4 dark:bg-gray-900 dark:text-white m-2 rounded-xl">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="firstName"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userdata.firstName}
              onChange={postUserData}
              required
              title="We know you have a name"
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
            <div className="text-red-500 text-sm">{errors.firstName}</div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="lastName"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userdata.lastName}
              onChange={postUserData}
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
            <div className="text-red-500 text-sm">{errors.lastName}</div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userdata.phone}
              onChange={postUserData}
              required
              pattern="^\d{10}$"
              title="Please enter a 10-digit phone number."
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
            <div className="text-red-500 text-sm">{errors.phone}</div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={userdata.email}
              onChange={postUserData}
              required
              pattern="[a-zA-Z0-9._%+-]+@srmist\.edu\.in$"
              title="Without '@srmist.edu.in' Our owl won't fly."
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              SRM Email address
            </label>
            <div className="text-red-500 text-sm">{errors.email}</div>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="registrationNumber"
            id="floating_repeat_ranumber"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={userdata.registrationNumber}
            onChange={postUserData}
            required
            pattern="^RA\d{13}$"
            title="Registration Number must start with 'RA' and be 15 characters in length."
          />
          <label
            htmlFor="floating_repeat_ranumber"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={userdata.branch}
            onChange={postUserData}
            required
          />
          <label
            htmlFor="floating_branch"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Department
          </label>
          <div className="text-red-500 text-sm">{errors.branch}</div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={putData}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ApplicationForm;
