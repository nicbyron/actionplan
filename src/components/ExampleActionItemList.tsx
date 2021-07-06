import { observer } from "mobx-react";
import React from "react";
import { actionItems } from "../store";
import { ExampleActionItemListItem } from "./ExampleActionItemListItem";

export const ExampleActionItemList = observer(() => {
    const { docs, isLoading } = actionItems;
    return (
      <div>
        {isLoading ? <span>Loading...</span> : undefined}
        {docs.map((doc) => (
          <ExampleActionItemListItem
            key={doc.id}
            doc={doc} />
        ))}
      </div>
    )
});