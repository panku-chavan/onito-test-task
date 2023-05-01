import { useForm } from "react-hook-form";
import { Country, State, City } from "country-state-city";
import { useEffect, useState } from "react";

const TaskForm = () => {
    const { register, handleSubmit } = useForm();
    const [country, setcountry] = useState([]);
    const [countryCode, setCountryCode] = useState('');
    const [state, setState] = useState([]);
    const [stateCode, setStateCode] = useState('');
    const [city, setCity] = useState([])

    const onSubmit = (data) => {

        console.log(data);
        localStorage.setItem("data", JSON.stringify(data))
    }


    useEffect(() => {
        setcountry(Country.getAllCountries())
        setState(State.getStatesOfCountry(countryCode));
        setCity(City.getCitiesOfState(countryCode, stateCode))
    }, [countryCode, stateCode])

    // country.map((e) => console.log(e.name))
    // console.log(city)

    return (
        <div className="container-fluid">
            <div className="m-4 shadow rounded p-4">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    {/* Personal */}
                    <div className="mb-3">
                        <h5 className="mb-3">
                            <u>Personal Details</u>
                        </h5>
                        <div className="row mb-3">
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-2">
                                        <label className="" htmlFor="name">
                                            Name*{" "}
                                        </label>
                                    </div>
                                    <div className="col-md-10">
                                        <input
                                            className="form-control"
                                            id="name"
                                            {...register("firstName")}
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="dob">Date of Birth od Age* </label>
                                    </div>
                                    <div className="col-md-8">
                                        <input
                                            className="form-control"
                                            id="dob"
                                            {...register("dob")}
                                            placeholder="DD/MM/YYYY or Age in Years"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-2">
                                        <label htmlFor="">sex* </label>
                                    </div>
                                    <div className="col-md-10">
                                        <select className="form-select" {...register("sex")}>
                                            <option value="">select sex</option>
                                            <option value="female">female</option>
                                            <option value="male">male</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-2">
                                        <label htmlFor="mobil">Mobile* </label>
                                    </div>
                                    <div className="col-md-9">
                                        <input
                                            className="form-control"
                                            id="mobile"
                                            {...register("mobile")}
                                            placeholder="Enter Mobile"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="id">Govt Issued Id* </label>
                                    </div>
                                    <div id="id" className="col-md-8">
                                        <select className="form-select" {...register("ID")}>
                                            <option value="">ID Type</option>
                                            <option value="adhar">Adhar</option>
                                            <option value="pan">PAN</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <input
                                    className="form-control"
                                    {...register("ID_value")}
                                    placeholder="Enter Govt ID"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="mb-3">
                        <h5 className=" mb-3">
                            <u>Contact Details</u>
                        </h5>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="guardian">Guardian Details</label>
                                    </div>
                                    <div className="col-md-3">
                                        <select
                                            id=""
                                            className="form-select"
                                            {...register("guardian_label")}
                                            placeholder=""
                                        >
                                            <option value="">Enter Label</option>
                                            <option value="Mr">Mr</option>
                                            <option value="Mrs">Mrs</option>
                                        </select>
                                    </div>
                                    <div className="col-md-5">
                                        <input
                                            {...register("guardian_name")}
                                            placeholder="Enter Guardian Name"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-1">
                                        <label htmlFor="">Email </label>
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("email")}
                                            placeholder="Enter Email"
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="">Emergency Contact Number </label>
                                    </div>
                                    <div className="col-md-4">
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("emergency_contact")}
                                            placeholder="Enter Emergency Number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Address Details */}

                    <div className="mb-3">
                        <h5 className=" mb-3">
                            <u>Address Details</u>
                        </h5>
                        <div className="row mb-2">
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-2">
                                        <label htmlFor="">Address </label>
                                    </div>
                                    <div className="col-md-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("address")}
                                            placeholder="Enter Adress"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row mb-2">
                                    <div className="col-md-1">
                                        <label htmlFor="">State </label>
                                    </div>
                                    <div className="col-md-5">
                                        <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            {...register("state")}
                                            onChange={(e) => setStateCode(e.target.value)}
                                        >
                                            {
                                                state?.map((s) => <option key={s.isoCode} value={s.isoCode}>{s.name}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-1">
                                        <label htmlFor="">City </label>
                                    </div>
                                    <div className="col-md-4">
                                        <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            {...register("city")}
                                        >
                                            {
                                                city?.map((c) => <option key={c.latitude}>{c.name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-5">
                                <div className="row mb-2">
                                    <div className="col-md-2">
                                        <label htmlFor="">Country</label>
                                    </div>
                                    <div className="col-md-8">
                                        <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            {...register("country")}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                        >
                                            {
                                                country?.map((c) => <option key={c.isoCode} value={c.isoCode} >{c.name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row ">
                                    <div className="col-md-2">
                                        <label htmlFor="">Pincode </label>
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("pincode")}
                                            placeholder="Enter Pincode"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* other details */}
                    <div className="mb-3">
                        <h5 className=" mb-3">
                            <u>Contact Details</u>
                        </h5>
                        <div className="row mb-3">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="">Occupation</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder="Enter Occupation"
                                            className="form-control"
                                            {...register("ocupation")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="">Region</label>
                                    </div>
                                    <div className="col-md-9">
                                        <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            {...register("region")}
                                        >
                                            <option value="">Enter Region</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-5">
                                        <label htmlFor="">Martial Status</label>
                                    </div>
                                    <div className="col-md-7">
                                        <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            {...register("martial_status")}
                                        >
                                            <option value="">single</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-5">
                                        <label htmlFor="">Blood Group</label>
                                    </div>
                                    <div className="col-md-7">
                                        <select
                                            name=""
                                            id=""
                                            className="form-select"
                                            {...register("blood-group")}
                                        >
                                            <option value="">B+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor="">Nationality </label>
                                    </div>
                                    <div className="col-md-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={"India"}
                                            {...register("nationality")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="" style={{ marginRight: "3rem" }}>
                            <button
                                className="btn btn-outline-secondary"
                                style={{
                                    backgroundColor: "",
                                    height: "50px",
                                    width: "100px",
                                    color: "",
                                }}
                            >
                                CANCEL
                            </button>
                        </div>
                        <div className="">
                            <button
                                className="btn"
                                style={{
                                    backgroundColor: "red",
                                    height: "50px",
                                    width: "100px",
                                    color: "white",
                                }}
                                type="submit"
                            >
                                {" "}
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default TaskForm;
