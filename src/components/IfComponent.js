import React from "react";

export default function IfComponent({ condition, children }) {
    if (condition) {
        return children || "";
    } else {
        return "";
    }
}
