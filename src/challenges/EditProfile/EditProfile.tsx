import { useState } from "react";



export default function EditProfile() {
    const [editing, setEditing] = useState(false)

    const [firstName, setFirstName] = useState("Jane")
    const [lastName, setLastName] = useState("Jacobs")

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setLastName(e.target.value)
    }

    const handleFormSubmit = (e: React.FormEvent<Element>) => {
        e.preventDefault()
        if (editing) {
            setEditing(false)
        } else {
            setEditing(true)
        }
    }

    return (
        <form className="edit-profile-form">
            <label>
                First name:{' '}
                <b style={{ 'display': editing ? 'none' : undefined }}>{firstName}</b>
                <input style={{ 'display': editing ? undefined : 'none' }} value={firstName} onChange={handleFirstNameChange}/>
            </label>
            <label>
                Last name:{' '}
                <b style={{ 'display': editing ? 'none' : undefined }}>{lastName}</b>
                <input style={{ 'display': editing ? undefined : 'none' }} value={lastName} onChange={handleLastNameChange}/>
            </label>
            <button type="submit" onClick={handleFormSubmit}>
                {
                    editing ? 'Save Profile' : 'Edit Profile'
                }
            </button>
            <p><i>Hello, {firstName} {lastName}!</i></p>
        </form>
    );
}
