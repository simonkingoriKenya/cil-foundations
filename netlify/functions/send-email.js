import nodemailer from "nodemailer";

// Configure your email service here
// For Gmail: use your app password (not regular password)
// For other services: use their SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async (req, context) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { name, phone, email, projectType, details } = await req.json();

    // Validate input
    if (!name || !phone || !email || !projectType || !details) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Email to company
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: "info@castleworks.co.ke",
      subject: `New Quote Request: ${projectType}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <h3>Project Details:</h3>
        <p>${details.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER,
      to: email,
      subject: "Quote Request Received - CIL Contractors",
      html: `
        <h2>Thank You for Your Inquiry</h2>
        <p>Dear ${name},</p>
        <p>We have received your quote request for <strong>${projectType}</strong>.</p>
        <p>Our team will review your project details and get back to you within <strong>24 hours</strong> with a comprehensive quote.</p>
        <p><strong>Your Contact Details:</strong></p>
        <ul>
          <li>Phone: ${phone}</li>
          <li>Email: ${email}</li>
        </ul>
        <p>If you have any urgent questions, feel free to call us at <strong>+254 788 281 815</strong>.</p>
        <p>Best regards,<br><strong>CIL Contractors Ltd</strong></p>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
