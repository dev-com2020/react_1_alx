import { Fragment } from "react";
import ActivityCategory from "./ActivityCategory";
import ActivityRow from "./ActivityRow";

export default function ActivityTable({ activities }) {

    const groupedActivites = {};

    activities.forEach(activity => {
        if (!groupedActivites[activity.category]) {
            groupedActivites[activity.category] = [];
        }
        groupedActivites[activity.category].push(activity);

    });


    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Duration</th>
                <th>Available</th>
            </thead>
            <tbody>
                {
                    Object.keys(groupedActivites).map(category => (
                        <Fragment key={category}>
                            <ActivityCategory category={category} />
                            {groupedActivites[category].map((activity, index) => (
                                <ActivityRow key={index} activity={activity} />
                            ))}
                        </Fragment>
                     ) )
                }
            </tbody>
        </table>
    )
}

// Kod tworzy obiekt groupedActivities, który służy do grupowania aktywności według ich kategorii.

// Pętla forEach przechodzi przez każdą aktywność w tablicy activities. Dla każdej aktywności sprawdza, czy jej kategoria już istnieje jako klucz w obiekcie groupedActivities. Jeśli nie, tworzy nową tablicę dla tej kategorii.

// Następnie, niezależnie od tego, czy tablica dla danej kategorii już istniała, kod dodaje aktywność do odpowiedniej tablicy w groupedActivities.

// W efekcie, groupedActivities staje się obiektem, gdzie klucze to kategorie, a wartości to tablice aktywności należących do tych kategorii.