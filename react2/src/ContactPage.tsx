import { FormEvent, useState } from "react"

type Contact = {
    name: string
    email: string
    reason: string
    notes: string
}

export function ContactPage() {
    const [contact, setContact] = useState<Contact>({
        name: "",
        email: "",
        reason: "",
        notes: "",
    })
    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log('Subbmited details', contact)
    }
    const fieldStyle = 'flex flex-col mb-2'
    return (
        <div>
            <h2>Skontaktuj się</h2>
            <p>Wprowadź powód kontaktu, treść i dane</p>
            <form onSubmit={handleSubmit}>
                <div className={fieldStyle}>
                    <label htmlFor="name">Imie:</label>
                    <input type="text" id="name"
                    value={contact.name}
                    onChange={(e) =>
                    setContact({...contact, name: e.target.value})}/>
                </div>
                <div className={fieldStyle}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"
                    value={contact.email}
                    onChange={(e) =>
                    setContact({...contact, email: e.target.value})}/>
                </div>
                <div className={fieldStyle}> 
                    <label htmlFor="reason">Powód kontaktu:</label>
                    <select id="reason"
                    value={contact.reason}
                    onChange={(e) =>
                    setContact({...contact, reason: e.target.value})}>
                        <option value=""></option>
                        <option value="Support">Tech support</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className={fieldStyle}>
                    <label htmlFor="notes">Additional notes</label>
                    <textarea id="notes"
                    value={contact.notes}
                    onChange={(e) =>
                    setContact({...contact, notes: e.target.value})}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}