import "./style.css";

import "@arcgis/map-components/dist/components/arcgis-layer-list";
import "@arcgis/map-components/dist/components/arcgis-map";

import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-shell";
import { setAssetPath } from "@esri/calcite-components/dist/components";

setAssetPath("https://js.arcgis.com/calcite-components/2.11.1/assets");

const arcgisLayerList = document.querySelector("arcgis-layer-list");

arcgisLayerList.listItemCreatedFunction = (event) => {
    const { item } = event;
    if (item.layer.type !== "group") {
        item.panel = {
            content: "legend"
        };
    }
};