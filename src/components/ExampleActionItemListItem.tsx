import { observer } from "mobx-react";
import React from "react";

export const ExampleActionItemListItem = observer((props: { doc: any; }) => {
    // TODO: See if we can type the doc prop
    const { doc } = props;
    const { name } = doc.data;
    return <div>{`${name}`}</div>;
  });