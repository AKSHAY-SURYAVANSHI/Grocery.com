import React, { useState, useEffect } from "react";
import "./PlaceOrder.css";
import { assets } from "../../assets/assets";

const PlaceOrder = () => {
  const [status, setStatus] = useState("Food Preparing");

  useEffect(() => {
    const statuses = ["Food Preparing", "Out for Delivery", "Delivered"];
    let currentIndex = 0;

    // Function to update status every 5 seconds
    const updateStatus = () => {
      if (status !== "Delivered") {
        currentIndex = (currentIndex + 1) % statuses.length;
        setStatus(statuses[currentIndex]);
      }
    };

    const intervalId = setInterval(updateStatus, 5000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, [status]); // Adding status as a dependency

  // Function to get color class based on status
  const getColorClass = () => {
    switch (status) {
      case "Food Preparing":
        return "dot-orange";
      case "Out for Delivery":
        return "dot-blue";
      case "Delivered":
        return "dot-green";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="order">
        <div className="myOrder">My Orders</div>
        <div className="orderbox">
          <img src={assets.parcel_icon} />
          <p>Order ID : 110456</p>
          <div className={`dot ${getColorClass()}`}></div>
          <p>{status}</p>
          <button>Track order</button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
