import React from "react";
import CollectionItem from "../Collection-item/CollectionItem.comonent";
import "./collection-preview.styles.scss";


const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter((item,idx)=>idx<4).map(({id, ...otherPropsItems}) => (
        <CollectionItem key={id} {...otherPropsItems}/>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
