import { useForm } from "react-hook-form";

const TaskForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container-fluid">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <h3 className=""><u>Personal Details</u></h3>
                <div className="row mb-3" >
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-2">
                                <label className="" htmlFor="name" >Name* </label>
                            </div>
                            <div className="col-md-9">
                                <input className="form-control" id="name" {...register("firstName")} placeholder="Enter Name" />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="dob">Date of Birth od Age* </label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" id="dob" {...register("dob")} placeholder="DD/MM/YYYY or Age in Years" />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-2">
                                <label htmlFor="">sex* </label>
                            </div>
                            <div className="col-md-10">
                                <select className="form-control" {...register("sex")}>
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
                                <input className="form-control" id="mobile" {...register("mobile")} placeholder="Enter Mobile" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-4">
                                <label htmlFor="id">Govt Issued Id* </label>
                            </div>
                            <div id="id" className="col-md-8">
                                <select className="form-control" {...register("ID")}>
                                    <option value="">ID Type</option>
                                    <option value="adhar">Adhar</option>
                                    <option value="pan">PAN</option>
                                </select>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-3">
                        <input className="form-control" {...register("ID_value")} placeholder="Enter Govt ID" />
                    </div>
                </div>
                <h3 className=""><u>Contact Details</u></h3>
                <div className="row">

                </div>
                <input type="submit" />
            </form>

        </div>
    );
}
export default TaskForm