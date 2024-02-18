import { useRouteError } from "react-router-dom";
import { Header } from "./Headers";

export function ErrorPage(){
    const error = useRouteError()
    return (
        <>
        <Header/>
        <div>
            <h1>
            Przepraszamy, ale strona nie istnieje
            </h1>
            {isError(error) && <p>{error.statusText}</p>}
        </div>
        </>
    )
}

function isError(error: any): error is {statusText: string} {
    return 'statusText' in error
}