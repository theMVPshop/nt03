const ClinicList = ({clinic, handleClick, index}) => {

    const saveClinic = () => {
        let clinicToSave = {
            "clinic_name": clinic.name,
            "clinic_address": `${clinic.street}, ${clinic.city}, ${clinic.state} ${clinic.zip}`,
            "clinic_phone": clinic.phone,
            "contacted": false
        }

        fetch("/users/users/1/clinics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(clinicToSave)
        }).then(res => console.log(res))
    }
    return (
        <button
            type="button"
            key={index}
            action
            className='list-group-item list-group-item-action'
            >
            <div className="list-container">
                <section onClick={(e) => handleClick(e)} className="info">
                    <p id={index}>{clinic.name}</p>
                    <p id={index}>{clinic.street}</p>
                    <p id={index}>{`${clinic.city}, ${clinic.state} ${clinic.zip}`}</p>
                    <p id={index}>{clinic.phone}</p>
                </section>
                <section className="check">
                    <label>Save?</label>
                    <input
                        type="checkbox"
                        onChange={saveClinic}
                    />
                </section>
            </div>
        </button>
    )
}

export default ClinicList