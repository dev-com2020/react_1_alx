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