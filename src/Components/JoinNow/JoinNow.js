import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { api } from "../../api/api";
import { useAuthContext } from "../../AuthContextAPI";
import CheckBox from "../common/Checkbox/Checkbox";
import CustomInput from "../common/Input/Input";
import CustomPopup from "../CustomPopup/CustomPopup";
import RadioButton from "../common/Radio/Radio";

const JoinNow = () => {
  const { popupOpen, setPopupOpen } = useAuthContext();

  const [value, setValue] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [fullPhone, setFullPhone] = useState("");
  const [categoriesList, setCategoriesList] = useState([]);

  const handlePhoneChange = (value, country) => {
    const dialCode = country.dialCode; // Get dial code

    setFullPhone(value);
    setCountryCode(country?.dialCode);

    const phoneStr = `+${value}`;
    const codeStr = `+${dialCode}`;

    // Check if the phone number starts with the code and remove it
    if (phoneStr.startsWith(codeStr)) {
      setPhone(phoneStr.slice(codeStr.length)); // Remove the code from the phone number
    } else {
      // Return the phone number unchanged if it doesn't start with the code

      setPhone(phoneStr); // Remove the code from the phone number
    }
  };
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerOptions = {
    name: { required: "name required" },
    email: { required: "required" },
    dreamCompany: { required: "required" },
    companyName: { required: "required" },
    experience: { required: "required" },
  };
  const handelError = (error) => {
    console.log(error);
  };

  const handleRegistration = async (data) => {
    console.log(data, "data");
    var payload = {
      fullName: data?.name,
      emailId: data?.email,
      phoneNumber: `+${countryCode}${phone}`,
      companyName: data?.companyName,
      experienceInYears: data?.experience,
      dreamCompany: data?.dreamCompany,
      topicsOfInterest: data?.Interest,
      occupation: data?.areyou,
    };
    let res = await api(
      `api/v1/application/create`,
      payload,
      "postWithoutToken",
      "",
      "",
      ""
    );
    if (res && res.success) {
      // setPetTypeData(res?.data);
      console.log(res.data, res, "card");
      setPopupOpen(!popupOpen);
      reset();
    }
  };

  return (
    <>
      <CustomPopup size={"lg"} show={popupOpen} close={setPopupOpen} title="">
        <div className="apply_form">
          <div className="second_heading">
            Apply <span className="secondary_text"> Now</span>
          </div>{" "}
          <div className="sub_text">Next Batch Start in February</div>
          <div className="form_fields  mt-5">
            <form onSubmit={handleSubmit(handleRegistration, handelError)}>
              <div className="row">
                <div className="col-md-6">
                  <CustomInput
                    register={register}
                    label=""
                    name="name"
                    placeholder="Candidate Full Name"
                    type="text"
                    errors={errors.name}
                    validation={registerOptions.name}
                  />
                </div>
                <div className="col-md-6">
                  <CustomInput
                    register={register}
                    label=""
                    name="email"
                    placeholder="Email Id"
                    type="text"
                    errors={errors.email}
                    validation={registerOptions.email}
                  />
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    {/* <label htmlFor="">phone</label> */}
                    <div className=" number_input mb-3">
                      {/* <img className="icon" src={business_icon} /> */}
                      <PhoneInput
                        country={"in"}
                        value={value}
                        label=""
                        className="input_fields ps-0"
                        // onChange={(number) => setValue(number)}
                        onChange={(value, country) =>
                          handlePhoneChange(value, country)
                        }
                        // onChange={(number, country) => getNum(number, country)}
                      />

                      {/* <PhoneNumberInputGroup /> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <CustomInput
                    register={register}
                    label=""
                    name="companyName"
                    placeholder="Company Name"
                    type="text"
                    errors={errors.companyName}
                    validation={registerOptions.companyName}
                  />
                </div>
                <div className="col-md-6">
                  <CustomInput
                    register={register}
                    label=""
                    name="experience"
                    placeholder="Experience in Years"
                    type="number"
                    errors={errors.experience}
                    validation={registerOptions.experience}
                  />
                </div>
                <div className="col-md-6">
                  <CustomInput
                    register={register}
                    label=""
                    name="dreamCompany"
                    placeholder="Dream Company"
                    type="text"
                    errors={errors.dreamCompany}
                    validation={registerOptions.dreamCompany}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <div className="custom_lable mb-3">
                    1. Your Topic of Interest?*
                  </div>

                  <CheckBox
                    register={register}
                    name="Interest"
                    control={control}
                    dataItem={[
                      {
                        name: "softwareDevelopment",
                        label: "Software Development",
                      },
                      { name: "DataScience", label: "Data Science & ML" },
                      { name: "DataAnalytics", label: "Data Analytics" },
                      { name: "Data Engineer", label: "Data Engineer" },
                    ]}
                  />
                </div>
                <div className="col-md-12">
                  <div className="custom_lable mb-3">
                    2. Are you a College Student or Working Professional or
                    Graduated but not working?
                  </div>

                  <RadioButton
                    control={control}
                    name="areyou"
                    dataItem={[
                      {
                        name: "College Student",
                        label: "College Student",
                      },
                      {
                        name: "Working Professional",
                        label: "Working Professional",
                      },
                      {
                        name: "Graduated but not working",
                        label: "Graduated but not working",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className=" pt-3 mb-3 text-center">
                <button
                  className="btn_primary btn_lg px-5"
                  type="submit"
                  //   onClick={() => setShowDetails(!showDetails)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </CustomPopup>
    </>
  );
};

export default JoinNow;
