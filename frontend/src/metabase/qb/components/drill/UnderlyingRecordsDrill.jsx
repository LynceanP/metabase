/* @flow */

import React from "react";

import { drillUnderlyingRecords } from "metabase/qb/lib/actions";

import { inflect } from "metabase/lib/formatting";

import type {
    ClickAction,
    ClickActionProps
} from "metabase/meta/types/Visualization";

export default (
    { card, tableMetadata, clicked }: ClickActionProps
): ClickAction[] => {
    const dimensions = (clicked && clicked.dimensions) || [];
    if (!clicked || dimensions.length === 0) {
        return [];
    }

    // the metric value should be the number of rows that will be displayed
    const count = typeof clicked.value === "number" ? clicked.value : 2;

    return [
        {
            section: "zoom",
            title: "View rows",
            card: () => drillUnderlyingRecords(card, dimensions)
        }
    ];
};
