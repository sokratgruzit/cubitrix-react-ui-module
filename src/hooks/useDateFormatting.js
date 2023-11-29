import { useState } from "react";

function useDateFormatting() {
  function convertDateFormat(inputDate) {
    if (!inputDate || typeof inputDate !== "string") {
      // Handle cases where inputDate is undefined or not a string
      return "";
    }
    let components = inputDate.split(/[\s/]+/);
    // Rearrange the components to the desired format "MM/DD/YYYY hh:mm A"
    let outputDate =
      components[1] +
      "/" +
      components[0] +
      "/" +
      components[2] +
      " " +
      components[3] +
      " " +
      components[4];
    return outputDate;
  }

  function convertReceivedDateFormat(inputDate) {
    if (!inputDate || typeof inputDate !== "string") {
      return "";
    }

    const date = new Date(inputDate);

    if (isNaN(date.getTime())) {
      return "";
    }

    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, "0")}/
                           ${date.getDate().toString().padStart(2, "0")}/
                           ${date.getFullYear()} ${date.toLocaleTimeString(
      "en-US",
      { hour: "numeric", minute: "numeric", hour12: true }
    )}`;

    return formattedDate;
  }

  return { convertDateFormat, convertReceivedDateFormat };
}

export default useDateFormatting;
