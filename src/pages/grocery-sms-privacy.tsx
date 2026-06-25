import React from "react";

export const Head = () => (
  <>
    <title>Grocery SMS — Privacy &amp; Terms</title>
    <meta name="robots" content="noindex" />
  </>
);

const GrocerySmsPrivacy = () => {
  return (
    <main
      style={{
        maxWidth: "42rem",
        margin: "0 auto",
        padding: "2rem 1.25rem",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        lineHeight: 1.6,
        color: "#1a1a1a",
      }}
    >
      <h1>Grocery SMS — Privacy Policy &amp; Terms of Service</h1>
      <p>
        <em>Last updated: June 24, 2026</em>
      </p>

      <h2>About the app</h2>
      <p>
        Grocery SMS is a small personal app that lets you text a phone number to add items to, and
        manage, a shared grocery list. By texting the number, you agree to the privacy policy and
        terms of service below.
      </p>

      <h2>Privacy Policy</h2>

      <h3>What we collect</h3>
      <p>We collect only what is needed to run the grocery list:</p>
      <ul>
        <li>Your mobile phone number, so we know which list a message belongs to.</li>
        <li>
          The content of the text messages you send (for example, the grocery items you add or
          remove).
        </li>
      </ul>

      <h3>How we use it</h3>
      <p>
        Your phone number and message content are used solely to maintain your grocery list and to
        send you related replies. We do not sell, rent, or share your information with third parties
        for marketing purposes.
      </p>

      <h3>Message frequency &amp; costs</h3>
      <p>
        Message frequency varies based on your usage. Message and data rates may apply per your
        mobile carrier&apos;s plan. To stop receiving messages, reply <strong>STOP</strong> at any
        time. For help, reply <strong>HELP</strong>.
      </p>

      <h3>Data retention &amp; deletion</h3>
      <p>
        We keep your list data only as long as needed to provide the service. You can request
        deletion of your data at any time by contacting us at the address below.
      </p>

      <h2>Terms of Service</h2>
      <p>
        The app is provided &quot;as is,&quot; without warranties of any kind. It is a small
        personal project and may be changed or discontinued at any time. We are not liable for any
        missed items, lost data, or other issues arising from use of the service. Please do not use
        the app for any unlawful purpose.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy or the service? Email{" "}
        <a href="mailto:steve@stevebass.me">steve@stevebass.me</a>.
      </p>
    </main>
  );
};

export default GrocerySmsPrivacy;
