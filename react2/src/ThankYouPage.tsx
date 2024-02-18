import { useParams } from "react-router-dom";

export function ThankYouPage() {
    const {name} = useParams<{name:string}>()
    return (
        <div>
            <div role='alert'>Dziękujemy {name}, odezwiemy się wkrótce</div>
        </div>
    )
}