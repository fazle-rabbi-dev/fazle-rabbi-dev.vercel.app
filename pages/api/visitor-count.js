import mongoose from "mongoose";
import Visitors from "@/db/VisitorModel";
import connect from "@/db/connect";
import axios from "axios";

export default async function handler(req, res) {
  const userAgent = req.headers["user-agent"];
  const pageVisited = req.query.pageVisited;

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
    const response = await fetch("https://api.ipify.org");
    const ipAddress = await response.text();

    // Get ip details
    const ipDetailsResponse = await fetch(
      `https://ipinfo.io/${ipAddress}?token=${process.env.IP_INFO_TOKEN}`
    );
    const ipDetails = await ipDetailsResponse.json();

    // Let's count visitor
    const newVisitor = new Visitors({
      ipAddress,
      ipDetails: JSON.stringify(ipDetails),
      userAgent,
      pageVisited
    });
    
    await newVisitor.save();
    // console.log(newVisitor)
    
    res.status(201).json({
      success: true,
      message: "Visitor counted",
      visitor: newVisitor
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}
