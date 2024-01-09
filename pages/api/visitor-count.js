import mongoose from "mongoose";
import Visitors from "@/db/VisitorModel";
import axios from "axios";
require("@/db/connect");

export default async function handler(req, res) {
  const userAgent = req.headers["user-agent"];
  const { pageVisited, source } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed."
    });
  }

  if (!userAgent || !pageVisited) {
    return res.status(400).json({
      success: false,
      message: "Oops! It looks like the page URL you visited is missing."
    });
  }

  try {
    // Get user public ip
    // const response = await fetch("https://api.ipify.org");
    // const ipAddress = await response.json()

    // Get ip details
    // const ipDetailsResponse = await fetch(
    //   `https://ipinfo.io/${ipAddress}?token=${process.env.IP_INFO_TOKEN}`
    // );
    // const ipDetails = await ipDetailsResponse.json();
    
    // Let's count visitor
    const newVisitor = new Visitors({
      ipAddress: "unknown",
      ipDetails: "unknown",
      userAgent,
      pageVisited,
      source: source || "unknown"
    });
    
    await newVisitor.save();
    console.log(newVisitor)
    
    res.status(201).json({
      success: true,
      message: "Visitor counted",
      visitor: newVisitor
    });
  } catch (error) {
    console.log(`Error occured while saving visitor source. Cause: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}
